const ANSWER = Math.floor(Math.random() * 100) + 1;
const NOTIFICATION = document.querySelector("p");
let GUESSES = 0;

document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    const currentGuess = document.querySelector("input").value;
    document.querySelector("input").value = null;
    GUESSES++;
    if (currentGuess > ANSWER) {
        NOTIFICATION.innerText = "Lower";
    } else if (currentGuess < ANSWER) {
        NOTIFICATION.innerText = "Higher";
    } else {
        NOTIFICATION.innerText = `Correct (tries: ${GUESSES})`;
    }
});
