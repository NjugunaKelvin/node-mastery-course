const fs =  require('fs')

// create readStream
const readStream = fs.createReadStream('./docs/streams.txt', { encoding: 'utf-8'});
const writeStream = fs.createWriteStream('./docs/writeStream.txt');

// read the data in chunks
// readStream.on('data', (chunk) => {
//     console.log('---------New Chunk------------');
//     console.log(chunk);
//     writeStream.write('\nNEW CHUNK\n')
//     writeStream.write(chunk)
// });

// PIPING   
readStream.pipe(writeStream);
