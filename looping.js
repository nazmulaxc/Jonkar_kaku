var x = 3;

while(x < 5){ //syntax;
    //console.log("Counting current "+ x);
    x++;
};


var z = 10
while (z <= 20){
      //console.log(z);
    z = z + 2; //Increaseing 2;
};


for(i = 0; i<= 33; i++){
    if (i === 15) break;
    console.log(i);
  
};

 
  
//BREAK STATEMENTS;
for(value = 0; value < 33; value++){
    console.log(value);
    if(value === 20) break;
};

var x = 0;
while(x < 100){
    console.log(x);
    if(x == 4)break;
    x++;
};
console.log('After');


//MAKING VALUE LESSTHAN 33;
var arr = [3,4,2,43,23,43];
for(i = 0; i<arr.length; i++){
    if(arr[i] <  33){ 
     console.log(arr[i]);
    }
}

//CONTINUE;
var a = [3, 44, 32, 233, 333];
for(i = 0; i<a.length; i++){
    console.log(a[i]);
     if(a == 44 ) continue; //Just skip;
}
console.log('Afters....');
console.log(a.indexOf(32));
if(a.indexOf(32) == 2){
    console.log('get it....');
}else{
    console.log("Not found....");
};










