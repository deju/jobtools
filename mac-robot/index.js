var robot = require('robotjs');
var readline = require('linebyline');

var rl = readline('./password.txt');

var passwords = [];
var checkedIndex = 0;

// 读取文件，按行读取
rl.on('line', function(line, lineCount, byteCount) {
    passwords.push(line);
}).on('error', function(e) {
    console.log(e);
}).on('end', function(){
    console.log('read file finished.');
    passwords = concatPwd(passwords);
    console.log('will check ', passwords.length, ' passwords');

    setTimeout(function(){
        robot.moveMouse(500, 500);
        checkPwd();
    }, 4000);
    
})

// 校验密码
function checkPwd () {
    if (checkedIndex === passwords.length - 1) {
        console.log('-----END----');
    } else {
        doEnterPwd(passwords[checkedIndex++]);
        setTimeout(function(){
            resetPwd();
        }, 2000);
    }
}

// 输入密码
function doEnterPwd (pwd) {
    console.log('check password: [', pwd, ']');
    robot.mouseClick();
    robot.typeString(pwd);
    robot.keyTap('enter');
}

// 将pwds关联,如 juju, 123组合成juju123, 123juju
function concatPwd (pwds) {
    var rets = [],
        len = pwds.length;

    for (var i = 0; i < len; i++) {

        rets.push(pwds[i]);
        
        for (var m = 0; m < len; m++) {
            var im = pwds[i] + pwds[m],
                imUpper = firstUpperCase(im);
            rets.push(im);
            if (im !== imUpper){
                rets.push(imUpper);
            }

            for (var j = 0; j < len; j++) {
                var imj = pwds[i] + pwds[m] + pwds[j],
                    imjUpper = firstUpperCase(imj);
                rets.push(imj);
                if (imjUpper !== imj) {
                    rets.push(imjUpper);
                }
            }
        }
    }
    return rets;
}

// 首字母大写
function firstUpperCase (str) {
    return str.replace(/^\S/,function(s){return s.toUpperCase();});
}