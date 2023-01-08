build:
	npm install

run:
	npm run dev

build-stockfish:
	../emsdk/emsdk install 2.0.34
	../emsdk/emsdk activate 2.0.34
	. /home/aris/Development/emsdk/emsdk_env.sh && ../stockfish.js/build.js
	cp ../stockfish.js/src/stockfish.* ./src/stockfish_15/