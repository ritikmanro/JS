let obj = {
    fun: function () {
        console.log(this)   
        console.log(this.x)
        this.z = "new variable";
    },
    x:10,
    y:20
}
console.log(this); // Global in Node JS

obj.fun();
console.log(obj);