# vue-project

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

<!-- 
node_modules    整个项目的依赖包
public          存放项目的静态文件
src             存放项目的源代码
    assets          静态资源
    components      可重用组件
    router          路由配置
    views           视图组件（页面）
    App.vue         入口页面（根组件）
    main.js        入口js文件
package.json    模块基本信息，项目开发所需要模块，版本信息
vue.config.js   保存vue配置的文件，如：代理、端口的配置等
修改端口号：        端口被占用时使用后一个端口
    devServer:{
    port:80
    }


    查看端口占用:               netstat -ano
    查看被占用端口对应的PID:     netstat -ano|findstr "8080"
    查看指定PID的进程:          tasklist|findstr "8080"
    结束进程:                   taskkill /T /F /PID 8080 
 -->