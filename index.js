
var btn = document.querySelectorAll(".drum");

for (i = 0; i < btn.length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var buttonInnerHTML = this.innerHTML;

        makeSound(buttonInnerHTML);
        activeButton(buttonInnerHTML);
        
    });
}

document.addEventListener("keypress", function(e) {
        makeSound(e.key);
        activeButton(e.key);
});

function makeSound(key) {
    
    switch (key) {
        case "w":
                var tom1 = new Audio('sounds/tom-1.mp3');
                tom1.play();
                
            break;

            case "a":
                var tom2 = new Audio('sounds/tom-2.mp3');
                tom2.play();
                
            break;
            
            case "s":
                var tom3 = new Audio('sounds/tom-3.mp3');
                tom3.play();
                
            break;
            
            case "d":
                var tom4 = new Audio('sounds/tom-4.mp3');
                tom4.play();
                
            break;

            case "j":
                var snare = new Audio('sounds/snare.mp3');
                snare.play();
                
            break;

            case "k":
                var crash = new Audio('sounds/crash.mp3');
                crash.play();
                
            break;

            case "l":
                var kickBass = new Audio('sounds/kick-bass.mp3');
                kickBass.play();
                
            break;

            default: console.log(e.key);
    }
}

function activeButton(currentKey) {
    var action = document.querySelector("." + currentKey);
    action.classList.add("pressed");

    setTimeout(function(){
        action.classList.remove("pressed");
    }, 100);
    
}