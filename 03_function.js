function checkType(value)
{
    console.log(value)
}
checkType(1);
checkType();
function add(arg1,arg2,arg3)
{
    var r=arg1+arg2+arg3;
    return r;
}
var re=add(10,20);
console.log(re);
var re =add(-56,239,677);
console.log(re);
re=add('GK',"Pune",50);
console.log(re);

function display()
{
    return 'Learning JS'
}
var result=display();
console.log(result);