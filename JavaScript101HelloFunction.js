//Hello Functions
//Function 1
function hello(person) {
    console.log("Hello, " + person + "!");
}

hello("Ryan");


//Function 2
function hello2(person) {
    person = prompt("What is your name?: ")
    if (person) {
    console.log("Hello, " + person + "!");
    }
    else {console.log("Hello, world!")}
}


hello2();