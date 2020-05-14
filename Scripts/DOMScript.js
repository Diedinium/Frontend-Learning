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
console.log(document.getElementById('main-header'));
let header = document.getElementById('header-title');
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