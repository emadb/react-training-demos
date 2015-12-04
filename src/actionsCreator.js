var Dispatcher = require('./AppDispatcher');
var superagent = require('superagent');
var settings = require('settings');

var actionsCreator = {
  getBooks: function(text){
    superagent
      .get(settings.apiUrl + '/api/Books')
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
