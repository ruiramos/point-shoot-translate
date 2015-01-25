var React = require('react'),
    SnapButton = require('./SnapButton'),
    PhotoContainer = require('./PhotoContainer'),
    Loader = require('./Loader'),
    ResultsList = require('./ResultsList'),
    localBase64 = require('../helpers/localBase64'),
    imageToBase64 = require('../helpers/imageBase64'),
    Fluxxor = require('fluxxor'),
    FluxMixin = Fluxxor.FluxMixin(React),
    StoreWatchMixin = Fluxxor.StoreWatchMixin,
    mui = require('material-ui'),
    RaisedButton = mui.RaisedButton,
    Hero = require('./Hero');

var DEBUG = 0;

var AppComponent = React.createClass({
  mixins: [FluxMixin, StoreWatchMixin('ImagesStore', 'ResultsStore')],

  getInitialState: function(){
    return {};

  },

 getStateFromFlux: function() {
    var flux = this.getFlux();
    return {
      images: flux.store('ImagesStore').getState(),
      results: flux.store('ResultsStore').getState()
    }
  },

  componentDidMount: function(){
    var that = this;
    if(DEBUG){
      this.refs.imageContainer.getDOMNode().onload = function(){
        that.getFlux().actions.postImage(localBase64(that.refs.imageContainer.getDOMNode()));
      }
      this.refs.imageContainer.getDOMNode().src = 'cat.jpg'
    }
  },

  handlePhotoChanged: function(e){
    var files = event.target.files,
        file,
        that = this;

    if (files && files.length > 0) {
        file = files[0];
    }

    this.scrollToTop(true);

    imageToBase64(file, function(data){
      that.refs.imageContainer.getDOMNode().src = data;
      that.getFlux().actions.postImage(data);
    });
  },

  simulateInputClick: function(){
    this.refs.snap.triggerButton();
  },

  scrollToTop: function(instant){
    if(instant)
      $('body, html').scrollTop(0);
    else
      $("html, body").animate({ scrollTop: 0 });

  },

  render: function() {
    var styles = {
      img: {
        visibility: 'hidden'
      },
      h4Container: {
        textAlign: 'center',
      },
      h4: {
        color: '#aaa',
        marginBottom: '40px',
      },
      resultDiv: {
        display: (this.state.images.imageUrl ? 'block' : 'none')
      },
      tryAgain: {
        margin: '40px auto',
        textAlign: 'center',
        display: (this.state.results.loading ? 'block' : 'block')
      }
    };
    return (
      <div>
        <Loader loading={this.state.images.loading} />
        <Hero simulateInputClick={this.simulateInputClick} />
        <SnapButton ref="snap" handlePhotoChanged={this.handlePhotoChanged}/>
        <div style={styles.h4Container}>
          <h4 style={styles.h4}>Grab your mobile and take a photo to get started!</h4>
        </div>

        <div style={styles.resultDiv}>
          <PhotoContainer
            imageUrl={this.state.images.imageUrl} />
          <ResultsList
            loading={this.state.results.loading}
            translations={this.state.results.translations}
            result={this.state.results.result} />
          <div style={styles.tryAgain}>
            <RaisedButton label="Try again!" onClick={this.scrollToTop} />
          </div>
        </div>
        <img style={styles.img} src='' ref='imageContainer' />
      </div>
    )
  }
});

module.exports = AppComponent;