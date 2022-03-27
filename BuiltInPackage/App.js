//get built in package os 
const os=require('os')

//get user information 
const user=os.userInfo();
console.log(user)

//system uptime 
console.log(`System up time duration is ${os.uptime()}`)

const CurrentOS=
{
    name:os.type(),
    relese:os.release(),
    totMem:os.totalmem(),
    freeMem:os.freemem(),
}
console.log(CurrentOS)