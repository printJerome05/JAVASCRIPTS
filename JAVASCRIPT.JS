// comments to put comments

/* this is a multi line comment
*/



// data types and variabless
// var = variable
var name = "jerome";
//can change it like this
name = "mara";
var number = 5;

let names = "jerome";
names = "mara";

// var is for the whole program
// let use only for within the scope withing you declare it
// const is a variable should and cant be changed for example pi

///////////////////////Assigning variables//////////////////////////
var a;
var b = 2;

a = 10;

b = a

//VALUE IS 10
console.log(a);

var name1, name2;

name1 = "jerome";
name2 = "marco";

console.log(name1 + " " + name2);

// adding
var plus1 = 10;
var plus2 = 12;

sum = plus1 + plus2;

console.log(sum);

// increment and decrement shortcut
var inc = 10;
var dec = 10;

inc++;
dec--;

console.log("Increment: " + inc +" decrement: " + dec )

// shorcuts for math operations

var s1 = 10;
var s2 = 20;
var s3 = 100;

s1 = s1 + 10;
// shortcut for the above is this 
s1 += 1;
// same for the - and other math operators
s2 -= 22;
s3 *= 1;
console.log("=+: " + s1 + " =- : " + s2 + " *=: " + s3)
//can also do in string
var string1 = "jeromes ";
string1 += "Marco";
console.log("String += : " + string1);

// string qoutes
var st1 = "jerome\'s";
console.log("1 " + st1);
st1 = "jerome\"s";
console.log("2 " + st1);
st1 = "jerome\\s";
console.log("3 " + st1);
st1 = "jerome\ns";
console.log("4 " + st1);
st1 = "jerome\rs";
console.log("5 " + st1);
st1 = "jerome\ts";
console.log("6 " + st1);
st1 = "jerome\bs";
console.log("7 " + st1);
st1 = "jerome\fs";
console.log("8 " + st1);

///////////////////////////functions////////////////////////////////////////////////////////////
// if you dont put a var keyword inside a function it will become a global variable can access the keyword anywhere
// if you put var inside a function it will become private only accesible withing the function 
function test (lastname, age, gender){
    var result = "";
    result += "TEST lastname: " + lastname + " age: " + age + " gender: " + gender;

    return result;
}
//result
console.log(test("jerome",22,"male"));

//fucntion add int
function add (number1, number2){
    let sum = number1 + number2;
    return sum;
}

console.log(add(10,2))

//simplified function without return
function multi (a, b){
    console.log("Simplified function: "+  a * b)
}
multi(12,3)

// this function make gets a number that push it on the arr
console.log("-----push function-----")
function nextInLine(number){
    arrtest.push(number)
    return number;
}
var arrtest = [1,2,3,4,5,6]
console.log("before: "+arrtest)
nextInLine(10)
console.log("after: " +arrtest)

// boolean function string with if else
console.log("-----Boolean function with if else-----")
function isTall (isTall){
    if(isTall){
       return "IT IS TALL"
    }
        return "IT NOT TALL IS TALL"
}
console.log(isTall(true))

// is equal function
console.log("-----equal function with if else-----")
function isEqual(number){
    if(number == 10){
        return "it is equal"
    }
         return "it is not equal"
}
console.log(isEqual(10))

//grade average
console.log("-----average grade-----")
function grade(number){
    if(number > 100){
        return "Invalid Grade"
    }
    else if(number > 98){
        return "High Honor"
    }
    else if(number > 94){
        return "Honor"
    }
    else if(number >= 75){
        return "pass"
    }
    else if(number <= 74){
        return "failed"
    }
}
console.log("pass or fail: "+grade(81))

//fucntion swith statement
console.log("------SWITCH STATEMENT------");
function testswitch(value){
    var answer ="";
    switch(value){
        case 1:
            answer = "Lettera"
            break;
        case 2:
            answer = "Letterb"
            break;   
        default: 
            answer = "error"
            break;
    }
    return answer;
}
console.log(testswitch(3));

console.log("------multiple SWITCH STATEMENT------");
function switch2(val){
    var ans = "";
    switch(val){
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            ans = "Weekdays";
            break;
        case 6:
        case 7:
            ans = "Weekends"
            break;
        default: 
            ans = "error"
            break;
    }
    return ans;
}
console.log(switch2(5))


