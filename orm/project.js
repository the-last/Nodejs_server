
const {sequelize, Project} = require('./sequelize')

sequelize.sync().then(function () {
    return Project.create({
        title: 'hello2',
        description: new Date(1980, 6, 4)
    });

}).then(function (jane) {
    console.log(jane.get({
        plain: true
    }))
})

