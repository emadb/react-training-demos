var React = require('react');

var SearchBox = React.createClass({
  handleClick: function(){
    var textToSearch = this.refs.searchText.value;
    this.props.onSearch(textToSearch);
  },
  render: function() {
    return (
      <div>
        <input type="text" ref="searchText"/>
        <button type="button" onClick={this.handleClick}>Search</button>
      </div>
    );
  }
});

module.exports = SearchBox;
