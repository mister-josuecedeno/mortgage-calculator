// Base data for seeding application
var paymentArray = [
  {
    month: 1,
    payment: 100,
    principal: 20,
    interest: 80,
    totalInterest: 80,
    balance: 1080,
  },
  {
    month: 2,
    payment: 100,
    principal: 20,
    interest: 80,
    totalInterest: 80,
    balance: 1080,
  },
];

displayData(paymentArray);

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
