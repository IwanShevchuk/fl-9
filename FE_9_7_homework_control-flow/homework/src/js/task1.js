// Your code goes here
var uname = prompt('Please input user name: ', '');

//console.log(uname.length); 


switch (uname) {
    case uname.length = 0 :
        alert( 'Canceled' );
        break;
    case uname.length < 4 :
        alert( 'I don`t know any users having name length less than 4 symbols' );
        break;
    case uname ='User':

        var upass = prompt('Please input password: ', '');
        if(upass.length === 0 ){
            alert( 'Canceled' );
        } else if(upass === 'SuperUser'){
        if(new Date().getHours() < 20){
                alert( 'Good day!' );
            }else {
                alert( 'Good evening!' );
            }

        } else{
            alert( 'Wrong password' );
        }

        break;
    default:
        alert( 'I don’t know you' );
}