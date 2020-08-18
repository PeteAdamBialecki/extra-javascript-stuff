// //My Version:

// // 1: Set the text of the <h1> element
// // 2: Set the color of the <h1> to a different color
// const title = 'My Activities List',
//     titleText = document.querySelector('h1');
//     titleText.innerHTML = title;
//     titleText.style.color = 'teal';

// // 3: Set the content of the '.desc' paragraph. The content should include at least one HTML tag.
// document.getElementsByClassName('desc')[0].innerHTML = '<p>A list of fun things I want to do.</p>';

// // 4: Set the class of the <ul> to 'list'
// const element = document.querySelector('ul');
//     element.classList.add('list');

// // 5: Create a new list item and add it to the <ul>
// const lastText = document.createElement('li');
// const lastLi = document.createElement('input');
//     lastText.innerHTML = '<input> Biking </input>';
//         document.querySelector('ul').appendChild(lastText);

// // 6: Change all <input> elements from text fields to checkboxes
// const list = document.getElementsByTagName('input');
//     for (let i=0; i<list.length; i++)
//         list[i].setAttribute('type', 'checkbox');

// // 7: Create a <button> element, and set its text to 'Delete'. Add the <button> inside the '.extra' <div>.

// const deleteContainer = document.getElementsByClassName('extra');
// const deleteButton = document.createElement('button');
//     deleteButton.innerHTML = 'Delete';
//         document.getElementsByClassName('extra')[0].appendChild(deleteButton);

// document.querySelector('button').setAttribute('id', 'deleteThis');
// document.querySelector('button').setAttribute('onclick', 'deleteThis()');

// // 8: Remove the '.extra' <div> element from the DOM when a user clicks the 'Delete' button
// function deleteThis() {
//     document.getElementsByClassName('extra')[0].remove();
// }

// Teamtreehouse Version:

const title = document.querySelector('h1');
title.textContent = 'My Activities List.';

title.style.color = 'dodgerblue';

const desc = document.querySelector('.desc');
desc.innerHTML = 'A list of <b>FUN</b> things I want to do.';

const list = document.querySelector('ul');
list.className = 'list';

const item = document.createElement('li');
item.innerHTML = '<input> Eat ice cream.';
list.appendChild(item);

const input = document.getElementsByTagName('input');
    for (let i = 0; i < input.length; i += 1) {
        input[i].type = 'checkbox'; 
    }

const deleteButton = document.createElement('button');
deleteButton.textContent = 'Delete';

const extra = document.querySelector('.extra');
extra.appendChild(deleteButton);

const container = document.querySelector('.container');
deleteButton.addEventListener('click', () => {
    container.removeChild(extra);
})