async function fetchLivePrices() {
    try {
        // Fetch USD to KRW exchange rate
        const usdToKrwResponse = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
        const usdToKrwData = await usdToKrwResponse.json();
        const usdToKrw = usdToKrwData.rates.KRW;

        // Fetch USDT price in KRW
        const usdtToKrwResponse = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=tether&vs_currencies=krw');
        const usdtToKrwData = await usdtToKrwResponse.json();
        const usdtToKrw = usdtToKrwData.tether.krw;

        // Update input fields with fetched values
        document.getElementById('usdPrice').value = usdToKrw;
        document.getElementById('usdtPrice').value = usdtToKrw;

        // Automatically calculate the premium with the fetched prices
        calculateKimchiPremium();
    } catch (error) {
        console.error('Error fetching live prices:', error);
    }
}

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

// Optionally, fetch live prices on page load
document.addEventListener('DOMContentLoaded', fetchLivePrices);