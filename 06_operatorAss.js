console.log("------------------------Assignment No 1---------------------");
var tcsEligibility=function(gradScore,hscScore,sscScore,candidateName)
{
    var result=gradScore>=70||hscScore>=80||sscScore>=90?`Congrats ${candidateName} you are Eligible For TCS Interview`:`Sorry ${candidateName} you are not Eligible For TCS Interview`;
    console.log(`${result}`);
    console.log("------------------------------------------------------");
}
tcsEligibility(80,88,90,"Prafull");
tcsEligibility(70,65,90,"Vikas");
tcsEligibility(60,79,88,"Rahul");
console.log("\n\n------------------------------Assignment2---------------------");
console.log("Question No 1.");
var maleMarrigeEligibility=function(gender,age,boyname)
{
    var result=gender="Male"&&age>=21?`Hey ${boyname} You are eligible for Marriage`:`Sorry ${boyname} You are not eligible for Marrige`;
    return result;
}
var result1=maleMarrigeEligibility("Male",25,"Billgates");
console.log(result1);
console.log("-----------------------------------------");
var result1=maleMarrigeEligibility("Male",17,"Billgates");
console.log(result1);
console.log("------------------------------------------------------------");
console.log("Question No 2.");
var femaleMarrigeEligibility=function(gender,age,boyname)
{
    var result=gender="Female"&&age>=18?`Hey ${boyname} You are eligible for Marriage`:`Sorry ${boyname} You are not eligible for Marrige`;
    return result;
}
var result1=maleMarrigeEligibility("Female",16,"Jenifer");
console.log(result1);
console.log("-----------------------------------------");
var result1=maleMarrigeEligibility("Female",27,"Malinda Gates");
console.log(result1);