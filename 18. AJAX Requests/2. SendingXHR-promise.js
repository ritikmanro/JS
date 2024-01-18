function getData(URL){
    return new Promise((resolve,reject)=>{
        const xhr = new XMLHttpRequest();


        xhr.onload = (res)=>{
            // Request Success ho gai
            // console.log(JSON.parse(res.target.response));
            resolve(JSON.parse(res.target.response));
        }

        xhr.onerror = (err)=>{
            reject(err);
        }

        xhr.open('GET',URL);

        xhr.send(); // Yeh request bhej dega
    })
}

let btn = document.querySelector('.btn')
btn.addEventListener('click', (ev) => {
    getData('https://meowfacts.herokuapp.com/?count=3')
    .then((data)=>{
        console.log("Here",data)
        let factsList = document.querySelector('.factsList');

        data = data.data;
        data.forEach(d => {
            console.log(d);
            let li = document.createElement('li');
            li.innerText = d;
            factsList.appendChild(li);
        });
    })
    .catch(err=>{
        console.log(err);
    })
})
