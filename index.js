if(window.performance.getEntriesByType("navigation")[0].type === "reload"){
    rollDice();
}

function rollDice()
{
    //Dice 1 Code
    var randomNumber1 = Math.floor(Math.random()*6) + 1;
    var player1Dice = "images/dice" + randomNumber1 + ".png"; //Dice 1 Image Source Path
    document.querySelector(".img1").setAttribute("src", player1Dice);

    //Dice 2 Code
    var randomNumber2 = Math.floor(Math.random()*6) + 1;
    var player2Dice = "images/dice" + randomNumber2 + ".png"; //Dice 2 Image Source Path
    document.querySelector(".img2").setAttribute("src", player2Dice);

    changeTitle(randomNumber1, randomNumber2);
}

function changeTitle(num1, num2)
{
    //Determining the Winner
    if(num1>num2){
        document.querySelector("h1").textContent = "Player 1 Wins...🚩";
    }
    else if(num1<num2){
        document.querySelector("h1").textContent = "Player 2 Wins...🚩";
    }
    else{
        document.querySelector("h1").textContent = "Draw";
    }
}