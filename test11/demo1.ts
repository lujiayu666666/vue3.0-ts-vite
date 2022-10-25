/*
 * @Author: lujiayu lujiayu@shiqiao.com
 * @Date: 2022-10-25 17:12:00
 * @LastEditors: lujiayu lujiayu@shiqiao.com
 * @LastEditTime: 2022-10-25 17:48:16
 * @FilePath: /vue3.0-ts-vite/test11/demo1.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
 // ts 泛型扩展  把类作为参数类型的泛型类

 // 定义一个User  的类  这个类的作用就是映射数据库的字段
 // 然后定义一个 MysqlDb的类  这个类用来操作数据库
 // 然后我们吧User这个类  作为参数  传入  MysqlDb中

 class User{
   public userName: string | undefined
   password: string | undefined
 } 

 class MysqlDb {
  add(user: User): boolean {
    console.log(user)
    return true
  }
 }
 let u = new User()
 u.userName = 'qsm'
 u.password = 'admin'
 let db = new MysqlDb()
 
 db.add(u) // 把类作为参数来约束MysqlDb这个类



 class ArticleCate{
  title: string | undefined
  desc: string | undefined
  status: number | undefined
 }


 class MysqlDbs {
  add(info: ArticleCate): boolean {
    console.log(info)
    return true
  }
 }
 let a = new ArticleCate()
 a.title = '大连晚报'
 a.desc = '大连今明两天将迎来大范围降雪'
 a.status = 1

 let dbs = new MysqlDbs()
 dbs.add(a)

 // 上面两段代码可以看出  我们定义两个类参数  分别传入MysqlDb类中  因为类参数不通  导致我们写了两个MysqlDb、MysqlDbs
 // 泛型：泛型可以帮助我们避免重复的代码以及对不特定的数据类型的支持（类型校验）
 /**
  * 把类当做参数的泛型类
  * 1、定义一个类
  * 2、把类作为参数来约束数据传入的类型
  */


 class Mysql<T> { //泛型工具类
  add(params: T): boolean {
    console.log(params)
    return true
  }
 }

 class Person { // 属性类
  name: string | undefined
  sex: string | undefined
  age: number | undefined
  job: string | undefined
 }

 let p = new Person()
 p.name = 'qsm'
 p.sex = '女'
 p.age = 24
 p.job = '活动运营'

 let pm = new Mysql<Person>() // 此处我们传入泛型<T>的约束
 pm.add(p)
 // Person { name: 'qsm', sex: '女', age: 24, job: '活动运营' }

 class Animal{
  name: string | undefined
  food: string | undefined
 }

 let an = new Animal()
 an.name = 'qsm'
 an.food = 'chocolates'

 let am = new Mysql<Animal>() // 此处我们传入泛型<T>的约束
 am.add(an)
 // Animal { name: 'qsm', food: 'chocolates' }

 // 这就是把类当做参数传入泛型类中以上就是示例





 