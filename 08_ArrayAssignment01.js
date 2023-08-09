const fruits = ["Banana",  "Orange", "Apple",  "Mango", "Water Malan"];
console.log(fruits);
console.log(` First Element in Array ${fruits[0]}\n Last Element in Array ${fruits[fruits.length-1]}`);
console.log("-------------- Add new fruit in at First Position the array - fruits ---------------")

const length_after_unshift = fruits.unshift("Papaya");
console.log(`add Papaya in array ===>("Papaya")==>  ${length_after_unshift}`);
console.log(fruits);
console.log("-------------- Add new fruit in at Last Position the array - fruits ---------------")
const push_after = fruits.push("Pineapple");
console.log(`fruit add at last position==>  ${push_after}`);
console.log(fruits);
console.log("-------------- Remove element in the array - fruits ---------------")
const sl=fruits.splice(4,1);

 console.log(`Removed Element ${sl} \n After Romoving Array is ==>${fruits}`); 

console.log("-------------- Add new fruit in  the array befor Water Malan - fruits ---------------")
const add_dragon=fruits.splice(4,0,"Dragon Friut");
console.log(`Add Dragon friut befor Water Malan==> ${fruits}`);
console.log("-------------Replace Orange with Kiwi");
const replaceOrange=fruits.splice(2,1,"Kiwi");
console.log(`Array After REplace Orange With Kiwi : ${fruits}`);
console.log("-------------- Total element in the array - fruits ---------------")
console.log(`Total element in array===>${fruits.length}`);
console.log("-------------- element in the array from 1  to 4 index - fruits ---------------")
const slice_after_both_index = fruits.slice(1, 5);
console.log(`Element from 1 to 4 index ==>  ${slice_after_both_index}`);
console.log(fruits);
console.log("-------------- last three element in the array  - fruits ---------------");
const last_three=fruits.slice(-3);
console.log(`last three element from array==>${last_three}`);


console.log("==================  for in loop to traverse array ======");
for (let index = 0; index < fruits.length; index++) {
    const element = fruits[index];
    console.log(element);
    
}