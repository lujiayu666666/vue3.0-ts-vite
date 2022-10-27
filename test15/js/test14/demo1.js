/*
 * @Author: lujiayu lujiayu@shiqiao.com
 * @Date: 2022-10-26 16:24:08
 * @LastEditors: lujiayu lujiayu@shiqiao.com
 * @LastEditTime: 2022-10-26 17:09:12
 * @FilePath: /vue3.0-ts-vite/test14/demo1.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/**
 * ts 命名空间
 * 在代码量较大的情况下，为了避免各种变量命名冲突，可将相似功能的函数、类。接口等放置到命名空间内
 * 通java的包、.net的命名空间一样，ts的命名空间可以将代码包裹起来，只对外暴露需要在外部访问对象。
 * 命名空间内的对象通过 export 抛出   import 引用
 *
 * 命名空间和模块的区别
 * 命名空间：内部模块，主要用于组织代码，避免命名冲突
 * 模   块：ts的外部模块的简称，侧重于代码复用，一个模块内可能会有多个命名空间
 */
// 关键字  namespace
var A;
(function (A) {
    class Animal {
        constructor(name) {
            this.name = name;
        }
        eat(params) {
            console.log(`A：${params.color}颜色的${this.name}正在吃${params.food}`);
        }
    }
    A.Animal = Animal;
})(A || (A = {}));
var B;
(function (B) {
    class Animal {
        constructor(name) {
            this.name = name;
        }
        eat(params) {
            console.log(`B：${params.color}颜色的${this.name}正在吃${params.food}`);
        }
    }
    B.Animal = Animal;
})(B || (B = {}));
// 此时我们可以看到  Animal 类分别被 命名空间A、命名空间B所包裹
// 我们如果想要调用  Animal 这个类  我们需要  类的前面添加  关键字 export 将其抛出 （接口、类、函数都一样）
// 通过命名空间名.类名    来使用
let a = new A.Animal('qsm');
a.eat({ color: '白', food: '骨头' });
let b = new B.Animal('ljy');
b.eat({ color: '白', food: '饭' });
function todo(params) {
    return params;
}
console.log(todo({
    color: 'black',
    food: '骨头'
}));
// 命名空间也可以抽离成单文件
// export namespace A {   抛出
// import {A} form '../test01'   引用
