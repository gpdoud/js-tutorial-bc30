"option strict"
class Student {
    name;
    favcolor;
    favnumber;

    constructor(name, favcolor, favnumber) {
        this.name = name;
        this.favcolor = favcolor;
        this.favnumber = favnumber;
    }

    log() {
        console.log(this.name, this.favcolor, this.favnumber);
    }
}

let students = [
    new Student("Fred", "green", 8),
    new Student("Wilma", "red", 1),
    new Student("Barney", "blue", 7),
    new Student("Betty", "orange", 3),
    new Student("Pebbles", "pink", 2)

];

const save = () => {
    let name = document.getElementById("name").value;
    let color = document.getElementById("color").value;
    let number = document.getElementById("number").value;

    let student = new Student(name, color, +number);
    students.push(student);
    console.log(students);
}

const clicked = () => {
    let tbody = document.getElementById("tbody");
    tbody.innerHTML = "";
    for(let student of students) {
        let row = "<tr>";
        row += `<td>${student.name}</td>`;
        row += `<td>${student.favcolor}</td>`;
        row += `<td>${student.favnumber}</td>`;
        row += "</tr>";
        tbody.innerHTML += row;
    }
}