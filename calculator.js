let input = document.getElementById("input");
let buttons = document.querySelectorAll("button");


let string = ""; //for Answer store

buttons.forEach(button => {
    button.addEventListener("click",(e) =>{
        if (e.target.innerHTML == "="){
            string = eval(string);  // eval convert in numerical value
            input.value = string
        }
        else if (e.target.innerHTML == "AC"){
            string = "";
            input.value = string;
        }
        else if (e.target.innerHTML == "DEL"){
            string = string.substring(0,string.length-1);
            input.value = string;
        }
        else{
            string = string + e.target.innerHTML;
            input.value = string ;
        }
    })
})
