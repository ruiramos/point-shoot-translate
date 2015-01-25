var Fluxxor = require('fluxxor'),
    constants = require('../constants/constants');

module.exports = Fluxxor.createStore({
  initialize: function() {
    this.result = {};
    this.translations = [];
    this.loading = false;

    this.bindActions(
      constants.LOAD_RESULTS, this.onLoadResults,
      constants.RESULTS_LOADED, this.onResultsLoaded,
      constants.LOADING_TRANSLATIONS, this.onLoadingTranslations,
      constants.TRANSLATIONS_LOADED, this.onTranslationsLoaded,

      constants.POST_IMAGE, this.onNewImagePosted
    );
  },

  onLoadResults: function(){
    this.loading = true;
    this.emit('change');
  },

  onResultsLoaded: function(payload) {
    this.loading = false;
    this.result = payload;
    this.emit('change');
  },

  onLoadingTranslations: function(){
    this.loading = true;
    this.emit('change');
  },

  onTranslationsLoaded: function(payload){
    this.loading = false;
    this.translations = payload;
    this.emit('change');
  },

  onNewImagePosted: function(){
    this.result = {};
    this.translations = [];
    this.emit('change');
  },

  getState: function(){
    return {
      translations: this.translations,
      loading: this.loading,
      result: this.result
    };
  }
});