// 0. Write a line of code to select the body tag in the HTML and store it inside a variable named body.
let body = document.querySelector('body');
console.log(body)

// 1. Create a new div and append it to the body.
let newElement = document.createElement('div');
body.appendChild(newElement);

// 2. Give the div from (1.) a class: myDiv. In CSS, give this class a background color of #ffb3ff.
newElement.className = 'myDiv';

//3. Create a h1 tag and append it to the div from (1.). Give this tag an ID: myHeader
let header1 = document.createElement('h1');
newElement.appendChild(header1);
header1.id = 'myHeader';

// 4. Create a h2 tag and append it below the h1 tag. Give this tag an ID: mySubHeader. In CSS, give this ID a background color of #ccfff5. Also give it a solid black border with a width of 3px.

let header2 = document.createElement('h2');
newElement.appendChild(header2);
header2.id = 'mySubHeader';

// 5. Give the h1 tag some innerText: "This is a header". Give the h2 tag some innerText as well: "Subheader".
header1.innerText = 'This is a header';
header2.innerText = 'Subheader';

// 6. Remove the h1 tag. What happens? Why?
 /*
There is an Uncaught Reference Error. The h1 is not defined. */

// 7. After removing it, try appending the same h1 tag back to the body. What returns to the page? Why?
/*
The error still occurs because the h1 element is still undefined. */

// 8. Using a loop, add five new p tags to the body of the document. Each p tag should have different innerText based on its index e.g. "This is p tag 1, "This is p tag 2", ... , "This is p tag 5". 


let paragraphs = document.createElement('p');

for (let i = 5; i < paragraphs.length; i++) {
    
}

console.log(paragraphs);