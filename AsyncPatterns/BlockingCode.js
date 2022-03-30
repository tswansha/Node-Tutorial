const http=require('http')

const httpServer=http.createServer((req,res)=>
{
    if(req.url=='/')
    {
        res.end('Home Page')
    }

    if(req.url=='/About')
    {
        //Blocking code 
        for(let i=0;i<=100;i++)
        {
            for(let j=0;j<=1000;j++)
            {
                console.log(`${i} ${j}`)
    
            }

        }
        
        res.end('About Page new')
    }
    else
    {
        res.end('Error Page new')
    }

    

})

httpServer.listen(5000,()=>
{
    console.log('Server listening through port 5000 ')
})