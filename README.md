# express-public
- express4.0/koa2.0 后台开发入门指南
- 基于node环境，版本 > 7.5.0

## 1， 使用方法
需要node环境
```
npm install
nodemon pathStatic.js
```

## 2，相关知识点汇总

#### 服务热更新
- 使用nodemon，进行服务热更新

#### 日志
- 使用morgan插件过滤和格式化log

#### 认证
- 使用passport做本地和远程认证

#### 跨域设置
- 添加跨域策略，处里来自不同域名的接口

#### 访问mysql
- 使用mysql插件，结合koa2.0

#### 配置静态资源类型服务
- express.static() 方法可指定要启用服务的root路径