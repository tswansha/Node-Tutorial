var url='https://pentest-tools.com/exploit-helpers/http-request-logger';

function log(message)
{
    //send an HTTP request 
    console.log(message);
}

module.exports.log=log;