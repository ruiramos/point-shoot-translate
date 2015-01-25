var React = require('react');

var PhotoContainer = React.createClass({
  render: function(){
    var style = {
      width: '50%'
    };

    return (
      <div>
        <img style={style} src={this.props.imageUrl} />
        <p>{this.props.imageUrl}</p>
      </div>
    );
  }
})

module.exports = PhotoContainer;