var request = require('superagent');

module.exports = {
  ImgurApi: {
    postImage: function(data, fn){
      request.post('https://api.imgur.com/3/image')
      .type('form')
      .set({
        Authorization: 'Client-ID b184d58f1c807e2',
        Accept: 'application/json'
      })
      .send({
        image: data,
        type: 'base64'
      })
      .end(fn);
    }
  },

  AlchemyApi: {
    getImageTags: function(imageUrl, fn){
      $.getJSON("http://query.yahooapis.com/v1/public/yql",
        {
          q:      "select * from json where url=\"http://access.alchemyapi.com/calls/url/URLGetRankedImageKeywords?apikey=133c2e93530bb40d3597de87085b75e8e31b9bc6&url=" + imageUrl + "&outputMode=json\"",
          format: "json"
        },
        function(data){
          fn(data.query.results.json);
        }
      );
    }
  }
};