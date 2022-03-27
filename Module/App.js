//It is not good practice for use variable to loading modules 
//it is better use constant 
//var logger= require('./Logger.js');
const logger=require('./Logger.js');

console.log(logger);

logger.log('Hello Node js');