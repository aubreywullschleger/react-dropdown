// need to show a button and list
// this component should know when to show list
// when user clicks button
var React = require('react');
var Button = require('./button');
var ListItem = require('./list-item');

module.exports = React.createClass({
  handleClick: function() {
    this.setState({open: !this.state.open});
  },
  getInitialState: function(){
    return { open: false };
  },
  handleItemClick: function(item) {
      this.setState({
        open: false,
        itemTitle: item
      });
  },
  render: function() {
    var list = this.props.items.map(function(item){
        return <ListItem
          item={item}
          whenItemClicked={this.handleItemClick}
          className={this.state.itemTitle === item ? "active" : ""}
        />
               }.bind(this));

    return (
      <div className='dropdown'>
        <Button
          whenClicked={this.handleClick}
          title={this.state.itemTitle || this.props.title}
          className='btn-default'
          subTitleClassName="caret"
        />
        <ul className={"dropdown-menu " + (this.state.open ? "show" : "")}>
          {list}
        </ul>
      </div>
      )
  }
});
