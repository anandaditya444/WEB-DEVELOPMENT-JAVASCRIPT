let arr = [2,0,3,4,9,7,5,4,8,5,14,22,75]
console.log(arr.sort())  //lexicographical sorting

function compare(a,b){
    return a%10- b%10;
}

console.log(arr.sort(compare))