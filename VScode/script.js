const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

let guess;
let running = true;

while (running) {
    guess = window.prompt(`Guess a number between ${minNum} and ${maxNum}`);
    guess = Number(guess);
    
    if (isNaN(guess) || guess < minNum || guess > maxNum) {
        window.alert("Please enter a valid number");
    } else {
        if (guess < answer) {
            window.alert("TOO LOW");
        } else if (guess > answer) {
            window.alert("TOO HIGH");
        } else {
            window.alert(`YOU GUESSED CORRECTLY! THE NUMBER WAS ${answer}`);
            running = false;
        }
    }
}