//send any messages to the developer's console

//defining variables

//something that stands for something else
//sets a value to something
//puts a name to a value
//storing a value inside

//a variable that contains a string
var firstName = 'Alvand'
var lastName = " Daghoghi"
//console.log(firstName)
//console.log(lastName)

//string concatenation
//console.log(firstName + lastName)

//storing integers
var num = 5

//storing float
var num2 = 5.2

//console.log(num+num2)
// subtract -
// divide /
// multiply *

// creating an array

//holds a set
//is a list

//arrays in JS can be mixed data types
var firstArray = ['bert', 'ernie', 'big bird', 'snuffie']
//console.log(firstArray)

//arrays are indexed
//console.log(firstarray[0]);

var secondArray = ['kermit', 'miss piggy', 'gonzo', 'swedish chef']

//multidimensional array
var thirdArray = [firstArray, secondArray]

console.log(thirdArray[1][2])

//set up control flow
//if and else statements

// <
// >
// <=
// >=
// ==
// ===

var num3 = 14

//if (num3 === 14){
//    
//    console.log('your number is the correct number!')
//    
//} else if { (num >10)
//    
//    console.log ('your number is too big')
//    
//} else {
//    
//    console.log('you did not choose a number')
//    
//}

//functions are operations or methods

//function sayHello(){
//    console.log('hello')
//}
//
//function addNumber(numberOne, numberTwo) {
//    return numberOne + numberTwo
//    //return exits the function
//}
//
//console.log(addNumber(40,60))

//create a function that is a virtual door
//if the user goes through the tacos door, give them a message about delicious tacos
//if the user goes through the pizza door, give them a message about yummy pizza
//if the user goes through the noodles door, give them a message about awesome noodles

//function that holds an if/else statement inside of it

//you will test your doors by calling the function

//var tacos = true
//var pizza = false
//var noodles = false
//
//function foodDoor(){
//    if (tacos === true)
//    console.log('Here is your really good tacos')
//    else if (pizza === true)
//        console.log('Here is your really good pizza')
//        else (noodles === true)
//            console.log('Here is your really good noodles')
//}

function foodDoor(door){
    if (door === 'tacos')
    console.log('Here is your really good tacos')
    else if (door === 'pizza')
        console.log('Here is your really good pizza')
        else if (door === 'noodles')
            console.log('Here is your really good noodles')
}

foodDoor('pizza')