let closebtn = document.getElementById("close")
let pop = document.getElementById("popup")
let openn = document.getElementById("hack")
let bodyy = document.getElementsByClassName("body")
let bg = document.getElementById("backgroundColor")

closebtn.addEventListener("click", close)


openn.addEventListener("click", openup)

pop.hidden = true;
bg.hidden = true;


function close(){
    console.log("close window")
    pop.hidden = true;
    bg.hidden = true;
}

function openup(){
    console.log("close window")
    pop.hidden = false;
    bg.hidden = false;
    
}

