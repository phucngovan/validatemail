regexp = /^[A-Za-z0-9]+[A-Za-z0-9]*@[A-Za-z0-9]+\.[A-Za-z0-9]+$/;
function check(str) {
    return regexp.test(str);

}
let arr=['a@gmail.com',
    'ab@yahoo.com',
    'abc@hotmail.com',
    '@gmail.com',
    'ab@gmail',
    '@#abc@gmail.com'];
for (let w of arr) {
    if (check(w)) { console.log("'"+w+"'" +"là 1 email hợp lệ!!!");
    }else {
        console.log("'"+w+"'" +"là 1 email không hợp lệ!!!");
    }
}