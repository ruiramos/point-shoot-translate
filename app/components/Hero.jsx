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
          La cerveza <span className="lang">(Spanish)</span>
        </div>
        <div className="row">
          пиво <span className="lang">(Russian)</span>
        </div>
       <div className="row">
          bier <span className="lang">(Dutch)</span>
        </div>
        <div className="row">
          เบียร์ <span className="lang">(Thai)</span>
        </div>
      </div>
    );

    var button = isMobile ?
      (<RaisedButton label="Take a Photo" primary={true} onClick={this.props.simulateInputClick} />) :
      (<RaisedButton label="Upload from your computer" primary={true} onClick={this.props.simulateInputClick} />);

    var styles = {
      floatedContainer: {
      },
      orSpan: {
        paddingRight: '8px',
        paddingLeft: '4px'
      }
    };

    setTimeout(function(){
      that.setState({go: true});
    }, 10)

    return (
      <div id="hero" className={this.state.go ? 'go' : ''}>
        <div className="floated-container" style={styles.floatedContainer}>
          <h1>
            Point. Shoot. <br/>
            <span className="strk">Beer.</span> Translate!
          </h1>
          <h3 style={styles.h3}>So thaaat's how you say it in Thai!</h3>

          <div className="buttons">
            {button}
            <span style={styles.orSpan}>or</span>
            <RaisedButton label="Try a Demo"onClick={this.props.handleDemoButtonClick} />
          </div>
        </div>

        <ReactCSSTransitionGroup transitionName="fadein">
          {table}
        </ReactCSSTransitionGroup>

        <img className="subject" src="/images/redstripe.jpg" style={styles.img} />

      </div>
    );
  }
})