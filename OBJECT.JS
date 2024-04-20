const person = {
    name: "John",
    age: 20
};

console.log(person.name);
console.log(person["name"]);




const cat = {
    name: "Luna",
    color: "White"

};


console.log(cat.color);
console.log(cat["color"]);




const abc = {
    name: "Bobby",
    hobby: "Dancing",
};

// modify property
abc.hobby="Singing";

console.log(abc);





const student = {
    name: "John",
    age: 20,
};

// add properties
student.rollNo = 14;
student.faculty = "Science";



console.log(student);




const employee = {
    name: "Tony",
    position: "Officer",
    salary: 30000,
};


// delete object property
delete employee.salary;


console.log(employee);




const obj = {
    name: "Bob",
    age: 30,

    // use function as value
    greet: function () {
        console.log("Bob says Hi!");
    }
};


obj.greet();