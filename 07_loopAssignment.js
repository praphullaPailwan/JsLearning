console.log("------------------------Loop Assignment -------------------------");
console.log("Question No 1: Count Vowels-----------");
var str=" I am very good IT developer";
var str1=str.toString();
var count=0;
for (let index = 0; index < str.length; index++) {
    if(str1.charAt(index)=="a"||str1.charAt(index)=="e"||str1.charAt(index)=="i"||str1.charAt(index)=="o"||str1.charAt(index)=="u"||str1.charAt(index)=="A"||str1.charAt(index)=="E"||str1.charAt(index)=="I"||str1.charAt(index)=="O"||str1.charAt(index)=="U")
    {
        count++;
    }
}
console.log(`Total Vowels in string=${count}`);
console.log("Question No 2:Sum of Cubes----------------");
function sumOfCube()
{
let result="";
let sum=0;
for (let index = 1; index <=5; index++) {
    result=sum+index*index*index;
}
console.log(`Sum Of Cube of Number 1 to 5: ${result}`);
}
sumOfCube();
console.log("Question No 3: Odd Position Characters-----------");
function oddPositionsChars(str)
{
    var result="";
    for (let index = 0; index <str.length;index++) {
        const char=str.charAt(index);
        if (index%2!=0&&char!=" ") {
            result=result.concat(char);
        }
        
    }
    console.log(`Odd Positions Char Is : ${result}`);
}
oddPositionsChars("Hard work always pays back");
oddPositionsChars("Soon I will be Angular IT Champ");
console.log("--------------------Reverse The String-----------------------------------");
function reverseString(str)
{
    var result="";
    for (let index = str.length-1; index>=0 ; index--) {
        const char=str.charAt(index);
        if (char!=" ") {
            result=result.concat(char);
            
        }                 
    }
    console.log(`Reverse String is :${result}`);
}
reverseString("Hard work always pays back");
reverseString("Soon I will be Angular IT Champ");