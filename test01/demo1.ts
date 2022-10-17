/*
 * @Author: lujiayu lujiayu@shiqiao.com
 * @Date: 2022-10-12 21:24:33
 * @LastEditors: lujiayu lujiayu@shiqiao.com
 * @LastEditTime: 2022-10-12 21:55:35
 * @FilePath: /tsTest/test02/demo1.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
//第一天
// ts语法是不能被node、浏览器所编译   所以要转成js语法文件
// 可通过命令行 [tsc 文件名.ts] 进行编译，编译成功后会自动生成 相同文件名的.js
// 控制面板cd到相应的文件目录下  
// 命令行输入 tsc --init 会自动生成一个tsconfig.json文件  用来配置ts文件  
// 点入tsconfig.json   找到    "outDir": "",     改成   ./js
// 然后vscode工具栏  点击 终端  >>>  运行任务...  >>>  typescript  >>>  tsc:监视 - test01/tsconfig.json
// 此时终端会生成一个监视的线程  当我们编辑ts文件后点击保存即可实时更新至js文件夹下的相应文件（可理解为热更新）
let str:string = '路佳宇要学ts'
let str1:string = '邱诗梦和别人吃饭去了'
let str2:string = '我就再学习一会吧'
console.log(str);
console.log(str1);
console.log(str2);

