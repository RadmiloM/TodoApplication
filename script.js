const textElement = document.querySelector('.text-field')
const submitButton = document.querySelector('.submit-button');
submitButton.addEventListener('click',getUserListItem);
const userItem = document.querySelector('.user-item');

function getUserListItem() {
    const textValue = textElement.value;
    userItem.innerHTML = textValue;
}