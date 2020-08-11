// // // //  // var a=100;
// // // //             // let b=750;
// // // //             // let sum=a+b;

// // // //             // let first = "abdulkudus";
// // // //             // let last = "umar";

// // // //             // console.log(first+last);
// // // //             // console.log(sum);

// // // //             // data types 
// // // //             // numbers  
// // // //             // string 
// // // //             // Boolean

// // // //             // console.log("true or false:", "0"===0);
// // // //             // let age = 15;
// // // //             // alert("hello,i am" + age + " years old");
    
            
// // // //             //  let res = prompt("what is your name");
// // // //             //  let ag = prompt("what is your age");
// // // //             //  second variable = second prompt('what is your age')
// // // //             //  alert("hello," + res +"you are" + yr + "years old");

// // // //             // objects
// // // //             let car = {
// // // //                 name: "range rover",
// // // //                 model: "sports",
// // // //                 year: 2020,
// // // //                 used: true,

// // // //                 start() {
// // // //                     return "vrummmm!!!";
// }
// };

// alert(car.model);
// let person = {
// name: "umar",
// age: "24",
// height: "1.7",

// laugh() {
// return "hahahahhahahha"
// }
// };
// person.height = 7.5;
// alert(person["height"])

// let laptop ={
// colour: "red",
// brand: "dell",
// camera: "yes",
// bit: "64",

// excitement() {
// return "waaoooowww"
// }

// };
// alert(laptop.colour)
             
// function detailsinfo(){
// let res = prompt("what is your name");
// let yr = prompt("what is your age");
// alert("hello," + res +"you are" + yr + "years old");
// }
   
//  console.log("hello world");
//  detailsinfo();

//  let score = [55, 84, 65, 85, 72];
//  alert(score[4])

//  let myself = ["umar",20, 6.5, "male"];
//  alert(myself[3])

// let people = [
//     {name: "Rashid", age: 54},
//     {name: "hatim", age: 15},
//     {name: "rafiq", age: 21},
// ];
//  alert(people[2].name);

// let endofterm = {
//     scores: [52, 54, 85, 96],
//     subjects: ["maths", "english", "science"],
// };
// alert(endofterm.subjects[1])

// let age = 15;
// if (age > 15){
//     alert("above 15")
// } else {
//     alert ("not above 15")
// };

// let date = new Date();
// alert(date.getUTCMonth());

// let grade = [57, 68, 55, 78, 40, 89];
// let sum = 0;

// alert("sum before loop:" + sum);
// for( index in grade ) {
// sum = sum + grade[index];
// }
// alert("sum after loop:" + sum);

let score = 0;
let num = 3;

while( true ) {
if (num % 3 === 0) {
    let a = prompt("please input a multiple");
    score += num;
    num = parseInt(a);
} else{
    alert("game over, your score:" + score);
    break;
}
}

