// let age=22;
// let person={
//     pName:'prafull',
//     last:'pailwan',
//     mobile:"9022 419 718",
//     address:{
//         city:"Sangola",
//         Dist:"Solapur",
//         State:"Maharastra",
//     },
//     details:function(){
//         console.log(`Details=${person.pName}   ${person.last}  \nmobileN0:${this.mobile}`)
//     }
    
//     }
    
//     console.log(`Details=${person.pName}  ${person.last}  \nmobileN0:${person.mobile}`);
//     person.pancard="PPP 9187";
//     console.log(person);
//     person.pName = "Master Blaster"; // Update
//     console.log(person);
//     delete person.pancard;
//     console.log(person);
// console.log(typeof person);
// console.log(person.email);
// person.details();
// console.log(person.address.city,person.address.Dist,person.address.State)
// person.address.pinCode=413307;
// console.log(person.address);
// const student = {

// }
// console.log(student);

const teacher= {
    first_name: 'Praphulla',
    last_name: 'Pailwan',
    mobile: "9022 419 718",
    dateOfBirth:"25-02-1999",
    age:22,
    degree:{
        graduation:'Bsc',
        post_Graduation:'Msc',
        course:'Coumputer Science',
    },
    certificate:{
        certificate1:"a:Advanced Programing",
        certificate2:'B:Hacker Rank Participation',
    },
    teacher_degree:function(){
              return ` Teachers Degrees:${teacher.degree.graduation} ${teacher.degree.post_Graduation} ${teacher.degree.course} `;
    }
    // address: {
    //     city: "Pune",
    //     state: "MH",
    //     country: "India",
    //     district: "PUNE",
    //     taluka: "PUNE",
    //     village: "Roshangoan",
    //     pin_code: 431202,
    // },
    // details: function () {
    //     return `Person Details ${this.first_name} ${this.last_name} ${this.adhar} ${this.mobile}`;
    // }
}
console.log(`Object Teacher \n`);
console.log(teacher);
console.log("--------------------------------------------------------------------------------");
console.log(`Object Nested Degree `);
console.log(teacher.degree);
console.log("--------------------------------------------------------------------------------");
console.log(`Object Nested Cerficate`);
console.log(teacher.certificate);
console.log("--------------------------------------------------------------------------------");
console.log(`Object function Showing Teacher Degree:`);
let details=teacher.teacher_degree();
console.log(details);
console.log("--------------------------------------------------------------------------------");
teacher.subject="Java";
console.log("Added Propetry");
 console.log("Added property is Subject:",teacher.subject);
 console.log("--------------------------------------------------------------------------------");
console.log(`Update Property Name `);
teacher.first_name="Vikas";
console.log(teacher);
console.log("Updated Property Name is:",teacher.first_name);
console.log("--------------------------------------------------------------------------------");
console.log(`Deleting Property age `);
delete teacher.age;
console.log(teacher);
console.log("--------------------------------------------------------------------------------");
teacher.certificate.certificate3='Advanced Java Programing';
console.log("Adding New Property inCertificate  ");
console.log(teacher.certificate);
// console.log(person.first_name); // Access the property
// console.log(person["adhar"]);

// person.pan_card = "CDBPK45678"; // Adding new property
// console.log(person);

// person.first_name = "Master Blaster"; // Update 
// console.log(person);

// delete person.adhar; // delete property
// console.log(person);

// console.log(person.is_married);

// let details = person.details();
// console.log(details);

// console.log(typeof person.address);
// console.log(person.address.city, person.address.village);
// person.address.pin_code = 431203;
// console.log(person.address);
const stud= {
    first_name: 'Praphulla',
    last_name: 'Pailwan',
    mobile: "9022 419 718",
    dateOfBirth:"25-02-1999",
    age:22,
}
const stud_keys=Object.keys(stud);
console.log(stud_keys)
const student_values = Object.values(stud);
 console.log(student_values);

const student_entries = Object.entries(stud);
console.log(student_entries);
for (const key in stud) {
    if (Object.hasOwnProperty.call(stud, key)) {
        const element = stud[key];
        console.log(`${key}  ${element}`);
    }
}
const is_first_name_available = "first_name" in stud;
console.log(`Is Available ${is_first_name_available} `);
const students={
    
}
