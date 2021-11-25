document.addEventListener("DOMContentLoaded", function () {
    createBoard();
    createEventListeners();
})

function createEventListeners() {
    var darkcheckbox = document.getElementById("darkmodecheck");

    darkcheckbox.addEventListener("change", function () {
        var element = document.body;
        element.classList.toggle("darkmode");

    });

    var computerCheck = document.getElementById("computerPlayer");
    computerCheck.addEventListener("change", function () {
        clearBoard();
    });

    let buttons = document.getElementsByClassName("menu");
    buttons[0].addEventListener("click", function () {
        let faces = document.getElementsByClassName("box");

        if (faces[0].classList.contains("spinback")) {
            faces[0].classList.remove("spinback");
            aces[0].classList.add("spinfront");
        } else {
            faces[0].classList.remove("spinleft");
            faces[0].classList.remove("spinfront");
            faces[0].classList.add("spinback");
        }
    });

    let returnButtons = document.getElementsByClassName("returnHome");
    returnButtons[0].addEventListener("click", function () {
        let faces = document.getElementsByClassName("box");
        faces[0].classList.remove("spinleft");
        faces[0].classList.remove("spinback");
        faces[0].classList.add("spinfront");
    });

    let buttons3 = document.getElementsByClassName("side");
    buttons3[0].addEventListener("click", function () {
        let faces = document.getElementsByClassName("box");
        faces[0].classList.add("spinleft");
    });

    let newGameButtons = document.getElementsByClassName("newGame");
    newGameButtons[0].addEventListener("click", function () {
        let faces = document.getElementsByClassName("box");
        faces[0].classList.remove("spinback");
        faces[0].classList.remove("spinleft");
        faces[0].classList.add("spinfront");
        clearBoard();
    });

    newGameButtons[1].addEventListener("click", function () {
        let faces = document.getElementsByClassName("box");
        faces[0].classList.remove("spinback");
        faces[0].classList.remove("spinleft");
        faces[0].classList.add("spinfront");
        clearBoard();
    });
}

