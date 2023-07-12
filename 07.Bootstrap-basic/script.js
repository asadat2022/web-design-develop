// console.log("external");

// var, let, const

// var $test;
// var _test;
// var test;
// var first_name;
// var firstName;
// var first$name;
// var first-name;



// var first_name = "Ali";
// var last_name = "Ahmad";
// var first_name = "Hamza";

// let f_name="test";
// let f_name="second";

// if (true) {
//     let f_name="test";
// }
// console.log(f_name);

// if (true) {
//     var f_name="test";
// }
// console.log(f_name);

// var first_name = "Ali";

// const name = first_name;
// console.log(name);
// name = "sdhgjhd";
// console.log(name);



// var first_name;
// first_name = "sdjhfhjds";
// console.log(first_name);

// Operaters
// -> Arthematic Ope
//      -> add +
//      -> sub -
//      -> div /
//      -> mul *
//      -> Mod %

// -> Logical ope


// -> Conditional ope
// -> Asssignment Ope

// if (2 === 2) {
//     console.log(true);
// }

// console.log(2==="2" ? "equal":"not");



var first_name = "Ali";

// first_name = [1,2,"Ali",4,5];
first_name = new Array(1, 2, "Ali", 4, 5);

first_name[3] = 20;
first_name.push('Hamza');
// document.getElementById("test").innerText = first_name;
// console.log(first_name);
// console.log(first_name.length);
// console.log(first_name.pop());
// console.log(first_name.length);

// console.log(first_name.join("*"));


// var std = ['Ali',"Ahmad","BA-3", "000-000000-0"]
// var std = ['Ali',"Tanveer","Ahmad","BA-3", "000-000000-0"]



// Array of Objects 
var obj_std = [
    { //Object 
        name: {
            first_name: "Ali",
            mid_name: "Ahmad",
            last_name: "Tanveer",
        },
        phone: [1, 2, 3],
    },
    {
        name: {
            first_name: "Raza",
            mid_name: "Ahmad",
            last_name: "Raza",
        },
        phone: [1, 2, 3],
    }
]


// for (let index = 0; index < obj_std.length; index++) {
//     const element = obj_std[index];
//     console.log(element.name.last_name);
// }

// obj_std.forEach((element)=>{
//     console.log(element.name.last_name);
// })

const listing = (element)=>{  // This is an arrow Function Printing Data 
    console.log("ID: ",element.id);
    console.log("Username: ",element.username);
}
// 
users.forEach(listing) // Using preDefine for loop Function For Array Required Function As a Parameter
// console.log(obj_std.phone[0]);
// console.log(obj_std.name.last_name);


// var obj_std = {
//     first_name: "Madi",
//     mid_name: "",
//     last_name: "Tanveer",
// }

// console.log(obj_std.mid_name);


// function sum(x,y) { //Function With Function keyword 
//     console.log(x+y);
// }

const sum = (a, b) => { //Arrow Function For Sum 
    console.log(a + b);
};

sum(4, 5);

sum(7, 5);