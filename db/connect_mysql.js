var mysql = require('mysql');

var mysqlConfig = require('./db/mysqlConfig'); // 链接数据库
var userSQL = require('./db/userSql'); // 用户sql操作
var pool = mysql.createPool(mysqlConfig); // 创建数据库链接池


app.post('/adduser', function(req, res, next) {
    pool.getConnection(function(err, con) {
        if (err) {
            throw err;
        }

        let param = req.body;
        con.query(userSQL.insert, [param.name, param.age, param.prehash], function(err, result) {
            if (result) {
                con.release();
                return res.send({
                    code: 200,
                    msg: "增加成功！"
                })
            }
        })
    })
})

app.post('/find', function(req, res) {
    pool.getConnection((err, con) => {
        if (err) throw err;
        con.query(userSQL.queryAll, (err, result) => {
            if (result) {
                return res.send({ status: 200, data: result });
            }
        })
    })
})
