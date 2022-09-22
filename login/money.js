document.getElementById('deposit').addEventListener('click', function(){
    let input = document.getElementById('input');
    let dpbalance = document.querySelector('.p');
    let valueInput = input.value;
    let currentBalance = dpbalance.innerText;
    let old = parseFloat(currentBalance);
    let newValue = parseFloat(valueInput);
    dpbalance.innerText =  old + newValue;
    input.value = '';


        //Total value;
        let total = document.getElementById('total');
        let ttal = old + newValue;
         total.innerText = ttal;
});

  
//Widdrow;
document.getElementById('btnupdate').addEventListener('click',function(){
    let total = document.getElementById('total');
    let inndertotal = total.innerText;
    let totalMoney = parseFloat(inndertotal);

    let widdrowInput = document.getElementById('widdrow').value;
    let inp = parseFloat(widdrowInput)
    
    let innch = document.getElementById('total');
        total.innerText =  totalMoney - inp;
});

     
 

   
 
    
   // inp.value = ''; //Clearning;
