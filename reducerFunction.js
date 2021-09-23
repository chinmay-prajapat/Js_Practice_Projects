const reduce = (array, howToCombine, buildingUp) => {
for (let i = 0; i < array.length; i++){
buildingUp = howToCombine(buildingUp, array[i])
}
return buildingUp
}
const add = (a, b) => a + b
const summed = reduce([1,2,3], add, 0)
