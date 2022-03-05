var num = Math.floor(Math.random() * 100 + 1);
var attempt = 1;

document.getElementById("submitguess").onclick = function () {
    var user = document.getElementById("guessField").value;
    if (user <= 100 && user > 0) {
        if (user == num) {
            document.getElementById("resultButton").click();
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

}

document.getElementById("guessField").addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("submitguess").click();
        document.getElementById("guessField").value = "";
    }
});

