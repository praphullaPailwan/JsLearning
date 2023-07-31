console.log("------------------------------Assignment N0 1---------------------------------");
console.log("Question No 1:------------------------------------------------");
function evrnOrOdd(arg){
    
    if (arg%2==0) {
        return `Given No is ${arg} And Number is Even`;
    } else {
        return `Given No is ${arg} And Number is Odd`;
    }
}
var result=evrnOrOdd(45);
console.log(`${result}`);

var result=evrnOrOdd(70);
console.log(`${result}`);

var result=evrnOrOdd(67);
console.log(`${result}`);

var result=evrnOrOdd(98);
console.log(`${result}`);
console.log("Question No 2:--------------------------------------------------");
function  checkContain(arg)
{
    var str=arg.length;
    if (str>10) {
        return `Given String is = ${arg} And Contain more then 10 Character.`
    } else {
        return `Given String is = ${arg} And Contain less then 10 Character.`
    }
}
var result=checkContain("Javascript-ES6");
console.log(result);
console.log("Question No 3:-----------------------------------------------------");
function strStartWith(arg)

{
    var starts_with = arg.startsWith("Java");
    if (starts_with==true) {
        return `Given String is= ${arg} And Start with "Java"`
    } else {
        return `Given String is= ${arg} And Not Start with "Java"`
    }
}
var result=strStartWith("Javascript Language");
console.log(result);
var result=strStartWith("C Language");
console.log(result);
console.log("------------------------------Assignment N0 2---------------------------------");
var voteEligibe=function(arg)
{
    if (arg==0||arg>=130||arg<=0||arg==undefined) {
       console.log("InValid Age= ",arg); 
    } else if(arg<=18) {
        console.log("You Not Eligible For Vote= ",arg);
        
    }
    else{
          console.log("You Are Eligible for vote");
    }
}
voteEligibe(45);
voteEligibe(17)
voteEligibe(8);
voteEligibe(20)
voteEligibe(-10);
voteEligibe(200);
voteEligibe(0);
voteEligibe(undefined);
voteEligibe(null);
console.log("------------------------------Assignment N0 3---------------------------------");
function gradeCalculation(mark){
    if (mark>=90&&mark<=100) {
        console.log(`Funtastic Mark : ${mark} ,Your grade is A+`);
    } else if(mark>=75&&mark<=90){
        console.log(`Eccellent Mark: ${mark} ,Your Grade is A`);
        
    }
    else if(mark<=75&&mark>=50){
        console.log(`Good mark : ${mark} , Your grade is B`);
    }
    else if(mark<=50&&mark>=35){
        console.log(`Your Mark is: ${mark}, Your Grade is C`); 
    }
    else{
        console.log("Plase Provide The Valide Mark: ",mark);
    }

}
gradeCalculation(98);
gradeCalculation(80);
gradeCalculation(90);
gradeCalculation(0);
gradeCalculation(150);
gradeCalculation(-7);
gradeCalculation(35);
gradeCalculation(29);
gradeCalculation(64);
gradeCalculation(49);
gradeCalculation("91");
gradeCalculation(undefined);

gradeCalculation("Eighty");
gradeCalculation(null);