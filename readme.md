# UMI PRO
## Resource
- [官方文档](https://umijs.org/guide/getting-started.html)
- [UI组件：ANTD-MOBILE](https://mobile.ant.design/components/tab-bar-cn/)
- [图标](https://www.npmjs.com/package/react-icons)

| site                                                              | licence                | use                           |
|-------------------------------------------------------------------|------------------------|-------------------------------|
| [Material Design by Google](https://www.google.com/design/icons/) | (licence: CC-BY 4.0)   | Material Design Icons => ./md |
| [Font Awesome by Dave Gandy](http://fontawesome.io)               | (licence: SIL OFL 1.1) | FontAwesome => ./fa           |
| [Typicons by Stephen Hutchings](http://typicons.com)              | (licence: CC BY-SA)    | Typicons => ./ti              |
| [Github Octicons by Github](https://octicons.github.com/)         | (licence: SIL OFL 1.1) | Github Octicons => ./go       |
| [Ionicons by Ionic Framework](http://ionicons.com)                | (licence: MIT)         | Ionicons => ./io              |

说明：尽量使用 Font Awesome，图标多
使用方法：原Font Awesome中名为home的图标，该这样使用
```jsx
import {FaHome} from 'react-icons/lib/fa'

export default ()=>{
    return(
        <FaHome/>
    )
}
```

    
## Path
@ 别名 总是指向```src```目录

## Folder
```
asserts         静态资源目录
layouts         布局框架
pages           页面入口，路径即地址，例如：
                /src/pages/book.jsx 对应 http://127.0.0.1/book
                /src/pages/activity/20180604/index.jsx 对应 http://127.0.0.1/activity/20180604
utils           js工具，可以单独使用的js代码块，jQuery类工具库不要放到这里
.umirc.js       umi配置文件，不用单独创建webpackrc.js
```