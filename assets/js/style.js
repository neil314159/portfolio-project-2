document.addEventListener("DOMContentLoaded", function () {

    createBoard();

    let buttons = document.getElementsByClassName("menu");

    buttons[0].addEventListener("click", function () {

        let faces = document.getElementsByClassName("box");
        faces[0].classList.add("spinback");

    });

    let buttons2 = document.getElementsByClassName("front");

    buttons2[0].addEventListener("click", function () {

        let faces = document.getElementsByClassName("box");
        faces[0].classList.remove("spinback");
        faces[0].classList.add("spinfront");
        clearBoard();


    });

})

function createBoard() {

    for (let i = 0; i < 42; i++) {
        let slot = document.createElement('div');
        slot.setAttribute('data-id', i);
        slot.classList.add('slot');
        slot.classList.add('clear');
        slot.addEventListener("click", function () {
            gameClick(i)
        });

        document.getElementById('game').appendChild(slot);
    }
}


function clearBoard() {

    let slots = document.getElementsByClassName("slot");
    for (let slot of slots) {

        slot.classList.remove('clear', 'green', 'yellow');
        slot.classList.add('clear');
    };

}

function gameClick(i) {
    let column = (i % 7);
    let empties = emptySpacesColumn(column);
    let newSlot = ((column + 1) + (7 * (empties - 1))) - 1;

    let slots = document.getElementsByClassName("slot");


    let playerColour = document.getElementById('player');


    if (empties > 0) {

        slots[newSlot].classList.remove("clear");

        if (playerColour.textContent === "yellow") {

            slots[newSlot].classList.add("yellow");

            playerColour.textContent = "green";
        } else if (playerColour.textContent === "green") {
            slots[newSlot].classList.add("green");
            playerColour.textContent = "yellow";
        }
        myPlay();
    }
checkForWin("green");
    checkForDraw();
}

function emptySpacesColumn(toCheck) {

    let slots = document.getElementsByClassName("slot");
    let emptyCounter = 0;

    for (let i = toCheck; i < 42; i += 7) {

        if (slots[i].classList.contains("green") || slots[i].classList.contains("yellow")) {

            emptyCounter += 1;
        }
    }

    return 6 - emptyCounter;
}

function checkForDraw() {

    let slots = document.getElementsByClassName("slot");
    let drawCounter = 0;
    for (let slot of slots) {

        if (slot.classList.contains("clear")) drawCounter++;
    }

    if (drawCounter === 0) {
        return true;
    } else {
        return false;
    }
}

function myPlay() {
    var audio = new Audio("../assets/sounds/coin.wav");
    audio.volume = 0.3;
    audio.play();
}

function checkForWin(colourW){
    let slots = document.getElementsByClassName("slot");
    let currentColour = colourW;

    //check horizontally


    for (let i = 0; i < 42; i += 7) {
        for(let k=0; k<4; k++){
            if (slots[i+k].classList.contains(currentColour) && slots[i+k+1].classList.contains(currentColour) && slots[i+k+2].classList.contains(currentColour) && slots[i+k+3].classList.contains(currentColour)){
alert('winner');
            }
        }

        // if (slots[i].classList.contains("green") || slots[i].classList.contains("yellow")) {

        //     emptyCounter += 1;
        // }
    }


    //check vertically
    for (let i = 0; i < 7; i++) {
        //console.log(i);
        for(let k=0; k<3; k++){
           
    // if (slots[i+(7*k)].classList.contains(currentColour) && slots[i+(7*k)+7].classList.contains(currentColour))alert('winner vertical');

    if (slots[i+(7*k)].classList.contains(currentColour) && slots[i+(7*k)+7].classList.contains(currentColour) && slots[i+(7*k)+14].classList.contains(currentColour) && slots[i+(7*k)+21].classList.contains(currentColour))alert('winner vertical');
// console.log(i+(7*k))
// console.log(i+(7*k)+7)
// console.log(i+(7*k)+14)
// console.log(i+(7*k)+21)


            
        }
    }

    //check diagonally

    

}