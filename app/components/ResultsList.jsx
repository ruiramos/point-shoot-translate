var React = require('react');

var ResultsList = React.createClass({

  render: function(){
    if(this.props.result){
      var resultsArray = [this.props.result];
      resultsArray = resultsArray.concat(this.props.translations || []);

      var results = resultsArray.map(function(result, i){
        var classes = 'row ' + (i===0 ? 'row-primary' : '');
        if(!result.text) return '';
        return (
          <div className={classes}>
            {result.text} <span className="lang">{result.lang || 'English'}</span>
          </div>
        )
      });
    }

    if(this.props.loading){
      if(!Object.keys(this.props.result).length)
        var loading = (<div className="row row-loading">Loading results...</div>);
      else
        var loading = (<div className="row row-loading">Loading translations...</div>);
    }

    if(!Object.keys(this.props.result).length && !this.props.loading){
      var results = (<div className="row row-empty">No results, sorry. :(</div>);
    }

    var styles = {
      container: {
        margin: '0 auto',
      }
    };

    return (
      <div style={styles.container} className="result-list">
        <h4>This is what I found:</h4>
        <div className="table" key="0">
          {results} {loading}
        </div>
      </div>
    );
  }

});

module.exports = ResultsList;