//Get createReadStream method from fs 
const { createReadStream }= require('fs')


//default buffer is 64kb
//can change the buffer size using high water mark property 
//enocrding property change the valuse display property 
//const stream=createReadStream('./Resource/PI.txt.TXT',{ highWaterMark:90000 ,encoding:'utf8'})

const stream=createReadStream('./Resource/PI.txt.TXT',{ highWaterMark:90000 })
stream.on('data',(result)=>
{
    console.log(result)
})

stream.on('error',(err)=>(console.log(err)))