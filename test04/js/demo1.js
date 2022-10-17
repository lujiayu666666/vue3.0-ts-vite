"use strict";
/*
 * @Author: lujiayu lujiayu@shiqiao.com
 * @Date: 2022-10-17 14:11:38
 * @LastEditors: lujiayu lujiayu@shiqiao.com
 * @LastEditTime: 2022-10-17 14:31:49
 * @FilePath: /tsTest/test04/demo1.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 本节主讲es5继承  请转至js文件夹下的demo1.js文件中查看

// es5构造函数创建
function Personal(name, age) {
  this.name = name  // 构造函数Personal的属性 
  this.age = age    // 构造函数Personal的属性 
  this.run = function () {   //构造函数Personal的方法
    console.log(`${this.name}在运动`)
  }
}

Personal.prototype.sex = '男'  // 构造函数Personal原型链上的属性
Personal.prototype.work = function () {  // 构造函数Personal原型链上的方法
  console.log(`${this.name}是个${this.sex}孩，今年${this.age}岁，此时的他已经在工作了`)
}

// 使用构造函数 
let p = new Personal('路佳宇', 20) // new一个实例赋值给一个变量
// new Personal() new一个实例其实就是自身的属性方法以及它原型上的属性和方法给另一个变量
// 这里变量p就可以调用构造函数Personal中的属性与方法，也可以使用构造函数原型上的方法
p.run() 
p.work()

// 一个构造函数继承另一个构造函数     对象冒充继承法（寄生式继承）
function GetInfo(name, age) {
  Personal.call(this, name, age) // 对象冒充继承法 （寄生式继承）
}
// Personal.call(this, name, age) 这里将构造函数Personal继承给构造函数GetInfo
let g = new GetInfo('李四') // 此处new GetInfo() 给变量P 且参数传入李四
console.log(g.name) // 李四 
g.run() // 可执行构造函数内的方法
// g.work() 此处报错不能继承Personal原型上的方法

// 此时我们需要将构造函数Personal原型上的方法继承到构造函数GetInfo的原型上
GetInfo.prototype = Personal.prototype
let info = new GetInfo('张三', 17) // 此处是原型链继承
info.work()

// ***总结***
/*
  一、构造函数继承（对象冒充继承 | 寄生式继承）
    作用：可继承目标函数的属性与方法
    缺点：无法继承目标函数原型链上的属性与方法
  二、原型链继承
    作用：可继承目标函数的属性与方法
    缺点：new出来的子类无法向父类传递参数，也就是父类获取不到参数
  三、寄生原型链组合式继承
    作用：可继承目标函数内的和原型链上的属性和方法。可接收到参数，完善的继承方式
    es5中最常用最完善的继承方式
*/


console.log(info) // 此处打印出来的
// Personal { name: '张三', age: 17, run: [Function (anonymous)] }
// 就是一个对象   此处延伸知识点   原型链、对象、函数之间的关联。 new Personal() 过程发生了什么事





