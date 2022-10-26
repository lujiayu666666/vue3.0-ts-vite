/*
 * @Author: lujiayu lujiayu@shiqiao.com
 * @Date: 2022-10-26 09:27:03
 * @LastEditors: lujiayu lujiayu@shiqiao.com
 * @LastEditTime: 2022-10-26 16:19:17
 * @FilePath: /vue3.0-ts-vite/test12/demo1.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// ts 类型、接口、类、泛型综合使用
// ts 封装统一操作Mysql Mongodb Mssql的底层库

 /**
  * 功能：定义一个操作数据库的库  支持Mysql Mssql MongDb
  * 要求：Mysql Mssql MongDb功能一样  都有 get add upData delete方法
  * 注意：约束统一的规范、以及代码重用
  * 解决方案：需要约束规范所以要定义接口，需要代码重用所以使用泛型
  *   1、接口：在面向对象编程中，接口是一种规范的定义，它定义了行为和动作的规范
  *   2、泛型：通俗理解 泛型就是解决类、接口、方法的复用性 
  */

  interface Params{ // 属性接口
    key: string
    value: any
   }
  // <T>    add(params: T): string  // 实际我写的把参数细化了  视频将参数写为   泛型了
   interface Fn{ // 函数接口Fn
    get(key: string): string
    add(params: Params): string
    upData(key: string, value: any): string
    delete(key: string): string
   }
  
   class DataBase implements Fn{ // 基类 使用接口Fn定义的规范
    public obj: any
    constructor(obj: any) {
      this.obj = obj
    }
    get(key: string): string {
      if(!this.obj[key]) return `obj中属性${key}不存在`
      return `读取属性--->${key}:${JSON.stringify(this.obj[key])}`
    }
    add(params: Params): string {
      this.obj[params.key] = params.value
      return `添加属性--->${JSON.stringify(this.obj)}`
    }
    upData(key: string, value: any): string {
      if(!this.obj[key]) return `obj中属性${key}不存在`
      this.obj[key] = value
      return `更新属性--->${key}
      ${JSON.stringify(this.obj)}`
    }
    delete(key: string): string {
      if(!this.obj[key]) return `obj中属性${key}不存在`
      delete this.obj[key]
      return `删除属性--->${key}
      ${JSON.stringify(this.obj)}`
    }
   }
  
  //  Mysql Mssql MongDb
  // 继承基类
  class Mysql extends DataBase {
    info(): string { return '这是Mysql数据库' }
  }
  class Mssql extends DataBase {
    info(): string { return '这是Mssql数据库' }
  }
  class MongDb extends DataBase {
    info(): string { return '这是MongDb数据库' }
  }
  
  let mysql = new Mysql({}) // Mysql
  
  
  //添加属性
  mysql.add({
    key: 'type',
    value: 'Mysql数据库'
  })
  mysql.add({
    key: 'name',
    value: '路佳宇'
  })
  mysql.add({
    key: 'age',
    value: 27
  })
  mysql.add({
    key: 'job',
    value: 'web前端开发工程师'
  })
  console.log(mysql.add({
    key: 'hobby',
    value: ['足球', 'LOL', '美女']
  }))
  
  // 读取属性
  console.log(mysql.get('hobby'))
  
  // 更新属性
  console.log(mysql.upData('age', 20))
  
  // 删除属性
  console.log(mysql.delete('hobby'))
  
  
  let mong = new MongDb({})
  
  console.log(mong.get('name'));


  // 我们可以讲上面的  属性接口  函数接口  基类  Mysql继承类 Mssql继承类 MongDb继承类  作为整体   提出来成为一个单独的文件
  // import {Mysql, Mssql, MongDb} from './modules/db.ts' 举例引用
  // let LJy = new Mysql({}) new 一个实例进行使用
  

  


