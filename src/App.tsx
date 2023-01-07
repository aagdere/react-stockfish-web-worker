import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Button, Grid, List, ListItem, ListSubheader } from '@mui/material'

export default function App() {

  const [sent, setSent] = useState<string[]>([])
  const [received, setReceived] = useState<string[]>([])

  const worker: Worker = new Worker(new URL("./worker.ts", import.meta.url))

    // listen for messages from the worker
  worker.onmessage = function(event: MessageEvent<string>) {
    setReceived(current => [...current, event.data])
  }

  const postMessage = (): void => {
    const message = "Hello, worker!"
    setSent(current => [...current, message])
    worker.postMessage(message)
  }

  const reactDark = { 
    bgcolor: '#282c34',
    fontSize: '100%'
  }

  const listStyle = {
    width: '100%',
    maxWidth: 500,
    position: 'relative',
    overflow: 'auto',
    minHeight: 300,
    maxHeight: 300,
    '& ul': { padding: 0 },
    padding: 0,
    bgcolor: 'rgb(0,0,0,0.1)'
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        Click here to send a message to the web-worker
        <br/>
        <br/>
        <Button  variant="contained" onClick={postMessage} >Post Message</Button>
        <br/>
        <Grid container>
          <Grid item xs={6}>
            <List sx={listStyle}>
              <ListSubheader color={'inherit'} sx={reactDark}>
                Sent
              </ListSubheader>
              {sent.map((item, idx) => (
                <ListItem key={idx}>
                  { `${idx+1}: ${item}` }
                </ListItem>
              ))}
            </List>
          </Grid>
          <Grid item xs={6}>
            <List sx={listStyle}>
              <ListSubheader color={'inherit'} sx={reactDark}>
                Received
              </ListSubheader>
              {received.map((item, idx) => (
                <ListItem key={idx}>
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
