var Dispatcher = require('./AppDispatcher');
var superagent = require('superagent');

var actionsCreator = {
  getBooks: function(text){
    superagent
      .get('http://192.168.1.59/WebApiBookStore/api/Books')
      .query({ filter: text })
      .end(function(err, res){
        Dispatcher.dispatch({
          actionType: 'BOOKS_LOADED',
          content: res.body
        });
      });
  }
};

module.exports = actionsCreator;
