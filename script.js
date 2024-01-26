const display = document.getElementById("display");

function displayBtn(input){
    display.value += input;
}

function clearDisplay(){
    display.value = ""
}

function del(){
    let valueArr = Array.from(display.value);
    valueArr.pop();
    display.value = valueArr.join("");
    
}

function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(err){
        display.value = "Error";
    }
}