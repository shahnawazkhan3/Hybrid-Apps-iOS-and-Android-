var a = "shah";
console.log(a);
//======calling function
// function disply() {
//     console.log("function calling");
// }
// disply();
//==========================Returning a Function===================
function demo() {
    return "shah";
}
function displyss() {
    var msg = demo();
    console.log(msg);
}
displyss();
//==================Parameterized a Function=========
function paraFunction(n1, s1) {
    console.log(n1);
    console.log(s1);
}
paraFunction(868, "khan");
//==================Optional Parameters==========
function disp_details(id, name, mail_id) {
    console.log("ID:", id);
    console.log("Name", name);
    if (mail_id != undefined)
        console.log("Email Id", mail_id);
}
//disp_details(123, "John");
disp_details(111, "mary", "mary@xyz.com");
//===============Rest Parameters===============
function addNumbers(n1) {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i - 0] = arguments[_i];
    }
    var i;
    var sum = 0;
    for (i = 0; i < nums.length; i++) {
        sum = sum + nums[i];
    }
    console.log("sum of the numbers", sum);
}
//addNumbers(1, 2, 3);
addNumbers(10);
