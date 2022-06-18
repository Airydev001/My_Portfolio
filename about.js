/*****FOR DARKER MODE DISPLAY */
const darkMode = document.querySelector(".fa ");
const background = document.querySelector(".light");
//onst portfolioBackground= document.querySelector(".section-backg")
console.log(portfolioBackground);




function darker(){
    
    
    background.classList.toggle("darker");
    darkMode.classList.toggle("dark-mode");
    
}

darkMode.addEventListener("click",darker);