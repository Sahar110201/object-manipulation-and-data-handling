const student = {
    name: "Sahar Adeeb",
    age: 28,
    enrolled: true,
    courses: ["Web development", "Intro to Javascript", "Technical Writing", "Database", "Algoritham", "Operating System"],

    infoDisplay: function() {
        console.log(`name: ${this.name}`);
        console.log(`age: ${this.age}`);
        console.log(`enrolled: ${this.enrolled}`);
        console.log(`courses: ${this.courses}`);
    }
};

console.log(student.name);
console.log(student.age);
console.log(student.infoDisplay());