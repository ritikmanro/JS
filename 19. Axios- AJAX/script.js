let btn = document.querySelector('.btn')
btn.addEventListener('click', (ev) => {
    axios.get('https://meowfacts.herokuapp.com/?count=3')
        .then((data) => {
            console.log("Here", data)
            let factsList = document.querySelector('.factsList');

            factsList.innerText = '';
            data = data.data.data;
            data.forEach(d => {
                console.log(d);
                let li = document.createElement('li');
                li.innerText = d;
                factsList.appendChild(li);
            });
        })
        .catch(err => {
            console.log(err);
        })
})