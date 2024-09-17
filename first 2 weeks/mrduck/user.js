const signUpForm = document.querySelector("#signUp");
const prohibitedWords = ["badword1", "badword2", "offensiveword"];
signUpForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(signUpForm);
    const formValues = Object.fromEntries(formData.entries());

    const containsProhibitedWords = prohibitedWords.some((word) =>
        formValues.username.toLowerCase().includes(word)
    );

    if (containsProhibitedWords) {
        alert("Username contains inapropriate words");
    } else {
        signUpForm.reset();
        alert(`${formValues.username} created!`);
    }
});
