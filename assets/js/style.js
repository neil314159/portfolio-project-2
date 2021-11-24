document.addEventListener("DOMContentLoaded", function(){
    let slots = document.getElementsByClassName("slot");


    for(let slot of slots){
        slot.addEventListener("click", function(){

        
        this.classList.add("green");
    });
    }


    let buttons = document.getElementsByClassName("menu");
    console.log(buttons);
    buttons[0].addEventListener("click", function(){

        console.log("getting here");
        this.classList.add("spinback");
    });
    
    let faces = document.getElementsByClassName("boxface");
    console.log("getting this far");

        faces[1].addEventListener("click", function(){

        console.log("getting here");
        this.classList.add("spinback");
    });
    
    
})

