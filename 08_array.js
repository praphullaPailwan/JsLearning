var array=[10,20,30,50,10,80,20];
console.log(`${array}`);
console.log(`Type of Array is ${typeof(array)}`);
console.log(`total no of elements in array: ${array.length}`);
let element2=array[4];
console.log(`element stored at index 4: ${element2}`);
let thirdlast=array[array.length-3];
console.log(`Third last lement : ${thirdlast}`);
console.log("-------------------------------------------------");
array[1]=100;
console.log(array);
let isavilable=array.includes(30);
console.log(`Element is avilable: ${isavilable}`);
let indexofelement=array.indexOf(50);
console.log(`index of 50 is: ${indexofelement}`);
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element);   
}
console.log("-----------------Array in Reverse order--------------------");
for (let index = array.length-1; index>=0; index--) {
    const element = array[index];
 console.log(element);   
}
console.log("---------element in even position------------");
for (let index = 0; index < array.length; index++) {
    if (index%2==0) {
        
    
    const element = array[index];
    console.log(element);   
}
}
var array1=[10,20,30,40,50];
console.log("Enerst element in first and last index");
array1.push(70);
array1.push(80,90);

array1.unshift(60);
array1.unshift(50,40,30);
console.log(array1);
array1.pop();
array1.shift();
console.log(array1);
var array=[10,20,30,50,10,80,20];
console.log("Getting array slice from array");
console.log(array.slice(3));
console.log("performing  removeing element using splice");
let removedelement=array.splice(4);
console.log(array);
console.log(removedelement);
var array=[10,20,30,50,10,80,20];
var removedElement=array.splice(4,2);
console.log(array);
console.log(removedElement);
console.log("Insert Element in array using splice");
var array=[10,20,30,50,10,80,20];
array.splice(3, 0,100,200,300,400);
console.log(array);
var array=[10,20,30,50,10,80,20];
array.splice(4,2,40,30,5,1);
console.log(array);