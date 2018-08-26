// Your code goes here

let s=3,d=0,f=-3,g=56, may_input = [s, d, f, g] ;
//var may_input = prompt('getMin'); 

function getMin(array) {
    let len = array.length, min = Infinity;
    while (len--) {
      if (Number(array[len]) < min) {
        min = Number(array[len]);
      }
    }
    return min;
  }
  
console.log(getMin(may_input));
