var React = require('react');
var ReactDom = require('react-dom');
var ReactRouter = require('react-router');

var SearchPageContainer = require('./search/SearchPageContainer');
var BasketPageContainer = require('./basket/BasketPageContainer');

var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Link = ReactRouter.Link;

require('./styles/app.css')

var Home = React.createClass({
  render: function(){
    return (
      <div>
        <div>
          <Link to="books">Books</Link>
          <Link to="basket">Basket</Link>
        </div>
        <div>
          {this.props.children}
        </div>
      </div>);
  }
});

ReactDom.render((
  <Router>
    <Route path="/" component={Home}>
      <Route path="books" component={SearchPageContainer} />
      <Route path="basket" component={BasketPageContainer} />
    </Route>
  </Router>
), container);
