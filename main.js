//variaveis
let randomNumber = Math.round(Math.random() * 10);
const screen1 = document.querySelector(".screen1");
const screen2 =  document.querySelector(".screen2");
const btnTry = document.querySelector('#btnTry');
const btnReset = document.querySelector('#newPlaying')
console.log(randomNumber)
let xAttempts = 1;

//function
function handleClick(event){
    event.preventDefault()
    randomNumber;

    let getNumber = document.querySelector("#getNumber");

    if(Number(getNumber.value) === randomNumber){
        screen1.classList.add("hide");
        screen2.classList.remove('hide');

        document
        .querySelector('.screen2 h2')
        .innerText = `acertou em ${xAttempts} tentativas`
    }else{
        let msgnError = document.querySelector("#msgnError")
        document.querySelector("#msgnError").innerText = "tente novamenter";

    }
    getNumber.value = "";
    xAttempts++;
}

function handleResetClick(){
    toggleScreen()
    xAttempts = 1;
    randomNumber = Math.round(Math.random() * 10);
console.log('reset', randomNumber)

}

function toggleScreen(){
    screen1.classList.remove("hide");
    screen2.classList.add('hide');
}

// eventos
btnTry.addEventListener('click', handleClick);
btnReset.addEventListener('click', handleResetClick);