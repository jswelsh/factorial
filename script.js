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

/* console.log("version 2")
function Factorial(num){
    let factorial = 1;
    for (let i = num; i > 0; --i){
        factorial *= i
    }
    console.log(factorial);
}  */

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