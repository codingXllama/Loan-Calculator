// Adding a listener for the submit button
document
    .getElementById('loan-form')
    .addEventListener('submit', calculatedResults);

//Creating the function for calculating results
function calculatedResults() {

    //Getting the Required UI variables
    const amountUI_input = document.getElementById('amount');
    const interestUI_input = document.getElementById('interest');
    const yearsUI_input = document.getElementById('years');
    const monthlyPaymentUI_input = document.getElementById('monthly-payment');
    const totalPaymentUI_input = document.getElementById('total-payment');
    const totalInterestUI_input = document.getElementById('total-interest');
    // preventing the default bahaviour becuase it's a form submit



    //Creating the formula for finding the Loan Amount

    // Getting the value of each UI_input field from the UI
    const principal = parseFloat(amountUI_input.value);
    const calculatedInterest = parseFloat(interestUI_input.value) / 100 / 12;
    const calculatedPayments = parseFloat(yearsUI_input.value) * 12;

    //Computing the monthly payments
    const tempVar = Math.pow(1 + calculatedInterest,
        calculatedPayments);
    const monthly = (principal * tempVar * calculatedInterest) / (tempVar - 1);

    // Checking if the monthly variable contains a finite number
    if (isFinite(monthly)) {

        //setting the montlyPayment value in 2 precision float
        monthlyPaymentUI_input.value = monthly.toFixed(2);
        totalPaymentUI_input.value = (monthly * calculatedPayments).toFixed(2);
        totalInterestUI_input.value = ((monthly * calculatedPayments) - principal).toFixed(2);
    } else {
        showError('Please check your numbers');
    }

    e.preventDefault();
}


//Show Error
function showError(error) {
    //creating a div
    const errorDIV = document.createElement('div');

    // Adding alert class to the divElement
    errorDIV.className = 'alert alert-danger';

    // Creating the text node and append it to the div
    errorDIV.appendChild(Document.createTextNode(error));
}