build:
	npm install
	rm -rf src/stockfish_nnue_wasm && ln -s $$PWD/node_modules/stockfish-nnue.wasm src/stockfish_nnue_wasm

run:
	npm run dev

move-stockfish:
	cp ../stockfish.js/src/stockfish.* ./src/stockfish_15/
