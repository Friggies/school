let problems = localStorage.getItem("problems")
    ? JSON.parse(localStorage.getItem("problems"))
    : [];

document.querySelector("#newProblem") &&
    document.querySelector("#newProblem").addEventListener("submit", (e) => {
        e.preventDefault();
        const input = document.querySelector("input");
        const text = input.value;
        const date = new Date();
        createElement(text, date);
        addToLocalStorage(text, date);
        input.value = "";
    });

const createElement = (text, date) => {
    const element = document.createElement("li");
    element.innerText = text;
    element.title = date.toLocaleString();
    element.addEventListener("click", function () {
        this.remove();
        removeFromLocalStorage(text, date);
    });
    document.querySelector("ol")?.prepend(element);
};
const addToLocalStorage = (text, date) => {
    const problem = {
        text: text,
        date: date,
    };
    problems.push(problem);
    localStorage.setItem("problems", JSON.stringify(problems));
};
const removeFromLocalStorage = (text, date) => {
    problems = problems.filter(
        (problem) => problem.text !== text || problem.date !== date
    );
    localStorage.setItem("problems", JSON.stringify(problems));
};

problems.forEach((problem) => {
    createElement(problem.text, problem.date);
});

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
