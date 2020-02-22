
function Factorial(num){
    return (num != 1) ? num * Factorial(--num): 1;
}

console.log(Factorial(6))