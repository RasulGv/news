var arr = [13, 23, 12, 45, 22, 48, 66, 100];

for (var i=arr.length-1; i>=0; i--) {
    if(arr[i]%2===0){
        arr.splice(i,1);
    }
    
    
}
console.log(arr)