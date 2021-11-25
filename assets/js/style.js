document.addEventListener("DOMContentLoaded", function(){
    
    
//    console.log("first")
createBoard();
    
//  let slots = document.getElementsByClassName("slot");
//     for(let slot of slots){
//         slot.addEventListener("click", function(){
//         this.classList.add("green");
//     });
//     }

    let buttons = document.getElementsByClassName("menu");
    // console.log(buttons);
    buttons[0].addEventListener("click", function(){

        let faces = document.getElementsByClassName("box");
        faces[0].classList.add("spinback");
        // let shadows = document.getElementsByClassName("shadow");
        // console.log(shadows);
        // shadows[0].classList.add("spinbackshadow");
    });

    let buttons2 = document.getElementsByClassName("front");
    // console.log(buttons);
    buttons2[0].addEventListener("click", function(){
// alert("here");
        // console.log("getting here");
        let faces = document.getElementsByClassName("box");
        faces[0].classList.remove("spinback");
        faces[0].classList.add("spinfront");
clearBoard();

        // let shadows = document.getElementsByClassName("shadow");
        // console.log(shadows);
        // shadows[0].classList.remove("spinbackshadow");
        // shadows[0].classList.add("spinfrontshadow");
    });
    
})

function createBoard(){

    for(let i=0;i<42; i++){
        let slot = document.createElement('div');
         slot.setAttribute('data-id', i);
        slot.classList.add('slot');
        slot.classList.add('clear');
        slot.addEventListener("click", function(){
            //console.log(this);
            this.classList.add("green");
        });
        document.getElementById('game').appendChild(slot);
    }
}


function clearBoard(){

 let slots = document.getElementsByClassName("slot");
    for(let slot of slots){
       // console.log(this.classList);
        slot.classList.remove('clear', 'green');
        slot.classList.add('clear');
    };
    
}

function gameClick(){
   
       
    
}


