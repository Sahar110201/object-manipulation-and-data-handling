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

// part 2 converting to JSON String 
const jsonString = JSON.stringify(student);
console.log("JSON String:", jsonString);

const studentNew = JSON.parse(jsonString);
console.log("Object:", studentNew);

console.log("original object:", student);
console.log("compare:", student === studentNew);

