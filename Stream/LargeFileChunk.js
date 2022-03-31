//import required packages
const http=require('http')
const fs=require('fs')

//create http server with content of PI.txt
const server= http.createServer(function (req,res) {
   const fileStream=fs.createReadStream('./Resource/PI.txt.TXT','utf8')
   fileStream.on('open',()=>
   {
       //Pushing the result of readstrem  to write stream
       fileStream.pipe(res)
   }) 

   fileStream.on('error',(err)=>
   {
       res.end(err)
   })
})

server.listen(5000)