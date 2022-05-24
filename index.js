// var numberofdrumbuttons = document.querySelectorAll(".drum").length;
// for(var i=0; i<numberofdrumbuttons; i++){

// document.querySelectorAll(".drum") [i].addEventListener("click",function() {
// // var audio = new Audio("#");
// // audio.play();
// var buttonInnerHtml=this.InnerHtml;
// makesound(buttonInnerHtml);
// buttonAnimation(buttonInnerHtml);

// });
// }
// document.addEventListener("keypress",function(event)
// {
//     makesound(event.key);
//     buttonAnimation(event.key);

// });
// function makesound(key)
// {
//     switch(key){
//         case "a";
//         var tom1=new Audio("sound/tom1.mp3");
//         tom1.play();
//         break;

//         case "s";
//         var tom1=new Audio("sound/tom6.mp3");
//         tom6.play();
//         break;

//         case "d";
//         var tom1=new Audio("sound/tom4.mp3");
//         tom4.play();
//         break;

//         case "f";
//         var tom1=new Audio("sound/tom5.mp3");
//         tom5.play();
//         break;

//         case "g";
//         var tom1=new Audio("sound/tom6.mp3");
//         tom6.play();
//         break;

//         case "h";
//         var tom1=new Audio("sound/tom7.mp3");
//         tom7.play();
//         break;
         
//         default:console.log(key);
//     }
// }

// function buttonAnimation(currentkey)
// {
//     var activebutton = document.querySelector("."+ currentkey);
//     activebutton.classList.add("pressed");
//     setTimeout(function(){
//         activebutton.classList.remove("pressed");
//     },100);
// }

var num = document.querySelectorAll(".drum").length;

for(var i=0; i<num;i++){

document.querySelectorAll(".drum")[i].addEventListener("click", function(){

    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    makeAnimation(buttonInnerHTML);

});
}
document.addEventListener("keydown", function(event){
    makeSound(event.key);
    makeAnimation(event.key);
});

function makeSound(key){
    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-9.mp3");
            tom1.play();
            break;
        case "a": 
             var tom4 = new Audio("sounds/tom-4.mp3");
             tom4.play();
             break;
        case "s":  
             var tom5 = new Audio("sounds/tom-5.mp3")
            tom5.play();
        break;
        case "d": 
             var tom6 = new Audio("sounds/tom-6.mp3");
            tom6.play();
        break;
        case "j":
            var tom7 = new Audio("sounds/tom-7.mp3")
            tom7.play();

        break;
        case "k": 
        var crash = new Audio("sounds/tom-8.mp3");
        crash.play();
        break;
        case "l": 
        var kickbass = new Audio("sounds/tom-5.mp3");
        kickbass.play();
        break;
        default: console.log(buttonInnerHTMl);
    }
}
function makeAnimation(currentKey){
     var activeButton = document.querySelector("."+currentKey);
     activeButton.classList.add("pressed");
     setTimeout(function(){
        activeButton.classList.remove("pressed");
     }, 100 );
} 