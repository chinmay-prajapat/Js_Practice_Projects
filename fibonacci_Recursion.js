let n1=0;
let n2=1;
let arr=[n1,n2]

let fun=function(num){
let n3=n1+n2;
arr.push(n3);
console.log(arr);
if(num>0&&arr.length<num++){

n1=n2;
n2=n3;
return fun(num-1);
}



}

