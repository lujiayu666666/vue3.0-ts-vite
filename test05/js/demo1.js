"use strict";
//第五天
// 1、ts中定义类及使用
class Personal {
    constructor(name) {
        // 会将ts类中的属性绑定到实例化的这个对象上 可理解为改变this指向到实例化的这个对象上 
        this.name = name;
    }
    run() {
        console.log(`我的名字叫${this.name}`);
    }
    getName() {
        return this.name;
    }
    setName(n) {
        this.name = n;
        return `已将名字改为${this.name}`;
    }
}
// 实例化
let p = new Personal('路佳宇');
// 执行实例化后的方法
p.run();
console.log(p.getName());
console.log(p.setName('邱诗梦'));
// 2、ts中   如何实现继承   两个关键字  extends、super
class GetInfo extends Personal {
    constructor(name) {
        // 初始化父类的构造函数 
        super(name); // super关键字的作用就是调用父类的构造函数 constructor  那么作用是一样 改变了this的指向
    }
    run() {
        return `${this.name}在运动--子类`;
    }
    work() {
        return `${this.name}在工作`;
    }
}
let g = new GetInfo('张三');
console.log(g.run());
console.log(g.work());
/**
 * ts继承探讨：
 *  1、子类可一直使用父类中定义的方法   当然也可以在子类中扩展私有方法 例如上面的work()方法
 *  2、当子类和父类存在相同方法名时，首先先到子类中寻找，子类中没有再去父类中寻找
 */
// 3、ts中的修饰符  
/**
 * 1、public:    公有     在当前类里面、子类、类的外面（可以理解问全局作用域）都可以访问
 * 2、private:   私有     在当前类里面可以访问，子类和类外面不可以访问
 * 3、protected: 保护     在当前类里面、子类中可以访问，类外面不可以访问
 * 注：如果类中定义的属性没有添加修饰符，那么默认为 public 公有
 */
// 示例
class Personal1 {
    constructor(name, sex, age) {
        this.name = name;
        this.sex = sex;
        this.age = age;
    }
}
