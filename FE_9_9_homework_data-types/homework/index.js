// Your code goes here
var xx;
function findType(xx){
    return typeof xx;
}
// var xx=‘number’;
console.log(findType('number')); // returns “string” 
 var tt_1 ;// =null ;
console.log(findType(tt_1)); //returns undeff 
tt_1 =null ;
console.log(findType(tt_1)); //returns “object” 


/*
//task 2 ,  forEach([2,5,8], function(el) { console.log(el) }) // returns 2 5 8
function forEach(array, predicate){
    for (var i = 0; i<array.length; i++){
        predicate(array[i]);
    }
}
*/


//---
//task 2  Write function, which iterates over array and executes function on each element.
//forEach([2,5,8], function(el) { console.log(el) }) // returns 2 5 8
let one=1, two=2, three=3, five=5, eith=8; 

function forEach(array, predicate){
    let results= [];
    for (let i = 0; i<array.length; i++){
        results.push(predicate(array[i]));
    }

    return results;
}
forEach([two,five,eith], function(el) {
 console.log(el) 
}) ;

//task 3. Write function, which returns transformed array based on function, which passed as a parameter. Reuse function from task 2.
//map([2, 5, 8], function(el) { return el + 3 }) // returns [5, 8, 11]

function map(array, mapfunction){
   return forEach(array, mapfunction);
}

console.log( map([two, five, eith], function(el) {
 return el + three; 
}) );




//task 4. Write function, which returns filtered array based on function, which passed as a parameter. Reuse function from task 2.
//filter([2, 5, 8], function(el) { return el > 3 }) // returns [5, 8]

function filter(array, predicate){
    let result = forEach(array, predicate);
    //console.log(result);
     let j = 0;
    for (let i = 0; i < result.length; i++){
        if (result[i] === false){
            array.splice(i - j, one);
            j++;
        }
    }
    console.log(array);
    return array;
 }

 filter([two, five, eith], function(el) {
 return el > three; 
}) // returns [5, 8]

 //task 5. Write function, which returns array of names of people, who are over 18 and their favorite fruit is apple. Reuse functions from task 2 and 3.
//See input data example in CODE section
//getAdultAppleLovers(data) // returns [‘Stein’]
function getAdultAppleLovers(data){
    let result = filter(data, function(e){
 return e.age > 18 && e.favoriteFruit === 'apple'
});
    let mapres = map(result, function(e){
 return e.name
})
    return mapres;
}

let data = [
    {
      '_id': '5b5e3168c6bf40f2c1235cd6',
      'index': 0,
      'age': 39,
      'eyeColor': 'green',
      'name': 'Stein',
      'favoriteFruit': 'apple'
    },
    {
      '_id': '5b5e3168e328c0d72e4f27d8',
      'index': 1,
      'age': 38,
      'eyeColor': 'blue',
      'name': 'Cortez',
      'favoriteFruit': 'strawberry'
    },
    {
      '_id': '5b5e3168cc79132b631c666a',
      'index': 2,
      'age': 2,
      'eyeColor': 'blue',
      'name': 'Suzette',
      'favoriteFruit': 'apple'
    },
    {
      '_id': '5b5e31682093adcc6cd0dde5',
      'index': 3,
      'age': 17,
      'eyeColor': 'green',
      'name': 'Weiss',
      'favoriteFruit': 'banana'
    }
  ]
getAdultAppleLovers(data);



//6. Write function, which returns array of keys of an object.
//keys({keyOne: 1, keyTwo: 2, keyThree: 3}) // returns [“keyOne”, “keyTwo”, “keyThree”]

function keys(data){
    let result = []
    for(let key in data){
        if (data.hasOwnProperty(key)) {
        result.push(key);
        }
    }
    console.log(result);
    return result;
}




keys({keyOne: 1, keyTwo: 2, keyThree: 3});

//7. Write function, which returns array of values of an object.
//values({keyOne: 1, keyTwo: 2, keyThree: 3}) // returns [1, 2, 3]


function values1(data){
    let result = []
    for(let key in data){
        if (data.hasOwnProperty(key)) {
            result.push(data[key]);
       }
    }
    console.log(result);
    return result;
}

 values1({keyOne: 1, keyTwo: 2, keyThree: 3});
//console.log(values1());



//task 8
function showFormattedDate(dddd){

    let date=dddd, monthNames = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN',
    'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'
    ] ;

     date ='It is ' + date.getDate() + ' of '+ monthNames[date.getMonth()] + ', ' + date.getFullYear() ;// returns ‘It is 27 of Aug, 2018’
    return date; // ='It is ' + date.getDate() + ' of '+ monthNames[date.getMonth()] + ', ' + date.getFullYear() ;// returns ‘It is 27 of Aug, 2018’
}

console.log(showFormattedDate(new Date('2018-08-27T01:10:00')) ); 