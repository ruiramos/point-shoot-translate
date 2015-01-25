var React = require('react'),
    mui = require('material-ui'),
    RaisedButton = mui.RaisedButton;

var SnapButton = React.createClass({
  triggerButton: function(){
    console.log('asd', this.refs.fileInput.getDOMNode())
    this.refs.fileInput.getDOMNode().click();
  },

  render: function(){
    var styles = {
      div: {
        opacity: '0',
        visibility: 'hidden'
      },
      inputStyle: {
      }
    };

    return (
      <div style={styles.div}>
        <input
          style={styles.inputStyle}
          type="file"
          ref="fileInput"
          id="take-picture"
          accept="image/*"
          onChange={this.props.handlePhotoChanged} />
      </div>
    );
  }
});

module.exports = SnapButton;