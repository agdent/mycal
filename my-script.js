// File: my-script.js

// Function for Mutual Funds Returns Calculator
document.getElementById('calculateMFButton').addEventListener('click', function() {
    const initialInvestmentMF = parseFloat(document.getElementById('initialInvestmentMF').value);
    const finalInvestmentMF = parseFloat(document.getElementById('finalInvestmentMF').value);
    const durationMF = parseFloat(document.getElementById('durationMF').value);

    const absoluteReturnsMF = finalInvestmentMF - initialInvestmentMF;
    const annualizedReturnsMF = ((Math.pow((finalInvestmentMF / initialInvestmentMF), 1 / durationMF)) - 1) * 100;

    document.getElementById('mutualFundsResult').innerHTML = `Absolute Returns: ${absoluteReturnsMF.toFixed(2)}<br>Annualized Returns: ${annualizedReturnsMF.toFixed(2)}%`;
});

// Function for SIP Returns Calculator
document.getElementById('calculateSIPButton').addEventListener('click', function() {
    const sipAmount = parseFloat(document.getElementById('sipAmount').value);
    const numberOfMonths = parseFloat(document.getElementById('numberOfMonths').value);

    // Calculate SIP returns logic here
    // ...

    // Example logic:
    const totalInvestment = sipAmount * numberOfMonths;
    const finalValue = /* calculate final value */;
    const absoluteReturnsSIP = finalValue - totalInvestment;
    const annualizedReturnsSIP = /* calculate annualized returns */;

    document.getElementById('sipResult').innerHTML = `Absolute Returns: ${absoluteReturnsSIP.toFixed(2)}<br>Annualized Returns: ${annualizedReturnsSIP.toFixed(2)}%`;
});