///////////////////////////array//////////////////////////////////////////////////////////// 
// array in javascript array it could be any data types
// like bool string int
var testArray = ["jerome",22,"Male"]
var testArraynum = [12, 14, 16]

console.log(testArray[0] + testArray[2])
console.log(testArraynum[0])

//can modify array
testArray[0] = "Marco"
console.log(testArray[0])

//print all array
console.log("Print all array "+testArray)

// nested array a collection of array
var nestedArraytest = [["jerome",22], ["Mara",22]]

// printing nested array index
// a set of array is an index also start from 0 also
console.log(nestedArraytest[1][0])
console.log(nestedArraytest[0][0])

// push array
var testpushArray = [["jerome",22], ["joy", 20]]
testpushArray.push = (["mara",22])

console.log("push: "+testpushArray)

//pop = remove the last index of array 
var popArray = ["jerome", "mara", "Joy"]
popArray.pop();

console.log("pop: "+popArray)

// shift = remove the first index of the array
var shiftArray = ["jerome", "mara", "Joy"]
shiftArray.shift();

console.log("shift: "+shiftArray);

// unshift = add element to the begging of the arry
var unshiftshiftArray = ["jerome", "mara", "Joy"]

unshiftshiftArray.unshift("secret");

console.log("unshift: "+ unshiftshiftArray);


/////////////////////////////////////Human Counter App///////////////////////////////
// counter app challenge
// the function name should be same as the onclick
// instanmtiate the id from html to javascript
let countTest = document.getElementById("countest")
let Saveel = document.getElementById("save-el") // this to concatinate the save id 
let count = 0;

function increment(){
    count++;
    countTest.textContent = count
    console.log(count);
}


function save(){
    Saveel.textContent +=  count + "-"
    console.log(count)
    countTest.textContent = 0
    count = 0;
}


// count test in index.hhtml
// this code gets the id then change the text of it / the get element id is use to contact the id and then manipulate it
document.getElementById("countest").innerText = 9;

//human years to dog years
// converting human years to dog age
let myAge = 22;
let humandogRatio = 7;

mydogAge = myAge * humandogRatio;

console.log("My dog age: "+mydogAge);

//bonus point challenge
// manipulating variable 
var bonuspoints = 50;

bonuspoints = bonuspoints + 50;

bonuspoints = bonuspoints - 75;

bonuspoints = bonuspoints + 45;

console.log("Bonuspoints challenge: "+bonuspoints);

// a function that have a console and calling it test
function testfunc() {
    console.log("42");
}
testfunc();

//sum of all the laps in a function
let lap1 = 34;
let lap2 = 33;
let lap3 = 36;

function allLap() {
    let sum = lap1 + lap2 + lap3;

    console.log(sum)
}
allLap();

// incrementing laps with functions
let lapscompleted = 0;

function addLap(){
    lapscompleted++;
}

addLap();
addLap();
addLap();

console.log(lapscompleted)

// variable that stores a message
let message = "You have tree new notifications"

console.log(message)

// two variable with greet and name then concatenate it to one variable
//string always wins if string + int = string is the result
let samplename ="Jerome"
let greet ="Hi, my name is "

let MyGreeting = greet + samplename;

console.log(MyGreeting)

// welcome -el paragraph
let welcomeEl = document.getElementById("welcome-el")

welcomeEl.innerText = greet + samplename;

// two varaibles concatenate

let firstname = "Jerome"
let lastname = "Marco"

Fullname = firstname + lastname

console.log(Fullname)

/////////////////error challenge/////////////////

let Errortest = document.getElementById("error")

function purchase(){
    Errortest.innerText = "Something went wrong, please try again"
}

///////////////////Calculator////////////////////
let numbertest1 = 8;
let numbertest2 = 2;

document.getElementById("number1").textContent = numbertest1
document.getElementById("number2").textContent = numbertest2

let sums = document.getElementById("sum-el")

function add1(){
    // += is use to not remove the text inside the html 
   let result = numbertest1 + numbertest2
   sums.textContent = "Sum: " + result
}
function minus1(){
    let result = numbertest1 - numbertest2
   sums.textContent = "Sum: " + result
}
function multiply1(){
    let result = numbertest1 * numbertest2
   sums.textContent = "Sum: " + result
}
function divide1(){
    let result = numbertest1 / numbertest2
   sums.textContent = "Sum: " + result
}

