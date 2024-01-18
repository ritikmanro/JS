let grandFather = document.querySelector('.grandFather')
let father = document.querySelector('.father')
let child = document.querySelector('.child')

grandFather.addEventListener('click', (ev) => {
    console.log("Grand Father");
    // console.log(ev);
},true)

father.addEventListener('click', (ev) => {
    console.log("Father");
    // console.log(ev);
},false)

child.addEventListener('click', (ev) => {
    console.log("Child");
    // console.log(ev);
    ev.stopPropagation();
},true)