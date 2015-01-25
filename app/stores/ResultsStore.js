var Fluxxor = require('fluxxor'),
    constants = require('../constants/constants');

module.exports = Fluxxor.createStore({
  initialize: function() {
    this.results = {};
    this.loading = false;

    this.bindActions(
      constants.LOAD_RESULTS, this.onLoadResults,
      constants.RESULTS_LOADED, this.onResultsLoaded
    );
  },

  onLoadResults: function(){
    this.loading = true;
    this.emit('change');
  },

  onResultsLoaded: function(payload) {
    this.loading = false;
    this.results = payload;
    this.emit('change');
  },

  getState: function(){
    return {
      loading: this.loading,
      results: this.results
    };
  }
});