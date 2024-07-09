function calculateKimchiPremium() {
    const usdPrice = parseFloat(document.getElementById('usdPrice').value);
    const usdtPrice = parseFloat(document.getElementById('usdtPrice').value);

    if (isNaN(usdPrice) || isNaN(usdtPrice)) {
        alert('Please enter valid numbers for both prices.');
        return;
    }

    const premium = ((usdtPrice - usdPrice) / usdPrice) * 100;
    document.getElementById('premiumPercentage').textContent = premium.toFixed(2);
}