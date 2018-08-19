// Your code goes here

// https://eslint.org/docs/2.0.0/rules/no-magic-numbers 

var a = prompt('Please input length of first side: ', '');
var b = prompt('Please input length of second side: ', '');
var alpha = prompt('Please input angle: ', '');

if(a < 0 || b < 0){
    console.log('invalid data');
} else {
  var c = precise(Math.sqrt(Math.pow(a,2) + Math.pow(b,2) - 2*a*b * Math.cos(toRadians(alpha))));
  
  var perim = parseFloat(a) + parseFloat(b) + parseFloat(c);
  var halfperim = perim/2;
  var square = Math.sqrt(halfperim*(halfperim-a)*(halfperim-b)*(halfperim-c));

  console.log('c length: ' + c);
  console.log('Triangle square: ' + precise(square));
  console.log('Triangle perimeter: ' + precise(perim));
}

function toRadians (angle) {
	let kut_180 = 180;
    return angle * (Math.PI / kut_180);
}

function precise(x) {
    return parseFloat(x).toFixed(2) * 100 / 100;
}