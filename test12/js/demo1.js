"use strict";
/*
 * @Author: lujiayu lujiayu@shiqiao.com
 * @Date: 2022-10-26 09:27:03
 * @LastEditors: lujiayu lujiayu@shiqiao.com
 * @LastEditTime: 2022-10-26 10:55:20
 * @FilePath: /vue3.0-ts-vite/test12/demo1.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// ts 类型、接口、类、泛型综合使用
// ts 封装统一操作Mysql Mongodb Mssql的底层库
class DataBase {
    constructor(obj) {
        this.obj = obj;
    }
    get(key) {
        if (!this.obj[key])
            return `obj中属性${key}不存在`;
        return `读取属性--->${key}:${JSON.stringify(this.obj[key])}`;
    }
    add(params) {
        this.obj[params.key] = params.value;
        return `添加属性--->${JSON.stringify(this.obj)}`;
    }
    upData(key, value) {
        if (!this.obj[key])
            return `obj中属性${key}不存在`;
        this.obj[key] = value;
        return `更新属性--->${key}
    ${JSON.stringify(this.obj)}`;
    }
    delete(key) {
        if (!this.obj[key])
            return `obj中属性${key}不存在`;
        delete this.obj[key];
        return `删除属性--->${key}
    ${JSON.stringify(this.obj)}`;
    }
}
//  Mysql Mssql MongDb
// 继承基类
class Mysql extends DataBase {
    info() { return '这是Mysql数据库'; }
}
class Mssql extends DataBase {
    info() { return '这是Mssql数据库'; }
}
class MongDb extends DataBase {
    info() { return '这是MongDb数据库'; }
}
let mysql = new Mysql({}); // Mysql
//添加属性
mysql.add({
    key: 'type',
    value: 'Mysql数据库'
});
mysql.add({
    key: 'name',
    value: '路佳宇'
});
mysql.add({
    key: 'age',
    value: 27
});
mysql.add({
    key: 'job',
    value: 'web前端开发工程师'
});
console.log(mysql.add({
    key: 'hobby',
    value: ['足球', 'LOL', '美女']
}));
// 读取属性
console.log(mysql.get('hobby'));
// 更新属性
console.log(mysql.upData('age', 20));
// 删除属性
console.log(mysql.delete('hobby'));
let mong = new MongDb({});
console.log(mong.get('name'));
