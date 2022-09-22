function input(input, show){
    let inputs = document.getElementById(input);
    let value = inputs.value;
    let convert = parseFloat(value); 
    let result = document.getElementById(show);
     result.innerText = convert;
 
    


    //Added main balance;
    let oldBalance = result.innerText;
    let oldBalances = parseFloat(oldBalance);
    

    //total;
    let Old = inputs.value;
    let parse = parseFloat(Old);
  
    let results = parse + oldBalances;
    console.log(results);


    inputs.value = "";
}




document.getElementById('add_money_submit').addEventListener('click', function(){
    input('add_money_input', 'add_money', 'available');
}); 