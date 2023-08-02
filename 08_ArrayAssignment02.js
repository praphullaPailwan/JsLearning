const array_number=[20,31,40,25,23,11,29,9,60,2,11];
console.log(`Length of array is : ${array_number.length}`);
console.log(`first element ${array_number[0]}\n last element ${array_number[array_number.length-1]}`);

console.log("************************************* Thirst last element**************************************");
const third_last=array_number[array_number.length-3];
console.log(`Thirst element${third_last}`);

console.log("********************** End To Start *****************************************************");
for (let index = array_number.length-1; index >=0; index--) {
    const element = array_number[index];
    console.log(element);
    
}
console.log("*************************************** Even Number in Array************************************");
for (const element of array_number) {
    if (element%2==0) {
        console.log(element);
    }
    
}

console.log("************************************ Odd Number in Array***************************************");
for (const element of array_number) {
    if (element%2!=0) {
        console.log(element);
        console.log("*************************************** Multiple of 5 element************************************");

        for (let index = 0; index < array_number.length; index++) {
           if (array_number[index]%5==0) {
        
            console.log(array_number[index]);
           }   
        }}
   
    
}

console.log("********************************* Even Position element ******************************************");
for (let index = 0; index < array_number.length; index++) {
    if (index%2==0) {
        const element = array_number[index];
        console.log(element);    
    }
    
}

console.log("*************************************** Odd Position element************************************");

for (let index = 0; index < array_number.length; index++) {
    if (index%2!=0) {
        const element = array_number[index];
        console.log(element);    
    }
    
}
console.log("*************************************** Sum of given Array element************************************");

let sum=0;
for (let index = 0; index < array_number.length; index++) {

        sum=sum+array_number[index];
       
}
console.log(`Sum of Given Array is ${sum}`);
console.log("*************************************** Multiple of 5 element************************************");

for (let index = 0; index < array_number.length; index++) {
   if (array_number[index]%5==0) {

    console.log(array_number[index]);
   }   
}
console.log("***************************************Find Number is Available in Array or not********************");
const avilableno1=array_number.includes(115);
console.log(`Given Noumber is found in array : ${avilableno1}`);
const avilableno2=array_number.includes(23);
console.log(`Given Noumber is found in array : ${avilableno2}`);
console.log("***********************************Insert Number*************************************************");
array_number.splice(3,0,55,66);
console.log(`After Inserting 55 and 66 befor index 3 The Array is : ${array_number} `);
console.log("***********************************Delete element*************************************************");
array_number.splice(4,3);
console.log(`Atfer Delete the element in array the Array is s : ${array_number}`);
