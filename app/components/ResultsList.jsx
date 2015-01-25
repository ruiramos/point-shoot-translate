var React = require('react');

var ResultsList = React.createClass({
  render: function(){

    if(this.props.results.imageKeywords){
      var resultsArray =
        this.props.results.imageKeywords instanceof Array ?
          this.props.results.imageKeywords :
          [this.props.results.imageKeywords];

      var results = resultsArray.map(function(result){
        return (
          <li>{result.text} - {result.score}</li>
        )
      });
    }

    return (
      <div>
        <p>{this.props.loading ? 'Loading words...' : ''}</p>
        <ul>
          {results ? results : 'no results, sorry'}
        </ul>
      </div>
    );
  }

});

module.exports = ResultsList;