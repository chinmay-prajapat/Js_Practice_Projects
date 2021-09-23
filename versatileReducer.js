const multiplyBy2 = x => x*2
const add3 = x => x+3
const divideBy5 = x => x/5
const reduce = (array, howToCombine, buildingUp) => {
for (let i = 0; i < array.length; i++){   // array[i] the functions are being passed to the runFunctionOnInput with each iteration.
buildingUp = howToCombine(buildingUp, array[i])//howToCombine(11,multiplyBy2) and so on till last function in the array encountered.
}
return buildingUp
}
const runFunctionOnInput = (input,fn) => {
return fn(input) //ex. multiplyBy2(11)
}
const output = reduce([multiplyBy2, add3, divideBy5], runFunctionOnInput, 11)
