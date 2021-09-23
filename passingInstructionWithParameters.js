 pushValueToArray=function(array,multiply){
const output=[]
array.map(i=>output.push(multiply(i)))
return output;
}
// let multiply=function(input){
// return input*2;
// }
let arr=[1,2,3]
let result=pushValueToArray(arr,input=>input*2)//this is an arrow function
