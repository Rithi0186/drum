var number = document.querySelectorAll(".drum").length;

for (var i = 0; i < number; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
     var button = this.innerHTML;
     makesound(button);
     buttonAnimationn(button);

  });
}
document.addEventListener("keypress",function(event){
  makesound(event.key);
  buttonAnimationn(event.key);
});
function makesound(key){
  switch (key) {
    case "w":
       var tom1 = new Audio("sounds/tom-1.mp3");
       tom1.play();
       break;
    case "a":
       var tom2 = new Audio("sounds/tom-2.mp3");
     tom2.play();
       break;
     case "s":
       var tom3 = new Audio("sounds/tom-3.mp3");
       tom3.play();
       break;
     case "d":
       var tom4 = new Audio("sounds/tom-4.mp3");
     tom4.play();

         break;
     case "j":
        var snare= new Audio("sounds/snare.mp3");
        snare.play();

       break;
   case "k":
       var kick = new Audio("sounds/kick-bass.mp3");
     kick.play();

     break;
   case "l":
   var audio = new Audio("sounds/crash.mp3");
   audio.play();

     break;
    default: console.log(button);

  }
}
function buttonAnimationn(currentKey){
  var activeButton=document.querySelector("."+currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed");},300);

}
