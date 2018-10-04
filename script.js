
function newColor() {

    var style = document.body.style; 

    if (style.backgroundColor == "lightgreen") {
        style.backgroundColor = "white";
    } else {
        style.backgroundColor = "lightgreen";
    }
    
}

function randomColor() {
    var randomValue = Math.random();
    if (randomValue < 0.2) {
        document.body.style.backgroundColor = "blue";
    } else if (randomValue < 0.4) {
        document.body.style.backgroundColor = "red";
    } else if (randomValue < 0.6) {
        document.body.style.backgroundColor = "black";
    } else if (randomValue < 0.8) {
        document.body.style.backgroundColor = "yellow";
    } else {
        document.body.style.backgroundColor = "green";
    }
}

function absoluteRandomRGB() {
    var red = Math.round(Math.random() * 255);
    var green = Math.round(Math.random() * 255);
    var blue = Math.round(Math.random() * 255);

    var rgbValue = "rgb(" + red +"," + green +"," + blue +")";
    document.body.style.backgroundColor = rgbValue;

    /* Disco disco gutt gutt om man på den här knappen sen dom andra knapparna*/
    setInterval(absoluteRandomRGB, 1000);
}

    /* No Disco
    setInterval(absoluteRandom, 1000);
    */


function absoluteRandomHex() {
    var red1 = convertToHex(Math.round(Math.random() * 15));
    var red2 = convertToHex(Math.round(Math.random() * 15));

    var green1 = convertToHex(Math.round(Math.random() * 15));
    var green2 = convertToHex(Math.round(Math.random() * 15));

    var blue1 = convertToHex(Math.round(Math.random() * 15));
    var blue2 = convertToHex(Math.round(Math.random() * 15));


    var rgbValue = "#" + red1 + green1 + blue1 + red2 + green2 + blue2;
    document.body.style.backgroundColor = rgbValue;
}

function convertToHex(value) {
    if (value == 10) {
        return "A";
    } if (value == 11) {
        return "B";
    } if (value == 12) {
        return "C";
    } if (value == 13) {
        return "D";
    } if (value == 14) {
        return "E";
    } if (value == 15) {
        return "F";
    }  

    return value;
}

myLibrary.

/*
console.log(calculateRectangleArea(5.5, 3.3));
console.log(calculateTriangleArea(5.5, 3.3));
console.log(calculateCircleArea(2));
*/


/*
var fotballPlayer = {
    name: "Ranchino Bahadin",
    age: 28,
    shirtNumber: 7,
    position: "striker",
    gender: "male",
};

var newFotbollPlayer = fotbollPlayer;
newFotbollPlayer.name = "Albert Einstien";
console.log(newFotbollPlayer);
console.log(fotballPlayer);

var message = "Welcome";
var newMessage = message;
newMessage = "Welcome home!";
console.log(newMessage);
console.log(message); */
