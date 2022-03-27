const {readFileSync,writeFileSync}=require('fs')

const first=readFileSync('./PackageFS/FirstFile.txt','utf8')
const second=readFileSync('./PackageFS/SecondFile.txt','utf8')

console.log(first)
console.log(second)

writeFileSync('./PackageFS/ResultSync.txt',`Here is the Result\n ${first} ${second} `)
writeFileSync('./PackageFS/ResultSyncAppend.txt',`Here is the Result of Append\n ${first} ${second} `,{flag:'a'})