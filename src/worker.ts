// worker.ts

/* eslint-disable no-restricted-globals */
// listen for messages from the main thread
self.onmessage = (e: MessageEvent<string>) => {
  console.log(e.data);
  self.postMessage("Hello, main thread!");
};

export {};