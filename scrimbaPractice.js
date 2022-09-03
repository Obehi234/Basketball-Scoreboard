let num1=12;
let num2 = 8;
document.getElementById("num1").textContent= num1;
document.getElementById("num2").textContent= num2;

let count = 0;
function plus1() {
    count += 1;
    document.getElementById("num1").textContent=num1 + count ; 
    //document.getElementById("num2").textContent= num2 + count;
  
}

function plus2() {
    count += 2;
    document.getElementById("num1").textContent=num1 + count ; 
    //document.getElementById("num2").textContent= num2 + count;
  
}
function plus3() {
    count += 3;
    document.getElementById("num1").textContent=num1 + count ; 
    //document.getElementById("num2").textContent= num2 + count;
  
}
function plusG1() {
    count += 1;
    document.getElementById("num2").textContent=num2 + count ;   
    //document.getElementById("num2").textContent= num2 + count;
}
function plusG2() {
    count += 2;
    document.getElementById("num2").textContent=num2 + count ; 
    //document.getElementById("num2").textContent= num2 + count;
  
}
function plusG3() {
    count += 3;
    document.getElementById("num2").textContent=num2 + count ; 
    //document.getElementById("num2").textContent= num2 + count;
  
}

