var React = require('react'),
    Spinner = require('spin');

module.exports = React.createClass({
  componentDidMount: function(){
    var target = this.refs.spinner.getDOMNode();
    var spinner = new Spinner().spin(target);
  },

  render: function(){
    var styles = {};
    styles.display = (this.props.loading) ? 'block' : 'none';

    return (
      <div style={styles}>
        <div className="loader" ref="spinner"></div>
        <div className="backdrop"></div>
      </div>
    );
  }
})