console.log(" Q1 **********************************************************************")

function word_length_square(value1)
{
    console.log(`Length of ${value1} is: ${value1.length}`)
    var square_res=value1.length*value1.length;
    return square_res;
}
var result=word_length_square('Javascript');
console.log(`Q1->"Javascript" length square is: ${result}`);
var result=word_length_square('Google');
console.log(`Q1->"Google" length square is: ${result}`);
var result=word_length_square('Developer');
console.log(`Q1->"Developer" length square is: ${result}`);
var string_given="I am Angular developer";
console.log("Q2 **********************************************************************");
console.log("Befor Reverse given string:"+string_given);
var a=string_given.split("").reverse().join("");
console.log(`After Reverse String is:${a}`);
console.log("**********************************************************************");
console.log("length of given String is:"+string_given.length);
console.log("Total Words in String:4");
console.log("length divided by total word:5.5");
console.log("Length multiply by total word:88");
