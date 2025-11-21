const student = {
    name: "Sahar Adeeb",
    age: 28,
    enrolled: true,
    courses: ["Web development", "Intro to Javascript", "Technical Writing", "Database", "Algoritham", "Operating System"],

    infoDisplay: function() {
        return `Name: ${this.name}, Age: ${this.age}, Courses: ${this.courses.join(", ")}`;
    }
};

console.log(student.name);
console.log(student.age);
console.log(student.infoDisplay());