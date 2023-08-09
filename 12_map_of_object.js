class student{
    rollno
    std_name
    std_city
    constructor(rollno,std_name,std_city)
    {
        this.rollno=rollno;
        this.std_name=std_name;
        this.std_city=std_city
    }
}
const std_anil=new student(11,"Anil","Pune");
const std_sunil=new student(11,"Sunil","Mumbai");
const std_Prafull=new student(11,"Prafull","Hingwadi");
const std_vikas=new student(11,"Vikas","Sangola");
const set_student=new Set();
set_student.add(std_anil);
set_student.add(std_sunil);
set_student.add(std_Prafull);
set_student.add(std_vikas);
console.log(set_student);
const student_map=new Map();
student_map.set(11,std_anil);
student_map.set(22,std_sunil);
student_map.set(33,std_Prafull);
student_map.set(44,std_vikas);
const keys_student=student_map.keys();
console.log(keys_student);


for (const key of keys_student) {
    const obj=student_map.get(key);
    console.log(obj);
}