var Dispatcher = require('./AppDispatcher');
var EventEmitter = require('events').EventEmitter;

function extend(source, target) {
  for (var key in source) {
    if (source.hasOwnProperty(key)) {
      target[key] = source[key];
    }
  }
  return target;
}

var store = extend(EventEmitter.prototype, {});
var books = [];

Dispatcher.register(function(action) {
  switch(action.actionType) {
    case 'BOOKS_LOADED':
      books = action.content;
      store.emit('store-changed');
      break;
  }
});


store.getBooks = function(){
  return books;
}



module.exports = store;
