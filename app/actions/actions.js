var ImgurApi = require('../helpers/api').ImgurApi,
    AlchemyApi = require('../helpers/api').AlchemyApi,
    TranslationApi = require('../helpers/api').TranslationApi,
    constants = require('../constants/constants');

var Actions = {
  postImage: function(data){
    var that = this;
    this.dispatch(constants.POST_IMAGE);

    var base64 = data.replace(/^data:image\/(png|jpeg|jpg);base64,/, '');

    ImgurApi.postImage(base64, function(result){
      that.dispatch(constants.IMAGE_POSTED, result);
      Actions.getImageTags.bind(that)(result.body.data.link);
    });
  },

  fakePostImage: function(link){
    this.dispatch(constants.POST_IMAGE);

    this.dispatch(constants.IMAGE_POSTED, {
      body: {data: {link: link}}
    });

    Actions.getImageTags.bind(this)(link);
  },

  getImageTags: function(url){
    var that = this,
        theWord;

    this.dispatch(constants.LOAD_RESULTS);

    AlchemyApi.getImageTags(url, function(results){
      theWord = (results.imageKeywords && results.imageKeywords instanceof Array ?
        results.imageKeywords[0] : results.imageKeywords);

      that.dispatch(constants.RESULTS_LOADED, theWord || {});

      if(theWord){
        Actions.getTranslation.bind(that)(theWord);
      }
    });
  },

  getTranslation: function(word){
    var that = this;
    this.dispatch(constants.LOADING_TRANSLATIONS);

    TranslationApi.translate(word.text, ['pt', 'es', 'ru', 'nl', 'th'], function(results){
      that.dispatch(constants.TRANSLATIONS_LOADED, results);
    });
  }
};

module.exports = Actions;