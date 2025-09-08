
//对于重复性的代码 ，可以模块化 写在另外一个文件中，用于引用 提高代码的复用性
// 引入打印日志的函数
import { printLog } from './printLog.js'    

document.querySelector('#btn2').addEventListener('click', function () {
    printLog('点击了按钮')
});

document.querySelector('#last').addEventListener('mouseenter', function () {
    printLog('鼠标移入了')
});
document.querySelector('#last').addEventListener('mouseleave', function () {
    printLog('鼠标离开了')
});
document.querySelector('#age').addEventListener('input', function () {
    printLog('输入了内容')
});
document.querySelector('form').addEventListener('submit', function () {
    printLog('提交了内容-----------------')
});
document.querySelector('#username').addEventListener('focus', function () {
    printLog('获取焦点')
});
document.querySelector('#username').addEventListener('blur', function () {
    printLog('失去焦点')
});
document.querySelector('#username').addEventListener('keyup', function () {
    printLog('键盘抬起了')
});
document.querySelector('#username').addEventListener('keydown', function () {
    printLog('键盘按下了')
});