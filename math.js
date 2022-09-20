//Making positive;
let ng = -3;
let ch = Math.abs(ng);
console.log(ch);

//Making upper numbers;
let intget = 33.4;
let int = Math.ceil(intget)
console.log(int);


//Lower numbers;
let f = 2.6;
let floor = Math.floor(f);
console.log(floor);


//.5 upper
//.4 lower;
let fl = 3.4;
let chnge = Math.round(fl);
console.log(chnge);




//Random;
let rndom = Math.random() * 8; // i + .333 //Use math;
let get10 = Math.floor(rndom);
console.log(get10);

console.log("");

//Math random for looping;
for(var i = 0; i< 22; i++){
    r = Math.random() * 10;
    f = Math.floor(r);
    if(f == 6){
        console.log("Whola!!!!" + f);
        break;
    }else{
        console.log("Try more your numer is " + f);
        break;
    }
};












