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

//part 3 destructuring 
const { name, courses } = student;
console.log("Name:", name);
console.log("Courses:", courses);

const scores = [85, 92, 78, 90];

const [firstScore, secondScore] = scores;
console.log("First Score:", firstScore);
console.log("Second Score:", secondScore);

//part 4 spread operator
const clonedStudent = { ...student };

clonedStudent.graduationYear = 2027;
console.log("New Cloned Property", clonedStudent);


const newCourses = ["Object Orianted Language", "WRIT 220"];
const allCourses = [...student.courses, ...newCourses];
console.log("Combined Courses", allCourses);