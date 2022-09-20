var value = "Hello world";
var pos = value.indexOf(' world');
console.log(pos);


var arr = [3, 4,3 ,233,34];
console.log(arr[2]);

if(value.indexOf('e') === 1){
    console.log("it get now ");
}else{
    console.log('Not found....');
};


function well(num , num2){
    console.log(num + num2);
};

well(3 , 3);


function well(num , num2){
    return num + num2;
};

var num = 33;
console.log(well(num , 3));