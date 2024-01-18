// let h1 = document.getElementsByTagName('h1');
// console.log(h1);

// let Id = document.getElementById('hello');
// console.log(Id);

// let movies = document.getElementsByClassName('movie')
// console.log(movies);

//Get element using extension
// let movies = document.querySelector('.movie')
// let movies1 = document.querySelectorAll('.movie') //for class name
// let movies2 = document.querySelectorAll('#movie-1') //if we want id then # is used
// console.log(movies);
// console.log(movies1);
// console.log(movies2);


let h1 = document.querySelector('h1')
let h2 = document.querySelector('#id3') //selecting using class name
h1.innerText += "Adding Something New!"
h1.innerHTML += "<strong>Adding Something New!</strong>"

// h2.remove(); //delete id1 key
console.log(h1.innerText);
console.log(h1.innerHTML);

console.log(h2.previousSibling); // give the data of the previos value
console.log(h2.previousElementSibling); // give the html text of the previous value
console.log(h2.parentElement.parentElement); // gives the parent element

console.log(h2.classList); // Selecting the class list of an element
h2.classList.add('mymovie')
console.log(h2.classList); // Selecting the class list of an element


//Creating an element to add on DOM
// Creating a list item first

let li = document.createElement('li');
console.log(li);

li.innerText = 'AntMan'
li.classList.add('mymovie');
