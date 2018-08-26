// Your code goes here

var input = prompt('Write a number for reverseNumber');

function reverseInt(n) {
    const reversed = n.toString().split('').reverse().join('');
    return Math.sign(n) * parseInt(reversed);
  }
console.log(reverseInt(input));
