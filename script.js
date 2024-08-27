//its normal metod of function calling

function greatuser()
{
let name="Peer";
let msg="hello" + name + "im leaning something";
console.log(msg);
}

greatuser()



// function calling using parmeters 
function wish(phoneno,email) {
    let msg= " Hello " + phoneno + " " + email + " " + "this is my info"
    console.log(msg);
        
}

wish(789789,"mohammed@123")

function add(number1, number2){
console.log(number1 - number2);
}
add(78,58)


// arrow funcation => its a fucation, which is Access thorgh varable
let a=()=>{
    console.log("mohammed");
}

a()

//HOF (higher order function)

function HOF(callback) {
console.log("higher order function");
callback()
return function() {
    console.log("return function");
  }
}
function dis(){
    console.log("function");
}

let result=HOF(dis)
result()