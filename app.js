const comChoiceDis = document.getElementById('computer-choice');
const yourChoiceDis = document.getElementById('your-choice');
const resultDis = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');
let userChoice;
let comChoice;

possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click', (e) => {
    userChoice = e.target.id;
    yourChoiceDis.innerHTML = userChoice;
    generateComputerChoices();
    getResult();
}));

const generateComputerChoices = () =>{
    const ranNumber = Math.floor(Math.random() * possibleChoices.length + 1);
    console.log(ranNumber);

    if(ranNumber === 1){
        comChoice = 'rock';
        comChoiceDis.innerHTML = comChoice;
    }
    if(ranNumber === 2){
        comChoice = 'paper';
        comChoiceDis.innerHTML = comChoice;
    }
    if(ranNumber === 3){
        comChoice = 'scissors';
        comChoiceDis.innerHTML = comChoice;
    }
};

const getResult = () => {
    if(comChoice === userChoice){
        resultDis.innerHTML = 'It is a Draw';
    }
    if(comChoice === 'rock' && userChoice === 'paper'){
        resultDis.innerHTML = 'Computer Win!';
    }
    if(comChoice === 'rock' && userChoice === 'scissor'){
        resultDis.innerHTML = 'Computer Win!';
    }
    if(comChoice === 'paper' && userChoice === 'rock'){
        resultDis.innerHTML = 'You Win!';
    }
    if(comChoice === 'paper' && userChoice === 'scissors'){
        resultDis.innerHTML = 'You Win!';
    }
    if(comChoice === 'scissors' && userChoice === 'paper'){
        resultDis.innerHTML = 'Computer Win!';
    }
    if(comChoice === 'scissors' && userChoice === 'rock'){
        resultDis.innerHTML = 'You Win!';
    }


}
