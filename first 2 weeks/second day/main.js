const btn = document.querySelector("button");
const div = document.querySelector("div");

btn.addEventListener("mouseover", () => {
    div.removeAttribute("hidden");
    div.setAttribute("aria-hidden", "false");
});

btn.addEventListener("mouseout", () => {
    div.setAttribute("hidden", "true");
    div.setAttribute("aria-hidden", "true");
});

const form = document.querySelector("form");
const list = document.querySelector("ul");
const input = document.querySelector("input");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const todo = document.createElement("li");
    todo.innerText = input.value;
    input.value = null;
    todo.addEventListener("click", () => {
        todo.remove();
    });
    list.appendChild(todo);
});
