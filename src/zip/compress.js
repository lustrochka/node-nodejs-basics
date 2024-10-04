import { createWriteStream, createReadStream } from 'fs';
import { pipeline } from 'stream/promises';
import { createGzip } from 'zlib';

const compress = async () => {
    try{
        const fileReadStream = createReadStream('src/zip/files/fileToCompress.txt');
        const fileWriteStream = createWriteStream('src/zip/files/archive.gz');
        const gzip = createGzip();
        await pipeline(fileReadStream, gzip, fileWriteStream);
    } catch (error) {
        console.error('Error while compression', error);
    }
};

await compress();