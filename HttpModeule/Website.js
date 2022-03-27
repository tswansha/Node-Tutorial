//request http module
const http=require('http')
//create http server 
const server=http.createServer((req,res)=>
{
    if(req.url=='/')
    {
        res.end('Welcome to our homepage')
    }
    if(req.url=='/About')
    {
        res.end('please contact us on 077666777')
    }
    res.end(`<h1>Oops Page not Available</h1>
            <p>We can seems to find the page you are looking for</p>
            <a href="/">Back to Home</a>`)
})
server.listen(5000)