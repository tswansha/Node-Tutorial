//importing read file and write file method from fs 
const { readFile,writeFile }=require('fs')
const util=require('util')


//Implimenting new wrapping function getText to getText
const getText=(path)=>
{
    //return promise with resolve and reject 
    return new Promise((resolve,reject)=>
    {
        //Implimenting Read file function  
    readFile(path,'utf8',(err,result)=>
    {
        if (err)
        {
            reject(err)
        }
        else
        {
            const first=result
            resolve(result)
        }
    })

    })
}

//Resolve promis synchronusly 
//getText('./PackageFS/FirstFile.txt')
//.then((result)=>console.log(result))
//.catch((err)=>console.log(err))

//Resolve promise async 
const start =async()=>
{
    try
    {
        const first=await getText('./PackageFS/FirstFile.txt')
        console.log(first)

        const second=await getText('./PackageFS/SecondFile.txt')
        console.log(second)
    }
    catch(error)
    {
        console.log(error)
    }

}

start()
console.log('This is the end of program ')