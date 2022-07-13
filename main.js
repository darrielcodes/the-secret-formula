// 1. /////////////////////////////////////////////
let textInput = document.querySelector("#input");
let submit = document.querySelector("#submitButton")
let form = document.querySelector("form")

form.addEventListener('submit', function(event){
    event.preventDefault();
    console.log(textInput.value)
    alert(textInput.value)
    textInput.value = ""
});

// 2. /////////////////////////////////////////////
let form2 = document.querySelector('#form2')
let sandwichSubmit = document.querySelector('#submitSandwich')
let bread = document.querySelector('#bread');
let cheese = document.querySelector('#cheese');
let meat = document.querySelector('#meat');
let peppers = document.querySelector('#peppers');
let lettuce = document.querySelector('#lettuce');
let onions = document.querySelector('#onions');
let mayoMustard = document.querySelector('#mayoMustard');
let cucumber = document.querySelector('#cucumber');
let olives = document.querySelector('#olives');
let tomatoes = document.querySelector('#tomatoes');

form2.addEventListener('submit', function(event){
event.preventDefault();

let finalOrder = [] 
    if (bread.checked === true){
        finalOrder.push("Bread")
    } if (cheese.checked === true){
        finalOrder.push("Cheese")
    } if (meat.checked === true){
        finalOrder.push("Meat")
    } if (peppers.checked === true){
        finalOrder.push("Peppers")
    } if (lettuce.checked === true){
        finalOrder.push("Lettuce")
    } if (onions.checked === true){
        finalOrder.push("Onions")
    } if (mayoMustard.checked === true){
        finalOrder.push("Mayo and Mustard")
    } if (cucumber.checked === true){
        finalOrder.push("Cucumber")
    } if (olives.checked === true){
        finalOrder.push("Olives")
    } if (tomatoes.checked === true){
        finalOrder.push("Tomatoes")
    } alert("Your sandwich contains: " + finalOrder)
console.log(finalOrder)
//console.log(bread.value)
});

// 3. ///////////////////////////////////////////////////
let form3 = document.querySelector('#form3');
let date = document.querySelector('#date');
let text = document.querySelector('#textInput');
let shortHair = document.querySelector('#shortHair');
let longHair = document.querySelector('#longHair');

form3.addEventListener('submit', function(event){
    event.preventDefault();

    if (shortHair.checked !== true){
        alert(`Haircut scheduled for ${date.value} with ${text.value} for LONG hair.`)
    } else {
        alert(`Haircut scheduled for ${date.value} with ${text.value} for SHORT hair.`)
    }

});
// 4. ///////////////////////////////////////////////////
let form4 = document.querySelector('#form4');
let userName = document.querySelector('#username');
let email = document.querySelector('#email');

form4.addEventListener('submit', function(event){
    event.preventDefault();
    console.log(userName.value)
    alert(`You have created an account with the username: ${userName.value} and email: ${email.value}.`)
});






