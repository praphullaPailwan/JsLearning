console.log("--------------------Assignment For Loop----------------------");
console.log("Question No 1:  Print No from 5 To 15-------------------");
var result=" ";
for (let index = 5; index <=15; index++) {
result=result.concat(index).concat(" "); 
}
console.log(result);
console.log("Question No 2:  Print No from 50 To 40-------------------");
var result=" ";
for (let index = 50; index >=40; index--) {
result=result.concat(index).concat(" "); 
}
console.log(result);
console.log("Question No 3:  Print First 15 odd no-------------------");
var result=" ";
for (let index = 1; index <30; index=index+2) {
result=result.concat(index).concat(" "); 
}
console.log(result);
console.log("Question No 4:  Print First 10 Even no-------------------");
var result=" ";
for (let index = 0; index <20; index=index+2) {
result=result.concat(index).concat(" "); 
}
console.log(result);

console.log("Question No 5:  Print Table of 5-------------------");
var result=" ";
for (let index = 5; index <=50; index=index+5) {
result=result.concat(index).concat(" "); 
}
console.log(result);
console.log("Question No 6:  Print Table of 10-------------------");
var result=" ";
for (let index = 10; index <=100; index=index+10) {
result=result.concat(index).concat(" "); 
}
console.log(result);
console.log("Question No 1:  Print table of 1o in reverse order-------------------");
var result=" ";
for (let index = 100; index >=10; index=index-10) {
result=result.concat(index).concat(" "); 
}
console.log(result);

console.log("--------------------Assignment For While Loop----------------------");
console.log("Question No 1:  Print No from 5 To 15-------------------");
var result=" ";
index=4;
while (index<15) {
    index++;
    result=result.concat(index).concat(" ");
}
console.log(result);
console.log("Question No 2:  Print No from 50 To 40-------------------");
var re=" ";
i=51;
while (i>40) {
    i--;
    re=re.concat(i).concat(" ");
}
console.log(re);
console.log("Question No 3:  Print First 15 odd no-------------------");
var result=" ";
index=1;
while (index<29) {
    index=index+2;
    result=result.concat(index).concat(" ");
}
console.log(result);
console.log("Question No 4:  Print First 10 Even  no-------------------");
var result=" ";
index=0;
while (index<20) {
    index=index+2;
    result=result.concat(index).concat(" ");
}
console.log(result);
console.log("Question No 5:  Table of 5-------------------");
var result=" ";
index=5;
while (index<50) {
    index=index+5;
    result=result.concat(index).concat(" ");
}
console.log(result);
console.log("Question No 6:  Table of 10-------------------");
var result=" ";
index=0;
while (index<100) {
    index=index+10;
    result=result.concat(index).concat(" ");
}
console.log(result);
console.log("Question No 7:  Print table of 10 in reverse order-------------------");
var result=" ";
index=110;
while (index>10) {
    index=index-10;
    result=result.concat(index).concat(" ");
}
console.log(result);