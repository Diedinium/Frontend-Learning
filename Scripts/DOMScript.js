// // Examples of properties in the document object.
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// // document.title = 'testing testing';
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// // document.all[10].textContent= 'hello';
// console.log(document.forms);
// console.log(document.images);

// GetElementByID
//console.log(document.getElementById('main-header'));
//let header = document.getElementById('header-title');
// header.textContent = 'Goodbye'; Doesn't care about styling
// header.innerText = 'Hello';
// header.innerHTML = '<a href="#">Test<a>';
// test

// let myForm = document.querySelector('form');

// myForm.addEventListener('submit', SubmitFunction);

// function SubmitFunction(e) {
//     e.preventDefault();
// }

// How to properly output the object, without stringifying it.
// console.dir(document);

let itemForm = document.querySelector('form');
let itemList = document.querySelector('#items');
let removeItems = document.querySelectorAll('.remove-item-x');
let editItems = document.querySelectorAll('.edit-item');

itemForm.addEventListener('submit', onItemSubmit);
removeItems.forEach(item => item.addEventListener('click', onItemRemoveClick));
editItems.forEach(item => item.addEventListener('click', onItemEdit));

function onItemSubmit(e) {
    e.preventDefault();
    let itemInput = document.querySelector('#itemInput');

    if (itemInput.value !== '') {
        let newListItem = document.createElement('li');

        newListItem.innerHTML = '<i class="float-right fas fa-trash remove-item-x"></i><i class="float-right pr-3 fas fa-edit edit-item"></i>';
        newListItem.appendChild(document.createTextNode(`${itemInput.value}`));
        newListItem.classList.add('list-group-item');

        let createdRemove = newListItem.querySelector('.remove-item-x');
        let createdEdit = newListItem.querySelector('.edit-item');
        createdRemove.addEventListener('click', onItemRemoveClick);
        createdEdit.addEventListener('click', onItemEdit);

        itemList.appendChild(newListItem);
        itemInput.value = '';
    }
    else {
        displayError('You must enter a value in order to add item to the list.');
    }
}

function onItemEdit(e) {
    // e.preventDefault();
    // e.stopPropagation();
    let parentElement = e.currentTarget.parentNode;
    let currentValue = parentElement.innerText;
    parentElement.innerHTML = '<div><input type="text" class="form-control edit-item-input"><i class="float-right fas fa-save save-item"></i><div>';
    
    let editTextBox = parentElement.querySelector('input');
    editTextBox.value = currentValue;
    

    let saveButton = parentElement.querySelector('.save-item');
    saveButton.addEventListener('click', onItemSave);
    editTextBox.addEventListener('keypress', function(e) {
        if(e.key === 'Enter') {
            parentElement.querySelector('.save-item').click();
        }
    });
}

function onItemSave(e) {
    // e.stopPropagation();
    let parentElement = e.currentTarget.parentNode.parentNode;
    let currentValue = parentElement.querySelector('input').value;
    if(currentValue !== '') {
        parentElement.innerHTML = '<i class="float-right fas fa-trash remove-item-x"></i><i class="float-right pr-3 fas fa-edit edit-item"></i>';
        parentElement.appendChild(document.createTextNode(`${currentValue}`));

        let createdRemove = parentElement.querySelector('.remove-item-x');
        let createdEdit = parentElement.querySelector('.edit-item');
        createdRemove.addEventListener('click', onItemRemoveClick);
        createdEdit.addEventListener('click', onItemEdit);
    }
    else {
        displayError('There must be some text in order to save. If you wish to delete this item, please use the delete button instead.')
    }
}

function onItemRemoveClick(e) {
    e.preventDefault();
    fadeElement(e.currentTarget.parentNode, 0, 300);
}

function fadeElement(passElement, delayBeforeRemove, fadeOutTime) {
    if(typeof delayBeforeRemove !== 'undefined' && typeof fadeOutTime !== 'undefined') {
        setTimeout(() => {
            passElement.classList.add('fade-out');
            setTimeout(() => {
                passElement.remove();
            }, fadeOutTime);
        }, delayBeforeRemove);
    }
    else {
        setTimeout(() => {
            passElement.classList.add('fade-out');
            setTimeout(() => {
                passElement.classList.add('hidden');
                passElement.classList.remove('fade-out');
            }, 500);
        }, 6000);
    }
}

function displayError(errorMsg,) {
    let errorMessage = document.querySelector('#errorMessage');

    errorMessage.innerHTML = errorMsg;
    errorMessage.classList.remove('hidden');

    fadeElement(errorMessage);
}