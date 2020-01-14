// type pin
// check balance 
//withdraw cash 
//reciept 
// deposit
//cancel
//change pin 
// top up phone 
// emergency cash 
//transfer money 
// charge people to take out their money 
// change language


let userBalance = 25
let userPin = 1234
let accountNumber = 987654321
let userInput;


// let checkPin
// alert("Hello World")

const checkPin = () => {
    userInput = prompt("Please Enter your pin")
    console.log("Please enter your pin ")
    if (userInput == userPin) {
        console.log(userInput)
        optionScreen();
    }
    else {
        console.log("please enter correct pin ")
        checkPin();
    }
}

const optionScreen = (optionChoice) => {
    userInput = prompt(`helo what would you like to do today \n Option 1 : Check Balance \n Option 2 : Withdraw \n Option 3 : Deposit \n cancel (to cancel press z) \n changePin`)

    if (userInput == 1) {
        checkbalance()
    }
    else if (userInput == 2) {
        Withdraw()
    }
    else if (userInput == 3) {
        deposit()
    }
    else if (userInput == "z")
        alert("thanks for using the heaven with a b cash machine ")
    else if (userInput == 4){
        changePin();
    }
}

    
    
const deposit = () => {
    userInput = prompt(" how much would you like to deposit")
    if (userInput <= 250) {
        userBalance += parseInt(userInput)
        console.log(`thank you for your deposit your balance is now £${userBalance}`)
    }
    else {
        alert("Please try again")
        optionScreen();
    }
}



    
    
    
    const Withdraw = () => {
        userInput = prompt("How much would you like to withdraw")
        if (userInput <= userBalance) {
            alert(`you have succesfully withdrawn£${userInput}`)
            userBalance -= userInput
            console.log(`your balance is now £${userBalance}`)
        }
        else {
            alert("not enough money ")
            optionScreen();
        }
    }
    
    const changePin = () => {
        userInput = prompt("What would you like to change your pin to ")
        if (userInput >= 0) {
            alert("your pin has been changed")
            
        }
        else {
            alert("Please enter a valid pin")
            changePin();
        }
        
    }
    
    const checkbalance = () => {
        console.log(`your balance is £${userBalance}`); 
    }
    // checkbalance ()

    checkPin(1234)
