const randomNumber = Math.round(Math.random() * 10);
console.log(randomNumber)
let xAttempts = 1;

function handleClick(event){
    event.preventDefault()
    let getNumber = document.querySelector("#getNumber");

    if(Number(getNumber.value) === randomNumber){
        document.querySelector(".screen1").classList.add("hide");
        document.querySelector(".screen2").classList.remove('hide');

        document
        .querySelector('.screen2 h2')
        .innerText = `acertou em ${xAttempts} tentativas`
    }

    xAttempts++
}
