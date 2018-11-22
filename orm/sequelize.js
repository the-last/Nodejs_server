const Sequelize = require('sequelize');
const co = require('co');

/**
 * 数据库模型
 */ 
var sequelize = new Sequelize('expressdemo', 'root', '123456', {
    dialect: 'mysql',
    define: {
        underscored: true
    }
})

/**
 * 对应用户表
 */ 
var User = sequelize.define('user', {
    emp_id: {
        'type': Sequelize.CHAR(10),
        'allowNull': false,
        'unique': true
    },
    nick: {
        'type': Sequelize.CHAR(10),
        'allowNull': false
    },
    department: {
        'type': Sequelize.STRING,
        'allowNull': true
    }
})

var Project = sequelize.define('project', {
    title: Sequelize.STRING,
    description: Sequelize.DATE
})

// 同步
// sequelize.sync()

module.exports = {
    User,
    Project
}
