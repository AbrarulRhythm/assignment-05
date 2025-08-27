const callHistoryData = [];

// Function to get inner text
function getInnerText(id) {
    const element = document.getElementById(id);
    const elementValue = element.innerText;
    const elementValueNumber = parseInt(elementValue);

    return elementValueNumber;
}

// Heart icon increase functionality
const heartButtons = document.getElementsByClassName('heart-button');

for (const heartButton of heartButtons) {
    heartButton.addEventListener('click', function () {
        const totalHeart = getInnerText('heart-count');

        const totalNewHeart = 1 + totalHeart;

        document.getElementById('heart-count').innerText = totalNewHeart;
    });
}

// Call Button Functionality
const callButtons = document.getElementsByClassName('call-button');

for (const callButton of callButtons) {
    callButton.addEventListener('click', function () {
        const card = callButton.closest('.emergency-number-card');

        const title = card.querySelector('.emergency-number-title').innerText;
        const number = card.querySelector('.emergency-number').innerText;

        const totalCoin = getInnerText('coin-count');

        if (totalCoin < 20) {
            alert("❌ You don't have enough coins. You need at least 20 coins to make a call.");
            return;
        }

        const totalNewCoin = totalCoin - 20;

        document.getElementById('coin-count').innerText = totalNewCoin;

        alert(`📞 Calling ${title} ${number}...`);

        const historyData = {
            serviceTitle: title,
            serviceNumber: number,
            date: new Date().toLocaleTimeString()
        }

        callHistoryData.push(historyData);
    });
}