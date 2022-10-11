

// Detecting Keys

document.addEventListener("keydown", function(event){

  makeSound(event.key);

  buttonAnimation(event.key);

});




// Detecting buttons with click => Takes the inner HTML of the button (letter) and passes it to function

let buttons = document.querySelectorAll(".drum");

for(let i=0; buttons.length - 1 ; i++){

  buttons[i].addEventListener("click", function(){

    let buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

  });
};




// Functions for sound

function makeSound(key){

  switch (key) {
    case "w":
      let tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      let tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

      case "s":
        let tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
        break;

      case "d":
        let tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();
        break;

      case "j":
        let crash = new Audio("sounds/crash.mp3");
        crash.play();
        break;

      case "k":
        let snare = new Audio("sounds/snare.mp3");
        snare.play();
        break;

      case "l":
        let kick = new Audio("sounds/kick-bass.mp3");
        kick.play();
        break;

    default: console.log(key);
  };

};



// Function for animation

function buttonAnimation(keyPressed){

  let activeButton = document.querySelector("." + keyPressed)

  activeButton.classList.add("pressed");

  setTimeout(function(){
    activeButton.classList.remove("pressed");},
    100);
  }
