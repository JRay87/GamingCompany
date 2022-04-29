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
while (response3 !=="I'm the happiest I've ever been and it's all thanks to this company.") {
    response3 = prompt("You should really take time to think that over. Respond 'I'm the happiest I've ever been and it's all thanks to this company.' when you are ready.");
    console.log("User said: ", response3);
    }
console.log("Management has boosted morale yet again, great success!");
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


    //                              LAB 8
    // for([InitialExpression]; [conditionalexpression];[incrementexpression])statement
    // do (statement) while (condition)

    // function MMM() {
//     prompt ("How many Murrays could Mary Murry marry, if Mary Murray could marry Murrays? Max Murrays Mary can marry is 7, let's be reasonable.")
//     let response4 ='';
//     console.log(response4)

    // if (response4 <= 7){

    // }
// if (total <=7){
// <img src = "https://www.fillmurray.com/g/200/300"></img>
// }
//  }
  
// .tolowercase
 

