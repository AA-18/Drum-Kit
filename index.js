var n = document.querySelectorAll("button").length;
for(var i=0;i<n;i++)
{
    document.querySelectorAll("button")[i].addEventListener("click",function () {

        var buttonInnerHTML = this.innerHTML;
        make_sound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML.toLowerCase());
    });
}

document.addEventListener("keypress" , function(event){
    var key = event.key;
    make_sound(key.toUpperCase());
    buttonAnimation(key);
});




function make_sound(key){
    switch(key){
        case "W":
            var audio = new Audio("./sounds/crash.mp3");
            audio.play();
            break;
        case "A":
            var audio = new Audio("./sounds/kick-bass.mp3");
            audio.play();
            break;
        case "S":
            var audio = new Audio("./sounds/snare.mp3");
            audio.play();
            break;

        case "D":
            var audio = new Audio("./sounds/tom-1.mp3");
            audio.play();
            break;

        case "J":
            var audio = new Audio("./sounds/tom-2.mp3");
            audio.play();
            break;

        case "K":
            var audio = new Audio("./sounds/tom-3.mp3");
            audio.play();
            break;

        case "L":
            var audio = new Audio("./sounds/tom-4.mp3");
            audio.play();
            break;
        
        default:
            break;
    }
}

function buttonAnimation(key)
{
    document.querySelector("."+key).classList.add("pressed");
    setTimeout(function(){
        document.querySelector("."+key).classList.remove("pressed");
    },100);
}

