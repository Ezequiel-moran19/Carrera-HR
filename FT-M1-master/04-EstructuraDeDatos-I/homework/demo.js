//const doblar = entero => {
//    return entero * 2
//};
//console.log(doblar(4));

//  Material visto el 15/9/2022
/*
function Stack(){
    this.array = [1, 2, 3];
}

Stack.prototype.ingresar = function(num){
    this.array.push(num)
}

Stack.prototype.sacar = function(){
    return this.array.pop();
}


let stack2 = new Stack()

stack2.ingresar(2)
stack2.ingresar(5)
stack2.ingresar(1)
stack2.ingresar(7)
console.log(stack2)
stack2.sacar()
console.log(stack2)
stack2.shift()
 */

function fibonacci(n) {
   if(n >= 0 && n < 2) {
    return n;
  }
    return fibonacci(n - 1) + fibonacci(n - 2);
 }

 console.log(fibonacci(7));
/*
 function nFactorial(n){
    if(n == 0){
        return 1;
    }else {
        return n * nFactorial(n - 1);
    }
 }*/

 //console.log(nFactorial(3));

