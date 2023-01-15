console.log("Hello")

const stockfish  = new Worker("./src/stockfish_15/stockfish.js")

console.log(stockfish)

stockfish.onmessage = (message) => console.log(`Received message: ${message.data}`)

stockfish.postMessage("uci")

// stockfish.addMessageListener((line) => {
// 	console.log(`Received ${line}`)
// }