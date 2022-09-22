function undo() {
    let catchs = document.getElementsByClassName('ch');
    console.log(catchs);
};

//Notes;
//Script a functioner nume hobe ;
// index.html a call kora hoy ;
// noi page load howar agei call hoye jabe;



//Normall way;



//2nd way;








// let btn4 = document.getElementById('btn4');
// btn4.onclick = function(){
//     document.body.style.backgroundColor = "green"
// };


//Direct call;
function fun() {
    document.body.style.backgroundColor = "green";
}


//trick one;
let id = document.getElementById('btn');
btn.onclick = function () {
    document.body.style.backgroundColor = "red"
};

//Trick two
let id2 = document.getElementById('btn2');
id2.addEventListener('click', function () {
    document.body.style.backgroundColor = "gray";
});


//Trick 3
let id3 = document.getElementById('btn3');
id3.addEventListener('click', calling);
function calling() {
    document.body.style.backgroundColor = 'black';
};

document.getElementById('btn5').addEventListener('click', function () {
    document.body.style.backgroundColor = "#741010";
});


//Catch input value;
let btns = document.getElementById('sb').addEventListener('click', function () {
    let result = document.getElementById('p');
    let inp = document.getElementById('text');
    result.innerText = inp.value;
    inp.value = '';
})


//Comment _ part;
document.querySelector('.submit').addEventListener('click', function () {
    let txt = document.getElementById('textarea');
    let show = document.getElementById('showing');
    show.innerText = txt.value;
    txt.value = '';
});


//Note innerText = vitore text push kora; innerHTML = vitore text catch kore change kora etc;







//Delete hightlight;
let h2 = document.getElementById('h2h');
let btnsb = document.getElementById('btnr')
btnsb.addEventListener('click', function () {
    h2.style.display = 'none';
});

let de = document.getElementById('delete')
de.addEventListener('focus', function () {
    document.body.style.backgroundColor = "red";
});

let out = document.getElementById('delete');
out.addEventListener('focusout', function () {
    document.body.style.backgroundColor = "white";
});



let catches = document.getElementById('delete'); //Less one value delay;
catches.addEventListener('keypress', function () {
    let values = document.getElementById('delete').value;
    //  console.log(values);
});

//Fways
// let keypress = document.getElementById('delete');
// keypress.addEventListener('keyup', function(){ //Just time response; recommended;
//      if(keypress.value == 'delete'){
//         keypress.removeAttribute('disabled')
//      }
// })

//Delete showing...
let key = document.getElementById('delete');
key.addEventListener('keyup', function (event) {
    if (event.target.value == 'disabled') {
        document.getElementById('btnr').removeAttribute('disabled');
    } else {
        document.getElementById('btnr').setAttribute('disabled', true);
    }
});

//To change anything catch
let keypress = document.getElementById('delete'); //To catch any change;
keypress.addEventListener('change', function () { //Just time response; recommended;
    console.log(keypress.value);
})




//Bubbling; //Imprtance;
document.querySelector('#ps').addEventListener('click', function () {
    console.log('p clicked');
});


document.querySelector('.container').addEventListener('click', function () {
    console.log('Main div clicked');
});

document.querySelector('.ul').addEventListener('click', function (event) {
    console.log('ul clicked');
    event.stopPropagation();
});


document.querySelector('.one').addEventListener('click', function (e) {
    console.log('li clicked');
    e.stopImmediatePropagation(); //Just inner; exicude;
});
document.querySelector('.one').addEventListener('click', function (e) {
    console.log('li clicked');
    e.stopPropagation(); //Stop bubbling;
});

//Removeing elements;
let lid = document.getElementsByClassName('lid');
let ul = document.getElementById('ulm');
    for(let sli of lid){
       ul.addEventListener('click',function(){
        ul.removeChild(sli)
       });
    }
 














