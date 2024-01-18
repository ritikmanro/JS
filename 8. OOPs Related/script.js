function Person(name, age){
    return function(){
        console.log("Name", name);
        if(age>18){
            console.log("Baalik");
        }else{
            console.log("NaBaalik");
        }
    }
}

let f = Person("Ritik", 22);
f();