'use strict'

const generateNameButton = document.getElementById("btnNameGenerate");

function displayVillainName(villain){
    // create div element
    let divElement = document.createElement('div');
    if(color){
        divElement.style.backgroundColor = color1;
        color = false;
    }else{
        divElement.style.backgroundColor = color2;
        color = true;
    }

    addBlockOfText(divElement,"Name: "+villain.getName(), "center");

    //addBlockOfText(divElement,""+villain.);
    divArray[0] = divElement;

    // append div element to document
    document.body.appendChild(divElement);
}

generateNameButton.addEventListener('click', function () {
    for (let i = 0; i < divArray.length; i++) {
        divArray[i].remove();
    }
    let villain = new Villain(8);
    displayVillainName(villain);
});