var React = require('react');
var api = require('../api');

var BasketPageContainer = React.createClass({
  getInitialState: function() {
    return {books: []};
  },
  componentDidMount: function() {
    api.addListener('bookReady', this.onBookReady);
    var books = localStorage.getItem('books').split(',');
    books.forEach(function(b){
      api.getBookById(b);
    })
  },
  componentWillUnmount: function() {
    api.removeListener('bookReady', this.onBookReady);
  },
  onBookReady: function(book){
    this.state.books.push(book);
    this.setState({books: this.state.books});
  },
  render: function() {
    return (
      <div>
        <ul>
          {this.state.books.map(function(b){
            return <li key={b.id}>{b.title}</li>
          })}
        </ul>
      </div>
    );
  }

});

module.exports = BasketPageContainer;
