function numberGenerationGame(remainingScore) {
    
    const num1 = Math.floor(Math.random() * 9) + 1; 
    const num2 = Math.floor(Math.random() * 9) + 1;    
    const num3 = Math.floor(Math.random() * 9) + 1;

    let gameComment;

    document.getElementById('randomNumbers').innerText = `Random numbers are: ${num1}, ${num2}, ${num3}`;

    if (num1 === num2 && num2 === num3) {
        remainingScore += 1000;
        gameComment = "You were lucky this time, you got 1000 INR as all the numbers are the same";
    } else if ((num1 % 2 === 0 && num2 % 2 === 0 && num3 % 2 === 0) || (num1 % 2 !== 0 && num2 % 2 !== 0 && num3 % 2 !== 0)) {
        remainingScore += 300;
        gameComment = `You were lucky this time, you got 300 INR as all the numbers are ${num1 % 2 === 0 ? "even" : "odd"}`;
    } else if (Math.abs(num1 - num2) === 1 && Math.abs(num2 - num3) === 1) {
        remainingScore += 800;
        gameComment = "You were lucky this time, you got 800 INR as all the numbers have a difference of 1";
    } else {
        gameComment = "You were not lucky this time";
    }

    // Subtract 100 from the remaining score for each game round
    remainingScore -= 100;

    // Check if the game is over
    if (remainingScore <= 0) {
        gameComment = "Game Over";
    }

    // Update the UI with the updated score and game comment
    document.getElementById('remainingScore').innerText = `Remaining Score: ${remainingScore}`;
    document.getElementById('gameComment').innerText = gameComment;
}

function playGame() {
    let currentScore = 500;
    numberGenerationGame(currentScore);
}
