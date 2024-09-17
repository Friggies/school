const api_url = "http://127.0.0.1:3000/";
window.onload = async () => {
    try {
        const response = await fetch(api_url);
        data = await response.json();
        data.forEach((problem) => {
            createElement(problem);
        });
    } catch (error) {
        console.error(error);
    }
};

document.querySelector("form").addEventListener("submit", async (e) => {
    e.preventDefault();
    const input = document.querySelector("input");
    let problem = {
        text: input.value,
        date: new Date(),
    };
    const request = await fetch(api_url, {
        method: "POST",
        body: JSON.stringify(problem),
    });
    const data = await request.json();
    problem._id = data.insertedId;
    createElement(problem);
    input.value = "";
});

const createElement = (problem) => {
    const element = document.createElement("li");
    element.innerText = problem.text;
    element.setAttribute("data-id", problem._id);
    element.title = new Date(problem.date).toLocaleString();
    element.addEventListener("click", async () => {
        const url = `${api_url}?id=${problem._id}`;
        const request = await fetch(url, {
            method: "DELETE",
        });
        if (request.ok) {
            element.remove();
        }
    });
    document.querySelector("ol").prepend(element);
};
