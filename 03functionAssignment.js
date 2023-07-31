console.log("---------------Function Assignment 1---------------");
console.log("Question No 1->");
function show()
{
    console.log("My Name is Prafull");
}
function display()
{
    console.log("Angular Developer");
}
show();
display();
console.log("-------------------------------------------------------------");
console.log("Question No 2->");
function personalDetails()
{
    var firstName="Prafull";
    var lastName="Pailwan";
    var collegeName="Sangola College Sangola";
    console.log("Personal Details ->");
    console.log("First Name=",firstName,  "Last Name=",lastName);
    console.log("College Name=",collegeName);
}
personalDetails();
console.log("-------------------------------------------------------------");
console.log("Question No 3->");
function swapValues(value1,value2)
{
    console.log("Before Swaping->  First Value=",value1,"Second Value=",value2);
    var temp=value1;
    value1=value2;
    value2=temp;
    console.log("Before Swaping->  First Value=",value1,"Second Value=",value2);
}
swapValues("Virat","Anushka")
swapValues(1000,2000);

console.log("-------------------------------------------------------------");
console.log("Question No 4->");
function addThreeValues(arg1,arg2,arg3)
{
    var add=arg1+arg2+arg3;
    console.log("Addition of Three Values=",add);
}
addThreeValues(10.23,600,40);
addThreeValues("Hello","Good","Morning");
console.log("-------------------------------------------------------------");
console.log("---------------Function Assignment 2---------------");
function bankDetails(bankName,accountNo,location,pincode)
{
    console.log(bankName,"Details-->","Bank Name=",bankName,"Account No=",accountNo,"Location=",location,"Pin Code=",pincode);
}
bankDetails("CITI Bank",3456782345,"Pune",431202);
bankDetails("AxIS Bank",4865874562,"Mumbai",441202);
bankDetails("HDFC Bank",8956782345,"Pune",631202,"Open");