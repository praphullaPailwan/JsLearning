var  great="Good Morning";
var cher_in_great=great.charAt(3);
console.log(cher_in_great);

var fname="prafull";
var lname="pailwan";
var name=fname.concat(lname);
console.log(name);

var p=great.indexOf("o");
console.log(p);
console.log(great.toLocaleUpperCase());
console.log(great.toLowerCase());
var greet = "Good Morning";
var char_in_greet = greet.charAt(3);
console.log(char_in_greet);



 var message = "  Good evening     ";
 console.log("Before trim() " + message.length);

 var trimmedString = message.trim();

 console.log("After trim() " + trimmedString.length);
console.log(message.search("ing"));
var slice = greet.slice(5, 8);
console.log(slice);

var substring = greet.substring(5, 8);
console.log(substring);

greet = "Hello Good morning buddy";
var words = greet.split(" ");
console.log(words.length);
