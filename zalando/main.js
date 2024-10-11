// Array of product objects
const products = [
    {
        title: "Product 1",
        description: "This is a great product.",
        image: "https://placehold.co/600x400",
    },
    {
        title: "Product 2",
        description: "This product is awesome.",
        image: "https://placehold.co/600x400",
    },
    {
        title: "Product 3",
        description: "You'll love this product.",
        image: "https://placehold.co/600x400",
    },
];

function displayProducts(productArray) {
    const template = document.querySelector("template");
    const ul = document.querySelector("ul");

    productArray.forEach((product) => {
        const clone = template.content.cloneNode(true);
        const img = clone.querySelector("img");
        const h2 = clone.querySelector("h2");
        const p = clone.querySelector("p");

        img.src = product.image;
        img.alt = product.title;
        h2.textContent = product.title;
        p.textContent = product.description;

        ul.appendChild(clone);
    });
}

displayProducts(products);
