var request = require('superagent'),
    Bacon = require('baconjs');

var dict = {
  'en-pt': 'Portuguese',
  'en-es': 'Spanish',
  'en-nl': 'Dutch',
  'en-th': 'Thai',
  'en-ru': 'Russian'
};

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
      $.getJSON('http://query.yahooapis.com/v1/public/yql',
        {
          q:      "select * from json where url=\"http://access.alchemyapi.com/calls/url/URLGetRankedImageKeywords?apikey=133c2e93530bb40d3597de87085b75e8e31b9bc6&url=" + imageUrl + "&outputMode=json\"",
          format: "json"
        },
        function(data){
          fn((data.query.results ? data.query.results.json : {}));
        }
      );
    }
  },

  TranslationApi: {
    translate: function(word, lang, fn){
      var promises = lang.map((l) => {
        return $.ajax({
          url: 'http://query.yahooapis.com/v1/public/yql',
          data: {
            q: "select * from json where url=\"https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20150125T180254Z.387d93ce4381b4f6.b9e8f0b86a400c6e6a27cd791df61612d18c89ec&lang=en-"+ l +"&text=" + word + "\"",
            format: "json"
          }
        });
      })
      .map(promise => Bacon.fromPromise(promise));

      Bacon.combineAsArray(promises).onValue((data) => {
        var dataArray = data
          .map(el => {
            return (el.query.results ? el.query.results.json : {})
          })
          .map(el => {
            el.lang = dict[el.lang];
            return el;
          });
        fn(dataArray);
      });
    }
  }
};