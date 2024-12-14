//Func 1
function DivisableBy10(number){
    if(number % 10 == 0){
        return true;
    }
    return false;
}

console.log(`Is number divisable? ${DivisableBy10(2)}`)

//Func 2

function MaxNum(numbers)
{
    if(!Array.isArray(numbers) && numbers.length >0)
    {
        console.log("invalid input");
    }
    let max = numbers[0];
    for(let i = 1; i<=numbers.length; i++)
    {
        if(numbers[i] >= max)
        {
            max=numbers[i];
        }
    }
    return max;
}
console.log(`Max number:${MaxNum([50,60,70,20])}`);

//Func 3
function reverseArray(numbers){
    if(!Array.isArray(numbers) && numbers.length >0)
    {
        console.log("invalid input");
    }
    let reversed= [];
    for(let i = numbers.length -1; i>= 0; i--)
    {
        reversed.push(numbers[i]);
    }
    return reversed;
}
let ArraytoReverse = [10,20,30,40, 50];
let reversed= reverseArray(ArraytoReverse);
console.log(...reversed);
console.log(`reverse Array: ${reversed}`);
