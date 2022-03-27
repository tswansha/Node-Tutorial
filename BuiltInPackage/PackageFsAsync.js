const {readFile,writeFile}=require('fs')

console.log('Start task')
readFile('./PackageFS/FirstFile.txt','utf8',(err,result)=>
{
    if (err)
    {
        console.log(err)
        return
    }
    else
    {
        const first=result
        console.log(result)
        readFile('./PackageFS/SecondFile.txt','utf8',(err,result)=>
{
    if (err)
    {
        console.log(err)
        return
    }
    else
    {
        const second=result
        console.log(result)
        writeFile('./PackageFS/ResultAsync.txt',`Here is the Result\n ${first} ${second} `,(err,result)=>
        {
            if(err)
            {
                console.log(err)
                return;
            }
            console.log(result)
            console.log('Task completed ')
        })
    }
})
    }
console.log('Starting Next task ')

})