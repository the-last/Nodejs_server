
// 验证 jsonp

/**
 * jsonp 实现原理
 * 1，客户端发一起一个get请求
 * 2，使用script标签模拟发送跨域的get请求
 * 3，服务端响应来自跨域的请求
 * 4，客户端需要先定义一个函数，用于执行服务端返回的回调函数
 * 5，请求将函数名发送给服务端的指定接口
 * 6，服务端收到函数名，然后重点来了，返回给前端的是段代码，一个带参数的执行函数
 * 例如： callbackFunction('nidayed jsonp!')；
 * 7，客户端获取到这段代码就会执行函数-callbackFunction(),且参数就是后端赋的值！
 * 
 * 前端代码：
 * 
    function callbackfunction (callbackdata) {
      console.log(callbackdata, typeof callbackdata, 9999);
    }
    var url = "http://localhost:3001/hello/callbackfunction";
    var script = document.createElement('script');
    script.setAttribute('src', url);
    document.getElementsByTagName('head')[0].appendChild(script);
    使
 * 
    如果是jquery发送的ajax，后台res响应可以jsonp方法，res.jsonp(data) 的形式
    如果是使用axios-jsonp插件，同上。
 */
app.get('/hello', function(req, res, next) {
    let callback = req.query.callback
    let obj = {
            att: 'finish',
            ayy: 'nifish'
        }
        // var str = fs.readFileSync(__dirname + '/src/video/videoDemo.mp4').toString();
    let str = JSON.stringify(obj);
    res.send(callback + `(${str})`);
});