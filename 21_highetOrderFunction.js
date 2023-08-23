function greet(callback)
{
    console.log("Good Morning");
    callback();
    let inner=function(){
        console.log("thamk you , i am fine");
    }
    return inner;
}
function inquire()
{
    console.log("how are you");
}
greet(inquire)();