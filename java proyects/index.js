let saveEl = document.getElementById("save-El")
let countEl = document.getElementById("count-el")
let count= 0 ;

function increment(){
    count += 1;
    countEl.innerText = count;
}

function save(){
    let countStr= count + " - "
    saveEl.innerText += countStr
    countEl.innerText=0
    count=0;
}