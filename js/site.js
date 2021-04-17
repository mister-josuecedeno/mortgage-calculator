// Base data for seeding application
// var paymentArray = [
//   {
//     month: 1,
//     payment: 100,
//     principal: 20,
//     interest: 80,
//     totalInterest: 80,
//     balance: 1080,
//   },
//   {
//     month: 2,
//     payment: 100,
//     principal: 20,
//     interest: 80,
//     totalInterest: 80,
//     balance: 1080,
//   },
// ];

function buildPaymentSchedule() {
  let loan = +document.getElementById('loanAmount').value;
  let months = +document.getElementById('loanTerm').value * 12;
  let mthRate = (+document.getElementById('loanRate').value * 0.01) / 12;

  let payment = calculatePayment(loan, months, mthRate);
  let paymentArray = getPayments(payment, months);
  displayData(paymentArray);
}

// Calculate Payment
function calculatePayment(loan, months, mthRate) {
  let x = Math.pow(1 + mthRate, months);
  return (loan * x * mthRate) / (x - 1);

  // Source: https://www.oreilly.com/library/view/javascript-the-definitive/0596000480/ch01s08.html
}

// Get Payments (build payment array)
function getPayments(payment, months) {
  let paymentArray = [];

  for (let i = 1; i <= months; i++) {
    let obj = {};

    obj['month'] = i;
    obj['payment'] = payment;
    obj['principal'] = 0;
    obj['interest'] = 0;
    obj['totalInterest'] = 0;
    obj['balance'] = 0;

    paymentArray.push(obj);
  }

  return paymentArray;
}

// Display event data
function displayData(paymentArray) {
  const myTemplate = document.getElementById('Data-Template');
  const resultsBody = document.getElementById('resultsBody');

  // clear table first
  resultsBody.innerHTML = '';

  for (let i = 0; i < paymentArray.length; i++) {
    const dataRow = document.importNode(myTemplate.content, true);

    dataRow.getElementById('month').textContent = paymentArray[i].month;
    dataRow.getElementById('payment').textContent = paymentArray[
      i
    ].payment.toLocaleString();
    dataRow.getElementById('principal').textContent = paymentArray[
      i
    ].principal.toLocaleString();
    dataRow.getElementById('interest').textContent = paymentArray[
      i
    ].interest.toLocaleString();
    dataRow.getElementById('totalInterest').textContent = paymentArray[
      i
    ].totalInterest.toLocaleString();
    dataRow.getElementById('balance').textContent = paymentArray[
      i
    ].balance.toLocaleString();

    resultsBody.appendChild(dataRow);
  }
}
