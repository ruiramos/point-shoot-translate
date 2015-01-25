var ImagesStore = require('./ImagesStore'),
    ResultsStore = require('./ResultsStore');

  module.exports = {
    ImagesStore: new ImagesStore(),
    ResultsStore: new ResultsStore()
  };