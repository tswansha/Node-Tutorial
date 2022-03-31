//import required packages
const http=require('http')
const fs=require('fs')

//create http server with content of PI.txt
const server= http.createServer(function (req,res) {
   const txt=fs.readFileSync('./Resource/PI.txt.TXT','utf8')
   res.end(txt)
})

server.listen(5000)