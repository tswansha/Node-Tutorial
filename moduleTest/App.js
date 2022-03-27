//Every file can be treat as modules (By default)
//The purpose of the modules is encapuslate code and share minimum or nessasary componenet 

//define constatnt variable to accepat data from Data.js
const name=require('./Data')
//define constatnt variable to accepat fuction from Module.js
const func=require('./Util')

func(name.structre)
func(name.style)
func(name.behav)
func('Node js')
