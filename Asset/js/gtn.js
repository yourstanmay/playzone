var num = Math.floor(Math.random() * 100 + 1);
var attempt = 1;
let screenValue = '';

document.getElementById("submitguess").onclick = function () {
    var user = document.getElementById("guessField").value;
    if (user <= 100 && user > 0) {
        if (user == num) {
            document.getElementById("resultButton").click();
            var firework  = new Audio('../Asset/sound/firework.mp3');
            firework.loop = true;
            firework.load();
            firework.play();
            document.getElementById("displayResult").innerHTML = "CONGRATULATIONS!!! You Guessed It Right In "
                + attempt + " Attempt ";
        }
        else if (user > num) {
            attempt++;
            document.getElementById("display").innerHTML = "HINT: Choose Lower Number!";
        }
        else {
            attempt++;
            document.getElementById("display").innerHTML = "HINT: Choose Higher Number!";
        }
    }
    else {
        document.getElementById("display").innerHTML = "Your Guess Number should be in between 1-100";
    }
    document.getElementById("guessField").value = "";
    screenValue = ''

}

document.getElementById("guessField").addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("submitguess").click();
        document.getElementById("guessField").value = "";
        screenValue = ''

    }
});

let screen = document.getElementById("guessField");
// Only select number buttons and clear button, not all buttons
buttons = document.querySelectorAll(".buttonNum, .buttonClear");
for(item of buttons){
    item.addEventListener('click' , (e)=>{
        buttonText = e.target.innerText;
        if(buttonText == '🔙' ){
            var value = screenValue;
            screenValue = value.substr(0, value.length - 1);
            screen.value = screenValue;
        }
        else{
            screenValue += buttonText;
            screen.value = screenValue;
        }
    });  
}

/** Button Sound */
var audio2 = new Audio('../Asset/sound/button-46.mp3');
var audio3  = new Audio('../Asset/sound/button-28.mp3');
var audio4 = new Audio('../Asset/sound/click.mp3');
var gtn = new Audio('../Asset/sound/gtn_start.mp3');

$(".buttonGuess").mousedown(function() {
  audio3.load();
  audio3.play();
});
  

$(".buttonNum").mousedown(function() {
    audio4.load();
    audio4.play();
  });

$(".buttonClear").mousedown(function() {
    audio2.load();
    audio2.play();
});

$(".gtns").mousedown(function() {
    gtn.load();
    gtn.play();
});

/** Disbale Right Click and shortcut keys */
document.addEventListener('contextmenu', event => event.preventDefault());
document.onkeydown = function(e) {
    if(event.keyCode == 123) {
    return false;
    }
    if(e.ctrlKey && e.keyCode == 'E'.charCodeAt(0)){
    return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)){
    return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)){
        return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)){
    return false;
    }
    if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)){
    return false;
    }
    if(e.ctrlKey && e.keyCode == 'S'.charCodeAt(0)){
    return false;
    }
    if(e.ctrlKey && e.keyCode == 'H'.charCodeAt(0)){
    return false;
    }
    if(e.ctrlKey && e.keyCode == 'A'.charCodeAt(0)){
    return false;
    }
    if(e.ctrlKey && e.keyCode == 'F'.charCodeAt(0)){
    return false;
    }
    if(e.ctrlKey && e.keyCode == 'E'.charCodeAt(0)){
    return false;
    }
    }
