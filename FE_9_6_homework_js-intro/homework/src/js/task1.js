
// Your code goes here

 var price = prompt('Please input amount of money: ', '');
 var discount = prompt('Please input discount: ', '');

if(price < 0 && discount > 0 && discount <= 100 ){
    console.log('invalid data');
} else {
    var priceWithDiscount = precise(price*(100-discount)/100);
    var saved = precise(price - priceWithDiscount);


console.log('Price without discount: %s \nDiscount: %s', precise(price),precise(discount));

console.log('\nPrice with discount: %s\nSaved: %s',priceWithDiscount, saved);



}

function precise(x) {
    return parseFloat(x).toFixed(2) * 100 / 100;
  }