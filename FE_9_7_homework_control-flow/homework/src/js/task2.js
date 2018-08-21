// Your code goes here

var isOK = confirm('Do you want to play a game?');

if(!isOK){
    alert('You did not become a millionaire, but can.');
} else {
  var endTheGame = false;
  var prize = 0;  
  var randomGrow = 1;
  var prizeGrow = 1;

  var gameIteration = 0;
  while(!endTheGame){

    if(gameIteration > 0){
        randomGrow = gameIteration * 2;
        prizeGrow = gameIteration * 3;  
    }
    var five = 5;
    var randomRestrictions = five * randomGrow;

    var random =Math.floor(Math.random() * randomRestrictions);  
      
    var userWon = false;
    for(var i=0; i < 3; i++){
        var number = prompt('Please enter a number from 0 to ' + randomRestrictions +'\n Attempt left: '+ (3 - i) 
        +'\n Total prize:' + prize + '\n Possible prize on current attempts: ' + getPrice(i, prizeGrow));

        if(number === random){
            userWon = true;

            prize += getPrice(i, prizeGrow);
        }

        if(userWon){
            break;
        }
    }

    if(userWon){
        endTheGame = !confirm('Congratulation!  Your prize is: ' + prize +' Do you want to continue?’')
    } else {
        alert('Thank you for a game. Your prize is: ' + prize);
        endTheGame = !confirm('Do you want to play again?');
    }

    gameIteration++;

}

}

function getPrice(i, prizeGrow){
    let prize;
    var ten = 10;
    var five = 5;
    var twoo = 2;
    var one = 1;
    switch(i){
        case 0: prize = ten * prizeGrow; break;
        case one: prize = five * prizeGrow; break;
        case 2: prize = twoo * prizeGrow; break;
        
        default: undefined //alert( 'I don’t know.' );
    }

    return prize;
}


