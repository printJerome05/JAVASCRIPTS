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


