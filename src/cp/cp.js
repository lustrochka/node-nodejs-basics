import { spawn } from 'node:child_process';

const spawnChildProcess = async (args) => {
    const path = 'src/cp/files/script.js';

    const child = spawn('node', [path, ...args], {
        stdio: ['pipe', 'pipe', 'inherit']
      });

    process.stdin.pipe(child.stdin);
    child.stdout.pipe(process.stdout);
};

spawnChildProcess( [1, 2, 3] );
