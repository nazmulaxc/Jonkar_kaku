let value = document.getElementsByTagName('h3');
let p = document.getElementsByTagName('p')

//traversing;
for(let i = 0; i< p.length; i++){
    //console.log(p[i].innerText);
}
//traversing;
for(let svalue of value){
  //console.log(svalue.innerText);
  //console.log(svalue);
};


//Catching;
let catchs = document.getElementById('catch');
catchs.style.color = 'yellow';


//Changeing element style and others;
let h5 = document.getElementById('js');
h5.innerHTML = 'Changed';
h5.style.color = "white";
h5.style.fontSize = '30px';
h5.style.backgroundColor = 'orange';
h5.style.padding = '5px';
h5.style.borderRadius = '5px';


//three paragraph modified;
let cls = document.getElementsByClassName('cls');
for(let s of cls){
    s.style.border = '2px solid orange';
};


// NodeList, htmlcollection, setAttribute, parentNode, childnodes
let con = document.getElementById('container');
    con.setAttribute('tittle', 'flower');
let parent = con.parentElement.parentElement;
let childNode = con.childNodes;



//Document.createElememts;

let ul = document.getElementById('ul');
let li = document.createElement('li');
let a = document.createElement('a');
a.href = '#';
a.innerText = "Fives";
ul.appendChild(li);
li.appendChild(a);


//Using onclick funcitions;
function myfun(){
    let list = document.querySelector('.btn');
        list.style.color = 'red';
        list.style.backgroundColor = 'orange';
        list.style.padding = '10px'
        list.style.borderRadius = '6px';
        list.style.textAlign = 'center'
   
};
 


















