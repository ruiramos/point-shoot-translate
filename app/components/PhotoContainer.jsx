var React = require('react');

var PhotoContainer = React.createClass({

  componentWillUpdate: function(){
    if(this.props.imageUrl){
      $("html, body").animate({ scrollTop: $('#photo-container').offset().top - 20 });
    }
  },

  render: function(){
    var style = {
      width: 'auto',
      maxWidth: '300px',
      maxHeight: '300px',
      margin: '0px auto',
      border: '25px solid #eee',
      display: 'block'
    };

    return (
      <div id="photo-container">
        <img style={style} src={this.props.imageUrl} />
      </div>
    );
  }
})

module.exports = PhotoContainer;