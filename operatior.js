//BASIC OPERATIOR
var price = 33;
var price2 = 34;
var allprice = +(price2+price)
console.log(allprice);

//MULTIPLY
var eggPrice = 33;
var need = 4;
console.log(eggPrice*need);


//DIVISION
var moneyIhave = 44;
var divide = 5;
console.log(moneyIhave / divide);

//NUMBER WITH STRING
var totalMoney = 33;
var getWorker = 22;
console.log(totalMoney - getWorker + " tk Baki thaklo");

//OPERATIOR;
var totalMoney = 222;
var price2 = 22;
var diff = totalMoney - price2;
var mulitply = totalMoney * price2;
var div = totalMoney / price2;
console.log(diff, mulitply, div);


//DIRECT CALCULETE;
var weight = 36;
var tatal = weight + 44;
console.log(tatal);

//SORTHAND;
var proPrice = 233;
proPrice+=33;
console.log(proPrice);

//POSTFIX ONLY INCREASE ONE;
var define = 33;
define++ //34 
console.log(define);

var value = 3;
++value;
console.log(value);


//STRING CONCATING;
var fname = 'My name is ';
var lname = 'Md nazmul hq khan';
var yname = "Md Nummohammad khan" + ' ';
var professionIs = 'And Digital marketers';
console.log(yname + professionIs)
console.log(fname + lname);



//STIRNG MAKING NUMBERS; 
var fname = "Nurmohammad ";
var lname = "khan";
console.log(fname + lname);

var fvalue = 3;
var svalue = '3'
var result = fvalue + svalue;
console.log(result);


//MAKING NUMBERS;
console.log(+(fvalue + svalue));


//FLOAT;
var float = 33.333;
var number = 33; //Number;

var newNumber = '222';
var ownNumber = '22.33';
var nowInt = parseInt(ownNumber);
console.log(nowInt);


//INT VS FLOAT
parseFloat(); // GET FLOAT EXACT SAME AND MAKING NUMBERS;
parseInt() //REMVOE . AFTER NUMBERS;



//TO KNOW TYPE;
var type = 33;
console.log(typeof type);
var str = 'string';
console.log(typeof str);
var bool = true;
console.log(typeof bool);
var isfloat = 3333.33;
console.log(typeof isfloat);



//TO CHEK NUMBER OR INTGERS;
function isorNot(value){
    if(typeof value == 'string'){
        console.log(value + ' is a string.....');
    }else if(Number.isInteger(value) && !isNaN(value)){
        console.log("Its a numbers");
    }else if(typeof value == 'boolean'){
            console.log("its boolean values....");
        
    }else if (!isNaN(value)){
        console.log("Its a nan values");
        
    }else{
        console.log('Its a float numbers....');
    }
}
isorNot('Hi');


//CRITICAL MATH;
var one = 0.1 + 0.2; 
var str = one.toFixed(1);//return string;
var flot = parseFloat(str) //Making Numbers
console.log(flot);


//COMPAREING
console.log(33 > 43);
console.log(33 < 4);
console.log(3 == 3);
console.log(3 === '3'); //return false number and string;
console.log(3 != 3);

var fvalue = 3;
var lvalue = 2;
console.log(fvalue > lvalue);
console.log(fvalue < lvalue);
