var robot = require('robotjs');
var readline = require('linebyline');

var rl = readline('./password.txt');

// 首字母大写
function firstUpperCase (str) {
    return str.replace(/^\S/,function(s){return s.toUpperCase();});
}

var passwords = [];

rl.on('line', function(line, lineCount, byteCount) {
    passwords.push(line);
}).on('error', function(e) {
    console.log(e);
}).on('end', function(){
    console.log('read password end.');
    setTimeout(function(){
        resetPwd();
    }, 4000);
    
})

robot.moveMouse(500, 500);

var index = 0;
function resetPwd () {
    if (index === passwords.length - 1) {
        console.log('-----END----');
    } else {
        doEnterPwd(passwords[index++]);
        setTimeout(function(){
            resetPwd();
        }, 2000);
    }
}

function doEnterPwd (pwd) {
    console.log('check password: [', pwd, ']');
    robot.mouseClick();
    robot.typeString(pwd);
    robot.keyTap('enter');
}