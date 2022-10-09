//************************************************************************************* *//
//
//
// Exercise 2
console.log("PROBLEM : 2");
let personName1 = "Ahsan";
console.log(
  "Hello " + personName1 + ", would you like to learn some web 3.0 today?"
);
console.log("");
console.log("PROBLEM : 3");
console.log("");

//************************************************************************************* *//
//
//
// Exercise 3
var personName2 = "Ahsan shah";
console.log("In lowercase: " + personName2.toLowerCase());
console.log("In uppercase: " + personName2.toUpperCase());
var words = personName2.toLowerCase().split(" ");
for (var i = 0; i < words.length; i++) {
  words[i] = words[i][0].toUpperCase() + words[i].slice(1);
}
console.log("In titlecase: " + words.join(" "));

console.log("");
console.log("PROBLEM : 4");
console.log("");

//************************************************************************************* *//
//
//
// Exercise 4
console.log(`Nikola Tesla once said, "Of all things, I liked books best."`);

console.log("");
console.log("PROBLEM : 5");
console.log("");

//************************************************************************************* *//
//
//
// Exercise 5
var famous_person = "Nikola Tesla";
var message = `"Of all things, I liked books best."`;
console.log(famous_person + " once said, " + message);

console.log("");
console.log("PROBLEM : 6");
console.log("");

//************************************************************************************* *//
//
//
// Exercise 6
let personName3 = "\t\t\t\tAhsan Shah\t\n";
// With whitespace
console.log("With whitespace: " + personName3);
// After striping the whitespace
console.log("Without whitespace: " + personName3.trim());

console.log("");
console.log("PROBLEM : 7");
console.log("");

//************************************************************************************* *//
//
//
// Exercise 7
function add() {
  let result = 4 + 4;
  console.log("Sum: " + result);
}

function subtract() {
  let result = 12 - 4;
  console.log("difference: " + result);
}

function multiply() {
  let result = 2 * 4;
  console.log("Product: " + result);
}

function divide() {
  let result = 16 / 2;
  console.log("Quotient: " + result);
}
add();
subtract();
multiply();
divide();

console.log("");
console.log("PROBLEM : 8");
console.log("");

//************************************************************************************* *//
//
//
// Exercise 8
console.log(2 + 6);
console.log(10 - 2);
console.log(2 * 4);
console.log(64 / 8);

console.log("");
console.log("PROBLEM : 9");
console.log("");

//************************************************************************************* *//
//
//
// Exercise 9
var favNum = 24;
var message = "My favourite number is";
console.log(message + " " + favNum);

console.log("");
console.log("PROBLEM : 10");
console.log("");

//************************************************************************************* *//
//
//
// Exercise 10
// Commenting 1st Program
// This is an add function that performs basic addition
function add() {
  let result = 4 + 4;
  console.log("Sum: " + result);
}
// This is a subtract function that performs basic subtraction
function subtract() {
  let result = 12 - 4;
  console.log("difference: " + result);
}
// This is a multiply function that performs basic multiplication
function multiply() {
  let result = 2 * 4;
  console.log("Product: " + result);
}
// This is a divide function that performs basic division
function divide() {
  let result = 16 / 2;
  console.log("Quotient: " + result);
}
// Calling all the functions here
add();
subtract();
multiply();
divide();
// This program bascically performs the addition, subtraction, multiplication and division operation
///////////////////////////////////////////
// Commenting 2nd Program
// Storing the name in a variable which includes whitespaces
let personName4 = "\t\t\t\tAhsan Shah\t\n";
// With whitespace
// Simply consoling the name
console.log("With whitespace: " + personName4);
// After striping the whitespace
// Using trim method to strip the whitespaces
console.log("Without whitespace: " + personName4.trim());

console.log("");
console.log("PROBLEM : 11");
console.log("");

