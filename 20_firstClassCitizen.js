// 1.function expression
// 2.Callback
// 3.function can return another Function
function show()
{
    console.log(`Inside Show function`);
   let inner=function(){
    console.log(`Inside inner function`);
   }
   return inner;
}
let i=show();
i();
show()();