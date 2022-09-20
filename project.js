
//Return value type;
function isorNot(value) {
    if (typeof value == 'string') {
        console.log(value + ' is a string.....');
    } else if (Number.isInteger(value) && !isNaN(value)) {
        console.log("Its a numbers");
    } else if (typeof value == 'boolean') {
        console.log("its boolean values....");

    } else if (!isNaN(value)) {
        console.log("Its a nan values");

    } else {
        console.log('Its a float numbers....');
    }
}
isorNot('Hi');



//Celcious to forenheiht; //Using function
//Grade calculete //Useing swich
// Interest;


//Night or days;
var date = new Date();
function time(dates) {
    var hour = dates.getHours();
    if (hour < 12) console.log('Its morning....');
    if (hour > 12) console.log("Its night....");
}

time(date)

//Inch to feets
function inch(inc) {
    return inc / 12;
};

console.log(inch(12));


//Mile to kilomiters;
function km(km, mile) {
    console.log(km * mile);
};
km(15, 1.60934);


//Is lipiyar or not;
function one(n){
    if(n % 4 == 0){
        console.log('Its is a libiyar');
    }else{
        console.log("Its not libiyar...");
    }
    
};
var date = new Date();
one(date);


//Factoriya;
// 3 factoriyal = 3 * 2 * 1;
// 4 factoriyal = 4* 3 * 2 * 1;

console.log(' ');
//Game with random;
for(var i = 0; i< 20; i++){
    r = Math.random() * 7;
    f = Math.floor(r);
    if(f == 6){
        console.log("Whola!!!! SIX + " + f);
        break;
    }else{
        console.log("Try more your numer is " + f);
        break;
    }
};


function max(n){
    var max = n[0];
    // n.forEach(function(e){
    //     if(e > max ){
    //         max = e;
    //     }
    // });

    for(i = 0; i< n.length; i++){
         if(n[i] > max){
             max = n[i];
         }
         
    }
    return max;
}
let ar = [3,4,22,34,22,1,32,43,4]
console.log( max(ar));


//Sum of a array;
var arrrr = [3,43,233,21,43,12];
let init = 0;
for(i = 0; i< arrrr.length; i++){
    init += arrrr[i];
};
console.log(init);
console.log('Nagetive number');


//Remove dupplicate element array;
function getUnique(array){
    var uniqueArray = [];
    
    // Loop through array values
    for(i=0; i < array.length; i++){
        if(uniqueArray.indexOf(array[i]) === -1) {
            uniqueArray.push(array[i]);
        }
    }
    return uniqueArray;
}

var names = ["John", "Peter", "Clark", "Harry", "John", "Alice"];
var uniqueNames = getUnique(names);
console.log(uniqueNames); 


//Handle multi conditions;
for(i=0; i< 40; i++){
    if(i % 3 == 0 && i % 5 == 0){
        console.log('3 and 5'); //Avoiding 5;
    }else if(i % 5 == 0){
        console.log('its only five');
    }else if(i % 3 == 0){
        console.log('its only three...');
    }else{
        console.log(i);
    }
 
}


//Find phone low buzzet;
var phl = [
    {
        name:'Xamomi', price:20000, camera:'22px'
    },
    {
        name:'Redmi', price:25000, camera:'30px'
    },
    {
        name:'Walton', price:15000, camera:'15px'
    }
];

let ivalue = phl[0];
for(let i = 0; i < phl.length; i++){
   if(phl[i].price < ivalue.price){
    ivalue = phl[i].price;
   }
}

console.log(ivalue);

//Total ber kora;
let total = [
    {
        name:'shirt', price:500, quanity:2
    },
    {
        name:'laptop', price:155500, quanity:5
    },
    {
        name:'mobile', price:15000, quanity:1
    }
];

//Total price;
let money = null;
for(let price of total){
        money += price.price;
};
console.log(money);


//Like ajax call;
let find = [
    {
        name: 'Appe', brand: 'apple', price: 21000
    },
    {
        name: 'Xaomi', brand: 'redmi', price: 2000
    },
    {
        name: 'lova', brand: 'symphone', price: 1000
    }
];

function finding(find, phn){
    let match = [];
    for (let i = 0; i < find.length; i++) {
        let sname = find[i].name;
        if (sname.indexOf(phn) != -1) {
           match.push(sname)
        }
    }
    return match;
};
console.log(finding(find, 'A'));
 

//Skip and continue;
let pro = [
    {
        name: 'lova', price: 2000
    }, {
        name: 'Redmi', price: 12000
    }, {
        name: 'Symphony', price: 22000
    },
    {
        name: 'Symphony', price: 23000
    }
]

function priceskip(pro) {
    for (let s of pro) {
        if(s.price < 10000){
            continue;
        };
        console.log(s);
    }
};
priceskip(pro)