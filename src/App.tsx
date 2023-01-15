import { useState } from 'react'
import logo from './logo.svg'
import { reactDark, listStyle, gridStyle, inputStyle, listItemStyle } from './styles.js'
import './App.css'
import { Button, Grid, Input, List, ListItem, ListItemText, ListSubheader, Typography } from '@mui/material'
import { fetchStockfish } from './StockfishFetcher'
import { useEffect, useRef} from 'react'
import { analyzeFens } from './Analysis'
import LinearProgressWithLabel from './LinearProgressWithLabel'

export default function App() {

  const [sent, setSent] = useState<string[]>([])
  const [received, setReceived] = useState<string[]>([])
  const [command, setCommand] = useState<string>("")
  const [stockfish, setStockfish] = useState<Worker | undefined>(undefined)
  const [evaluationProgress, setEvaluationProgress] = useState<number>(0)
  const [analysisExecutionTimeSeconds, setAnalysisExecutionTimeSeconds] = useState<number | undefined>(undefined)
  const [numberOfFens, setNumberOfFens] = useState<number | undefined>(undefined)

  const scrollRefSent = useRef(null);
  const scrollRefReceived = useRef(null);

  const depth: number = 20;

  useEffect(() => {

    if (stockfish == undefined) {      
      const init = async () => {
          const stockfishWorker: Worker = await fetchStockfish();
          setStockfish(stockfishWorker);

          (stockfishWorker as any).addMessageListener((line: string) => {
            setReceived(current => [...current, line])
          })

          console.log("Stockfish in App.tsx")
          console.log(stockfishWorker)
      }

      init().catch(console.error)
    }
  }, [stockfish])

  useEffect(() => {
    if (scrollRefSent.current) {
      (scrollRefSent.current as Element).scrollIntoView();
    }
    if (scrollRefReceived.current) {
      (scrollRefReceived.current as Element).scrollIntoView();
    }
  }, [sent, received])

  const onAnalyzeFen = (completed: number, total: number): void => {
    setEvaluationProgress(completed / total * 100)
  }

  const onCompleteAnalysis = (executionTimeSeconds: number, numberOfFens: number): void => {
    setAnalysisExecutionTimeSeconds(executionTimeSeconds)
    setNumberOfFens(numberOfFens)
  } 

  const runSpeedTest = async (): Promise<void> => {
    await analyzeFens(depth, onAnalyzeFen, onCompleteAnalysis, onPostMessage, onReceiveMessage)
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

  const progressBarStyle = {
    backgroundColor: 'white',
    width: '50%'
  }

  const typographyProps = { 
    variant: 'subtitle2', 
    style: {
        whiteSpace: 'nowrap',
        overflow: 'visible',
        textOverflow: 'ellipsis',
      },
    align: 'left'
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        Click here to send a message to the Stockfish.js web worker
        <br/>
        <br/>
        <Input sx={inputStyle} value={command} onChange={e => setCommand(e.target.value)}/>
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
        <Button variant='contained' onClick={runSpeedTest} disabled={evaluationProgress > 0}>
          Speed Test
        </Button>
        <br/>
        <LinearProgressWithLabel sx={progressBarStyle} value={evaluationProgress}/>
        {analysisExecutionTimeSeconds && <Typography>Analysis took {analysisExecutionTimeSeconds} seconds for {numberOfFens} fens</Typography>}
      </header>
    </div>
  )
}
