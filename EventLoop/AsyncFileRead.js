//import readFile method pakage fs
const { readFile }=require('fs')

console.log('Task 1 is started')
//read the file 
readFile('./first.txt','utf8',(err,result)=>
{
    if(err)
    {
        console.log(err)
        return
    }
    console.log(result)
    console.log('Task 1 is completed ')
})
console.log('starting task 2')