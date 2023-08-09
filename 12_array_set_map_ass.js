class Bank {
    bank_name
    location
    account_no
    ifsc
    interest_rate
    constructor(bank_name,location,account_no,ifsc,interest_rate) {
        this.bank_name=bank_name;
        this.location=location;
        this.account_no=account_no;
        this.ifsc=ifsc;
        this.interest_rate=interest_rate;

    }
}

const axis_bank=new Bank("AXIX Bank","Mumbai",1,111,"8%");
const sbi_bank=new Bank("SBI Bank","Delhi",2,222,"5%");
const icici_bank=new Bank("ICICI Bank","SAngola",3,333,"7%");
const kotak_bank=new Bank("Kotak Bank","Solapour",4,444,"9%");
const hdfc_bank=new Bank("HDFC Bank","Pune",5,555,"8%");
const panjab_bank=new Bank("Panjab Bank","Panjab",6,666,"10%");
const my_bank=[axis_bank,sbi_bank,icici_bank,kotak_bank,hdfc_bank,panjab_bank];

for (const bank of my_bank) {
    if (bank.bank_name=="Kotak Bank") {
        console.log(`${bank.account_no} ${bank.bank_name}`);
        
    }
}
console.log("*****************************All bank details using Array*******************");
for (const element of my_bank) {
    console.log(`Bank Details==>${element.bank_name} ${element.account_no} ${element.location} ${element.ifsc} ${element.interest_rate}`);
    
}

console.log("*****************************All bank details using Set*******************");
const set_bank=new Set();
for (const bank of my_bank) {
    set_bank.add(bank)
    
}
for (const element of my_bank) {
    console.log(`Bank Details==>${element.bank_name}  ${element.ifsc} ${element.interest_rate}`);
    
}
console.log("*****************************All bank details using Map*******************");
const map_bank=new Map();
map_bank.set(1,axis_bank);
map_bank.set(2,sbi_bank);
map_bank.set(3,icici_bank);
map_bank.set(4,kotak_bank);
map_bank.set(5,hdfc_bank);
map_bank.set(6,panjab_bank);
const map_kays=map_bank.keys();
for (const kay of map_kays) 
{
    const element=map_bank.get(kay);
    console.log(`Bank Details==>${element.bank_name} ${element.account_no} ${element.location} ${element.ifsc} ${element.interest_rate}`);
    console.log(element);
}
// map_bank.get(222)
// for (const element of my_bank) {
//     console.log(`Bank Details==>${element.bank_name}  ${element.ifsc} ${element.interest_rate}`);
    
// }

// for (const bank of my_bank) {
//     if (bank.bank_name=="kotak_bank") {
//         console.log(`${bank.account_no} ${bank.account_no}`);
        
//     }
// }