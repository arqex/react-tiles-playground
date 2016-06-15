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
          The <code>Code</code> component is aware of the current app route, so you can use it as your root component. If you are using <code>react-router</code> the following route definition will tilify your app:
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
          <p>A convienent <code>Link</code> component is shiped with <span className="rt">react-tiles</span> to make the navigation simple inside you tiled application. For example, <Link to="/sidebar">here it is a link that works inside this tile</Link>.</p>
          <p>Do you want to use it in your app? <Link to="/getStarted">Get started now!</Link></p>
        </div>
      </div>
    )
  }
});

module.exports = GetStarted;
