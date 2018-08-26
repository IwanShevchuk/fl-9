// Your code goes here


function isPrime(num) {
  let prime = num !== 1;
  for(let x=2; x<num; x++) {
      if(num % x === 0) {
          prime = false;
          break;
      }
  }
  return prime;
}

const nembere=37;
console.log(isPrime(nembere));
