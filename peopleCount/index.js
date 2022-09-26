// document.getElementById("count-el").in nerText= -50;

let countEl = document.getElementById("count-el");
let count =0;
let prevEntry=document.getElementById("prev-entry");


function increment(){
    countEl.innerText = ++count;
}

function save(){
    console.log(count);
    prevEntry.textContent += count+" - ";
    countEl.innerText = 0;
    count=0;
}

function prev(){

}
