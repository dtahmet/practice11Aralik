//sum numbers
const calculateSumButton =document.querySelector('#calculator button');

function calculateSum(){

    const userNumberInputElement = document.getElementById('user-number');
    console.log(userNumberInputElement);
    const enteredNumber = userNumberInputElement.value;
    console.log(enteredNumber);
    let sumUpToNumber = 0;
    
    for (let i = 0; i<= enteredNumber; i++ ) {
        sumUpToNumber = sumUpToNumber +i;
        console.log(sumUpToNumber)
    }

    const outputResultElement = document.getElementById('calculated-sum');
    outputResultElement.textContent = sumUpToNumber;
    outputResultElement.style.display = 'block'
    
}   

calculateSumButton.addEventListener('click', calculateSum)

const highlightButton = document.querySelector('#highlight-links button');
//highlightButton.style.backgroundColor ='pink'

function highlightText(){
    const textChooser = document.querySelectorAll('#highlight-links a');
    console.log(textChooser);
    for (const chosenElement of textChooser){
        chosenElement.classList.add('highlight')
    }
    
}


highlightButton.addEventListener('click', highlightText);

//UserData

const dummyUserData = {
    firstName: 'Ahmet',
    secondName: 'Ercüment',
    thirdName: 'Oç',
    age: 21,
}




const displayDataButtonElement = document.querySelector('#user-data button')

function showDisplayData(){
    const outputDataElement = document.getElementById('output-user-data');
    
    outputDataElement.innerHTML = ''

    for (const everyElement in dummyUserData){
        const newUserDataListItemElement = document.createElement('li');
        const outputText = everyElement.toUpperCase() + ': ' + dummyUserData[everyElement]
        newUserDataListItemElement.textContent = outputText;
        outputDataElement.append(newUserDataListItemElement)

        console.log(outputText)
    }
}

displayDataButtonElement.addEventListener('click', showDisplayData)

//rolldice

const rollDiceButtonElement = document.querySelector('#statistics button')

function rolltheDice(){


}

function deriveNumberOfDiceRolls(){

    const targetNumberInputElement = document.querySelector('#user-target-number');
    const diceRollsLisElement= document.getElementById('dice-rolls');
    const enteredNumber = targetNumberInputElement.value
    diceRollsLisElement.innerHTML =''

    let hasRolledTargetNumber = false;
    let numberOfRolls = 0;

    while(!hasRolledTargetNumber) {
        const rolledNumber = rolltheDice();
   //     if(rolledNumber == enteredNumber){
   //         hasRolledTargetNumber= true
   //     }
        numberOfRolls++;
        hasRolledTargetNumber = rolledNumber == enteredNumber ;

    }
    
    const outputTotalRollsElement = document.getElementById('output-total-rolls');
    const outputTargetNumberElement = document.getElementById('output-target-number');
    
    outputTargetNumberElement.textContent =enteredNumber;
    
    console.log(enteredNumber)

}

rollDiceButtonElement.addEventListener('click', deriveNumberOfDiceRolls)

