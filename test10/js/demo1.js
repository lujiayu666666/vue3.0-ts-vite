"use strict";
/*
 * @Author: lujiayu lujiayu@shiqiao.com
 * @Date: 2022-10-20 19:59:51
 * @LastEditors: lujiayu lujiayu@shiqiao.com
 * @LastEditTime: 2022-10-23 20:18:26
 * @FilePath: /vue3.0-ts-vite/test10/demo1.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// ts 中泛型定义以及使用  
// 泛型函数
function getData(value) {
    return value;
}
console.log(getData(123));
// console.log(getData<number>('hello world'))  错误的写法
// 泛型类：比如我们有一个最小堆算法  同时返回字符串数字两种类型  通过类的泛型来实现
class MinClass {
    constructor() {
        this.list = [];
    }
    add(item) {
        this.list.push(item);
        return this.list;
    }
    min() {
        let min = this.list[0];
        for (let i = 0; i < this.list.length; i++) {
            const item = this.list[i];
            if (min > item) {
                min = item;
            }
        }
        return min;
    }
}
let m = new MinClass();
// 此处实例化并且定义了 泛型T 的类型是number数字类型
// 也就是说当我们使用 <T> 泛型的时候 在我们调用或实际应用处要表明 你的类型
// <T> 泛型作用：要求传入的参数类型 和 函数返回的数据类型必须一致
// 我们也可以理解为  这个 <T> 大写的T是一个数据类型参数变量 在我们调用或使用处  将这个类型传入即可
// let m = new MinClass<number>() <number>数字类型带入 class MinClass<T> {  <T>中 可理解为形参和实参的关系
console.log(m.add(10));
console.log(m.add(4));
console.log(m.add(7));
console.log(m.add(2));
console.log(m.min());
