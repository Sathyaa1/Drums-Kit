var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var bottonInnerHTML = this.innerHTML;

    makeSound(bottonInnerHTML);
    buttonAnimation(bottonInnerHTML);
});
}

document.addEventListener("keypress",function(event){
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key){
  switch (key) {

    case "g" || "G":
      var snd = new Audio("sounds/crash.mp3");
      snd.play();
      break;
    case "a":
      var snd = new Audio("sounds/kick-bass.mp3");
      snd.play();
      break;
    case "s":
    var snd = new Audio("sounds/snare.mp3");
      snd.play();
      break;
    case "d":
    var snd = new Audio("sounds/tom-1.mp3");
      snd.play();
      break;
    case "j":
    var snd = new Audio("sounds/tom-2.mp3");
      snd.play();
      break;
    case "k":
    var snd = new Audio("sounds/tom-3.mp3");
      snd.play();
      break;
    case "l":
    var snd = new Audio("sounds/tom-4.mp3");
      snd.play();
      break;

    default: console.log(this.innerHTML);
  }
}

function buttonAnimation (currentKey){

    var activeButton = document.querySelector("."+currentKey);



  activeButton.classList.add("pressed");

  setTimeout(function(){
    activeButton.classList.remove("pressed");}, 300);

}
