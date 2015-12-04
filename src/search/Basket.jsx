var React = require('react');
var Link = require('react-router').Link;

var Basket = React.createClass({
  render: function() {
    return (
      <div>
        Carrello: {this.props.bookCount}
        <Link to="/basket">Vai al carrello</Link>
      </div>
    );
  },
});

module.exports = Basket;
