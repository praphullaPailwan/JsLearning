function is_even_positioned(my_string) {
    console.log(`Even Positioned Characters`);
    var my_string = "Hard work always pays back";
    for (let index = 0; index < my_string.length; index++) {
        if (index % 2 == 0) {
            var char = my_string.charAt(index);
            if (char != "") {
                console.log(`${my_string.charAt(index)}`);
            }
        }
    }
}
var my_string = "Hard work always pays back";
is_even_positioned(my_string)


function square()
{
    for (let index = 1; index <=5; index++) {
        var result=index*index;
        console.log(`Square of ${index} is${result}`);
    }
   
}
square();