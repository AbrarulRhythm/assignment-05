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