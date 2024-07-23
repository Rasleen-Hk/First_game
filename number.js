

let warning = document.getElementById("warning");
let guess = document.getElementById("guess");
let resultat = document.getElementById("resultat");
let answer = document.getElementById("answer");

guess.addEventListener("click",()=>{
    let input =        document.getElementById("inputs").value;
    let s =Number(input);
    /* lezemni nwaled ra9em random*/
    let random = Math.floor(Math.random()*10)+1;
    if (input === "") {
        alert("you must enter a number");
    }
   else if (s <random){
        resultat.innerHTML = `the answer greater than ${s}, try again 🤔`;
        answer.innerHTML = `the right answer was ${random}`;
        guess.style.background = "red";
    }
    else if (s> random){
        resultat.innerHTML = `the answer less than ${s}, try again 🤔`
        answer.innerHTML = `the right answer was ${random}`;
        guess.style.background = "red";
    }
    else if (s === random) {
        resultat.innerHTML = "";
        answer.innerHTML = `<p align="center">THIS IS THE RIGHT ANSWER 🤠</p>`
        guess.style.background = "green";
    }
    clear();
});


function clear() {
    document.getElementById("inputs").value = '';
}


