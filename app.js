'use strict';
// add DOM element button to variable btn
const btn = document.querySelector('button');
//variable counter
let number = 1;
//add function to variable
const addElement = function () {
    // node in RAM
    const div = document.createElement('div');
    // add number as textContent in div
    div.textContent = number;

    if (number % 5 == 0) {
        div.classList.add('circle');
    }
    //add div at the end of body tag
    document.body.appendChild(div);
    // incrementation variable counter
    number++;
    console.log(number);
};
//listener on click at btn trigger addElement
btn.addEventListener('click', addElement);
