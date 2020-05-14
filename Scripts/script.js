// My initial attempt at the form...
// function SubmitFunction() {
//     let name = document.getElementById('name').value;
//     let email = document.getElementById('email').value;

//     if(name === '' || email === '') {
//         let msg = document.getElementsByClassName('msg');
//         msg[0].innerHTML = 'Name or email cannot be left blank';
//         msg[0].classList.add('error');
//         return false;
//     }
//     else {
//         let ul = document.getElementById('users');
//         let li = document.createElement('li');
//         li.appendChild(document.createTextNode(`${name} ${email}`));
//         ul.appendChild(li);
//         let msg = document.getElementsByClassName('msg');
//         msg[0].innerHTML = '';
//         msg[0].classList.remove('error');
//         return false;
//     }
// }

// Single element selector
// console.log(document.getElementById('name'));
// console.log(document.querySelector('.container'));

// Multiple element
// console.log(document.querySelectorAll('.item'));
// console.log(document.getElementsByClassName('item'));
// console.log(document.getElementsByTagName('li'));

// Looping over selected elements.
// let items = document.querySelectorAll('.item');
// items.forEach((element) => {
//     console.log(element);
// });

// Manipulating items.
// let ul = document.querySelector('.items');

// ul.remove();
// ul.lastElementChild.remove();
// ul.firstElementChild.textContent = 'Hello';
// ul.children[1].innerText = 'Brad';
// ul.lastElementChild.innerHTML = '<h4>Hello</h4>';

// let btn = document.querySelector('.btn');
// btn.style.background = 'red';

// A Better way using event listener
const btn = document.querySelector('.btn');
const myForm = document.querySelector('#my-form');
const msg = document.querySelector('.msg');
const ul = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();
    let name = document.querySelector('#name');
    let email = document.querySelector('#email');

    if (name.value === '' || email.value === '') {
        msg.innerHTML = 'Name or email cannot be left blank';
        msg.classList.add('error');

        setTimeout(() => {
            msg.innerHTML = '';
            msg.classList.remove('error');
        }, 3000);
    }
    else {
        let li = document.createElement('li');
        li.appendChild(document.createTextNode(`${name.value} : ${email.value}`));
        ul.appendChild(li);
        name.value = '';
        email.value = '';
    }

    // console.log(e.target.className);
}