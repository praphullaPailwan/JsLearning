let addressStr=`
{
    "Location":"Pune",
    "PIN":413307
}`;
const address=JSON.parse(addressStr);
console.log(`Type of addressStr : ${typeof addressStr}`);
console.log(`Type of address:${address}`);
console.log(address);
console.log(address.Location);
console.log("*****************************************");
const student={
    rollNO:123,
    name:"Prafull Pailwan",
    marks:75,
    awards:{
        hsc:"School tooper",
        Ssc:"Division Topper",
        graduation:"Gold Modilist"
    }
}
let studentStr=JSON.stringify(student);
console.log(studentStr);