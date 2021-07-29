# mock

## 一、在项目中安装mockjs和axios
```
npm install mockjs --save
npm install axios --save
```

### 二、文件结构：

1.在项目src根目录创建mock文件夹，与main.js同级。mock文件夹下创建index.js主文件，设置拦截请求，配置请求路径，请求方式等。

2.mock文件夹下除了index配置文件，剩下的就是具体到业务的数据规则，可以根据自己的习惯创建。例如首页的数据放在homeMock.js中，登录所需数据放在loginMock.js中。

3.在main.js引入mock配置文件。

4.在根目录下创建一个api文件夹，其中index文件用于封装axios请求,其他文件处理具体业务的请求逻辑。

5.在组件中获取数据

### 三、官方mockjs文档
[Mock.js官方文档](http://mockjs.com/).

