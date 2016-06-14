var React = require('react'),
  Router = require('react-router'),
  TileManager = require('../react-tiles/src/react-tiles')
;

var TLink = TileManager.Link,
  RLink = Router.Link
;
var Sidebar = React.createClass({
  render: function(){
    return (
      <div>
        <h3>This is a new tile!</h3>
        <p>This tile shows the route <RLink to="/sidebar">/sidebar</RLink>. You see that you can click on the link and the route will be working as it works in any react application.</p>
        <p>In <span className="rt">react-tiles</span> every tile shows a standard route of your app, so you can display several screens of you current app at the same time, increasing your user's productivity.</p>
        <p>If you clicked in the link above and you are watching only this tile you can press your browser's back button to reopen the main tile.</p>
        <p>But there is more, you can also open external urls in the tiles. Do you need <TLink to="https://facebook.github.io/react/">react docs inside your app</TLink>?</p>
      </div>
    );
  }
});

module.exports = Sidebar;
