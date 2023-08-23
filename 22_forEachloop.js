const array=[10,20,30,40,50,60];
array.forEach((currentvalue)=>{
    console.log(currentvalue);
});
console.log(`find the even no`);
array.forEach((currentvalue)=>{
    if (currentvalue% 2==0) {
        console.log(currentvalue);
    }
    
});
console.log("----------------Set Using forEach Loop----------------");
const setOfName=new Set();
setOfName.add('Mahi');
setOfName.add('Virat');
setOfName.add('Gk');
setOfName.add('Jonny');
setOfName.add('Prafull');
setOfName.forEach((frdName)=>
{
    console.log(frdName);
});

console.log("----------------Map Using forEach Loop----------------");
const map_student = new Map();
console.log("========= Adding entries==========");
map_student.set(11, "Anil");
map_student.set(22, "Sunil");
map_student.set(33, "Madhav");
map_student.set(44, "Jeny");

map_student.forEach((student_roll,student_name)=>
{
    console.log(student_roll,student_name);
});