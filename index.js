const http = require('http');
const url = require('url');
const StringDecoder = require('string_decoder').StringDecoder;

const server = http.createServer((req, res) => {
    let decoder = new StringDecoder('utf-8');
    let buffer = "";
    req.on('data', (chunk) => {
        buffer += decoder.write(chunk);
    })
    req.on('end', (end)=>{
        buffer+=decoder.end()
        res.end('bullshit')
        console.log(buffer)
    })
})

server.listen(3000,()=>{
    console.log('server is running')
})