//************************************************************************************* *//
//
//
// Exercise 11
const names = ["Usama", "Ehtesham", "Obaid", "Anas", "Hira", "Sana"];
// Consoling one at a time
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);
console.log(names[4]);
console.log(names[5]);

console.log("");
console.log("PROBLEM : 12");
console.log("");

//************************************************************************************* *//
//
//
// Exercise 12
const names2 = ["Usama", "Ehtesham", "Obaid", "Anas", "Hira", "Sana"];
let message1 = "Hello";
let message2 = "Hope you're doing well.";

for (let i = 0; i < names.length; i++) {
  console.log(message1 + " " + names2[i] + "! " + message2);
}
console.log("");
console.log("PROBLEM : 13");
console.log("");

//************************************************************************************* *//
//
//
// Exercise 13
const arr = ["Harley davidson", "mcLeran", "H2R"];
console.log("I really like " + arr[0] + " type of bikes.");
console.log("My dream is to buy " + arr[1] + " one day.");
console.log(arr[2] + " is the fastest heaevy bike right now.");

console.log("");
console.log("PROBLEM : 14");
console.log("");

//************************************************************************************* *//
//
//
// Exercise 14
const arr1 = ["Muhammad Ali", "Lionel Messi", "Tom hardy"];
console.log(
  "Mr. " +
    arr1[0] +
    "! This is a formal invition to the dinner I am hosting tomorrow at Javu. It would be a huge honor to host you and I'll be waiting for you. Thankyou."
);
console.log(
  "Mr. " +
    arr1[1] +
    "! I wanna thankyou for taking the time to read this. Please join us tomorrow at Javu for dinner. Your presence would mean a lot to me. I am a huge fan. Thankyou"
);
console.log(
  "Mr. " +
    arr1[2] +
    "! My hero and the best villain ever. It is my pleasure to invite you to the dinner I am hosting tomorrow at Javu. I hope you will be there."
);

console.log("");
console.log("PROBLEM : 15");
console.log("");

//************************************************************************************* *//
//
//
// Exercise 15
const arr2 = ["Muhammad Ali", "Lionel Messi", "Tom hardy"];
console.log(
  "Mr. " +
    arr2[0] +
    "! This is a formal invition to the dinner I am hosting tomorrow at Javu. It would be a huge honor to host you and I'll be waiting for you. Thankyou."
);
console.log(
  "Mr. " +
    arr2[1] +
    "! I wanna thankyou for taking the time to read this. Please join us tomorrow at Javu for dinner. Your presence would mean a lot to me. I am a huge fan. Thankyou"
);
console.log(
  "Mr. " +
    arr2[2] +
    "! My hero and the best villain ever. It is my pleasure to invite you to the dinner I am hosting tomorrow at Javu. I hope you will be there."
);
console.log(
  "Just heard about " +
    arr2[2] +
    ". He won't not be attending the dinner tomorrow. He is busy in shooting his new film"
);
arr2.pop();
arr2.push("Johnny depp");
console.log(arr2);
console.log(
  "Our new guest who will be joining us is none other than the great " + arr2[2]
);
console.log(
  "Dear " +
    arr2[2] +
    "! It is my pleasure to invite you to the dinner I am hosting tomorrow at Javu. I hope you'll be there as jack sparrow. Can't wait."
);

console.log("");
console.log("PROBLEM : 16");
console.log("");

//************************************************************************************* *//
//
//
// Exercise 16
const arr3 = ["Muhammad Ali", "Lionel Messi", "Tom hardy"];
console.log(
  "Mr. " +
    arr3[0] +
    "! This is a formal invition to the dinner I am hosting tomorrow at Javu. It would be a huge honor to host you and I'll be waiting for you. Thankyou."
);
console.log(
  "Mr. " +
    arr3[1] +
    "! I wanna thankyou for taking the time to read this. Please join us tomorrow at Javu for dinner. Your presence would mean a lot to me. I am a huge fan. Thankyou"
);
console.log(
  "Mr. " +
    arr3[2] +
    "! My hero and the best villain ever. It is my pleasure to invite you to the dinner I am hosting tomorrow at Javu. I hope you will be there."
);
console.log(
  "Just heard about " +
    arr3[2] +
    ". He won't not be attending the dinner tomorrow. He is busy in shooting his new film"
);
arr3.pop();
arr3.push("Johnny depp");
console.log(arr3);
console.log(
  "Our new guest who will be joining us is none other than the great " + arr3[2]
);

