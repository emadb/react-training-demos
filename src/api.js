var superagent = require('superagent');
var EventEmitter = require('events').EventEmitter;

function extend(source, target) {
  for (var key in source) {
    if (source.hasOwnProperty(key)) {
      target[key] = source[key];
    }
  }
  return target;
}

var api = {
  getBooks: function(text, cb){
    superagent
      .get('http://192.168.1.59/WebApiBookStore/api/Books')
      .query({ filter: text })
      .end(function(err, res){
        cb(res.body);
      });
  },

  getBooks2: function(text){
    var self = this;
    superagent
      .get('http://192.168.1.59/WebApiBookStore/api/Books')
      .query({ filter: text })
      .end(function(err, res){
        self.emit('booksReady', res.body);
      });
  },
  getBookById: function(id){
    var self = this;
    superagent
      .get('http://192.168.1.59/WebApiBookStore/api/Books/' + id)
      .end(function(err, res){
        self.emit('bookReady', res.body);
      });
  }
};

extend(EventEmitter.prototype, api);

module.exports = api;
