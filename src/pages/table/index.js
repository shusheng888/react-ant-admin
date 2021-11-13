// 函数组件 or 类组件
import React from "react";
// ----------------------------------------------
export default class TableTest extends React.Component {
  render() {
    return <div>test页面</div>;
  }
}

/**
 * 给 pages 组件追加路由信息
 * export default 组件的原型上添加route信息,或者向外暴露一个 route
 * 会被webpack的webpack-router-generator插件捕获信息
 */
// 1.被捕获 export default 原型上的route
TableTest.route={
  tile : "test页面",
  key : "test",
  path: "/test"
}

// 2.被捕获 暴露的route信息  优先级比上面高
export const route = {
  tile : "test页面",
  key : "test",
  path: "/test"
}
