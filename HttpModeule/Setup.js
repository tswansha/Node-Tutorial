//request http module
const http=require('http')
//create http server 
const server=http.createServer((req,res)=>
{
    res.write('Welcome to our homepage')
    res.end()
})
server.listen(5000)