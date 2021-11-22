//Variables
const bill = document.getElementById("bill");

const fivePercent = document.getElementById("five");
const tenPercent = document.getElementById("ten");
const fifteenPercent = document.getElementById("fifteen");
const twentyFivePercent = document.getElementById("twentyFive");
const fiftyPercent = document.getElementById("fifty");
const customTip = document.getElementById("custom_tip");
let selectedTip = 0;

const numberOfPeople = document.getElementById("number_Of_people");

const tipAmountPerPerson = document.getElementById("tip-amount-number");
const totalPerPerson = document.getElementById("total-number");

const resetButton = document.getElementById("reset-button");

//Function
const billFunction = (e) => {
    let finalTip = 0;
    let total;
    let tip;
    bill.value = e.target.value;
    if(selectedTip !== 0){
        finalTip = bill.value * selectedTip;

        tip = finalTip / numberOfPeople.value;
        tipAmountPerPerson.innerHTML = tip.toFixed(2);
        total = (Number(bill.value) + Number(finalTip)) / Number(numberOfPeople.value);
        totalPerPerson.innerHTML = total.toFixed(2); 

    } else {
        tipAmountPerPerson.innerHTML = 0.00;
        total = Number(bill.value) / Number(numberOfPeople.value);
        totalPerPerson.innerHTML = total.toFixed(2);
    }
    document.getElementById("reset-button").disabled = false;
}

const numberOfPeopleFunction = (e) => {
    if(e.target.value < 1){
        document.getElementById("js_paragraph").style.visibility = "visible";
        // document.getElementById("number_Of_people").style.border= "2px solid red;";
    }else{
        document.getElementById("js_paragraph").style.visibility = "hidden";
        let finalTip = 0;
        let total;
        let tip;
        numberOfPeople.value = e.target.value;
        if(selectedTip !== 0){
            finalTip = bill.value * selectedTip;
    
            tip = finalTip / numberOfPeople.value;
            tipAmountPerPerson.innerHTML = tip.toFixed(2);
            total = (Number(bill.value) + Number(finalTip)) / Number(numberOfPeople.value);
            totalPerPerson.innerHTML = total.toFixed(2); 
    
        } else {
            tipAmountPerPerson.innerHTML = 0.00;
            total = Number(bill.value) / Number(numberOfPeople.value);
            totalPerPerson.innerHTML = total.toFixed(2);
        }
    }
    document.getElementById("reset-button").disabled = false;
}

const tipFunction = (e) => {
    let finalTip = 0;
    let total;
    let tip;
    if(isNaN(e.target.value)){
        selectedTip = Number(e.target.value.slice(0, -1)) / 100;
        if(selectedTip !== 0){
            finalTip = bill.value * selectedTip;

            tip = finalTip / numberOfPeople.value;
            tipAmountPerPerson.innerHTML = tip.toFixed(2);
            total = (Number(bill.value) + Number(finalTip)) / Number(numberOfPeople.value);
            totalPerPerson.innerHTML = total.toFixed(2); 

        } else {
            tipAmountPerPerson.innerHTML = 0.00;
            total = Number(bill.value) / Number(numberOfPeople.value);
            totalPerPerson.innerHTML = total.toFixed(2);
        }
      }else{
        selectedTip = Number(e.target.value) / 100;
        if(selectedTip !== 0){
            finalTip = bill.value * selectedTip;

            tip = finalTip / numberOfPeople.value;
            tipAmountPerPerson.innerHTML = tip.toFixed(2);
            total = (Number(bill.value) + Number(finalTip)) / Number(numberOfPeople.value);
            totalPerPerson.innerHTML = total.toFixed(2); 

        } else {
            tipAmountPerPerson.innerHTML = 0.00;
            total = Number(bill.value) / Number(numberOfPeople.value);
            totalPerPerson.innerHTML = total.toFixed(2);
        }
    }
    document.getElementById("reset-button").disabled = false;
}

const refreshPage = () => {
    window.location.reload();
} 


//Event Listners
bill.addEventListener('input', billFunction);
numberOfPeople.addEventListener('input', numberOfPeopleFunction);

fivePercent.addEventListener('click', tipFunction);
tenPercent.addEventListener('click', tipFunction);
fifteenPercent.addEventListener('click', tipFunction);
twentyFivePercent.addEventListener('click', tipFunction);
fiftyPercent.addEventListener('click', tipFunction);
customTip.addEventListener('input', tipFunction);

resetButton.addEventListener("click", refreshPage);
