console.log("-------------------Function Expression---------------");
console.log("1. Square of Number-->");
var display=function (arg1){
      var result=arg1*arg1;
      console.log(`Squre of ${arg1} is= ${result}`);
}
display(5);
display(6);
display(25);
display(100);
display(67.89);
display(59);
console.log("----------------------------------------------------------------");
console.log("2. Type of Function-->");
var functiontype=function(){
    var result=typeof functiontype;
    console.log( `Type of Function is= ${result}`);
}
functiontype();

console.log("----------------------------------------------------------------");
console.log("3.Find Area of Rectangle-->");
var areaofRect=function(arg1,arg2){
    var result=arg1*arg2;
    console.log(`Area of Rectangle= ${result}`);
}
areaofRect(499,917);

console.log("----------------------------------------------------------------");
console.log("4. Swap the Value-->");
var swap=function(arg1,arg2){
console.log(`Befor Swap Values are Value1= ${arg1} value2= ${arg2} `);
  var temp=arg1;
  arg1=arg2;
  arg2=temp;
  console.log(`Aefor Swap Values are Value1= ${arg1} value2= ${arg2} `);
}
swap("Mahi","Rania");
swap(55,66);

console.log("----------------------------------------------------------------");
console.log("5. ");
var stringFunction=function(arg1){
    var result=arg1.length;
console.log(`Total Character in Given String= ${result}`);
result=arg1.charAt(6);
console.log(`Character At 6th Position is =${result}`);
result=arg1.charAt(11);
console.log(`Character At 11th Position is =${result}`);
result=arg1.charAt(arg1.length-1);
console.log(`Character At Last Position is =${result}`);
result=arg1.charAt(0);
console.log(`Character At First Position is =${result}`);
result=arg1.length-1;
var split_string =arg1.split(" ");
var words_count = split_string.length;
console.log(`Total Number of Words in Given String is= ${words_count} And Square of Total No Word is= ${words_count*words_count} `);
}
stringFunction("JS the most popular language of internet");