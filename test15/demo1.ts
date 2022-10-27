
/*
 * @Author: lujiayu lujiayu@shiqiao.com
 * @Date: 2022-10-27 16:08:19
 * @LastEditors: lujiayu lujiayu@shiqiao.com
 * @LastEditTime: 2022-10-27 17:32:01
 * @FilePath: /vue3.0-ts-vite/test15/demo1.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// ts 中的装饰器定义及使用
/**
 * 装饰器：装饰器是一种特殊类型的声明，它能够被附加到类声明，方法，属性或参数上，可以修改类的行为。
 * 通俗的将装饰器就是一个方法，可以注入到类、方法、属性参数上来扩展类、属性、方法、参数的功能。
 * 常见的装饰器有：类装饰器、属性装饰器、方法装饰器、参数装饰器
 * 装饰器的写法：普通装饰器（无法传参）、装饰器工厂（可传参）
 * 装饰器是过去几年中js最大的成就之一，已是es7的标准特性之一
 */

// 1、类装饰器：类装饰在类声明之前被声明（紧靠着声明）。类装饰器应用于类构造函数，可以用来监视，
// 修改或替换类的定义，传入一个参数



// 普通装饰器（不带参数的）
function logClass(params: any) {
  // params 就是当前类
  console.log(params)
  //动态扩展 HttpClient类的属性
  params.prototype.apiUrl = '我是动态扩展的属性'
  //动态扩展 HttpClient类的属方法
  params.prototype.run = () => {
    console.log('我是动态扩展的方法');
  }
}

// 调用装饰器
@logClass
class HttpClient {
  constructor() { }
  getData() { }
}


let http: any = new HttpClient()
console.log(http.apiUrl);
http.run()



// 2、装饰器工厂 （带参数）

function todo(params: string) {
  return function (target: any) {
    // params 传入的参数
    console.log(params);
    // target 类
    console.log(target);
  }
}

@todo('hello world') // 调用
class Personal {
  constructor() { }
  getData() { }
}


/**
 * 类装饰器  重载构造函数的例子
 * 类装饰器表达式会在运行时当做函数被调用，类的构造函数作为其唯一的参数
 * 如果类装饰器返回一个值，它会使用提供的构造函数来替换类的声明
 */


// 作用：重载了当前类 可修改类里面的属性以及方法
function moveDecorator(target: any) {
  console.log(target);
  return class extends target {
    apiUrl: any = '我是修改后的数据'
    getData() {
      this.apiUrl = this.apiUrl + '---->'
      console.log(this.apiUrl);
    }
  }
}

@moveDecorator
class Move{
  public apiUrl: string
  constructor() {
    this.apiUrl = '我是构造函数里面的apiUrl'
  }
  getData() {
    console.log(this.apiUrl);
  } 
}

let a = new Move()
a.getData()


/**
 * 2、属性装饰器
 * 属性装饰器表法式会在运行时当做函数调用，传入下列2个参数
 * 1.对静态成员来说是类的构造函数，对于实例成员是类的原型对象
 * 2.成员名字
 */

 







