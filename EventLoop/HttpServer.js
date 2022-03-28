const http=require('http')

const httpServer=http.createServer((req,res)=>
{
    console.log('request event')
    res.end('hello world')
})

httpServer.listen(5000,()=>
{
    console.log('Server listening through port 5000 ')
})