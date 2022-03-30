//request http module
const http=require('http')
//create http server 
const server=http.createServer()

server.on('request',(req,res)=>
{
    res.end('Trigger Request Event')
})

server.listen(5000)