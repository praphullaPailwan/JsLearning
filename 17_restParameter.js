function addition(num1,num2,...num){
   console.log(`Value1 is : ${num1} Value2 is : ${num2} And Rest Parameter is ${num}`);
    let sum=0;
    sum=num1+num2;
    for (const i of num)
     {
        sum +=i;
    }
    
console.log(`Total sum of the Rest Parameter is ${sum}`);
}
addition(1,2,3,4,5);
addition(100,200,300,400,500);
addition(81,82,83,84);
addition(91,92,93,94);