import { fetchStockfish } from './StockfishFetcher'
import { Chess } from "chess.js";

const fensForPgn = (pgn: string): string[] => {
	const chess1 = new Chess()
	const chess2 = new Chess()
	chess1.loadPgn(pgn)

	const fens: string[] = [chess2.fen()]

	const history = chess1.history()
	const numMoves = history.length
	for (var i = 0; i < numMoves; i++) {
		const nextMove = history[i]
		chess2.move(nextMove)
		fens.push(chess2.fen())
	}

	return fens
}

const pgn = `
[Event \"Live Chess\"]
[Site \"Chess.com\"]
[Date ]
[Round ]
[White ]
[Black "]
[Result ]
[CurrentPosition ]
[Timezone ]
[ECO ]
[ECOUrl ]
[UTCDate ]
[UTCTime ]
[WhiteElo ]
[BlackElo ]
[TimeControl ]
[Termination ]
[StartTime ]
[EndDate ]
[EndTime ]
[Link ]

1. e4 {[%clk 0:05:00]} 1... d6 {[%clk 0:04:58.5]} 2. d4 {[%clk 0:04:50.2]} 2... Nf6 {[%clk 0:04:57.6]} 3. Nc3 {[%clk 0:04:43.4]} 3... g6 {[%clk 0:04:55]} 4. f4 {[%clk 0:04:42.6]} 4... Bg7 {[%clk 0:04:54.4]} 5. Nf3 {[%clk 0:04:41.7]} 5... Bg4 {[%clk 0:04:53.7]} 6. e5 {[%clk 0:04:40.4]} 6... Nfd7 {[%clk 0:04:51]} 7. h3 {[%clk 0:04:31.1]} 7... Bxf3 {[%clk 0:04:49.9]} 8. Qxf3 {[%clk 0:04:31]} 8... O-O {[%clk 0:04:46]} 9. f5 {[%clk 0:04:23.9]} 9... dxe5 {[%clk 0:04:39.9]} 10. Bc4 {[%clk 0:04:13.7]} 10... exd4 {[%clk 0:04:33.4]} 11. fxg6 {[%clk 0:04:10.2]} 11... hxg6 {[%clk 0:04:27]} 12. Ne4 {[%clk 0:03:27.3]} 12... Ne5 {[%clk 0:04:24.7]} 13. Qb3 {[%clk 0:03:13.7]} 13... Nxc4 {[%clk 0:04:23.2]} 14. Qxc4 {[%clk 0:03:12.8]} 14... Nc6 {[%clk 0:04:19.2]} 15. O-O {[%clk 0:03:04.3]} 15... Ne5 {[%clk 0:03:40]} 16. Qb3 {[%clk 0:02:59.8]} 16... b6 {[%clk 0:03:29.9]} 17. Bf4 {[%clk 0:02:46.1]} 17... c5 {[%clk 0:03:16]} 18. Bxe5 {[%clk 0:02:30.1]} 18... Bxe5 {[%clk 0:03:14.8]} 19. Ng5 {[%clk 0:02:29.5]} 19... e6 {[%clk 0:03:04.5]} 20. Nxe6 {[%clk 0:02:22.8]} 20... fxe6 {[%clk 0:02:52.7]} 21. Qxe6+ {[%clk 0:02:21.3]} 21... Kh7 {[%clk 0:02:48.6]} 22. Qxe5 {[%clk 0:02:19.8]} 22... Rxf1+ {[%clk 0:02:40.1]} 23. Rxf1 {[%clk 0:02:19.7]} 23... Qh8 {[%clk 0:02:32.1]} 24. Qc7+ {[%clk 0:01:50.7]} 24... Kh6 {[%clk 0:02:20.6]} 25. Rf4 {[%clk 0:01:41.9]} 25... Qd8 {[%clk 0:01:58.3]} 26. Rh4+ {[%clk 0:01:36]} 26... Qxh4 {[%clk 0:01:56.8]} 27. g3 {[%clk 0:01:21.8]} 27... Qe4 {[%clk 0:01:44.3]} 28. h4 {[%clk 0:01:08]} 28... Rf8 {[%clk 0:01:32.7]} 29. Kh2 {[%clk 0:01:01.1]} 29... Rf2+ {[%clk 0:01:26.7]} 30. Kh3 {[%clk 0:00:58.6]} 30... Qf5+ {[%clk 0:01:21.2]} 31. g4 {[%clk 0:00:56.1]} 31... Qf3+ {[%clk 0:01:09.8]} 32. Qg3 {[%clk 0:00:53.2]} 32... Qxg3+ {[%clk 0:01:08.1]} 33. Kxg3 {[%clk 0:00:53.1]} 33... Rxc2 {[%clk 0:01:07.2]} 34. Kf4 {[%clk 0:00:52.2]} 34... Rxb2 {[%clk 0:01:04.6]} 35. g5+ {[%clk 0:00:51.5]} 35... Kh5 {[%clk 0:01:03.2]} 36. Ke5 {[%clk 0:00:49.6]} 36... d3 {[%clk 0:01:02.2]} 37. Kf6 {[%clk 0:00:47.8]} 37... d2 {[%clk 0:01:01]} 38. Kg7 {[%clk 0:00:45.1]} 38... d1=Q {[%clk 0:00:59.9]} 39. Kh7 {[%clk 0:00:44.7]} 39... Qd7+ {[%clk 0:00:57.5]} 40. Kg8 {[%clk 0:00:43.2]} 40... Re2 {[%clk 0:00:55.4]} 41. Kf8 {[%clk 0:00:42.5]} 41... Re8# {[%clk 0:00:54]} 0-1
`

const fens: string[] = fensForPgn(pgn)//.slice(0,20)

export const analyzeFens = async (
	depth: number,
	onAnalyzeFen: (completed: number, total: number) => void,
	onComplete: (executionTimeSeconds: number, numOfFens: number) => void,
	onPostMessage: (message: string) => void,
	onReceiveMessage: (message: string) => void
): Promise<void> => {
	const startTime: Date = new Date()
	console.log("Inside analyzeFens")
	console.log("Fetching stockfish...")

	var stockfish: Worker = await fetchStockfish()
	
	const postMessage = (message: string): void => {
		onPostMessage(message)
		console.log("Posting message to stockfish...")
		console.log(message)
		stockfish.postMessage(message)
	}

	var currentIdx = 0;

	const postPositionAndEval = () => {
		postMessage(`position fen ${fens[currentIdx]}`)
		postMessage(`go`)
	}

	// listen for messages from the worker
	const messageListener = async (message: string) => {
		onReceiveMessage(message)
		if (message.startsWith(`info depth ${depth}`) && message.includes(" cp ")) {
			postMessage('stop')
			// stockfish.terminate()
			onAnalyzeFen(currentIdx + 1,fens.length)
			currentIdx += 1
			if (currentIdx == fens.length) {
				const endTime: Date = new Date()
				const duration = endTime.getTime() - startTime.getTime()
				onComplete(duration / 1000, fens.length)
				return;
			} else if (currentIdx < fens.length) {
				// stockfish = await fetchStockfish();
				// (stockfish as any).addMessageListener(messageListener)
				postPositionAndEval()
				console.log(stockfish)
			} else {
				console.error(`Index is greater than fens.length! ${currentIdx}`)
			}
		} else if (message.startsWith("Stockfish")) {
			postPositionAndEval()
		}
	}

	(stockfish as any).addMessageListener(messageListener)
}