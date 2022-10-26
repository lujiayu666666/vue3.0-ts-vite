/*
 * @Author: lujiayu lujiayu@shiqiao.com
 * @Date: 2022-10-26 13:56:20
 * @LastEditors: lujiayu lujiayu@shiqiao.com
 * @LastEditTime: 2022-10-26 15:05:03
 * @FilePath: /vue3.0-ts-vite/test13/demo1.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// ts 模块及模块化封装DB库

/**
 * 模块的概念（官方）：
 * 关于术语的说明：请务必注意一点，ts 1.5里面的术语名已经发生了变化。“内部模块”现在称作“命名空间”
 * “外部模块”现在则简称为“模块” 模块在其自身的作用域里执行，而不是在全局作用域里
 * 这意味着定义在一个模块里的变量，函数，类等等在模块外部是不可见的，除非你明确的使用export形式之一导出它们
 * 相反，如果想使用其他模块导出的变量，函数，类，接口等的时候，你必须导入它们，可以使用import形式之一。
 * 
 * 
 * 模块的概念（自己理解）：
 * 我们可以把一些公共的功能单独抽离成一个文件作为一个模块
 * 模块里面的变量、函数、类等默认是私有的，如果我们要在外部访问模块里面的数据（变量、函数、类等）
 * 我们需要通过 export 暴露模块里面的数据（变量、函数、类等）
 * 暴露后我们用过 import 引入模块就可以使用模块里面暴露出来的数据（变量、函数、类等）
 * 
 */

 
// 我们将这个模块中的getDate()方法赋值了给getDate  对应db.ts中的第一种写法
// import { getDate, save, dbUrl } from "./modules/db"; 
// getDate()
// save()
// console.log(dbUrl);

//  getDate as get  别名
// import { getDate as get, save, dbUrl } from "./modules/db";  // 对应db.ts中的第二种写法

// get()
// save()
// console.log(dbUrl);



/**
 * export default 默认导出
 * 每个模块都可以有一个 default 导出， 默认使用关键字 default 进行标记
 * 并且一个模块只能够有一个 default 导出。 需要特殊的一种导入形式导入
 */
import getData from "./modules/db";
getData()








