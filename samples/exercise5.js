var arr = [23,56,4,78,5,63,45,210,56]

for (var i = 0; i< arr.length; i++) {
    if (arr[i]===78) {
        arr.splice(i,1)
    }
    
}
console.log(arr);