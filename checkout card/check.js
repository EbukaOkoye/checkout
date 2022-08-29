// Get the UI ids
const cardForm = document.getElementById('card-form');
const cardNumber = document.getElementById('card-number');
const cvv = document.getElementById('cvv');
const formDate = document.getElementById('date');



// add event listener to the card number input
cardNumber.addEventListener('keyup', function(e) {
    let newVal;

    // call the backspace key
    if(e.key === 'Backspace') {
        // convert the value of the input into an array
        const newCardNum = Array.from(cardNumber.value);

       // Delete or Backspace button to delete the hyphens
        newCardNum.slice(0, -1);

        // add the hyphen after some number count
    } else if (cardNumber.value.length === 3 || cardNumber.value.length === 8) {
        newVal = cardNumber.value + ' ';
        cardNumber.value = newVal;

        // jump to the next input field when the numbers are complete
    } else if (cardNumber.value.length === 14) {
        cvv.focus();

    }  

    if(cardNumber.value.length > 14) {
        

        // clear the input field if the number exceeds the intended length
       console.log(cardNumber.value.length - 1);
       cardNumber.value = cardNumber.value.slice(0, cardNumber.value.length - 1);

    }
    
});








// CVV Event listener
cvv.addEventListener('keyup', function() {
    // jump to the next input field if the value reaches the inteded length
    if(cvv.value.length === 3) {
        formDate.focus();

        // clear the input field when the value exceeds the intended length
    } else if(cvv.value.length > 3) {
        cvv.value = cvv.value.slice(0, cvv.value.length - 1);
        
    }
});










// const alertMsg = function() {

//     const alert = document.getElementById('alert');

//     alert.style.backgroundColor = 'red';
//     alert.style.color ='#fff';
//     alert.innerText = 'Don\'t add shit, just put the exact numbers on your card';

//     setTimeout(() => {
//         alert.style.display = 'none';
//     }, 3000);

// }
