"use strict";
/*
 * @Author: lujiayu lujiayu@shiqiao.com
 * @Date: 2022-10-26 14:33:16
 * @LastEditors: lujiayu lujiayu@shiqiao.com
 * @LastEditTime: 2022-10-26 14:59:23
 * @FilePath: /vue3.0-ts-vite/test13/modules/db.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 模块单文件
Object.defineProperty(exports, "__esModule", { value: true });
//暴露模块第一种写法
// export let dbUrl = 'xxxxxxxxx'
// export function getDate(): any[] {
//   console.log('获取数据库数据');
//   return [
//     {
//       id: 1,
//       title: '今天被血虐了呜呜呜'
//     },
//     {
//       id: 2,
//       title: '他不敢跟我玩LOLm O.0'
//     }
//   ]
// }
// export function save() {
//   console.log('保存数据成功');
// }
// 暴露模块第二种写法
// let dbUrl = 'xxxxxxxxx'
// function getDate(): any[] {
//   console.log('获取数据库数据');
//   return [
//     {
//       id: 1,
//       title: '今天被血虐了呜呜呜'
//     },
//     {
//       id: 2,
//       title: '他不敢跟我玩LOLm O.0'
//     }
//   ]
// }
// function save() {
//   console.log('保存数据成功');
// }
// export {
//   getDate,
//   save,
//   dbUrl
// }
// 暴露模块第三种写法
let dbUrl = 'xxxxxxxxx';
function getDate() {
    console.log('获取数据库数据');
    return [
        {
            id: 1,
            title: '今天被血虐了呜呜呜'
        },
        {
            id: 2,
            title: '他不敢跟我玩LOLm O.0'
        }
    ];
}
function save() {
    console.log('保存数据成功');
}
exports.default = getDate; // 默认暴露出一种方法
