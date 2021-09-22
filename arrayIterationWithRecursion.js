const count=function(arr){
let num=0
const count2=function(){
if(arr.length!==num){
console.log(arr[num])
num++
return count2()
}
}
count2()
} 
