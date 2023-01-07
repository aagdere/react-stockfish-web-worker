import { useState } from 'react'
import logo from './logo.svg'
import { reactDark, listStyle, gridStyle, inputStyle, listItemStyle } from './styles.js'
import './App.css'
import { Button, Grid, Input, List, ListItem, ListSubheader } from '@mui/material'

const worker: Worker = new Worker('./src/stockfish_14/stockfish.js')

export default function App() {

  const [sent, setSent] = useState<string[]>([])
  const [received, setReceived] = useState<string[]>([])
  const [command, setCommand] = useState<string>("")

    // listen for messages from the worker
  worker.onmessage = function(event: MessageEvent<string>) {
    setReceived(current => [...current, event.data])
  }

  const postMessage = (message: string): void => {
    setSent(current => [...current, message])
    worker.postMessage(message)
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
