"use strict";
/*
 * @Author: lujiayu lujiayu@shiqiao.com
 * @Date: 2022-10-19 22:35:40
 * @LastEditors: lujiayu lujiayu@shiqiao.com
 * @LastEditTime: 2022-10-20 19:54:50
 * @FilePath: /vue3.0-ts-vite/test09/demo1.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// ts中接口扩展    接口可以继承接口
class Programmer {
    constructor(name) {
        this.name = name;
    }
    coding(code) {
        console.log(this.name + code);
    }
}
class Web extends Programmer {
    constructor(name) {
        super(name);
    }
    eat() {
        console.log(`${this.name}在吃饭`);
    }
    work(job) {
        console.log(`${this.name}在工作，他是一名${job}`);
    }
}
let p = new Web('路佳宇');
p.eat(); // 路佳宇在吃饭
p.work('web前端开发工程师'); // 路佳宇在工作，他是一名web前端开发工程师
p.coding('正在学习Ts'); // 因为web类继承programmer类 所以 p 可以执行coding方法
