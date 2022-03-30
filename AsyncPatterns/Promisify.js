//importing read file and write file method from fs 
const { readFile,writeFile }=require('fs')
//import util to use promisfy funtion 
const util=require('util')

const readFilePromse=util.promisify(readFile)
const writeFilePromse=util.promisify(writeFile)



//Resolve promise async 
const start =async()=>
{
    try
    {
        const first=await readFilePromse('./PackageFS/FirstFile.txt','utf8')
        console.log(first)

        const second=await readFilePromse('./PackageFS/SecondFile.txt','utf8')
        console.log(second)

        writeFilePromse('./PackageFS/ResultAsync.txt',`Using util.promisify \n ${first} ${second}`)
    }
    catch(error)
    {
        console.log(error)
    }

}

start()
console.log('This is the end of program ')


// //Implimenting new wrapping function getText to getText
// const getText=(path)=>
// {
//     //return promise with resolve and reject 
//     return new Promise((resolve,reject)=>
//     {
//         //Implimenting Read file function  
//     readFile(path,'utf8',(err,result)=>
//     {
//         if (err)
//         {
//             reject(err)
//         }
//         else
//         {
//             const first=result
//             resolve(result)
//         }
//     })

//     })
// }

//Resolve promis synchronusly 
//getText('./PackageFS/FirstFile.txt')
//.then((result)=>console.log(result))
//.catch((err)=>console.log(err))