console.log(
  "Dear " +
    arr3[2] +
    "! It is my pleasure to invite you to the dinner I am hosting tomorrow at Javu. I hope you'll be there as jack sparrow. Can't wait."
);
console.log(
  "Good news! We found a bigger table so we are inviting three more guests."
);
arr3.unshift("Jennifer Lopez");
arr3.splice(2, 0, "Neymar");
arr3.push("Gloria");
console.log(
  "Dear " +
    arr3[0] +
    "! It is my pleasure to invite you to the dinner I am hosting tomorrow at Javu. I hope you'll be there.Can't wait."
);
console.log(
  "Dear " +
    arr3[2] +
    "! It is my pleasure to invite you to the dinner I am hosting tomorrow at Javu. We'll play some football afterwards."
);
console.log(
  "Dear " +
    arr3[5] +
    "! It is my pleasure to invite you to the dinner I am hosting tomorrow at Javu. You're favourite band will be there playing your favourite songs."
);
console.log("");
console.log("PROBLEM : 17");
console.log("");

//************************************************************************************* *//
//
//
// Exercise 17
const arr4 = ["Muhammad Ali", "Lionel Messi", "Tom hardy"];
console.log(
  "Mr. " +
    arr4[0] +
    "! This is a formal invition to the dinner I am hosting tomorrow at Javu. It would be a huge honor to host you and I'll be waiting for you. Thankyou."
);
console.log(
  "Mr. " +
    arr4[1] +
    "! I wanna thankyou for taking the time to read this. Please join us tomorrow at Javu for dinner. Your presence would mean a lot to me. I am a huge fan. Thankyou"
);
console.log(
  "Mr. " +
    arr4[2] +
    "! My hero and the best villain ever. It is my pleasure to invite you to the dinner I am hosting tomorrow at Javu. I hope you will be there."
);
console.log(
  "Just heard about " +
    arr4[2] +
    ". He won't not be attending the dinner tomorrow. He is busy in shooting his new film"
);
arr4.pop();
arr4.push("Johnny depp");
console.log(arr4);
console.log(
  "Our new guest who will be joining us is none other than the great " + arr4[2]
);

console.log(
  "Dear " +
    arr4[2] +
    "! It is my pleasure to invite you to the dinner I am hosting tomorrow at Javu. I hope you'll be there as jack sparrow. Can't wait."
);
console.log(
  "Good news! We found a bigger table so we are inviting three more guests."
);
arr4.unshift("Jennifer Lopez");
arr4.splice(2, 0, "Neymar");
arr4.push("Gloria");
console.log(
  "Dear " +
    arr4[0] +
    "! It is my pleasure to invite you to the dinner I am hosting tomorrow at Javu. I hope you'll be there.Can't wait."
);
console.log(
  "Dear " +
    arr4[2] +
    "! It is my pleasure to invite you to the dinner I am hosting tomorrow at Javu. We'll play some football afterwards."
);
console.log(
  "Dear " +
    arr4[5] +
    "! It is my pleasure to invite you to the dinner I am hosting tomorrow at Javu. You're favourite band will be there playing your favourite songs."
);
console.log(
  "There is a problems with the seating arrangment and now I can invite only two people for dinner"
);
console.log(arr4.pop() + " Sorry to uninvite you.");
console.log(arr4.pop() + " Sorry to uninvite you.");
console.log(arr4.pop() + " Sorry to uninvite you.");
console.log(arr4.pop() + " Sorry to uninvite you.");
console.log("Dear " + arr4[0] + " You are still invited.");
console.log("Dear " + arr4[1] + " You are still invited.");
arr4.pop();
arr4.pop();
console.log(arr4);
console.log("");
console.log("PROBLEM : 18");
console.log("");

