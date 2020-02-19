/* 
function Factorial (num){
    let factorial = 1;
    while (num >0){
        factorial = factorial * num;
        --num;
    }
    console.log(factorial);
}
  */

/* 
function Factorial(num){
    let factorial = 1;
    for (let i = num; i > 0; --i){
        factorial *= i
    }
    console.log(factorial);
}  */

/* 
function Factorial(num){
    console.log(num*Product(num))
}

function Product(x){
    --x
    let hold = 1;
    if (x > 1){
        hold *= Product(x);
    }
    return hold * x;
}
 */
function Factorial(num){
    return (num != 1) ? num * Factorial(--num): 1;
}

console.log(Factorial(6))