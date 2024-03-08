var number= 435389;
var sum=0;

for (var count of number.toString()) {
    sum+= parseInt(count);
}

console.log("sumofNums",sum);