"use strict"

console.log("hello");


let userName = prompt("What is your name?");
console.log(userName);


if (userName === "Kassie") {

    console.log("This student deserves extra credit. Is that even possible?");

} else if (userName === "Robert") {

    console.log("This student deserves extra credit. Is that even possible?");

} else if (userName === "Lizzy") {

    console.log("This student deserves extra credit. Is that even possible?");

} else {
    console.log(userName + " has logged in.");
    document.write("<p id='person-name'>" + userName + "</p>");
}
//                                          Functions
function morale(){
    let response3;
while (response3 !=="I'm the happiest I've ever been and it's all thanks to this company.") {
    response3 = prompt("You should really take time to think that over. Respond 'I'm the happiest I've ever been and it's all thanks to this company.' when you are ready.");
    console.log("User said: ", response3);
    }
console.log("Management has boosted morale yet again, great success!");
}
function MMM () {
    let number = prompt ("How many Murrays could Mary Murray marry, if Mary Murray could marry Murrays? Max Murrays Mary can marry is 5, let's be reasonable.")
    console.log(number);
   for (let i=0; i <number; i++){
    document.write("<img src = 'https://www.fillmurray.com/g/180/270'></img>")
   }
}

function feelings() {
    let feeling = prompt("Welcome " + userName + ". How is your morale today?");
    let response = "";
    console.log(feeling);
    
    if (feeling === "I'm the happiest I've ever been and it's all thanks to this company.") {
        prompt ('Im happy to hear that. Maybe our latest earnings report can keep the good times going.');
    } else {
        prompt ('Your morale was not high enough. Would you like to try that again?');
        let response2 = "Yes || No"
        if (response2 ==="Yes") {
            message ("Management has boosted morale yet again, great success!");
    } else {
        morale ()
    }
}   
    return feeling
}
    feelings()
    MMM()

    //                              LAB 8
    // for([InitialExpression]; [conditionalexpression];[incrementexpression])statement
    // do (statement) while (condition)



// .tolowercase
 

// https://www.fillmurray.com/g/180/270