function responseTime () {
    return function (req, res, next) {
        req._startTime = Date.now() // 获取时间 t1

        var calResponseTime = function () {
            var now = Date.now();   //获取时间 t2
            var deltaTime = now - req._startTime;
            console.log(deltaTime);
        }

        res.once('finish', calResponseTime);
        res.once('close', calResponseTime);
        return next();
    }
}


module.exports = responseTime;