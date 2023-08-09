function do_assignment(callback)
{
    console.log("solving assignment....");
    console.log("completed assignment");
    callback();
}
function copy_assignment()
{
    console.log("copying assignment....");
    console.log("copying assignment done");
}
do_assignment(copy_assignment);