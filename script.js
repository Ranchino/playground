
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
