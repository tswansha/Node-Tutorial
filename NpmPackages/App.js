const dash=require('lodash')

const arr=[1,[2,[3,4,5,[6,7,[8,9,0]]]]]

const newArr=dash.flattenDeep(arr)
console.log(newArr)