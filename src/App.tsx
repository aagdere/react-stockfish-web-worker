import { useState } from 'react'
import logo from './logo.svg'
import { reactDark, listStyle, gridStyle, inputStyle, listItemStyle } from './styles.js'
import './App.css'
import { Button, Grid, Input, List, ListItem, ListSubheader } from '@mui/material'
import { fetchStockfish } from './StockfishFetcher'
import { useEffect } from 'react'

// const stockfish14: Worker = new Worker('./src/stockfish_14/stockfish.js', { type: 'module' })
// const stockfish15: Worker = new Worker('./src/stockfish_15/stockfish.js', { type: 'module' })
// const stockfishNnueWasm: Worker = new Worker('./src/stockfish_nnue_wasm/stockfish.js', { type: 'module' })
// const worker: Worker = stockfish14

export default function App() {

  const [sent, setSent] = useState<string[]>([])
  const [received, setReceived] = useState<string[]>([])
  const [command, setCommand] = useState<string>("")
  const [stockfish, setStockfish] = useState<Worker | undefined>(undefined)

  useEffect(() => {

    if (stockfish == undefined) {      
      const init = async () => {
          const stockfishWorker: Worker = await fetchStockfish();
          setStockfish(stockfishWorker)

          // listen for messages from the worker
          const messageListener = (message: string) => {
            setReceived(current => [...current, message])
          }

          (stockfishWorker as any).addMessageListener(messageListener)
      }

      init().catch(console.error)
    }
  }, [stockfish])

  const postMessage = (message: string): void => {
    if (command.length > 0 && stockfish) {
      stockfish.postMessage(message)
      setSent(current => [...current, message])
      console.log(stockfish)
    }
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
            <List sx={listStyle}>
              <ListSubheader color={'inherit'} sx={reactDark}>
                Sent
              </ListSubheader>
              {sent.map((item, idx) => (
                <ListItem sx={listItemStyle} key={idx}>
                  { `${idx+1}: ${item}` }
                </ListItem>
              ))}
            </List>
          </Grid>
          <Grid item xs={6} sx={gridStyle}>
            <List sx={listStyle}>
              <ListSubheader color={'inherit'} sx={reactDark}>
                Received
              </ListSubheader>
              {received.map((item, idx) => (
                <ListItem sx={listItemStyle} key={idx}>
                  { `${idx+1}: ${item}` }
                </ListItem>
              ))}
            </List>
          </Grid>
        </Grid>
      </header>
    </div>
  )
}
