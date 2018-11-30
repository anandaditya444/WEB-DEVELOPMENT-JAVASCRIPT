let arr = [1,2,3,4,5,6,7,8,9]

let arr2 = arr.filter(function (item){
    return item%3 === 0
})

console.log(arr2)
console.log(arr)

