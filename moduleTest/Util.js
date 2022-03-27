//Every file can be treat as modules (By default)
//The purpose of the modules is encapuslate code and share minimum or nessasary componenet 

const SayHello=(name)=>
{
    console.log(`Hello ${name}`)
}

module.exports=SayHello