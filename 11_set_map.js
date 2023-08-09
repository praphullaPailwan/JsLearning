const number_set=new Set()
number_set.add(11)
number_set.add(12)                 //duplicates not allowed
number_set.add(13)
number_set.add(44)
number_set.add(11)
console.log(number_set);
console.log(`Size of set is ${number_set.size}`);
// number_set.clear(); //Clear Set

console.log("======== Delete element from Set=========");
const isDeleted = number_set.delete(22);
console.log(isDeleted);
console.log(number_set);
console.log("======== has =========");
const is_available = number_set.has(33);
console.log(is_available);
console.log(typeof (number_set));

console.log("======== typeof Set =========");
console.log(typeof number_set);

console.log("======== Traversing using for of loop =========");
for (const element of number_set) {
    console.log(element); 
}