const randomArray = ["Peter", 7, "Marianne", true, "Helle", 8];

randomArray.forEach((x) => {
    console.log(`${x} is a ${typeof x}`);
});

class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }
}
const author = "J. K. Rowling";
const books = [
    new Book("Harry Potter 1", author),
    new Book("Harry Potter 2", author),
    new Book("Harry Potter 3", author),
    new Book("Harry Potter 4", author),
    new Book("Harry Potter 5", author),
    new Book("Harry Potter 6", author),
    new Book("Harry Potter 7", author),
];

const bookList = document.querySelector("ul");
books.forEach((book) => {
    listItem = document.createElement("li");
    listItem.innerText = `${book.title} - ${book.author}`;
    bookList.appendChild(listItem);
});

const getLargestNumber = (...numbers) => {
    console.log(Math.max(...numbers));
};
getLargestNumber(1, 234, 2, 3);

const isNumberInRange = (number, start, finish) => {
    for (let i = start; i < finish; i++) {
        if (i === number) return true;
    }
    return false;
};
console.log(isNumberInRange(6, 2, 7));
