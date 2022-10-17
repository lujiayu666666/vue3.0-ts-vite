"use strict";
/*
 * @Author: lujiayu lujiayu@shiqiao.com
 * @Date: 2022-10-13 22:24:33
 * @LastEditors: lujiayu lujiayu@shiqiao.com
 * @LastEditTime: 2022-10-14 17:27:35
 * @FilePath: /tsTest/test02/demo1.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 因为JavaScript是弱类型语言，例如 '10' + 20 = 30 存在隐式转换  对开发者极不友好
// 未解决这一问题ts孕育而生，在编程中我们定义变量时就已确定好变量的类型，ts为我们提供一下几种数据类型
// 布尔类型(boolean)
// 数字类型(number)
// 字符串类型(string)
// 数组类型(array)
// 元组类型(tuple)
// 枚举类型(enum)
// 任意类型(any)
// null和undefined
// void类型
// never类型
// ***当我们定义变量确定好数据类型后不可在更改此变量的数据类型***
// 布尔类型(boolean)
let flag = true;
// flag = '123'  报错   当我们定义变量确定好数据类型后不可在更改此变量的数据类型
flag = false; //可以的
// 数字类型(number)
let num = 123;
// console.log(num);
num = 12.3; //是可以的   ts中没有对我们的整形和浮点型做明确的区分
// 字符串类型(string)
let str = 'this is ts';
// 数组类型(array)
// es5中定义数组
// let arr = [123,false,'ts']
// ts中定义数组  定义每一项为数字类型的数组
// 方法一
let arr = [1, 2, 3, 4];
let arr2 = ['lujiayu', 'qiushimeng']; //定义字符串类型数组
// 方法二
let arr3 = [1, 2, 3, 4];
let arr4 = ['lujiayu', 'qiushimeng']; //定义字符串类型数组
// 元组类型(tuple)   也属于是数组类型的一种   可以指定数组中每一项的数据类型 (可指多种不同数据类型)
let arr5 = ['js', 10, true, 'java'];
// 枚举类型(enum)
// enum 枚举名 {
//   标识符[=整形常数],
//   标识符[=整形常数],
//   ...
//   标识符[=整形常数]
// }
// 应用示例： payStatus 0未支付 1已支付 2交易成功       flag 0关闭  1开启
// 主要用于标识一个状态或固定值
var Flag;
(function (Flag) {
    Flag[Flag["success"] = 1] = "success";
    Flag[Flag["error"] = 0] = "error";
})(Flag || (Flag = {}));
let f = Flag.success;
// console.log(f) // 1
// 也可以直接当做一个变量来使用
// console.log(Flag.error) // 0
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["blue"] = 1] = "blue";
    Color[Color["black"] = 5] = "black";
    Color[Color["green"] = 6] = "green";
    Color["white"] = "ljy";
    // yellow, 报错
    // yellow = 'qsm' 正确
})(Color || (Color = {}));
let b = Color.blue;
console.log(b); // 1  如果没有赋值   默认打印的是下标
let g = Color.green;
console.log(g); // 6  如果此项没有赋值且上一项赋值的情况下   会以上一项为基准   打印的是6
let r = Color.red;
r = 10; // 也可以先定义在赋值  但这有背枚举类型意义了
console.log(r); // 10
// 任意类型(any)
// 可以随便定义类型  无实际意义  有背ts存在的意义  一般我们不确定此数据为什么类型时使用
// 或者我们变更页面某元素中的字体颜色
// <div id="box">摩托其实很危险别骑的太快！</ div>
// let el:any = document.getElementById('box')  其实el是一个对象 但ts中没有Object所以给定义成any任意类型
// el.style.color = 'red'
// null和undefined是  其他（nerve）数据类型的子类型
// let n:number
// console.log(n) // 控制台可正常打印出 编辑器报错 此时我们就要用到了  undefined类型
// let n:undefined
// console.log(n)  // 此时正常打印编辑器不报错   undefined
// 或者当我们定义一个变量但初始不赋值时我们可以这样写
let n;
n = 8;
console.log(n); // 8
// 一个变量可设置多个类型  前提是这个变量没有设置值的情况下
// 当一个变量可能是一个数字或null或undefined时  我们就可以这样写
let u;
u = 123;
console.log(u); // 123
// void类型表示没有任何类型   通常在我们定义一个函数 而这个函数没有任何返回值时使用（没有返回值既没有数据类型  这很好理解哈）
// 与any相反  any表示可以是任意类型
function sub(a, b) {
    let c = a + b;
    console.log(c); // 可以理解为没有return 也就是此函数没有输出值  时  使用 void标识没有任何类型
}
sub(100, 200);
function add(a, b) {
    let c = a + b;
    return c;
}
console.log(add(10, 20));
// never类型：是其他类型（包括 null和undefined）的子类型，从不会出现的值  
let a;
a = (() => {
    throw new Error('抛出一个错误'); // new Error为从不会出现的值   也就是其他类型   那么never一般这样使用
    // 当然我们此处可以使用string类型或any类型抛出
})(); // 匿名自执行函数

