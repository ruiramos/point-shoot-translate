var React = require('react'),
    SnapButton = require('./SnapButton'),
    PhotoContainer = require('./PhotoContainer'),
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

    imageToBase64(file, function(data){
      that.refs.imageContainer.getDOMNode().src = data;
      that.getFlux().actions.postImage(data);
    });
  },

  simulateInputClick: function(){
    console.log(this.refs.snap);
    this.refs.snap.triggerButton();
  },

  render: function() {
    var styles = {
      img: {
        visibility: 'hidden'
      }
    };

    return (
      <div>
        <Hero simulateInputClick={this.simulateInputClick} />
        <h3 className="subtitle">some subtitle will go here lalala asdanfsrf asdsada</h3>
        <p>{this.state.images.loading ? 'Loading...' : ''}</p>
        <SnapButton ref="snap" handlePhotoChanged={this.handlePhotoChanged}/>
        <PhotoContainer
          imageUrl={this.state.images.imageUrl}/>
        <ResultsList
          loading={this.state.results.loading}
          results={this.state.results.results} />

        <img style={styles.img} src='' ref='imageContainer' />
      </div>
    )
  }
});

module.exports = AppComponent;