//************************************************************************************* *//
//
//
// Exercise 18

const places = ["Turkey", "Dubai", "Switzerland", "Barcelona", "Italy"];
console.log(places);
const alphabeticalOrder = [...places].sort(); //  Using the spread operator (...)
console.log(alphabeticalOrder);
console.log(places);
const reverseAlphaOrder = [...places].sort().reverse();
console.log(reverseAlphaOrder);
console.log(places);
const reverseOrder = places.slice().reverse();
console.log(reverseOrder);
const reverseAgain = reverseOrder.slice().reverse();
console.log(reverseAgain);
const changed = places.sort();
console.log(changed);
const changedRev = places.sort().reverse();
console.log(changedRev);

console.log("");
console.log("PROBLEM : 19");
console.log("");

//************************************************************************************* *//
//
//
// Exercise 19
const arr5 = ["Muhammad Ali", "Lionel Messi", "Tom hardy"];
console.log("The number of people invited to dinner is: " + arr5.length);

console.log("");
console.log("PROBLEM : 20");
console.log("");

//************************************************************************************* *//
//
//
// Exercise 20
const footballPlayers = [
  "Neymar",
  "Lionel Messi",
  "Mbappe",
  "Haaland",
  "De Bruyne",
  "Lewandowski",
  "Pedri",
  "Dembele",
];

console.log(footballPlayers);

console.log("");
console.log("PROBLEM : 21");
console.log("");

//************************************************************************************* *//
//
//
// Exercise 21

// let favourite_colors = ["black", "blue", "purple", "white", "pink"];
// console.log(favourite_colors);
const favourite_car = {
  Name: "McLaren",
  Model: ["765LT Spider", "765LT", "720S", " 720S Spider", "Artura"],
  Year: "2022",
};
console.log(favourite_car);
console.log("");
console.log("PROBLEM : 22");
console.log("");

//************************************************************************************* *//
//
//
// Exercise 22
const sportscar = new Object({
  Name: "McLaren",
  Models: ["765LT Spider", "765LT", "720S", "720S Spider", "Artura"],
  Year: "2022",
});

console.log(sportscar.Models[0]);
console.log(sportscar.Models[1]);
console.log(sportscar.Models[2]);
console.log(sportscar.Models[3]);
// Wrong index number
console.log(sportscar.Models[5]);
// Correct index number
console.log(sportscar.Models[4]);

console.log("");
console.log("PROBLEM : 23");
console.log("");

//************************************************************************************* *//
//
//
// Exercise 23
let car = "BMW";
console.log("Is car == 'BMW'? I predict True.");
console.log(car == "BMW");

let bike = "H2";
console.log("Is bike == 'H2'? I predict True.");
console.log(bike == "H2");

let cat = "Siamese";
console.log("Is cat == 'Siamese'? I predict True.");
console.log(cat == "Siamese");

let dog = "Husky";
console.log("Is dog == 'Husky'? I predict True.");
console.log(dog == "Husky");

let song = "rich spirit";
console.log("Is song == 'rich spirit'? I predict True.");
console.log(song == "rich spirit");

let smartPhone = "iphone";
console.log("Is smartPhone == 'iphone'? I predict False.");
console.log(smartPhone != "iphone");

let pc = "Macbook";
console.log("Is pc == 'Macbook'? I predict False.");
console.log(pc != "Macbook");

let color = "pink";
console.log("Is color = 'pink'? I predict False.");
console.log(color != "pink");

let light = "ON";
console.log("Is light = 'ON';? I predict False.");
console.log(light != "ON");

