var React = require('react'),
    mui = require('material-ui'),
    Toolbar = mui.Toolbar,
    ToolbarGroup = mui.ToolbarGroup,
    Icon = mui.Icon;
    RaisedButton = mui.RaisedButton;

React.createClass({

  render: function(){
    return (
      <Toolbar>
        <ToolbarGroup key={0} float="left">
          <h2>image scanner</h2>
        </ToolbarGroup>
        <ToolbarGroup key={1} float="right">
          <Icon icon="content-add" onClick={this.props.handleNewPhoto}/>
          <span className="mui-toolbar-separator">&nbsp;</span>
          <RaisedButton label="Static Showdown 2015" icon="mui-icon-sort" primary={true} />
        </ToolbarGroup>
      </Toolbar>
    );
  };
})