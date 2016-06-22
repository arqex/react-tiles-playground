var React = require('react'),
  Tiles = require('../react-tiles/src/react-tiles'),
  Code = require('../Code')
;

var Link = Tiles.Link;

var GetStarted = React.createClass({
  render: function(){
    return (
      <div>
        <h2>Getting started with react-tiles</h2>
        <p>
          <span className="rt">react-tiles</span> is just a common React component that you can add into your app´s component tree.
          Adding it to your app will allow to load more than one route at the same time.
        </p>
        <div>
          <h3>Installation</h3>
          The package can be found in npm, so the simplest way of installing it is:
          <Code>{ require('snippets/install.html')}</Code>
        </div>
        <div>
          <h3>Usage</h3>
          <span className="rt">react tiles</span> is nothing but an usual React.js component, its basic usage is basic straightforward.
          <Code>{ require('snippets/usage.html')}</Code>
          <p>In the example we are using the <code>react-router-resolver</code> to tell <span className="rt">react tiles</span> how to handle the routes and navigate using <a href="https://github.com/reactjs/react-router">react-router</a>. See the <Link to={ this.props.layout.route + '#resolvers' }>resolvers section</Link> to know more.</p>
          The <code>Tiles</code> component is aware of the current app route, so you can use it as your root component. If you are using <code>react-router</code> the following route definition will tilify your app:
          <Code>{ require('snippets/routes.html')}</Code>
          It is perfectly possible to use the <code>Tiles</code> component besides other React components/elements, have a look at <a href="https://github.com/arqex/react-tiles-playground/blob/master/src/App.js" target="_blank">how this site uses react-tiles</a> to get an idea of how to add a side menu like the one here.
        </div>
        <div>
          <h3>Understanding the layouts</h3>
          <p><span className="rt">react tiles</span> has 3 different types of layouts:</p>
          <ul>
            <li><strong>Free layout</strong>: When there is only one tile in the current layout. It can be converted to a column layout dragging a tile to the left of the screen, and to aa row layout dragging a tile to the bottom.</li>
            <li><strong>Column layout</strong>: The tiles are organized by columns, and every column can have one or more tiles. You can add a new column dragging a tile to the left of the screen, or drag a tile to the bottom of the column to add it there.</li>
            <li><strong>Row layout</strong>: The tiles are organized by rows, and every row can have one or more tiles. You can add a new row dragging a tile to the bottom of the screen, or drag a tile to the left of the row to add it there.</li>
          </ul>
          <p>Rows and columns are generically called <strong>wrappers</strong>. When you close the last tile of a wrapper, that column/row is removed from the layout too. If there is only one wrapper left, the layout turns into a free one automatically.</p>
        </div>
        <div>
          <h3>Everything is about URLs</h3>
          <p>Even if <span className="rt">react-tiles</span> is a tool with a nice visual impact, the most important part of it is not the tiles but the URLs.</p>
          <p>Every time a tile is open a new URL is generated that includes the route of the open tile, so you can share or save the layout. This url centered approach makes easier to open, close or update tiles in the layout using actual links, and it plays really well with the browser history.</p>
          <p>A convienent <code>Link</code> component is shiped with <span className="rt">react-tiles</span> to make the navigation simple inside you tiled application. Here we have some examples of its usage:</p>
          <Code lang="html">{ require("snippets/link.html") }</Code>
          <p>And here you can see them working</p>
          <p>
            <Link to="/testLink">Default</Link> - Needs to have more tiles open to see it working.<br/>
            <Link to="/testLink" single>Single</Link> - Needs to have more tiles open to see it working.<br/>
            <Link to="/testLink" wrapper="floating">Floating</Link><br/>
            <Link to="/testLink" wrapper="side">Wrapper Id</Link><br/>
            <Link to="/testLink" tile="top">Tile id</Link> - <Link to="/testLinkAlternative" tile="top">Alternative route</Link><br/>
            <Link to="/testLink" wrapper="side" tile="mytile">Tile and wrapper id</Link> - <Link to="/testLinkAlternative" wrapper="side" tile="mytile">Alternative route</Link><br/>
            <Link to="/testLink" tile="bottom" type="row">Row layout</Link> - Needs to be in a <Link to={ this.props.layout.route } single>free layout</Link>.
          </p>
        </div>
        <div id="resolvers">
          <h3>Resolvers</h3>
          <p>
            Initially, <span className="rt">react tiles</span> doesn't know about the routes of your app or how to navigate within it. All
            that logic depends on the routing solution you are using, so to make <span className="rt">react tiles</span> work
            along with your routes you need to create a <strong>resolver</strong>.
          </p>
          <p>
            A resolver to work with <a href="https://github.com/reactjs/react-router">react-router v2</a> is shipped with the <span className="rt">react tiles </span>
            package. If that's your routing library you can make it work declaring that resolver when using the <code>Tiles</code> component:
          </p>
          <Code>{ require('snippets/usage.html') }</Code>
          <p>
            If you are using any other routing library, you can create your own resolver easily. See
            <a href="https://github.com/arqex/react-tiles/blob/master/src/react-router-resolver.js"> how the react-router-resolver works</a> to create your own.
          </p>
        </div>
      </div>
    )
  }
});

module.exports = GetStarted;
