import { promises as fs } from 'fs'

const remove = async () => {
    try {
        await fs.rm('src/fs/files/fileToRemove.txt');
    } catch {
        throw new Error('FS operation failed');
    }
};

await remove();