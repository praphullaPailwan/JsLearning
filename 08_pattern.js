let char="";
for (let i= 1; i <=5; i++) {
    for (let j=1; j<=i; j++) {
        char=char+"*";
    }
    char=char+"\n";
}
console.log(char);
let k="";
for (let i= 5; i>=1; i--) {
    for (let j=1; j<=i; j++) {
        char=char+"*";
    }
    char=char+"\n";
}
console.log(char);
var str="";
for (let i= 5; i>=1; i--) {
    for (let j=1; j<=i; j++) {
        str=str+"*";
    }
    str=str+"\n";
}
console.log(str);
var str="";
for (let i= 5; i>=1; i--) {
    for (let j=1; j<=i; j++) {
        str=str+"*";
    }
for(let k=1;k<=i;k++){
    str=str+"\n";
}
}
console.log(str);
