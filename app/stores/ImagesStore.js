var Fluxxor = require('fluxxor'),
    constants = require('../constants/constants');

module.exports = Fluxxor.createStore({
  initialize: function() {
    this.imageUrl = '';
    this.loading = false;

    this.bindActions(
      constants.POST_IMAGE, this.onPostImage,
      constants.IMAGE_POSTED, this.onImagePosted
    );
  },

  onPostImage: function(){
    this.loading = true;
    this.imageUrl = '';
    this.emit('change');
  },

  onImagePosted: function(payload) {
    this.loading = false;
    this.imageUrl = payload.body.data.link;
    this.emit('change');
  },

  getState: function(){
    return {
      loading: this.loading,
      imageUrl: this.imageUrl
    };
  }
});