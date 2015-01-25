var React = require('react');
var Footer = React.createClass({
  render: function(){
    return (
      <div className="footer">
      Point/Shoot/Translate made by <a target="_blank" href="http://ruiramos.com">Rui Ramos</a> for
        &nbsp;<a target="_blank" href="http://2015.staticshowdown.com/">Static Showdown 2015</a> using some very friendly APIs from
        &nbsp;<a target="_blank" href="https://api.imgur.com/">Imgur</a>,
        &nbsp;<a target="_blank" href="http://www.alchemyapi.com/products/alchemyvision/">Alchemy</a>,
        &nbsp;<a target="_blank" href="https://api.yandex.com/translate/">Yandex</a> and
        &nbsp;<a target="_blank" href="https://developer.yahoo.com/yql/">Yahoo</a>. Code available <a href="https://github.com/staticshowdown/ss15-baliteam/" target="_blank">on GitHub</a>.
      </div>
    );
  }
});

module.exports = Footer;