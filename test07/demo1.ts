/**
 * ts中的接口
 * 1.属性类接口
 * 2.函数类型接口
 * 3.可索引接口
 * 4.类类型接口
 * 5.接口扩展
 * 
 * 接口的最用：在面向对象编程中，接口是一种规范的定义，他定义了行为和动作的规范。在程序设计里面，接口起到了一种
 * 限制和规范的作用，接口定义了某一些所要遵循的规范。接口不关心这些类的内部状态数据，也不关系这些类里的方法实现细节，
 * 他只规范这批类里提供某些方法，提供这些方法的类就可以满足实际需求。
 */

// 定义标准   
// 1.属性接口
//第七天 
interface fullName { //可复用  进行批量约束   也就是可以同时对函数A、函数B进行约束
  firstName: string
  lastName: string
  // name?: string // 可选参数   可传可不传
}

function printName(params: fullName): string {
  // return `${params.firstName}·${params.lastName}${params.name}`
  return `${params.firstName}·${params.lastName}`
}

// console.log(printName({firstName: '大卫', lastName: '路易斯', name: 'ljy'})); name未在属性接口中定义所以报错
let obj = { firstName: '大卫', lastName: '路易斯', name: 'ljy' } // 当我们定义一个变量时就可以使用多余属性
/**
 * 此时尽管obj中有name存在也不报错，说明当属性接口作为函数参数时 
 * 将定义的变量作为参数传入时只需要包含fullName接口中的所有属性即可
 */
console.log(printName(obj)); 

// ts 使用接口示例  ts封装原生请求ajax

interface Config{
  type: string
  url: string
  data?: string
  dataType: string
}

function ajax(config: Config) {
  var xhr = new XMLHttpRequest();
  xhr.open(config.type, config.url, true)
  xhr.send(config.data)
  xhr.onreadystatechange = function () {
    if(xhr.readyState === 4 && xhr.status === 200) {
      console.log('请求成功');
    }else{
      throw new Error("请求失败啊，家人们");
    }
  }
}

let params = {
  name: '路佳宇',
  age: 24
}
ajax({
  type: 'Get',
  url: 'https://www.baidu.com',
  data: JSON.stringify(params),
  dataType: 'JSON'
})






