fetch('https://meowfacts.herokuapp.com/') //look 
.then((res) => {
    return res.json();
})
.then((data) => {
    console.log(data);
    // for(let i = 0;i< data.length;i++){
    //     console.log(data[i].text);
    // }
})
.catch((err) => {
    console.log(err);
})