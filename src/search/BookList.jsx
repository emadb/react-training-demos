var React = require('react');

var BookList = React.createClass({
  onBookClicked: function(bookId){
    this.props.onBookClicked(bookId);
  },
  render: function() {
    var helpText = 'Nessun libro trovato';
    if (this.props.books.length > 0){
      helpText = 'Risultato ricerca';
    }
    var books = this.props.books.map(function(b){
      return <BookRow key={b.id} book={b} handleClick={this.onBookClicked}/>;
      //return <li>{b.title}<button onClick={() => this.onBookClicked(b.id)}></button></li>
    }.bind(this));

    return (
      <div>
        <h3>{helpText}</h3>
        <ul>
          {books}
        </ul>
      </div>
    );
  }
});


var BookRow = React.createClass({
  handleClick: function(){
    this.props.handleClick(this.props.book.id);
  },
  render: function(){
    return (
      <li>
        {this.props.book.title} ({this.props.book.author.name})
        <button type="button" onClick={this.handleClick}>Aggiungi al carrello</button>
      </li>
    );
  }

});



module.exports = BookList;
