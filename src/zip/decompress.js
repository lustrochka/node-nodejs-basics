import { createWriteStream, createReadStream } from 'fs';
import { pipeline } from 'stream/promises';
import { createGunzip } from 'zlib';

const decompress = async () => {
    try{
        const fileReadStream = createReadStream('src/zip/files/archive.gz');
        const fileWriteStream = createWriteStream('src/zip/files/fileToCompress.txt');
        const gunzip = createGunzip();
        await pipeline(fileReadStream, gunzip, fileWriteStream);
    } catch (error) {
        console.error('Error while compression', error);
    }
};

await decompress();