let shop = "open";
console.log("Is shop == 'open'? I predict False.");
console.log(shop != "open");

console.log("");
console.log("PROBLEM : 24");
console.log("");

//************************************************************************************* *//
//
//
// Exercise 24
let animal = "lion";
console.log("Is animal == 'lion'? I predict True.");
console.log(animal == "lion");
console.log("Is animal == 'lion'? I predict False.");
console.log(animal != "lion");

let bird = "eagle";
console.log("Is bird == 'eagle'? I predict True.");
console.log(bird == "eagle".toLowerCase());
console.log("Is bird == 'eagle'? I predict False.");
console.log(bird == "eagle".toLowerCase());

let number = 10;
console.log("Is number >= '10'? I predict True.");
console.log(number >= 10);
console.log("Is number < '8'? I predict False.");
console.log(number < 8);

let a = 50;
let b = 100;
console.log("Are numbers == '50' && '200'? I predict False.");
console.log(a == 50 && b == 200);
console.log("Are numbers == '50' || '200' || '300'? I predict True.");
console.log(a == 50 || b == 200);

let item = ["boots", "glasses", "keys", "cupcakes"];
if (item.includes("boots")) {
  console.log("yes");
} else console.log("no");

console.log("");
console.log("PROBLEM : 25");
console.log("");

//************************************************************************************* *//
//
//
// Exercise 25
let alien_color = "green";
if (alien_color == "green") {
  console.log("The player just earned 5 points.");
} else {
  console.log();
}

console.log("");
console.log("PROBLEM : 26");
console.log("");

//************************************************************************************* *//
//
//
// Exercise 26
let alien_colour = "green";
if (alien_colour == "green") {
  console.log("The player just earned 5 points for shooting the alien.");
} else {
  console.log("The player just earned 10 points.");
}
if (alien_colour == "blue") {
  console.log("The player just earned 5 points for shooting the alien.");
} else {
  console.log("The player just earned 10 points.");
}

console.log("");
console.log("PROBLEM : 27");
console.log("");

//************************************************************************************* *//
//
//
// Exercise 27

function checkColor(alienColor) {
  if (alienColor == "green") {
    console.log("The player just earned 5 points.");
  } else if (alienColor == "yellow") {
    console.log("The player just earned 10 points.");
  } else if (alienColor == "red") {
    console.log("The player just earned 15 points.");
  }
}
checkColor("green");
checkColor("yellow");
checkColor("red");

console.log("");
console.log("PROBLEM : 28");
console.log("");

//************************************************************************************* *//
//
//
// Exercise 28

let age = 29;
if (age < 2) {
  console.log("the person is a baby.");
} else if (age == 2 || age < 4) {
  console.log("the person is a toddler.");
} else if (age == 4 || age < 13) {
  console.log("the person is a kid.");
} else if (age == 13 || age < 20) {
  console.log("the person is a teenager.");
} else if (age == 20 || age < 65) {
  console.log("the person is an adult.");
} else if (age >= 65) {
  console.log("the person is an elder.");
}

console.log("");
console.log("PROBLEM : 29");
console.log("");

//************************************************************************************* *//
//
//
// Exercise 29
let favorite_fruits = ["apple", "banana", "orange"];
if (favorite_fruits.includes("apple")) {
  console.log("You really like apples!");
}
if (favorite_fruits.includes("mangoes")) {
  console.log("You really like mangoes!");
}
if (favorite_fruits.includes("banana")) {
  console.log("You really like bananas!");
}
if (favorite_fruits.includes("orange")) {
  console.log("You really like orange!");
}
if (favorite_fruits.includes("grape")) {
  console.log("You really like grapes!");
}

console.log("");
console.log("PROBLEM : 30");
console.log("");

