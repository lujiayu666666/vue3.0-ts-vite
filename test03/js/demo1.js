"use strict";
// ts定义函数
// es5 函数定义的方法
// 函数声明法
function run() {
    return 'run';
}
// 匿名函数定义法
let run2 = function () {
    return 'run2';
};
// 自执行函数定义法  ts文件中不可定义自执行函数  写法报错
// (function run3() {
//   return 'run3'
// })()
// es6 箭头函数
// setInterval(function () {
//   console.log('object')
// }, 1000)
// setInterval(() => { // 箭头函数  需要注意  函数中this指向上下文的问题
//   console.log('object')
// }, 1000)
// ts中定义函数  有返回值的返回值也要定义类型（此处要在函数头小阔后后面写数据类型  例：():boolean ）
//函数声明法
function run3() {
    return 'run3'; // 此函数中有返回值并且  函数头定义类型为字符串类型   那么此处return也要返回string类型 
}
// 匿名函数声明法
let run4 = function () {
    return 123; // 与上同理  函数头定义了返回值是数字类型   所以return的值也应该是数字类型
};
// ts函数传参  需要将参数根据需要定义数据类型
function getPersonalInfo(name, age) {
    return `姓名：${name}， 年龄：${age}`;
}
let result = getPersonalInfo('qsm', 24);
console.log(result);
// ts匿名函数声明
let getInfo = function (params) {
    return `姓名：${params.name}，性别：${params.sex}，年龄：${params.age}，职业：${params.job}`;
};
console.log(getInfo({
    name: '路佳宇',
    sex: '男',
    age: '24',
    job: 'web前端开发'
}));
// ts没有返回值时   使用void来声明函数数据类型   void类型表示没有任何类型
function run5() {
    console.log('路佳宇真垃圾奥');
}
run5();
// ts中函数的可选参数 
// es5中函数的形参和实参可以不一样
// function run6(a, b) {
//   console.log(a, b)
// }
// console.log(run6(1));
// 但ts中形参和实参必须一样，如果实际开发中遇到不一样的情况   那么我们就需要配置可选参数
// *** 注意：可选参数一定要写在到参数的最后面 ***
// function run7(name?: string, age: number): string {   写法报错 
function run7(name, age) {
    return `姓名：${name}， 年龄：${age || '年龄保密'}`;
}
console.log(run7('路佳宇啊'));
console.log(run7('路佳宇啊', 27));
// ts中函数的默认参数
// es5中参数不可以设置默认值， es6和ts中参数可以设置默认值
function run8(name, age = 20) {
    return `姓名：${name}， 年龄：${age || '年龄保密'}`;
}
console.log(run8('路佳宇'));
console.log(run8('路佳宇', 40));
// ts函数中的剩余参数
function run9(a, b, c, d) {
    return a + b + c + d;
}
console.log(run9(1, 2, 3, 4)); // 10
// console.log(run9(1,2,3,4,5))  当我们多传参数时  我们就要用数组的形式来接收参数了
// es6和ts中当参数个数不确定时  我们就可以用es6扩展运算符语法  ...result: number[] 或者 ...result: Array<number>
//es6扩展运算符方法   理解 ...result: Array<number>
// function arr(a,b,c,d) {
//   let a0 = [...a,b,c,d]
//   return a0
// }
// console.log(arr('1', '2','3','4'))
function run10(...arg) {
    return arg.reduce((n, m) => n + m);
}
console.log(run10(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
function run11(params) {
    // 此处可理解为根据参数不通的数据类型来走不通的逻辑
    if (typeof params === 'string') {
        return `我的名字叫${params}`;
    }
    else {
        return `我的年龄是${params}`;
    }
}
console.log(run11('路佳宇'));
console.log(run11(20));
// console.log(run11([1,2,3])); 函数run11只声明了string|number 类型的参数 当我们传入array类型是写法报错
// 那么此处也可以看出ts的作用  就是会鉴别你的数据类型
//解决ts函数参数多种数据类型的另一种写法
function run12(params) {
    if (typeof params === 'string') {
        return `我的名字叫${params}呀`;
    }
    else {
        return `我的年龄是${params}啊`;
    }
}
console.log(run12('路佳宇'));
console.log(run12(20));
// 函数重载配合   可选参数 使用示例
// function run13(name: string): string;
// function run13(name: string, age: number): string;
// function run13(params: any, age?: number): string {}
