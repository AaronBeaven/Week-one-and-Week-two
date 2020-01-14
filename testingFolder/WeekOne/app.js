// for( i =0 ; i < 10 ; i++ ){
//     console.log(i)
// }
// console.log("Hello")
// console.log("Hi there ")
//  console.log("Howdy")

//  console.log("All around the world".;
//  console.log("Hello".toUpperCase());

//  console.log(Math.floor(Math.random()*10)); 


// var sentence = " All around the world.";

// var index = 8;

// console.log(" the character at index " + index + "  is " + sentence.charAt(index));


// let numberone = 10 
// let numbertwo = 3
// // numberone += numbertwo
// // numberone -= numbertwo
// // numberone *= numbertwo
// // numberone /= numbertwo
// // numberone -- 
// // numberone ++ 

// console.log (numberone) 

// let Age = "19"

// let Name = "Aaron"
// console.log(" Hi my name is " + Name + " How are you? " )
// console.log(`Hello, ${Name}. How are you? Oh you are ${Age} Years old `);





// let whether = "rain"
// if (whether == "rain"){
//     console.log("take the bus")
// } else {
//     console.log("i am Walking.")
// }


// let age = "44"

// if (age === "44"){
//     console.log("hello")
// }
// else {
//     console.log ("goodbye")
// }


// if (1 !== "1") {
//     console.log("1 is not equal to 1 ");
// }
// else {
//     console.log("1 is equal to 1 ");
// }


// let country = "uk"
// let age = 18

// if (age > 17 && country == "uk"){
//     console.log("yes i can serve you")
// }
// else if (age > 17 && country != "uk")
// console.log("you are not in the uk")
// else {
//     console.log("you are not of age ")
// }






// let Day = "saturday"

// if (Day == "saturday" || Day == "sunday")
//     console.log("woohoo")

// if (true || false) {
//     console.log(true)
// }
// else {
//     console.log(false)
// }

// let topping = "mushroom"

// switch (topping) {
//     case "pepperoni":
//         console.log("this is my fave")
//         break
//     case "sausage":
//         console.log("this can go on my pizza")
//         break
//     case "mushroom":
// console.log("Go away")
// }


// let password =  "passwod"

// if (password.length<8){
//     console.log("password is too short ");
// }
// else { (password.length>=8)
// console.log("password is okay")
// }


// let totalnum = 15

// if(totalnum%3==0 && totalnum%5==0){
//     console.log("Fizz")
// }
// else if(totalnum%3==0 && totalnum%5!=0){
//     console.log("Buzz")
// }
// else if(totalnum%3!=0 && totalnum%5==0){
//     console.log("Fizz Buzz")
// }


// let num  = 100
// let stringnum = num.toString()
// console.log(stringnum)
// let reversenumber = stringnum.split(/(?:)/u).reverse().join('')
// console.log(reversenumber)

// if (stringnum === reversenumber){
//     console.log("this is a pallindrome")
// }
// else{
// console.log("This is not a pallidrome")
// }



// let placeOfWork = "Ashton"
// let townOfHome = ""
// let time = 5600
// if(time > 0000 && time <= 0800) {
//     console.log("I'm at Home")
// }else if (time >= 0800 && time <= 0900){
//     console.log("I'm commuting")
// }else if (time >= 0900 && time <= 1700){
//     console.log("I am at work")
// }else if (time >= 1700 && time <= 1800){
//     console.log("I am commuting")
// }else if (time > 1800 && time < 2400){
//     console.log("I am at home")
// }else {
//     console.log("Please write your time in the format 0700 meaning 7am, 1700 meaning 5pm")
// }


// let age = 19

// if(age < 18){
// console.log("your ticket will costy £8")
// } else if (age >= 18 && age <= 60){
// console.log("your ticket will cost £10.95")
// }
// else {
//     console.log("your ticket will cost £7.50")
// }


// const cashWithdrawal = (amount, accnum) => {

//     console.log(`Withdrawing ${amount} from account ${accnum}`);
//     }
    
//     cashWithdrawal(300, 50449921);
//     cashWithdrawal(30, 50449921);
//     cashWithdrawal(200, 50447921);



// const Order = (size, drink) => {
//     console.log(`order recieved: ${size} ${drink}`);
// }
// Order ("grand", "Cappuchino");




// const addUp = (num1, num2) => {
//     return num1 + num2;
//     }
    
//     addUp(7,3);
//     console.log(addUp(2,5));



const multiplyByNineFifths = (celsius) => {
    return celsius * (9/5);
    };
    
    const getFahrenheit = (celsius) => {
    return multiplyByNineFifths(celsius) + 32;
    };
    
    console.log("The temperature is " + getFahrenheit(3) + "°F");
    console.log("The temperature is " + getFahrenheit(6) + "°F");
    console.log("The temperature is " + multiplyByNineFifths(6) + "°F");