function createBoard() {
    for (let i = 0; i < 42; i++) {
        let slot = document.createElement('div');
        slot.setAttribute('data-id', i);
        slot.classList.add('slot');
        slot.classList.add('clear');
        slot.addEventListener("click", function () {
            gameClick(i);
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
    let playerColour = document.getElementById('player');
    playerColour.textContent = "yellow";
}

function gameClick(i) {
    let computerCheck = document.getElementById("computerPlayer");
    let playerColour = document.getElementById('player');
    let column = (i % 7);
    let empties = emptySpacesColumn(column);
    let newSlot = ((column + 1) + (7 * (empties - 1))) - 1;
    let slots = document.getElementsByClassName("slot");

    if (empties > 0) {
        if (computerCheck.checked) {
            slots[newSlot].classList.add("yellow");
            checkForWin("yellow");
            let pcMove = computerNextMove();
            let pcEmpty = emptySpacesColumn(pcMove);
            let pcSlot = ((pcMove + 1) + (7 * (pcEmpty - 1))) - 1;
            slots[pcSlot].classList.add("green");
            checkForWin("green");
            playerColour.textContent = "yellow";
        } else {
            if (playerColour.textContent === "yellow") {
                slots[newSlot].classList.add("yellow");
                checkForWin("yellow");
                playerColour.textContent = "green";
            } else if (playerColour.textContent === "green") {
                slots[newSlot].classList.add("green");
                checkForWin("green");
                playerColour.textContent = "yellow";
            }
        }
        checkForDraw();
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

function checkForDraw() {
    let slots = document.getElementsByClassName("slot");
    let drawCounter = 0;
    for (let slot of slots) {
        if (slot.classList.contains("clear")) drawCounter++;
    }
    if (drawCounter === 0) {
        spinLeft();
    } else {

    }
}

function checkForWin(colourW) {
    let slots = document.getElementsByClassName("slot");
    let currentColour = colourW;
    for (let i = 0; i < 42; i += 7) {
        for (let k = 0; k < 4; k++) {
            if (slots[i + k].classList.contains(currentColour) && slots[i + k + 1].classList.contains(currentColour) && slots[i + k + 2].classList.contains(currentColour) && slots[i + k + 3].classList.contains(currentColour)) {
                showResults();
            }
        }
    }
    //check vertically
    for (let i = 0; i < 7; i++) {
        for (let k = 0; k < 3; k++) {
            if (slots[i + (7 * k)].classList.contains(currentColour) && slots[i + (7 * k) + 7].classList.contains(currentColour) && slots[i + (7 * k) + 14].classList.contains(currentColour) && slots[i + (7 * k) + 21].classList.contains(currentColour)) showResults();
        }
    }
    //check diagonally top left to bottom right
    let leftRightStartingPoints = [0, 1, 2, 3, 7, 8, 9, 10, 14, 15, 16, 17];
    for (let i = 0; i < leftRightStartingPoints.length; i++) {
        let k = leftRightStartingPoints[i];
        if (slots[k].classList.contains(currentColour) && slots[k + 8].classList.contains(currentColour) && slots[k + 16].classList.contains(currentColour) && slots[k + 24].classList.contains(currentColour)) showResults();
    }
    //check diagonally top right to bottom left
    let rightLeft = [3, 4, 5, 6, 13, 20];
    let rightLeftStartingPoints = [3, 4, 5, 6, 10, 11, 12, 13, 17, 18, 19, 20];
    for (let i = 0; i < rightLeftStartingPoints.length; i++) {
        let k = rightLeftStartingPoints[i];
        if (slots[k].classList.contains(currentColour) && slots[k + 6].classList.contains(currentColour) && slots[k + 12].classList.contains(currentColour) && slots[k + 18].classList.contains(currentColour)) showResults();
    }
}

function computerNextMove() {
    let columnVotes = [0, 0, 0, 0, 0, 0, 0];
    let slots = document.getElementsByClassName("slot");
    let currentColour = "green";
    let nextMove = 3;

    //check base level first
    let baseCheckLeft = [38, 39, 40, 41];
    let baseCheckRight = [35, 36, 37, 38];
    for (let i = 38; i < 42; i++) {
        if (slots[i - 1].classList.contains(currentColour) && slots[i - 2].classList.contains(currentColour) && slots[i - 3].classList.contains(currentColour) && slots[i].classList.contains("clear")) {
            columnVotes[i % 7]++;
        }
    }
    for (let i = 35; i < 39; i++) {
        if (slots[i + 1].classList.contains(currentColour) && slots[i + 2].classList.contains(currentColour) && slots[i + 3].classList.contains(currentColour) && slots[i].classList.contains("clear")) {
            columnVotes[i % 7]++;
        }
    }
    //check rows above base row
    for (let k = 0; k < 29; k += 7) {
        for (let i = 3; i < 7; i++) {
            let m = i + k;
            if (slots[m - 1].classList.contains(currentColour) && slots[m - 2].classList.contains(currentColour) && slots[m - 3].classList.contains(currentColour) && slots[m].classList.contains("clear") && (slots[m + 7].classList.contains("green") || slots[m + 7].classList.contains("yellow"))) {
                columnVotes[i % 7]++;
            }
        }
    }
    for (let k = 0; k < 29; k += 7) {
        for (let i = 0; i < 4; i++) {
            let m = i + k;
            if (slots[m + 1].classList.contains(currentColour) && slots[m + 2].classList.contains(currentColour) && slots[m + 3].classList.contains(currentColour) && slots[m].classList.contains("clear") && (slots[m + 7].classList.contains("green") || slots[m + 7].classList.contains("yellow"))) {
                columnVotes[i % 7]++;
            }
        }
    }

    //check vertical tokens
    for (let i = 0; i < 7; i++) {
        for (let k = 0; k < 3; k++) {
            if (slots[i + (7 * k)].classList.contains("clear") && slots[i + (7 * k) + 7].classList.contains(currentColour) && slots[i + (7 * k) + 14].classList.contains(currentColour) && slots[i + (7 * k) + 21].classList.contains(currentColour)) columnVotes[i % 7]++;
        }
    }
    //check for diagonal winnnig streaks
    let leftRightStartingPoints = [0, 1, 2, 3, 7, 8, 9, 10, 14, 15, 16, 17];
    for (let i = 0; i < leftRightStartingPoints.length; i++) {
        let k = leftRightStartingPoints[i];
        if (slots[k].classList.contains("clear") && (slots[k + 7].classList.contains("green") || slots[k + 7].classList.contains("yellow")) && slots[k + 8].classList.contains(currentColour) && slots[k + 16].classList.contains(currentColour) && slots[k + 24].classList.contains(currentColour)) columnVotes[k % 7]++;
    }
    //check diagonally top right to bottom left
    let rightLeft = [3, 4, 5, 6, 13, 20];
    let rightLeftStartingPoints = [3, 4, 5, 6, 10, 11, 12, 13, 17, 18, 19, 20];
    for (let i = 0; i < rightLeftStartingPoints.length; i++) {
        let k = rightLeftStartingPoints[i];
        if (slots[k].classList.contains("clear") && (slots[k + 7].classList.contains("green") || slots[k + 7].classList.contains("yellow")) && slots[k + 6].classList.contains(currentColour) && slots[k + 12].classList.contains(currentColour) && slots[k + 18].classList.contains(currentColour)) columnVotes[k % 7]++;
    }
    if (Math.max(...columnVotes) === 0) {
        nextMove = Math.floor(Math.random() * 6);
    } else {
        nextMove = columnVotes.indexOf(Math.max(...columnVotes));
    }
    if (emptySpacesColumn(nextMove) === 0) {
        for (let i = 0; i < 7; i++) {
            if (emptySpacesColumn(i) > 0) nextMove = i;
        }
    }
    return nextMove;
}

function showResults() {
    let faces = document.getElementsByClassName("box");
    faces[0].classList.add("spinleft");
    let computerCheck = document.getElementById("computerPlayer");
    let playerColour = document.getElementById('player');
    let resultsText = document.getElementById('resultstext');

    if (computerCheck.checked) {

        if (playerColour.textContent === "green") resultsText.innerText = 'computer won';
        else resultsText.innerText = 'you won';
    } else {
        resultsText.innerText = `${playerColour.textContent} won`;
    }
}