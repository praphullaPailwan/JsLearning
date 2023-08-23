console.log("======= 1 way for arrow function====== ");
let display_arrow=() => {
    console.log("Good Morning,Today is Tuesday");
}
display_arrow();
console.log("=======Multiplication Using Arrow Function=========");
let multiplication=(num1,num2,num3=1)=>
{
    let multi=num1*num2*num3;
    console.log(`MultiPlication of ${num1}, ${num2}, ${num3} is : ${multi}`);
}
multiplication(5,5,2);
multiplication(10,4);
console.log("==================5 Arg with REturn Value=============");
let fiveArg=(value1,value2,value3,value4,value5)=>
{
    return value1+value2+value3+value4+value5;
}
let return1=fiveArg(100,100,200,349,756);
console.log(`Addition is ${return1}`);
let return2=fiveArg("I am"," learning"," ES6"," features"," in depth")
console.log(`Addition is ${return2 }`);