let x= {
    val:1,
    toString: function () {
        return this.val++;
    }
}

if(x ==1 && x == 2 && x == 3){
    console.log("hello")
}

//Non primitive runs toString generally, so in the x variable we have defined own toString function so it will call our function