var arr = [[1, 2], [3, 4], [5, 6]]

var nums=[]

for (var i=0; i<arr.length; i++) {
 for (var j = 0; j< arr[i].length; j++) {
    nums.push(arr[i][j]);
    
 }
    
}
console.log(`(${nums.join(",")})`);