///////////////////////black jack game////////////////////////
//SAMPLE





let blackjackCard = []
let cards = 0




console.log("------black jack game ------")
if(cards == 21){
    console.log("21 - emoji with party poppers")
}
else if(cards > 21){
    console.log("above 21 - crying emoji")
}
else if(cards < 21){
    console.log("below 21 - smile emoji")
}

// example of if else enter the club with age
let ageclub = 21;

if(ageclub < 21){
    console.log("You cannot enter the club")
}else{
    console.log("Welcome")
}

//creating a object 
// oin object theres a key and the value for example key is name and chips the value is Per and 145
let blckjckPlayer = {
    name: "Per",
    chips: 145
}


//storing the message el id 
let messageEl = document.getElementById("message-el")
let cardsEl = document.getElementById("cards-el")

messageEl.innerHTML = "Do you want to play"
let fixmessage = ""
let isBlackJack = false
let isAlive = true
let blacksum = document.getElementById("balckjacksum")
let playerEl = document.getElementById("Player-el")







///blackjack game main



function randomCard(){
    let randomCardNumber = Math.floor(Math.random()*13) + 1
    if (randomCardNumber === 1){
        return 11
    }else if(randomCardNumber > 10 )
    return 10
    else{
        return randomCardNumber
    }
  
  
}

function startGame(){
    
    let firstCard = randomCard()
    let secondCard = randomCard()
    blackjackCard = [firstCard, secondCard]
    cards = firstCard + secondCard;
    playerEl.textContent = blckjckPlayer.name + ": $"+ blckjckPlayer.chips
    renderGame()
}

console.log("Random Card: "+randomCard())

function renderGame(){
    
    // this is need if user click new card it will not = Card: 10 4 10 4 7
    // cardsEl.textContent = "Cards: " = function is to reclear it if user rendergame is click
    cardsEl.textContent = "Cards: "
    
    for (let i = 0; i < blackjackCard.length; i++){
        cardsEl.textContent += blackjackCard[i] + " "
    }

    balckjacksum.innerHTML = "Sum: " + cards

    if (cards <= 20){
        fixmessage = "below 21 - crying emoji";
        
    }
    else if (cards == 21){
       
        fixmessage = "21 - You got black jack";
        isBlackJack = true;
        blckjckPlayer.chips += 5
        
    }
    else {
        fixmessage = "You are out of the game over 21";
        isAlive = false
        blckjckPlayer.chips -= 5
    }   

    messageEl.textContent = fixmessage
   
}



function newCard(){
    if (isAlive === true && isBlackJack === false){
    console.log("Creating a new card")
    thirdcard = randomCard();

    cards += thirdcard
    blackjackCard.push(thirdcard)
    renderGame();
    }
    
}

//arrays

let samplearray = ["jerome", "marco"]

console.log(samplearray[0])

// count example 

for(let count = 10; count < 21; count += 1){
    console.log(count)
   }

for(let count = 10; count < 110; count += 10 ){
    console.log(count)
}

// looping messages for loop
let samplearraymessage = ["Pogi ako", "panget ako", "char di pala"]

let CountryExample =["China", "USA", "India", "Indonesia", "Pakistan"]

// for printing array in for loop it count or i should start at 0
for ( i = 0; i < samplearraymessage.length; i += 1){
    console.log( samplearraymessage[i] )
}

console.log("------Looping array------")
for(i = 0; i < CountryExample.length; i++) {
    console.log(CountryExample[i])
}

// using push and pop , shift and unshift to make this array same as the countryexample array adding china and pakistan
let CountryExample1 =["Tuvalu", "USA", "India", "Indonesia", "Monaco"]

//SHIFT AND UNSHIFT IS FOR THE 0 INDEX
CountryExample1.shift()
CountryExample1.unshift("China")
// POP AND PUSH IS FOR THE LAST INDEX OF THE ARRAY
CountryExample1.pop()
CountryExample1.push("USA")

console.log("------push and pop Looping array------")
for(i = 0; i < CountryExample1.length; i++) {
    console.log(CountryExample1[i])
}

