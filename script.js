/** Interactivity for my logo */


/*const logoEffect=document.querySelector(".click-event");
console.log(logoEffect);*/

//MY little string check algorithm
//var gateWay = [];

/*gateWay.push(String(inputValue));
console.log(gateWay);
gateWay.split("");
console.log(splitedVersion);*/

//var namet = gateWay.push(inputValue);
//var nametString = namet.toString();
/////////////////////////////////

/*****THIS SOLVE THE PROBLEM WOW 
var inputValue = prompt("What is your value: ","Let your name begin with capital");
var storeSplit=inputValue.split();
//looping through the split to search for uppercase
console.log(storeSplit);
for (let i=0; i < storeSplit.length; i++){
    if (!(storeSplit[0]===storeSplit[i].toLowerCase())){
        alert("You are doing well")
    
    } else{
        alert("Enter the right word");
    }
    
} */

const cards = document.querySelectorAll('.card');

const callback = (elements) => {
    elements.forEach(ele => {
        if(ele.isIntersecting  && !ele.target.classList.contains('show')){
            ele.target.classList.add('show')
        }else{
            ele.target.classList.remove('show')
        }
    })
}
const observer = new IntersectionObserver(callback);
cards.forEach(card => observer.observe(card));



const cards2 = document.querySelectorAll('.cards');

const callbacks = (elements) => {
    elements.forEach(ele => {
        if(ele.isIntersecting  && !ele.target.classList.contains('opens')){
            ele.target.classList.add('opens')
        }else{
            ele.target.classList.remove('opens')
        }
    })
}
const observers = new IntersectionObserver(callbacks);//Since it is a function can be called anyw...
cards2.forEach(card => observers.observe(card));

/*****FOR DARKER MODE DISPLAY */
const darkMode = document.querySelector(".fa ");
const background = document.querySelector(".light");

console.log(background);




function darker(){
    
    
    background.classList.toggle("darker");
    darkMode.classList.toggle("dark-mode");
    
}

darkMode.addEventListener("click",darker);