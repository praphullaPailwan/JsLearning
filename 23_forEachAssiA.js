console.log("-------------------Step 1-----------------");
const arrayNumber=[1,-7,40,502,-77,91,0,108,89,-601];
console.log(`Elements in Array With index number`);
arrayNumber.forEach((element,index) => {
    console.log(`Element : ${element}, Index No : ${index}`);
});

console.log("-------------------Step 2-----------------");
console.log("Positive Number in Array");
arrayNumber.forEach((element) => {
    if (element>=0) {
        console.log(element);
    }
});
console.log("-------------------Step 3-----------------");
const array=[];
arrayNumber.forEach(element => {
    if (element<0) {
        array.push(element);
    }
});
console.log("Negative Value in Array",array);

console.log("-------------------Step 4-----------------");
console.log("Even Number in Array");
arrayNumber.forEach(element => {
    if (element%2==0) {
        console.log(element);
    }
});
console.log("-------------------Step 5-----------------");
let sum=0;
for (const element of arrayNumber) {
    sum+=element;
}
console.log(`Sum of Element in Array is : ${sum}`);
console.log("-------------------Step 6-----------------");
console.log("Even index element");
arrayNumber.forEach((element,index) => {
    if (index%2==0) {
        console.log(element);
    }
});
