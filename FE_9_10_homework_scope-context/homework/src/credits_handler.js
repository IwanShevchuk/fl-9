
/* Your code goes here */
/*
let cardIndex_one = 1;
let cardIndex_max = 3;
*/
var cardIndex_one = 1;
var cardIndex_max = 3;

class Card{

    constructor(key) {

        if(key => cardIndex_one && key <= cardIndex_max ){
            this.options = {transactionLimit: 100, historyLogs: [], key: key, balance: 0};
        }
    }

    getCardOptions(){
        return this.options;

    }
    
    putCredits(credit){
        // this.options.historyLogs.push({operationType: "Received credits", credits: credit, operationTime: new Date()});
        this.options.historyLogs.push({operationType: 'Received credits', credits: credit,
         operationTime: normalDateFormate() });
        this.options.balance += credit;
        
    }
    
    takeCredits(amount){
        if(amount <= this.options.transactionLimit ){
            this.options.historyLogs.push({operationType: 'Withdrawal of credits', credits: amount,
             operationTime: normalDateFormate() });
            this.options.balance -= amount;
        } else{
            console.error('Entered amount is bigger then your limit!');
        }
    }
    
    setTransactionLimit(newTransactionLimit){
        this.options.historyLogs.push({operationType: 'Transaction limit change', credits: newTransactionLimit,
         operationTime: normalDateFormate() });
        this.options.transactionLimit = newTransactionLimit;
    }
    
    transferCredits(amount, receiver){
        let a_percent= 0.05;
        let beforeAmount = this.options.balance ;
        this.takeCredits(amount + amount * a_percent);
        
        if(beforeAmount !== this.options.balance){
            receiver.putCredits(amount);
        }
    }
    
}

function normalDateFormate(){
    let eventTime = new Date();
    // British English uses day/month/year, order and 24-hour time. Asia/Jakarta  Etc/GMT-7
    eventTime = eventTime.toLocaleString('en-GB', { timeZone: 'Etc/GMT-3' });
    return eventTime;
}

function userCard(id){
    return new Card(id);
}


class UserAccount{

    constructor(name) {
        this.name = name;
        this.cards = [];
        this.cardIndex = cardIndex_one;
    }
    addCard(){
        if(this.cardIndex > cardIndex_max) {
            return;
        }

        this.cards.push(new Card(this.cardIndex))
        this.cardIndex ++;
    }

    getCardByKey(key){

        if(key < cardIndex_one && key > cardIndex_max){
            return null;
        }

        for(let i=0; i<this.cards.length; i++){
            if(this.cards[i].options.key === key ){
                return this.cards[i];
            }
        }
    }
}

let S_1 = 500, S_2 = 800, S_3 = 50, S_4 = 300, twu=2;

let user = new UserAccount('Bob');
user.addCard()
user.addCard()

let card1 = user.getCardByKey(1);
let card2 = user.getCardByKey(twu);

card1.putCredits(S_1);
card1.setTransactionLimit(S_2);
card1.transferCredits(S_4, card2);

card2.takeCredits(S_3);

console.log(card1.getCardOptions());
console.log(card2.getCardOptions()); 