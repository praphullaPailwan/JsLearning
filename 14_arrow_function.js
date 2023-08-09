let display=function()
{
    console.log("inside display");
}
display();
console.log("======= 1 way for arrow function ");
let display_arrow=() => {
    console.log("inside arrow display");
}
display_arrow();
console.log("======= 2 way for arrow function ");
let display_arrow1=() =>console.log(" inside 2 arrow function");
display_arrow1();
console.log("====== arrow function wirh args=======");
let sum_arrow=(num1,num2) =>{
    console.log(`sum is usinf arrow function is ${num1 + num2} `);
}
sum_arrow(10,20);