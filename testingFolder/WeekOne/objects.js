// const cafe = {
//     name: "Whitesheep",
//     seatingCapacity: 100,
//     hasSpecialOffers: true,
//     drinks: [
//     "Cappuccino",
//     "Latte",
//     "Filter coffee",
//     "Tea",
//     "Hot chocolate"
//     ]
// };
// console.log(cafe)



// const Person = {
// Name: "Aaron Beaven",
// Age:"20",
// Gender: "Male",
// Description: "Heaven With A B ",
// Hobbies: "Mauy Thai Fighter, Ex Chef, Family Guy",
// CodenationBezzie: "Will ", 
// legs : 4,
// sayHi(){
//     return`Hello my Name is ${this.Name}`}
// }


// Person["faveSongs"] = ["Never Too Much LV", "Assasination The Four Owls", "Rock With You MJ"]



// console.log(Person.sayHi())


// const Pet = {
//     Name: "Buster Beaven",
//     Breed : "Border Collier"
// }

// console.log(Person.Name)
// console.log(Pet.Name)




// let offer = "none";
// let time = 1200;
// const cafe = {
// name: "Whitesheep",
// seatingCapacity: 100,
// hasSpecialOffers: true,
// drinks: ["Cappuccino","Latte","Filter coffee","Tea","Hot chocolate"],
// breakfastOffer: "Free croissant with coffee",
// lunchOffer: "Free drink with surprisingly priced sandwich",
// noOffer: "Sorry no offer"
// };
// if (time < 1100){
// offer = cafe.breakfastOffer;
// console.log(cafe.breakfastOffer);
// } else if (time < 1500){
// offer = cafe.lunchOffer;
// console.log(cafe.lunchOffer);
// }




// const weekendAlarm = (
//     "no Alarm Needed "
// )
// const weekdayAlarn = (
//     "WAKE UP ITS TIME FOR WORK"
// )

// let alarmTime = 0700
// let Day = ("Chekbscjnese")

// const currentDay = (Day) => {



// if(Day === "Monday" && alarmTime == 0700){
//     console.log(weekdayAlarn)
// }
// else if(Day === "Tuesday" && alarmTime == 0700){
//     console.log(weekdayAlarn)
// }
// else if(Day === "Wednesday" && alarmTime == 0700){
//     console.log(weekdayAlarn)
// }
// else if(Day === "Thursday" && alarmTime == 0700){
//     console.log(weekdayAlarn)
// }
// else if(Day === "Friday" && alarmTime == 0700){
//     console.log(weekdayAlarn)
// }
// else if(Day === "Saturday" && alarmTime == 0700){
//     console.log(weekendAlarm)
// }
// else if(Day === "Sunday" && alarmTime == 0700){
//     console.log(weekendAlarm)
// }
// else{
//     console.log("Please Enter A Proper Day")
// }

// }
// currentDay("Monday");
// currentDay("Tuesday");
// currentDay("Wednesday");
// currentDay("Thursday");
// currentDay("Friday");
// currentDay("Saturday");
// currentDay("Sunday");



const Pet = {
    Name: "Buster Beaven",
    TypeofPet: "Border Collier",
    age: 5,
    Colour: "Brown",
    energy: 70,
    health: 50,
    Toilet: true,



    Eat() {
        if (this.energy <= 50) {
            return (`${this.Name} is currently Eating`)
        }
        else {
            return (`${this.Name} is currently not hungry`)
        }
    },


    Sleep() {
        if (this.health <= 50) {
            return (`${this.Name} is currently sleeping`)
        }
        else {
            return (`${this.Name} is currently not tired`)

        }
    },
        Expire() {
        if (this.health <= 1) {
            return (`${this.Name} is dead`)
        }
        else {
            return (`${this.Name} is still alive`)

        }
    }
}





console.log(Pet.Eat());
console.log(Pet.Sleep());
console.log(Pet.Expire())