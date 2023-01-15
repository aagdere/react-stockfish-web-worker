import { useState } from 'react'
import logo from './logo.svg'
import { reactDark, listStyle, gridStyle, inputStyle, listItemStyle, typographyProps, progressBarStyle } from './styles.js'
import './App.css'
import { Autocomplete, Button, Grid, Input, List, ListItem, ListItemText, ListSubheader, Switch, TextField, Typography } from '@mui/material'
import { fetchStockfish } from './StockfishFetcher'
import { useEffect, useRef} from 'react'
import { analyzeFens } from './Analysis.js'
import LinearProgressWithLabel from './LinearProgressWithLabel'

enum StockfishChoices {
  NnueWasm,
  StockfishJs
}

enum TaskStatus {
  NotStarted,
  InProgress,
  Completed
}

export default function App() {

  const [sent, setSent] = useState<string[]>([])
  const [received, setReceived] = useState<string[]>([])
  const [command, setCommand] = useState<string>("")
  const [stockfish, setStockfish] = useState<Worker | undefined>(undefined)
  const [selectedStockfish, setSelectedStockfish] = useState<StockfishChoices>(StockfishChoices.StockfishJs)
  const [evaluationProgress, setEvaluationProgress] = useState<number>(0)
  const [analysisExecutionTimeSeconds, setAnalysisExecutionTimeSeconds] = useState<number | undefined>(undefined)
  const [fensAnalyzed, setFensAnalyzed] = useState<number | undefined>(undefined)
  const [maxFens, setMaxFens] = useState<string>('5')
  const [speedTestStatus, setSpeedTestStatus] = useState<TaskStatus>(TaskStatus.NotStarted)
  const [depth, setDepth] = useState<string>('18')

  const scrollRefSent = useRef(null);
  const scrollRefReceived = useRef(null);

  useEffect(() => {
    restartStockfishWithListeners().catch(console.error)
  }, [selectedStockfish])

  useEffect(() => {
    if (scrollRefSent.current) {
      (scrollRefSent.current as Element).scrollIntoView();
    }
    if (scrollRefReceived.current) {
      (scrollRefReceived.current as Element).scrollIntoView();
    }
  }, [sent, received])

  const restartStockfish = async (): Promise<Worker> => {
    if (stockfish) {
      console.log("Terminating stockfish...")
      postMessage('stop')
      stockfish.terminate()
      clearEverything()
    }

    var newStockfish;

    switch(selectedStockfish) {
      case (StockfishChoices.NnueWasm):
        const stockfishNnueWasm: Worker = await fetchStockfish();
        newStockfish = stockfishNnueWasm
        break;
      case (StockfishChoices.StockfishJs):
        const stockfishJs = new Worker('./src/nmrugg_stockfish_js/stockfish.js')
        newStockfish = stockfishJs
    }

    setStockfish(newStockfish);
    console.log("Stockfish has been restarted.")
    return newStockfish
  }

  const restartStockfishWithListeners = async () => {

    const newStockfish = await restartStockfish()

    switch(selectedStockfish) {
      case (StockfishChoices.NnueWasm):
        (newStockfish as any).addMessageListener((message: string) => {
          setReceived(current => [...current, message])
        })
        break;
      case (StockfishChoices.StockfishJs):
        newStockfish.onmessage = (message: MessageEvent<string>) => {
          setReceived(current => [...current, message.data])
        }
    }

    console.log("Added stockfish listeners.")
  }

  const clearEverything = () => {
    setEvaluationProgress(0)
    setAnalysisExecutionTimeSeconds(undefined)
    setSent([])
    setReceived([])
    setFensAnalyzed(0)
    setSpeedTestStatus(TaskStatus.NotStarted)
  }

  const onAnalyzeFen = (completed: number, total: number): void => {
    setEvaluationProgress(completed / total * 100)
  }

  const onCompleteAnalysis = (executionTimeSeconds: number, numberOfFens: number): void => {
    setAnalysisExecutionTimeSeconds(executionTimeSeconds)
    setFensAnalyzed(numberOfFens)
    setSpeedTestStatus(TaskStatus.Completed)
  } 

  const setMessageListener = (stockfishWorker: Worker) => (messageListener: (message: string) => void) => {
    const updatedListener = (message: string): void => {
      onReceiveMessage(message)
      messageListener(message)
    }

    switch(selectedStockfish) {
      case (StockfishChoices.NnueWasm):
        (stockfishWorker as any).addMessageListener(updatedListener)
        break;
      case (StockfishChoices.StockfishJs):
        stockfishWorker.onmessage = (message: MessageEvent<string>) => updatedListener(message.data)
    }
    console.log("Added new stockfish message listener.")
  }

  const runSpeedTest = async (nnueEnabled: boolean): Promise<void> => {
    if (stockfish) {
      const newStockfish = await restartStockfish()
      setSpeedTestStatus(TaskStatus.InProgress)
      analyzeFens(
        newStockfish, 
        !(depth) ? 0 : parseInt(depth), 
        !(maxFens) ? 0 : parseInt(maxFens), 
        nnueEnabled,
        onAnalyzeFen, 
        onCompleteAnalysis, 
        onPostMessage, 
        setMessageListener(newStockfish)
      )
    }
  }

  const stopSpeedTest = async (): Promise<void> => {
    if (stockfish) {
      await restartStockfishWithListeners()
    }
  }

  const onPostMessage = (message: string) => {
    setSent(current => [...current, message])
  }

  const onReceiveMessage = (message: string) => {
    setReceived(current => [...current, message])
  }

  const postMessage = (message: string) => {
    if (stockfish) {
      onPostMessage(message)
      stockfish.postMessage(message)
    } else {
      console.error("Attempted to post message to stockfish.js while stockfish is undefined..")
    }
  }

  const onSelectedStockfishChanged = (checked: boolean) => {
    var stockfish: StockfishChoices
    if (checked) {
      stockfish = StockfishChoices.StockfishJs
    } else {
      stockfish = StockfishChoices.NnueWasm
    }

    setSelectedStockfish(stockfish)
  }

  return (
    <div className="App">
      <header className="App-header">
        <Grid container>
          <Grid item xs={5} sx={gridStyle}>
            <Typography align='right'>stockfish-nnue.wasm</Typography>
          </Grid>
          <Grid item xs={2} sx={gridStyle}>
            <Switch checked={selectedStockfish == StockfishChoices.StockfishJs} onChange={(e, checked) => onSelectedStockfishChanged(checked)}/>
          </Grid>
          <Grid item xs={5} sx={gridStyle}>
            <Typography align='left'>stockfish.js</Typography>
          </Grid>
        </Grid>
        <img src={logo} className="App-logo" alt="logo" />
        <br/>
        <Typography variant="h6">Click here to send a message to the Stockfish.js web worker</Typography>
        <br/>
        <Autocomplete
          id = "free-solo"
          sx = {{width: '80%'}}
          freeSolo
          options={[
              "uci",
              "setoption NAME Use NNUE value true",
              "position fen rn1qk2r/pppnppbp/3p2p1/4P3/3P1P2/2N2Q1P/PPP3P1/R1B1KB1R b KQkq - 0 8",
              "go depth 15",
              "stop"
            ]}
            value={command} 
            onChange={(e, value) => setCommand(value || "")}
          renderInput={(params) => <TextField {...params} />}
        />
        <br/>
        <Button  variant="contained" onClick={() => postMessage(command)} >Post Message</Button>
        <Grid container>
          <Grid item xs={6} sx={gridStyle}>
            <ListSubheader color={'inherit'} sx={reactDark}>
              Sent
            </ListSubheader>
            <List sx={listStyle}>
              {sent.map((item, idx) => (
                <ListItemText sx={listItemStyle} key={idx} primaryTypographyProps={typographyProps}>
                  { `${idx+1}: ${item}` }
                </ListItemText>
              ))}
              <ListItem ref={scrollRefSent}></ListItem>
            </List>
          </Grid>
          <Grid item xs={6} sx={gridStyle}>
              <ListSubheader color={'inherit'} sx={reactDark}>
                Received
              </ListSubheader>
            <List sx={listStyle}>
              {received.map((item, idx) => (
                <ListItemText sx={listItemStyle} key={idx + sent.length} primaryTypographyProps={typographyProps}>
                  { `${idx+1}: ${item}` }
                </ListItemText>
              ))}
              <ListItem ref={scrollRefReceived}></ListItem>
            </List>
          </Grid>
        </Grid>
        <br/>
        { speedTestStatus != TaskStatus.InProgress && 
          <div>
            <TextField id="outlined-basic" type='number' label="Depth" value={depth} onChange={e => setDepth(e.target.value)} variant="outlined" />
            <TextField id="outlined-basic" type='number' label="Num Fens (max: 83)" value={maxFens} onChange={e => setMaxFens(e.target.value)} variant="outlined" />
            <br/>
            <br/>
            <Button variant='contained' onClick={() => runSpeedTest(true)} disabled={ !depth || !maxFens }>
              Speed Test
            </Button>
          </div> 
        }
        { speedTestStatus == TaskStatus.InProgress && <Button variant='contained' onClick={stopSpeedTest}>
          Stop Test
        </Button> }
        <br/>
        <LinearProgressWithLabel sx={progressBarStyle} value={evaluationProgress}/>
        {analysisExecutionTimeSeconds && <Typography>Analysis took {analysisExecutionTimeSeconds} seconds for {fensAnalyzed} fens</Typography>}
      </header>
    </div>
  )
}
