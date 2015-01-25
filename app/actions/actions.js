var ImgurApi = require('../helpers/api').ImgurApi,
    AlchemyApi = require('../helpers/api').AlchemyApi,
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

  getImageTags: function(url){
    var that = this;
    this.dispatch(constants.LOAD_RESULTS);

    AlchemyApi.getImageTags(url, function(results){
      that.dispatch(constants.RESULTS_LOADED, results);
    });
  }
};

module.exports = Actions;