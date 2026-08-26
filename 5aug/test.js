//THIS FUNCTION
// function greet(){
//     console.log(this.name);
//     this.name="saif";
    
// }
// const user = {
//     name:"Vikas",
//     age:23
// }
// const sourav = {
//     name:"saurav",
//     age:23
// }
// greet.call(user)
// console.log(sourav);
// greet.call(sourav)
// console.log(user);

//CALL 
// function greet(village,city,year){
//     console.log(this);
//     // console.log(village);
//     year++;
//     console.log(year);
//     this.age =100;
//     this.payment=true;
// }
// const sourav = {
//     name:"saurav",
//     age:23,
//     payment:false,
// }
// greet.call(sourav,"dasna","ghdhdbd",2026);
// console.log(sourav.payment);

//Q1 (PRACTICE)
// let arnav={
//     name:"arnav",
//     age:23,
//     dist:"vaishali",
//     payment:false
// };

// let ekaansh={
//     naem:"ekaansh bansal",
//     age:23,
//     credit_card:function(){
//         console.log(this);
//         this.payment=true;
//         console.log("arnav payment completed ...");
        
//     },
//     display:()=>{
//         console.log(this);
        
//     }
// };

// ekaansh.credit_card();
// ekaansh.display();
// ekaansh.credit_card.call(arnav);
// console.log(arnav.payment);
// ekaansh.display.call(arnav)


//BIND FUNCTION
// function greet(city, state, country) {
//     console.log(this);
//     // console.log(this.name, city, state, country);
// }

// const user = {
//     name: "vikas",
//     age: 23,
//     college: "Mirai"
// };

// let bindgreet = greet.bind(user, "Ghaziabad", "UP", "India");
// console.log(bindgreet);
// bindgreet();
// greet();


// function greet(city, state, country) {
//     console.log(this);
//     // console.log(this.name, city, state, country);
//     console.log("hi");
//     console.log(city);
// }
// greet("Ghaziabad", "UP", "India");