var React = require('react'),
    Fluxxor = require('fluxxor'),
    RouterMixin = require('react-mini-router').RouterMixin;

var AppComponent = require('./app/components/AppComponent');

// Fluxxor
var actions = require('./app/actions/actions');
    stores = require('./app/stores/stores'),
    flux = new Fluxxor.Flux(stores, actions);

window.flux = flux;

flux.on("dispatch", function(type, payload) {
  if (console && console.log) {
    console.log("[Dispatch]", type, payload);
  }
});

// var App = React.createClass({

//     mixins: [RouterMixin],

//     routes: {
//         '/': 'home',
//     },

//     render: function() {
//         return this.renderCurrentRoute();
//     },

//     home: function() {
//         return (<AppComponent flux={this.props.flux} />);
//     },

//     notFound: function(path) {
//         return <div class="not-found">Page Not Found: {path}</div>;
//     }

// });
React.render(<AppComponent flux={flux} />, document.getElementById("app"));