console.log("------------------------------------Assignment 1-------------------------------------");
console.log("1. Square of Word Length");
function squareOfWordLength(arg)
{
    var result=arg.length;
    console.log(`Length of ${arg} is= ${result}`);
    var squre=result*result;
    return squre;
}
var sq=squareOfWordLength("Javascript");
console.log(`Square of Length is = ${sq}`);

var sq=squareOfWordLength("Google Chrome");
console.log(`Square of Length is = ${sq}`);

var sq=squareOfWordLength("Developer Smart");
console.log(`Square of Length is = ${sq}`);
console.log("----------------------------------------------------------------");
var stringData=function(){
    var str="I am Angular Developer";
    var result=str.length;
    var splitStr=str.split(" ");
    var split_string=splitStr.length;
    console.log(`Given String= "${str}"  And  Length of String=${result}`);
    console.log(`Total Word in String = ${split_string}`);
    var result1=result/split_string;
    var result2=result*split_string;
    console.log(`Length is divide by total number of Word= ${result1}`);
    console.log(`Length is Multiply by total number of word= ${result2}`);
}
stringData();
console.log("--------------------------------Assignment 2-----------------------------");
console.log("1. Greatest Number");
var greatestNo=function(arg1,arg2){
 var result=arg1>arg2?arg1:arg2;
 console.log(`Greatest Nuber Between ${arg1} And ${arg2} is= ${result}`);
}
greatestNo(10,-10);
greatestNo(800,899);
console.log("------------------------------------------------\n 2. Number is Even Or Odd");
var isEvenOrOdd=function(arg){
var result=arg%2==0?"Even":"Odd";
console.log(`Given Number ${arg} is ${result}`);
}
isEvenOrOdd(29);
isEvenOrOdd(44);
isEvenOrOdd(0);
isEvenOrOdd(101);
console.log("------------------------------------------------\n 2. Word is Even Or Odd");
var wordLength=function(arg){
    var result=arg.length;
    console.log(`Given String is= ${arg} and Word Length is= ${result}`);
    var result1=result%2==0?"Even":"Odd";
    return result1;
}
var result2=wordLength("Javascript");
console.log(`Given word is= ${result2}`);
var result2=wordLength("developer");
console.log(`Given word is= ${result2}`);
var result2=wordLength("Google");
console.log(`Given word is= ${result2}`);
