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
    let headerInput = document.querySelector('#itemHeaderInput');
    let itemInput = document.querySelector('#itemInput');

    if (headerInput.value !== '') {
        let newListItem = document.createElement('li');
        let newListItemHeader = document.createElement('h4');
        let newListItemParagraph = document.createElement('p');

        newListItemHeader.innerText = headerInput.value;
        newListItemParagraph.innerText = itemInput.value;

        newListItem.innerHTML = '<i class="float-right fas fa-trash remove-item-x"></i><i class="float-right pr-3 fas fa-edit edit-item"></i>';
        newListItem.appendChild(newListItemHeader);
        newListItem.classList.add('list-group-item');
        newListItemParagraph.classList.add('mb-0');
        if (itemInput.value !== '') {
            newListItem.appendChild(newListItemParagraph);
        }

        let createdRemove = newListItem.querySelector('.remove-item-x');
        let createdEdit = newListItem.querySelector('.edit-item');
        createdRemove.addEventListener('click', onItemRemoveClick);
        createdEdit.addEventListener('click', onItemEdit);

        itemList.appendChild(newListItem);
        itemInput.value = '';
    }
    else {
        displayError('You must at least enter a header to add the item to the form.');
    }
}

function onItemEdit(e) {
    // e.preventDefault();
    // e.stopPropagation();
    let parentElement = e.currentTarget.parentNode;

    let currentHeaderValue = parentElement.querySelector('h4').innerText;
    let currentParagraphValue = '';
    if(parentElement.querySelector('p') !== null) {
        currentParagraphValue = parentElement.querySelector('p').innerText;
    }

    parentElement.innerHTML = '<i class="float-right fas fa-save save-item"></i><div class="row margin-override"><input type="text" placeholder="Header" class="form-control col-10 col-sm-11 mb-1"><textarea rows="3" placeholder="Description" class="form-control col-12"></textarea></div><small class="text-muted form-text">Tip: Press Tab and Shift + Tab to move between the input boxes. You can also press enter while the cursor is in the header to complete an edit.</small>';

    let headerTextBox = parentElement.querySelector('input');
    let DescriptionTextBox = parentElement.querySelector('textarea');
    headerTextBox.value = currentHeaderValue;
    DescriptionTextBox.value = currentParagraphValue;

    let saveButton = parentElement.querySelector('.save-item');
    saveButton.addEventListener('click', onItemSave);
    headerTextBox.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            parentElement.querySelector('.save-item').click();
        }
    });
}

function onItemSave(e) {
    // e.stopPropagation();
    let parentElement = e.currentTarget.parentNode;
    let currentHeaderValue = parentElement.querySelector('input').value;
    let currentParagraphValue = parentElement.querySelector('textarea').value;

    if (currentHeaderValue !== '') {
        let newListItemHeader = document.createElement('h4');
        let newListItemParagraph = document.createElement('p');

        newListItemHeader.innerText = currentHeaderValue;
        newListItemParagraph.innerText = currentParagraphValue;

        parentElement.innerHTML = '<i class="float-right fas fa-trash remove-item-x"></i><i class="float-right pr-3 fas fa-edit edit-item"></i>';
        parentElement.appendChild(newListItemHeader);
        parentElement.classList.add('list-group-item');
        newListItemParagraph.classList.add('mb-0');
        if (currentParagraphValue.value !== '') {
            parentElement.appendChild(newListItemParagraph);
        }

        let createdRemove = parentElement.querySelector('.remove-item-x');
        let createdEdit = parentElement.querySelector('.edit-item');
        createdRemove.addEventListener('click', onItemRemoveClick);
        createdEdit.addEventListener('click', onItemEdit);
    }
    else {
        displayError('There must be some text in the header box in order to save.');
    }
}

function onItemRemoveClick(e) {
    e.preventDefault();
    fadeElement(e.currentTarget.parentNode, 0, 300);
}

function fadeElement(passElement, delayBeforeRemove, fadeOutTime) {
    if (typeof delayBeforeRemove !== 'undefined' && typeof fadeOutTime !== 'undefined') {
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

function displayError(errorMsg, ) {
    let errorMessage = document.querySelector('#errorMessage');

    errorMessage.innerHTML = errorMsg;
    errorMessage.classList.remove('hidden');

    fadeElement(errorMessage);
}