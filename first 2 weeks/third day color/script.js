const numberList = document.querySelector("ol");

for (let i = 1; i < 21; i++) {
    const listElement = document.createElement("li");
    const buttonElement = document.createElement("button");
    buttonElement.addEventListener("click", function () {
        this.classList.add("highlight");
    });
    buttonElement.innerText = i;
    listElement.appendChild(buttonElement);
    numberList.appendChild(listElement);
}
