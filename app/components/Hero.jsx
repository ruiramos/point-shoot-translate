var React = require('react'),
    mui = require('material-ui'),
    RaisedButton = mui.RaisedButton,
    isMobile = require('ismobilejs').any;

var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

module.exports = React.createClass({
  getInitialState: function(){
    return {go: false}
  },

  render: function(){
    var that = this;
    var table = (
      <div className="table" key="0">
        <div className="row row-primary">
          Beer
        </div>
        <div className="row">
          Cerveja <span className="lang">(Portuguese)</span>
        </div>
        <div className="row">
          Cerveja <span className="lang">(Portuguese)</span>
        </div>
        <div className="row">
          Cerveja <span className="lang">(Portuguese)</span>
        </div>
      </div>
    );

    var button = isMobile ?
      (<RaisedButton label="Take a Photo" primary={true} onClick={this.props.simulateInputClick} />) :
      (<RaisedButton label="Upload from your computer" onClick={this.props.simulateInputClick} />);

    var styles = {
      floatedContainer: {
        float: 'left'
      }
    };

    setTimeout(function(){
      that.setState({go: true});
    }, 10)

    return (
      <div id="hero" className={this.state.go ? 'go' : ''}>
        <div className="bg">
          <div style={styles.floatedContainer}>
            <h1>
              Point. Shoot. <br/>
              <span className="strk">Beer.</span> Translate!
            </h1>
            <h3>Bespoke translating services</h3>
          </div>

          <ReactCSSTransitionGroup transitionName="fadein">
            {table}
          </ReactCSSTransitionGroup>

          <div className="buttons">
            {button}
          </div>

        </div>
      </div>
    );
  }
})