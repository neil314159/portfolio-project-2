document.addEventListener("DOMContentLoaded", function(){
    let slots = document.getElementsByClassName("slot");


    for(let slot of slots){
        slot.addEventListener("click", function(){

        
        this.classList.add("green");
    });
    }

    
    
})