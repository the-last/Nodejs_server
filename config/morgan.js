
const morgan = require('morgan');
const fs = require('fs');
const path = require('path');

var writeLog = fs.createWriteStream(path.join(path.resolve(__dirname,'../'), 'access.log'), {flags: 'a'});
var options = {
  stream: writeLog,
  skip: (req, res) => {
    return res.status < 200
  }
}
morgan.format('newformat', (tokens, req, res) => {
  return [
    '[backend]:',
    tokens.status(req, res),
    tokens.method(req, res),
    tokens.url(req, res),
    new Date(tokens.date(req, res)),
    tokens['response-time'](req, res)+'ms'
  ].join('  ')
})

module.exports = morgan('newformat', options)