//************************************************************************************* *//
//
//
// Exercise 30
let namess = ["admin", "ahsan", "usama", "ehtesham", "anas", "shazaib"];
for (let i = 0; i < namess.length; i++) {
  if (i == 0) {
    console.log(
      "Hello " + namess[i] + ", would you like to see a status report?"
    );
  } else
    console.log("Hello " + namess[i] + ", thank you for logging in again.");
}

console.log("");
console.log("PROBLEM : 31");
console.log("");

//************************************************************************************* *//
//
//
// Exercise 31
let namesss = [];
if (namesss.length === 0);
console.log("We need to find some users!");
for (let i = 0; i < namesss.length; i++) {
  if (i === 0) {
    console.log(
      "Hello " + namesss[i] + ", would you like to see a status report?"
    );
  } else {
    console.log("Hello " + namesss[i] + ", thank you for logging in again.");
  }
}

console.log("");
console.log("PROBLEM : 32");
console.log("");

//************************************************************************************* *//
//
//
// Exercise 32
let current_users = ["ahsan", "usama", "juan", "mike", "william"];
let new_users = ["Hamza", "Mike", "Ali", "William", "Usama"];

for (let i = 0; i < new_users.length; i++) {
  if (current_users.includes(new_users[i].toLowerCase())) {
    console.log("The username " + new_users[i] + " is taken, try a new one.");
  } else console.log("The username " + new_users[i] + " is available.");
}

console.log("");
console.log("PROBLEM : 33");
console.log("");

//************************************************************************************* *//
//
//
// Exercise 33
let ordinalNumbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
for (let i = 0; i < ordinalNumbers.length; i++) {
  if (ordinalNumbers[i] === "1") {
    console.log(ordinalNumbers[i] + "st");
  } else if (ordinalNumbers[i] === "2") {
    console.log(ordinalNumbers[i] + "nd");
  } else if (ordinalNumbers[i] === "3") {
    console.log(ordinalNumbers[i] + "rd");
  } else {
    console.log(ordinalNumbers[i] + "th");
  }
}

console.log("");
console.log("PROBLEM : 34");
console.log("");

//************************************************************************************* *//
//
//
// Exercise 34
let pizza = ["pepperoni", "bbq", "fajita"];
for (let i = 0; i < pizza.length; i++) {
  console.log("I like " + pizza[i] + " pizza.");
}
console.log(
  "I don't eat a lot of fast food but I make an exception for some really good pizza. I like a really good pepperoni pizza.\nI also like pizza with lots of chicken chunks and some really good fried onions with the topping of fried mushrooms.\nI really love pizza!"
);

console.log("");
console.log("PROBLEM : 35");
console.log("");

//************************************************************************************* *//
//
//
// Exercise 35
let animals = ["Cheetah", "Jaguar", "Dog"];
for (let i = 0; i < animals.length; i++) {
  if (i === 0) console.log(animals[i] + " is the fastest land animal.");
  if (i === 1) console.log(animals[i] + " has unblievable jaw strength.");
  if (i === 2) console.log(animals[i] + " is the most loyal animal.");
}
console.log("All of these animals are carnivores.");

console.log("");
console.log("PROBLEM : 36");
console.log("");

//************************************************************************************* *//
//
//
// Exercise 36
function make_shirt(size, message) {
  console.log("Size: " + size + "\nPrinted text: " + message);
}
make_shirt("Medium", "Just do it!");

console.log("");
console.log("PROBLEM : 37");
console.log("");

//************************************************************************************* *//
//
//
// Exercise 37
function make_shirts(message, size = "Large") {
  console.log("Size: " + size + "\nPrinted text: " + message);
}
make_shirts("I love Javascript.");
////
function make_shirtss(size, message = "I love metaverse!") {
  console.log("Size: " + size + "\nPrinted text: " + message);
}
make_shirtss("Large.");
make_shirtss("Medium.");
////
function make_shirtsss(size, message = "I love Typescipt!") {
  console.log("Size: " + size + "\nPrinted text: " + message);
}
make_shirtsss("Medium");

