import { createReadStream } from 'fs';

const read = async () => {
    const fileReadStream = createReadStream('src/streams/files/fileToRead.txt');
    fileReadStream.on('data', (chunk) => {
        process.stdout.write(chunk.toString());
    });
    fileReadStream.on('end', () => {
        process.stdout.write('\n');
    });
};

await read();