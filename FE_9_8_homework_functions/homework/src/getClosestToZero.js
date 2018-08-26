// Your code goes here
 var input2 = prompt('Write a numbers ClosestToZero');
// var input1 = [9, 5, -4, -9];
//let s=9,d=5,f=-4,g=-9, input2 = [s, d, f, g] ;
//const s=9,d=5,f=-4,g=-9;
//let input2 = [s, d, f, g] ;
function closestToZero(_array ) {
    let num = 0, number = 0; 
    for (let i = _array.length - 1; i >= 0; i--) {
        if(Math.abs(number - _array[i]) < Math.abs(number - _array[num])){
            num = i;
        }
    }
    return _array[num];
}
console.log(closestToZero(input2));