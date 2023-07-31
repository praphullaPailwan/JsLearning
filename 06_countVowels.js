var str=" I Love Javastript";
var str1=str.toString();
var count=0;
for (let index = 0; index < str.length; index++) {
    if(str1.charAt(index)=="a"||str1.charAt(index)=="e"||str1.charAt(index)=="i"||str1.charAt(index)=="o"||str1.charAt(index)=="u"||str1.charAt(index)=="A"||str1.charAt(index)=="E"||str1.charAt(index)=="I"||str1.charAt(index)=="O"||str1.charAt(index)=="U")
    {
        count++;
    }
}
console.log(`Total Vowels in string=${count}`);

var sum=0;
var i=1;
while (i<=10) {
    sum+=i;
    i++;
}
console.log(`Sum of 1 to 10 is =${sum}`);