console.log("");
console.log("PROBLEM : 38");
console.log("");

//************************************************************************************* *//
//
//
// Exercise 38
function describe_city(city, country = "Pakistan") {
  console.log(city + " is in " + country);
}
describe_city("Islamabad");
describe_city("Lahore");
describe_city("Tokyo");

console.log("");
console.log("PROBLEM : 39");
console.log("");

//************************************************************************************* *//
//
//
// Exercise 39
function city_country(city, country) {
  console.log(`"` + city + `, ` + country + `"`);
}
city_country("Lahore", "Pakistan");
city_country("Tokyo", "Japan");
city_country("Paris", "France");

console.log("");
console.log("PROBLEM : 40");
console.log("");

//************************************************************************************* *//
//
//
// Exercise 40
var make_album = function (artist_name, album_title, album_tracks = 0) {
  var record = {};
  record.artist_name = artist_name;
  record.album_title = album_title;
  record.album_tracks = album_tracks;
  return record;
};

var record1 = make_album("kanye west", "Donda", "11");
var record2 = make_album("Future", "Future", "15");
var record3 = make_album("Eminem", "The last ride");
console.log(
  "Artist: " +
    record1.artist_name +
    " Album: " +
    record1.album_title +
    " No of Tracks: " +
    record1.album_tracks
);
console.log(
  "Artist: " +
    record2.artist_name +
    " Album: " +
    record2.album_title +
    " No of Tracks: " +
    record1.album_tracks
);
console.log(
  "Artist: " + record3.artist_name + " Album: " + record3.album_title
);

console.log("");
console.log("PROBLEM : 41");
console.log("");

//************************************************************************************* *//
//
//
// Exercise 41

let Magicians = ["John", "Billy", "Mark", "Steve"];

function show_magicians(Magicians) {
  for (let i = 0; i < Magicians.length; i++) {
    console.log(Magicians[i]);
  }
}
show_magicians(Magicians);

console.log("");
console.log("PROBLEM : 42");
console.log("");

//************************************************************************************* *//
//
//
// Exercise 42
let Magician = ["John", "Billy", "Mark", "Steve"];
function show_magician(Magician) {
  for (let i = 0; i < Magician.length; i++) {
    console.log(Magician[i]);
  }
}
show_magician(Magician);

function make_great(Magician) {
  Magician.forEach((element, index) => {
    Magician[index] = element + "The great";
  });
  console.log(Magician);
}
make_great(Magician);

console.log("");
console.log("PROBLEM : 43");
console.log("");

//************************************************************************************* *//
//
//
// Exercise 43
let Magician1 = ["John", "Billy", "Mark", "Steve"];
function show_magician1(Magician1) {
  for (let i = 0; i < Magician1.length; i++) {
    console.log(Magician1[i]);
  }
}
let newMagician = Magician1.slice();
function make_great(newMagician) {
  newMagician.forEach((element, index) => {
    newMagician[index] = element + " The great";
  });
  console.log(newMagician);
}
show_magician1(Magician1);
make_great(newMagician);

console.log("");
console.log("PROBLEM : 44");
console.log("");

//************************************************************************************* *//
//
//
// Exercise 44

function sandwich(items) {
  for (let i = 0; i < items.length; i++) {
    console.log(`Items in Sandwich ${items[i]}`);
  }
}
sandwich(["chicken", "lettuce", "tomatoes"]);
sandwich(["beef", "cheese", "onions"]);
sandwich(["chicken chunks", "olives", "mushrooms"]);

console.log("");
console.log("PROBLEM : 45");
console.log("");

//************************************************************************************* *//
//
//
// Exercise 45

function cars(manufacturer, model) {
  return {
    name: "Fortuner",
    model,
    manufacturer,
    price: "100 mil",
  };
}

const carss = cars("Toyota", "Legender");
console.log(carss);

console.log("");
console.log("");

//************************************************************************************* *//
