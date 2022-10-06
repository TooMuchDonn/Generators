'use strict'

const generateButton = document.getElementById("btnGenerate");
const divArray = [];

let color = true;
let color1 = "#000000";
let color2 = "#0f0f0f";

function random(max, min){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function addBlockOfText(div, text) {
    let divElementP = document.createElement("p")
    let divElementText = document.createTextNode(text);
    divElementP.appendChild(divElementText);
    div.appendChild(divElementP);
    
}

function addBlockOfText(div, text, classN) {
    let divElementP = document.createElement("p");
    divElementP.className = classN;
    let divElementText = document.createTextNode(text);
    //divElementText.className = classN;
    divElementP.appendChild(divElementText);
    div.appendChild(divElementP);
    
}

function displayAlignment(alignment){
    // create div element
    let divElement = document.createElement('div');
    if(color){
        divElement.style.backgroundColor = color1;
        color = false;
    }else{
        divElement.style.backgroundColor = color2;
        color = true;
    }
    divElement.className = "center";

    addBlockOfText(divElement,alignment);
    
    divArray[0] = divElement;

    // append div element to document
    document.body.appendChild(divElement);
}

function getAlignment(num){
    switch(num){
        case 1: return "Lawful Good";
        case 2: return "Lawful Neutral";
        case 3: return "Lawful Evil";
        case 4: return "Neutral Good";
        case 5: return "True Neutral";
        case 6: return "Neutral Evil";
        case 7: return "Chaotic Good";
        case 8: return "Chaotic Neutral";
        case 9: return "Chaotic Evil";
    }
}

function generateAlignment() {
    for (let i = 0; i < divArray.length; i++) {
        divArray[i].remove();
    }
    let alignmentNumber = random(9,1);
    let alignment = getAlignment(alignmentNumber);
    console.log("Alignment: " + alignment);
    displayAlignment(alignment);
}

generateButton.addEventListener('click', function () {
    generateAlignment();
});