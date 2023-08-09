class student{
    name
    lastName
    age
    address


  constructor(name,lastName,age,address)
  {
    this.name=name;
    this.lastName=lastName;
    this.age=age;
    this.address=address;
     console.log()
  }
  details() {
    console.log(` ${this.name} ${this.lastName} ${this.age} ${this.address}`);
}

}
const p=new student("Praphulla","Pailwan",22,"Sangola");
console.log(`Information : ${p.name} ${p.lastName} ${p.age} ${p.address}`);
const q=new student("Vikas","Pailwan",22,"Sangola");

p.details();