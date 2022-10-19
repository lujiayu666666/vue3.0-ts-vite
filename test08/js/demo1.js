"use strict";
// ts中函数接口定义接使用
let md5 = function (label, name) {
    return `${label}：${name}`;
};
console.log(md5('姓名', '路佳宇')); // 姓名：路佳宇
let todo = (params) => {
    return `
          日期：${params.time}
          地点：${params.place}
          ${params.boyFriendName}和${params.girlFriendName}一起在${params.doSomeThing}
         `;
};
let info = todo({
    time: '2022-10-19',
    place: '嘉和锦绣园',
    boyFriendName: '宇哥',
    girlFriendName: '阿梦',
    doSomeThing: '看雪拍照'
});
console.log(info);
let arr1 = [true, 'hobby', 123];
console.log(arr1); // 可正确输出
let obj1 = {
    name: 'lujiayu',
    age: 24
};
console.log(obj1);
// 类类型接口就是  属性接口 + 函数接口的集合 
// 类类型接口的使用
class Pig {
    constructor(name, arr) {
        this.name = name;
        this.arr = arr;
    }
    eat() {
        return `${this.name}吃猪食，${this.arr.reduce((a, b) => a + b)}`;
    }
}
let zhu = new Pig('阿梦', [1, 2, 3, 4, 5]); // 阿梦吃猪食，15
console.log(zhu.eat());
class Cat {
    constructor(name, arr) {
        this.name = name;
        this.arr = arr;
    }
    eat(food) {
        return `${this.name}吃${food}，${this.arr.reduce((a, b) => a + b)}`;
    }
}
let c = new Cat('小白', [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
console.log(c.eat('猫粮'));
// 此时结合之前学的ts类+继承+属性接口+函数接口  做一个回顾以及练习
class Personal {
    constructor(name, age, sex, job) {
        this.name = name; // 改变this指向
        this.age = age;
        this.sex = sex;
        this.job = job;
    }
    run() { } // 多态   基类中我只定义  不做具体事情  
    work() {
        return `他叫${this.name}，是做${this.job}的`;
    }
    static staticFun() {
        return `${Personal.label}`;
    }
}
Personal.label = '个人信息：'; // Personal.label  所以不必传入constructor 改变其this的指向
// 年龄：${this.age}，性别：${this.sex},
let result = Personal.staticFun();
let p = new Personal('路佳宇', 24, '男', 'web前端');
console.log(result + p.work());
//继承
class Student extends Personal {
    constructor(name, age, sex, job, hobby) {
        super(name, age, sex, job);
        this.hobby = hobby;
    }
    run() {
        return `${this.name}正在运动哦`;
    }
    info() {
        return `${Personal.label}
    姓名：${this.name}
    性别：${this.sex}
    年龄：${this.age}
    工作：${this.job}
    爱好：${this.hobby}`;
    }
    example() {
        // console.log(this)
        // console.log(typeof Student);
    }
}
let s = new Student('路佳宇', 28, '男', 'web前端开发', 'football');
// console.log(s)
// Student {    打印  只打印了属性   没有方法。。。。 (为什么？)
//   name: '路佳宇',
//   age: 28,
//   sex: '男',
//   job: 'web前端开发',
//   hobby: 'football'
// }
s.example();
console.log(s.info());
// 再次巩固  ts类定义及使用 ts类的继承 多态  （抽象类型  使用关键字 abstract ）
