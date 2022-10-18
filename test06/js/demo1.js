"use strict";
/*
 * @Author: lujiayu lujiayu@shiqiao.com
 * @Date: 2022-10-17 21:42:55
 * @LastEditors: lujiayu lujiayu@shiqiao.com
 * @LastEditTime: 2022-10-18 16:38:39
 * @FilePath: /vue3.0-ts-vite/test06/demo1.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// ts 中定义类的静态方法   和   静态属性
class Personal {
    constructor(name) {
        this.name = name;
    }
    run() {
        console.log(`${this.name}在运动`);
    }
    work() {
        console.log(`${Personal.age}`); // 实例方法中可以使用静态属性
        console.log(`${this.name}在工作`);
    }
    // 静态方法需要关键字  static
    static print() {
        // console.log(`这里是静态方法 name: ${this.name}`) 静态方法中无法直接使用类里面定义的属性
        console.log(`这里是静态方法 age: ${Personal.age}`);
    }
}
Personal.age = 20; // 静态属性
let p = new Personal('路佳宇');
p.run();
p.work();
Personal.print(); // 类名.静态方法名()  这样的格式来调用 ts类的静态方法
console.log(Personal.age); // 静态属性   类名.静态属性名 
// ts 中 类继承多态   
// 多态：父类定义一个方法不去实现，让继承他的子类去实现  每一个子类有不同的表现   多态也是属于继承
class Animal {
    constructor(name) {
        this.name = name;
    }
    eat() {
        console.log('吃的方法');
    }
}
class Dog extends Animal {
    constructor(name) {
        super(name);
    }
    eat() {
        console.log(`${this.name}吃的是骨头`);
    }
}
class Cat extends Animal {
    constructor(name) {
        super(name);
    }
    eat() {
        console.log(`${this.name}吃的是鱼`);
    }
}
let d = new Dog('小狗');
d.eat();
let c = new Cat('小猫');
c.eat();
// ts中的抽象类：它是提供其他继承的基类，不能直接被实例化
// 用abstract关键字定义抽象类和抽象方法，抽象类和抽象方法不包含具体实现并必须在派生类中实现
// abstract抽象类方法只能放在抽象类里面
//抽象类和抽象方法有来定义标准  以Animal举例   所有继承Animal类的子类一定要包含eat方法
// 抽象类的定义
class Animal1 {
    constructor(name) {
        this.name = name;
    }
}
class Pig extends Animal1 {
    constructor(name, age) {
        super(name);
        this.age = age;
    }
    eat() {
        return `${this.name}吃猪食，已经活了${this.age}岁了`;
    }
}
let i = new Pig('猪', 2);
console.log(i.eat());
/**
 * 抽象类   他就是个标准是一个基类   那么既然标准已经定义好了
 * 如果我们想子类去继承这个标准基类   那么我们就要在子类中使用抽象类汇总定义好的抽象方法
 * 由此可以看出   其实抽象类和多态性质是一样的  只不过抽象类要求了  所继承的子类必须使用抽象类中的抽象方法
 * 否则 也就失去了抽象类的意义   （标准有了你想基于这个标准做事，就要按照这个标准要求来）
 */
