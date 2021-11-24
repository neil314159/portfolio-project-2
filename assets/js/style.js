document.addEventListener("DOMContentLoaded", function(){
    let slots = document.getElementsByClassName("slot");


    for(let slot of slots){
        slot.addEventListener("click", function(){

        
        this.classList.add("green");
    });
    }


    let buttons = document.getElementsByClassName("menu");
    // console.log(buttons);
    buttons[0].addEventListener("click", function(){
// alert("here");
        // console.log("getting here");
        let faces = document.getElementsByClassName("box");
        faces[0].classList.add("spinback");
    });

    let buttons2 = document.getElementsByClassName("front");
    // console.log(buttons);
    buttons2[0].addEventListener("click", function(){
// alert("here");
        // console.log("getting here");
        let faces = document.getElementsByClassName("box");
        faces[0].classList.remove("spinback");
        faces[0].classList.add("spinfront");
    });

    
    
    
    
})

