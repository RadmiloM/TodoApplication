const textElement = document.querySelector('.text-field')
const submitButton = document.querySelector('.submit-button');
submitButton.addEventListener('click',printInputValue);

function printInputValue() {
    console.log(textElement.value);
}