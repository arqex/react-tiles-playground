var React = require('react'),
  Tiles = require('../react-tiles/src/react-tiles'),
  Code = require('../Code')
;

var Link = Tiles.Link;

var Troubleshoot = React.createClass({
  render: function(){
    return (
      <div>
        <h2>Troubleshooting</h2>
        <div className="ts">
          <h3>The Tiles component is not showing fullscreen</h3>
          <p>You cannot see the tiles content because the the <code>Tiles</code> component does not cover all the available space for it.</p>
          <p><span className="rt">react tiles</span> is using naive strategy to cover the maximum free space available:</p>
          <Code lang="css">{ require("snippets/tilesCss.html") }</Code>
          <p>This allows to handle window resizing in a really simple way, but <strong>it needs to have a fixed height DOM node as a parent</strong>. If the parent element has not a defined height, the <code>.tilecontainer</code> will have a calculated height of <code>0px</code>.</p>
          <p>One usual case is wanting the <code>tilecontainer</code> to cover all the window height. Getting so is not difficult, have a look at the following example:</p>
          <Code lang="html">{ require("snippets/tilesHtml.html") }</Code>
        </div>

        <div className="ts">
          <h3>My app is behaving weird when using tiles</h3>
          <p>Even if <span className="rt">react tiles</span> shows multiple routes of your app at the same time, your app may not be prepared to work that way.</p>
          <p>
            Imagine that your app has a route like <code>/user/12</code> that display info about the user with the id number <code>12</code>. The
            app keeps the user information in a single object `currentUser` inside the app state in the following way, and it works great:
          </p>
          <Code>{ require("snippets/appFailingState.html") }</Code>
          <p>The problem arrives when you try to open a tile to display a second user, <code>/user/14</code> and all the data of the first user gets overwriten by the one of the new user, and the behaviour gets pretty unpredictable.</p>
          <p>
            A nice app state should store data not depending on the current screen, but you never thought about opening more than one url at the same time, did you? There
            is a simple way to re-structure your app state using tile ids.
          </p>
          <p>Every tile has its own unique <code>id</code> that can be retrieved using the <code>layout</code> prop:</p>
          <Code>{ require("snippets/tileId.html")}</Code>
          <p>
            In the code above we accessed the tile id using <code>this.props.layout.id</code>. You
            may already guessed that the simplest way of adapting your app state structure to work <span className="rt">react tiles</span> is dividing it by tiles.
          </p>
          <p>So if we open two users in to different tiles with ids <code>t20</code> and <code>t22</code>, our app state would render like this:</p>
          <Code>{ require("snippets/appOkState.html")}</Code>          
        </div>
      </div>
    )
  }
});
module.exports = Troubleshoot;
