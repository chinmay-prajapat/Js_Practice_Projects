function duplicateCount(text){
  //...
  let count =0;
  let output=new Set();
  text=text.toLowerCase();
  console.log(text)
for(let i=0;i<text.length;i++){
  for(let j=i+1;j<text.length;j++)
  if(text[i]===text[j]){
    output.add(text[i])
    
  }
}
  
  return output.size;
}