// total racetime value
// with return value
let playertime1 = 102
let playertime2 = 107

function totalPlayersTime() {
   return playertime1 + playertime2
   
}

let totalTime = totalPlayersTime()
console.log(totalTime)

// random number generator best use for game numbers like cards and games, like cyroptocurrency generating random numbers
// Math.random() = numbers goes from 0.000 to 0.999
let randomNumberCard = Math.random();
// the 6 in the end below is = numbers goes to 0.000 to 5.999 it means 6 is the cap
let randomNumberCard1 = Math.random() * 6;

console.log("Random number generic: " + randomNumberCard)
console.log("mathround to 6: " + randomNumberCard1)

//math floor erases the decimal example below first is we floor the randomNumberCard1 variable
// for example randomNumberCard1 = 5.99999 it will be equal to just 5 
let floorCardNumber = Math.floor(randomNumberCard1)
console.log(floorCardNumber)

// best example for math floor and math random together in one line of code 
// the plus one in the end of math floor means it goes from 1 to 12 it will never return a value of 0
let testNumber = Math.floor(Math.random() * 12) + 1
console.log("Mathfloorr + mathrandom 1 line: "+testNumber)

// random in array string using function
// random rock pape scissors game using random number and array
let hands = ["Rock", "Paper", "Sciccors"]

function randomHands(){
  let RandomhandsGen = Math.floor(Math.random() * 3)
  return hands[RandomhandsGen]
}

console.log("random hands: " + randomHands())



// function rolldice
function rolldice() {
    let randomnumber =  Math.floor(Math.random() * 6) + 1
    return randomnumber
}

console.log(rolldice())


// if statement with boolean for aunthentication porpuses and for not generating cards over 3
// solution to stop generating cards over 3
// && = both so the statement should be both correct 
let hasSolveChallenge = false
let hasHintsLeft = false

if (hasSolveChallenge == false && hasHintsLeft == false){
    Showsolution()
}

function Showsolution(){
    console.log("showing the solution....")
}


// object with data types and function
let exObject =  {
    name: "Marco",
    age: 22,
    isStudying: false,
    Hobby: ["Basketball", "Bicycle"],
    sayHello: function() {
        console.log("Object method: hello " + exObject.name)
    }
}

console.log("Object name: "+exObject.name)
console.log("Object age: "+exObject.age)
console.log("Object bool: "+exObject.isStudying)
console.log("Object array: "+exObject.Hobby)
exObject.sayHello()

// object method example 
let personobjectEx = {
    name: "Jerome",
    age: 22,
    country: "Philippines"
}

function logData() {
    let display = personobjectEx.name +" is "+personobjectEx.age+" years old and lives in "+personobjectEx.country
    return display
}

console.log(logData())

// displaying and arranging data to shelfs
let fruits= ["Apple ", "Orange ", "Apple ", "Orange ", "Apple ", "Orange "]

let apple = document.getElementById("Apple")
let orange = document.getElementById("Orange")

function getApple(){
    apple.innerHTML = fruits[0] + fruits[2] + fruits[4]
}

getApple()

for( i = 0; i < fruits.length; i += 1){
    orange.innerHTML = fruits[i] + fruits[i] + fruits[i]
}

////////////////////////////Chrome Extension/////////////////////////////////////
let myLeads = ["wwww.test1","wwww.test2","wwww.test3"]
const inputEL = document.getElementById("input-el")




let test1 = document.getElementById("test1")


function saveInput() {
    console.log("Button Clicked!")
}

//button click from event listener
// first get id and instantiate like this
const inputBtn = document.getElementById("input_btn")

// for simpler code for onlick addvent listener just the id of the button or element no onclick function
//  (the click in this is the event and there are many more event like mouse input)
// after the click the function or any 

inputBtn.addEventListener("click", function(){
    // to push input use = .value
    myLeads.push(inputEL.value)
    console.log("Button clicked from event listener")
    console.log(myLeads)

} )

// click the box exercise then displaying output on log

let clickBox = document.getElementById("Box")

clickBox.addEventListener("click", function() {
   
    console.log("I want to open the box!!!")
})

console.log(myLeads)



// for loop test in myleads

for(i = 0; i < myLeads.length; i++){
    console.log(myLeads[i])
}


