var React = require('react');
var SearchBox = require('./SearchBox');
var BookList = require('./BookList');
var Basket = require('./Basket');
var actions = require('../actionsCreator');
var store = require('../store');

var SearchPageContainer = React.createClass({
  getInitialState: function() {
    var selectedBooks = [];
    if (localStorage.getItem('books')){
      selectedBooks = localStorage.getItem('books').split(',');
    }
    return { books: [], selectedBooks: selectedBooks };
  },
  componentDidMount: function() {
    store.addListener('store-changed', this.onBooksReady);
  },
  onBooksReady: function(){
    this.setState({books: store.getBooks()});
  },
  componentWillUnmount: function() {
    store.removeListener('store-changed', this.onBooksReady);
  },
  handleSearch: function(text){
    actions.getBooks(text);
  },
  addToBasket:function(book){
    console.log('adding', book);
    this.state.selectedBooks.push(book);
    localStorage.setItem('books', this.state.selectedBooks);
    this.setState({selectedBooks: this.state.selectedBooks});
  },
  render: function() {
    return (
      <div>
        <Basket bookCount={this.state.selectedBooks.length} />
        <PageTitle title="Ricerca libri" />
        <SearchBox onSearch={this.handleSearch} />
        <BookList books={this.state.books} onBookClicked={this.addToBasket}/>
      </div>
    );
  }
});

function PageTitle(props){
  return <h2>{props.title}</h2>;
}


module.exports = SearchPageContainer;
