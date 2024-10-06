import { Worker, } from 'worker_threads';
import os from 'os';
import path from 'path';

const performCalculations = async () => {
    const numWorkers = os.cpus().length;
    const promises = [];
    const __dirname = import.meta.dirname;

    for (let i = 0; i < numWorkers; i++) {
        promises.push(
          new Promise((resolve) => {
            const worker = new Worker(path.resolve(__dirname, './worker.js'));
            
            worker.postMessage(10 + i);
    
            worker.on('message', (message) => {
              resolve(message);
            });
    
            worker.on('error', () => {
              resolve({ status: 'error', data: null });
            });
          })
        );
      }
    
      Promise.all(promises).then((results) => {
        console.log(results);
      });
};

await performCalculations();