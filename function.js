var student=
{
    id:7,
    name:"Adya",
    branch:"CSE",
    writingexam:function()
    {
        console.log("writing exam");

    },
    display:function()
    {
        console.log(this.id+" "+this.branch+" "+this.name)
    },
    id:23,
        
}
var id_no='id'
console.table(student);
student.display();
student.writingexam();
console.log(student['id']);
console.log(student[id_no]);