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

        slot.classList.remove('clear', 'green');
        slot.classList.add('clear');
    };

}

function gameClick(i) {
    let column = (i % 7);
    let empties = emptySpacesColumn(column);
    let newSlot = ((column + 1) + (7 * (empties - 1))) - 1;

    let slots = document.getElementsByClassName("slot");


    let playerColour = document.getElementById('player');

    console.log(playerColour.textContent);
   // console.log(empties);
        if (empties > 0) {
            //console.log(playerColour);
        slots[newSlot].classList.remove("clear");
        //playerColour.textContent = "new";
        if(playerColour.textContent==="yellow"){
            //alert('here');
            slots[newSlot].classList.add("yellow");
            console.log(slots[newSlot]);
            playerColour.textContent = "green";
        } else if(playerColour.textContent==="green"){
            slots[newSlot].classList.add("green");
           playerColour.textContent = "yellow";
        } 
        // else{
        //     slots[newSlot].classList.add("yellow");
        //     playerColour.textContent = "green";
        // }
        
        //console.log(slots[newSlot]);
    }


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