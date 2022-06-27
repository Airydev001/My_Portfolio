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
/*
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
*/
//For the modal close;

const clicker = document.querySelector(".clicker");
const smallWidth= document.querySelector(".small-width-screen");
const closeModal = document.querySelector(".close-btn");

    function openMenu(){
        smallWidth.style.display="block";
        smallWidth.style.width="200px";
    }

clicker.addEventListener('click',openMenu)
closeModal.addEventListener("click", function(){
smallWidth.style.display="none";
})



/*****FOR DARKER MODE DISPLAY */
const darkMode = document.querySelector(".fa ");
const background = document.querySelector(".light");
const about = document.querySelector(".section-backg");



console.log(background);



function darker(){
   const h3 = document.querySelector("h3");
   const blackBox = document.querySelector(".black-box");
    smallWidth.classList.toggle("bit-dark");
    background.classList.toggle("darker");
    darkMode.classList.toggle("dark-mode");
    about.classList.toggle("darker");
    //console.log(about.classList.contains("darker"));
    if(about.classList.contains("darker")){
     h3.style.color="white";
     blackBox.style.backgroundColor="#0A7373";
    } else{
        h3.style.color="";
        blackBox.style.backgroundColor="";
    }
    
}

darkMode.addEventListener("click",darker);