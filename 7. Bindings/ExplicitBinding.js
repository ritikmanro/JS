function fun(str,x,y,z) {
    console.log("Function this**********8",this);
    console.log(str,x,y,z);
}
let obj = {
    fun: function () {
        console.log("Inside function this***",this)   
        console.log(this.x)
        this.z = "new variable";
    },
    x:10,
    y:20
}

let obj1 = {
    a:1,
    b: true
}

console.log(this); // Global in Node JS

obj.fun();
console.log(obj);

// fun();

// Using call to change this
// fun.call(obj) // Now,this will be pointing to obj
fun.call(obj1, "Hello World",10,20,30) // Now,this will be pointing to obj1


// Using Apply -- > everything same as call, arguments go in array
fun.apply(obj1, ["Hello World",1,2,3]) // Now,this will be pointing to obj1

// Using bind to change this
let f = fun.bind(obj1,"Hello World",1,2,3)
f();