
let inputTextBox = document.getElementById('inputField');
let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');

addToDoButton.addEventListener('click', function() {
    var paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = inputTextBox.value;
    toDoContainer.appendChild(paragraph);

    inputTextBox.value = '';

    paragraph.addEventListener('click', () => {
        paragraph.style.textDecoration = 'line-through';
    })

    paragraph.addEventListener('dblclick', () => {
        toDoContainer.removeChild(paragraph);
    })
})

