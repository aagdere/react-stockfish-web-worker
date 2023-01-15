build:
	npm install
	rm -rf src/hi-ogawa_stockfish_nnue_wasm && ln -s $$PWD/node_modules/stockfish-nnue.wasm src/hi-ogawa_stockfish_nnue_wasm
	rm -rf src/nmrugg_stockfish_js && ln -s $$PWD/node_modules/stockfish/src src/nmrugg_stockfish_js

clean:
	rm -rf src/hi-ogawa_stockfish_nnue_wasm
	rm -rf src/nmrugg_stockfish_js
	rm -rf node_modules

run:
	npm run dev
