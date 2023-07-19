var a = 10; //vriable declaration 
console.log(a); // output in console

let firstName = "Fahad Sharif";
console.log(firstName);

// object
let person = {
    name: "Fahad Sharif",
    age: "30",
    class: "WebDevelopment"
};
console.log(person);

//Dot Notation
person.name = "Malik Fahad Sharif";
console.log(person);
//Bracket Notation
person["name"] = "Fahhaad Sharif";

console.log(person);

//Arrays
let selctedColors = ["Red", "Green", "Blue"];
console.log(selctedColors);

selctedColors[3] = "RGB";
console.log(selctedColors);
console.log(typeof selctedColors);

// Function

// 36 number line hum ne great name ka aik function bnaya he 
function great() {
    // Line number 38 hum ne function jo bnaaya he us k operation likhe he
    console.log(" Hello World");
}
great(); // calling the function
console.log(typeof great);

function disp(city) {
    console.log("Malik Fahad your city is " + city);

}
disp("Multan"); // calling a function

// making a new function with the name fullname thay pass 2 perameters
function fullName(firstName, lastName) {
    console.log("Hello it is a function of fullName " + firstName + " " + lastName)
}
// passing two arguments in the function fullName  and call the function 
fullName("Fahad ", "Sharif");

function squ(number) {
    console.log(number * number);
}
squ(3);

//59 to 62 code in another way 
function square(number) {
    return number * number;
}
console.log(square(2));//this code is like above code

// Array
first_name = "ali";
console.log(first_name);

first_name = ["Malik", "Fahad", "Sharif", "14", "C"];
console.log(first_name);
first_name.push("Corvit");
console.log(first_name);

console.log(first_name.length);
console.log(first_name.pop());
console.log(first_name.join("*"));

// array bna rhe he object k sath 
let obj_std = [
    {
        name: {
            first_name: "fahad",
            mid_name: "sharif",
            last_name: "Malik",

        },
        contact: {
            phone: "03052864151",
            email: "fahadsharif@gmail.com"
        },
    },
    {
        name: {
            first_name: "Ali",
            mid_name: "Ahmad",
            last_name: "Tanveer",

        },
        contact: {
            phone: "03154864151",
            email: "fahadsharif0022@gmail.com"
        },
    },
    {
        name: {
            first_name: "muheeb",
            mid_name: "ul",
            last_name: "Hasan",

        },
        contact: {
            phone: "03001234567",
            email: "fahadsharif0033@gmail.com"
        }
    }
]

for (let index = 0; index < obj_std.length; index++) {
    var element = obj_std[index]; //ye kease working ker rha he ?
    console.log(element.name.first_name, element.contact.phone);
}

for (let index = 0; index < users.length; index++) {
    var element = users[index];
    console.log(element.id, element.name, element.phone);
}

// console.log(element.name.first_name, element.contact.phone);

// function forEachTest(obj,funct) {
//     for (let index = 0; index < obj.length; index++) {
//         var element = obj[index]; //ye kease working ker rha he ?
//         funct(element)
//     }
// }

// const forEachTest = (obj,funct) => {
//     for (let index = 0; index < obj.length; index++) {
//         var element = obj[index]; //ye kease working ker rha he ?
//         funct(element)
//     }
// }

// const forEachTest = function (obj,funct) {
//     for (let index = 0; index < obj.length; index++) {
//         var element = obj[index]; //ye kease working ker rha he ?
//         funct(element)
//     }
// }

let para = document.getElementsByTagName('p');
Array.from(para).forEach(element => {
    element.innerText = "Element Selector";
});
// console.log(para[2].innerText);

let classPara = document.getElementsByClassName('par');
Array.from(classPara).forEach(element => {
    element.innerText = "Class Selector";
});

let idPara = document.getElementById('paraId');
idPara.innerText = "ID Selector";

// forEachTest(obj_std,(e)=>{
//     console.log(e.name.first_name, e.contact.phone);
// })

let data = '<tr>' +
    '<th>Name</th>' +
    '<th>UserName</th>' +
    '<th>Email</th>' +
    '</tr>';
users.forEach((e) => {
    data = data + '<tr>' +
        '<td>' + e.name + '</td>' +
        '<td>' + e.username + '</td>' +
        '<td>' + e.email + '</td>' +
        '</tr>';
})
console.log(data);
// user_list

let table = document.getElementById('user_list');
table.innerHTML = data;




