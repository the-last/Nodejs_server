
var cookieParser = require('cookie-parser');
var session = require('express-session');
var flash = require('express-flash');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

app.use(cookieParser());
passport.use(new LocalStrategy(
    function (username, password, done) {
        User.findOne({ username: username }, function (err, user) {
            if (err) { return done(err); }
            if (!user) {
                return done(null, false, { message: '用户不存在！' });
            }
            if (!user.validPassword(password)) {
                return done(null, false, { message: '密码不匹配!' })
            }
            return done(null, user);
        })
    }
))

module.exports passport