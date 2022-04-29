"use strict"

let userName = prompt("What is your name?");
console.log(userName);


if (userName === "Kassie") {

    console.log("This student deserves extra credit. Is that even possible?");

} else if (userName === "Robert") {

    console.log("This student deserves extra credit. Is that even possible?");

} else if (userName === "Lizzie") {

    console.log("This student deserves extra credit. Is that even possible?");

} else {
    console.log(userName + " has logged in.");
    document.write("<p id='person-name'>" + userName + "</p>");
}
//                                          Functions
function morale(){
    let response3;
while (response3 !=="I have reconsidered") {
    response3 = prompt("You should really take time to think that over. Respond 'I have reconsidered' when you are ready.");
    console.log("User said: ", response3);
    }
console.log("Management has boosted morale yet again, great success!");
}

function feelings() {
    let feeling = prompt("Welcome " + userName + ". How are you today?");
    let response = "";
    console.log(feeling);
    
    if (feeling === "good") {
        prompt ('Im happy to hear that. Maybe our important information can keep the good times going.');
    } else {
        prompt ('Your response did not sound happy. Would you like to try that again?');
        let response2 = "Yes || No".toLowerCase
        if (response2 ==="Yes") {
            message ("Management has boosted morale yet again, great success!");
    } else {
        morale ()
    }
}   
    return feeling
}
    feelings()




    // .tolowercase

// Create another function for the Bridge of death?
    // Name - log name
    // Quest - log quest
    // Airspeed velocity of an unlaiden swallow? - African || European? 
    
    //                              LAB 8
    // for([InitialExpression]; [conditionalexpression];[incrementexpression])statement