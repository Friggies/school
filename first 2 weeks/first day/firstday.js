const fullName = (firstName, lastName) => {
    return `${firstName} ${lastName}`;
};
console.log(fullName("Lorem", "Ipsum"));

const calcualteAreaOfRectangle = (sideA, sideB) => {
    return sideA * sideB;
};
console.log(calcualteAreaOfRectangle(10, 5));

//speed = km/h, time = h
const howFairHaveYouTravelled = (speed, time) => {
    const distance = speed * time;
    return `You have travelled ${distance} km`;
};
console.log(howFairHaveYouTravelled(10, 5));

const calculator = {
    name: "Lorem Ipsum",
    fullName: fullName,
    calcualteAreaOfRectangle: calcualteAreaOfRectangle,
    howFairHaveYouTravelled: howFairHaveYouTravelled,
};

console.log(calculator.fullName("1,2", "Test"));
console.log(calculator.calcualteAreaOfRectangle(1, 2));

class cat {
    constructor(name, color, breed) {
        this.name = name;
        this.color = color;
        this.breed = breed;
    }
    getData() {
        return `${this.name} ${this.color} ${this.breed}`;
    }
    changeName(newName) {
        this.name = newName;
    }
}
const firstCat = new cat("Meow", "red", "yes");
console.log(firstCat);
firstCat.changeName("Miw");
console.log(firstCat);

class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.isRunning = false;
    }
    getCarInfo() {
        return `${this.make} ${this.model} ${this.year}`;
    }
    start() {
        this.isRunning = true;
        return "Wroom wroom...";
    }
    stop() {
        this.isRunning = false;
        return "No more wroom";
    }
}

const firstCar = new Car("Make1", "Model1", "Year1");
const secondCar = new Car("Make2", "Model2", "Year2");
console.log(firstCar.getCarInfo());
console.log(secondCar.getCarInfo());
console.log(firstCar.start());
console.log(firstCar.stop());

const fiveNamesInAnArray = [
    "First Name",
    "Second Name",
    "Third Name",
    "Fourth Name",
    "Fifth Name",
];
console.log(fiveNamesInAnArray[0]);
console.log(fiveNamesInAnArray.indexOf("Fourth Name"));
console.log(fiveNamesInAnArray.indexOf("No Name"));
console.log(fiveNamesInAnArray.push("Sixth Name"));
console.log(fiveNamesInAnArray.slice(0, 3));

const obj1 = {
    firstName: "obj1 1",
    lastName: "obj1 2",
    email: "obj1@gmail.com",
};
const obj2 = {
    firstName: "obj2 1",
    lastName: "obj2 2",
    email: "obj2@gmail.com",
};
console.log([obj1, obj2]);
console.log(obj1.email);

class Student {
    constructor(name, id) {
        this.name = name;
        this.id = id;
        this.grades = [];
    }
    addGrade(newGrade) {
        this.grades.push(newGrade);
    }
    updateStudentName(newName) {
        this.name = newName;
    }
}

const newStudent = new Student("Lorem Ipsum", 1);
newStudent.addGrade(1);
newStudent.addGrade(2);
newStudent.updateStudentName("Mr. Lorem");
console.log(newStudent);
