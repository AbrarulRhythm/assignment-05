let callHistoryData = [];

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

        alert(`📞 Calling ${title} ${number}...`);

        const totalNewCoin = totalCoin - 20;

        document.getElementById('coin-count').innerText = totalNewCoin;

        const historyData = {
            serviceTitle: title,
            serviceNumber: number,
            date: new Date().toLocaleTimeString()
        }

        callHistoryData.push(historyData);
        showHistory();
    });
}

// Function to show history in ui
function showHistory() {
    const historyContainer = document.getElementById('all-history-wrap');
    historyContainer.innerText = "";

    for (const data of callHistoryData) {
        const div = document.createElement('div');
        div.innerHTML = `
            <div class="bg-[#FAFAFA] p-4 rounded-lg flex justify-between items-center mb-2">
                <div>
                    <h1 class="font-Inter text-lg font-semibold mb-1">${data.serviceTitle}</h1>
                    <span>${data.serviceNumber}</span>
                </div>
                <div class="time">${data.date}</div>
            </div>
        `;

        historyContainer.appendChild(div);
    }
}

// History clear button functionality
document.getElementById('clear-button').addEventListener('click', function () {
    callHistoryData = [];
    showHistory();
})

// Copy Button Functionality
const copyButtons = document.getElementsByClassName('copy-button');

for (const copyButton of copyButtons) {
    copyButton.addEventListener('click', function () {
        const card = copyButton.closest('.emergency-number-card');
        const number = card.querySelector('.emergency-number').innerText;

        const totalCopyCount = getInnerText('copy-count');

        // copy number
        navigator.clipboard.writeText(number);

        alert(`Number copied to: ${number}`);

        const totalNewCopyCount = totalCopyCount + 1;

        document.getElementById('copy-count').innerText = totalNewCopyCount;
    });
}