const textElement = document.querySelector('.text-field')
const submitButton = document.querySelector('.submit-button');
submitButton.addEventListener('click',printInputValue);
const userItem = document.querySelector('.user-item');

function printInputValue() {
    const textValue = textElement.value;
    localStorage.setItem('item', textElement.value);
    userItem.innerHTML = textValue;
}