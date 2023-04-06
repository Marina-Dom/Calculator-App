
function display(val){
    document.getElementById('result') .value += val;
}

function solve(){
    let x = document.getElementById('result').value;
    let y = eval(x);
    document.getElementById('result').value =y; 
}

function clearScreen(){
    document.getElementById('result').value = '';
}


// Add parentheses
// Add history button
    // when clicked history is displayed on the side
//Add a delete button to erase a mistake before hitting enter