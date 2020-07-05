import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

ReactDOM.render(
    // 下面的 <App/> 叫 jsx, 前端发明的一种 js 扩展, 可以理解为 js 版的 HTML
    // jsx 的优势, 可以把变量嵌入 HTML 中
    <App/>, document.getElementById('root')
)

// 请观看完整个流程之后再跳回这里
// render 方法是将 jsx 转换为 HTML
// 第5行的方法实际作用是
// 调用 <App/> render 函数, 得到真实的 HTML (简称为 App_HTML)
// 将 App_HTML 挂载到 public/index.html 的 <div id="root"> 标签上
