// ts中函数接口定义接使用

interface Encryption {  // 函数接口 
  (key: string, value: string): string // 此处写函数的参数以及函数的返回值 
}

let md5: Encryption = function (label: string, name: string) { // 函数接口的使用  此处的参数必须遵循函数接口定义的标准
  return `${label}：${name}`
}

console.log(md5('姓名', '路佳宇')) // 姓名：路佳宇

// 作用：函数接口对定义的放大进行约束  那也是接口的意义  
// Encryption 此接口也可复用  let sha1:Encryption = function (a: string, b: string): string 




//属性接口 
interface Thing {
  time: string
  place: string
  boyFriendName: string
  girlFriendName: string
  doSomeThing: string
}
// 函数接口 搭配  属性接口使用
interface DoThing {
  (params: Thing): string
}

let todo: DoThing = (params) => {
  return `
          日期：${params.time}
          地点：${params.place}
          ${params.boyFriendName}和${params.girlFriendName}一起在${params.doSomeThing}
         `
}

let info = todo({
  time: '2022-10-19',
  place: '嘉和锦绣园',
  boyFriendName: '宇哥',
  girlFriendName: '阿梦',
  doSomeThing: '看雪拍照'
})
console.log(info);



// 索引接口  是对数组和对象的约束 （不常用）
interface Arr{
  // [index: number]: any
  // [index: number]: string
  [index: number]: string | number | boolean
}
let arr1: Arr = [true, 'hobby', 123]
console.log(arr1) // 可正确输出

interface Obj{
  [index: string]: any
}

let obj1: Obj = {
  name: 'lujiayu',
  age: 24
}
console.log(obj1);


// 类类型的接口   （长用）
interface Animal{
  name: string // 属性
  // arr: Array<number | string>
  arr: Array<number>
  eat(params?: string): string // 方法   可选参数
}
// 类类型接口就是  属性接口 + 函数接口的集合 

// 类类型接口的使用

class Pig implements Animal {
  name: string
  arr: Array<number>
  constructor(name: string, arr: Array<number>) {
    this.name = name
    this.arr = arr
  }
  eat(): string {
    return `${this.name}吃猪食，${this.arr.reduce((a: number, b: number) => a + b)}`
  }
}

let zhu = new Pig('阿梦', [1, 2, 3, 4, 5]) // 阿梦吃猪食，15
console.log(zhu.eat())


class Cat implements Animal{
  name: string
  arr: Array<number>
  constructor(name: string, arr: Array<number>) {
    this.name = name
    this.arr = arr
  }
  eat(food: string): string {
    return `${this.name}吃${food}，${this.arr.reduce((a: number, b: number) => a * b)}`
  }
}

let c = new Cat('小白', [1,2,3,4,5,6,7,8,9])
console.log(c.eat('猫粮'));












// 此时结合之前学的ts类+继承+属性接口+函数接口  做一个回顾以及练习

class Personal {
  // public    公有 基类、子类、全局皆可访问
  // private   私有 基类可访问  子类、全局不可访问
  // protected 保护 基类、子类可访问  全局不可访问
  public name: string // 定义公有属性 
  public age: number
  public sex: string
  public job: string
  static label: string = '个人信息：' // Personal.label  所以不必传入constructor 改变其this的指向
  constructor(name: string, age: number, sex: string, job: string) { // 实例化触发此方法
    this.name = name // 改变this指向
    this.age = age
    this.sex = sex
    this.job = job
  }

  run(): void { } // 多态   基类中我只定义  不做具体事情  

  work(): string {
    return `他叫${this.name}，是做${this.job}的`
  }

  static staticFun(): string {   // 静态方法里只能用静态属性
    return `${Personal.label}`
  }
}
// 年龄：${this.age}，性别：${this.sex},
let result = Personal.staticFun()
let p = new Personal('路佳宇', 24, '男', 'web前端')
console.log(result + p.work());

//继承
class Student extends Personal {
  public hobby: string
  constructor(name: string, age: number, sex: string, job: string, hobby: string) {
    super(name, age, sex, job)
    this.hobby = hobby
  }

  run(): string {
    return `${this.name}正在运动哦`
  }

  info(): string {
    return `${Personal.label}
    姓名：${this.name}
    性别：${this.sex}
    年龄：${this.age}
    工作：${this.job}
    爱好：${this.hobby}`
  }

  example(): void {
    // console.log(this)
    // console.log(typeof Student);
  }
}

let s = new Student('路佳宇', 28, '男', 'web前端开发', 'football')

// console.log(s)
// Student {    打印  只打印了属性   没有方法。。。。 (为什么？)
//   name: '路佳宇',
//   age: 28,
//   sex: '男',
//   job: 'web前端开发',
//   hobby: 'football'
// }

s.example()

console.log(s.info())

// 再次巩固  ts类定义及使用 ts类的继承 多态  （抽象类型  使用关键字 abstract ）

