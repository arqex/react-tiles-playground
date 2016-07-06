var React = require('react');
var Code = require('../Code');
var {Link} = require('../react-tiles/src/react-tiles');

module.exports = React.createClass({
  render: function(){
    return (
      <div>
        <h2>APIs</h2>
        <div id="tiles">
          <h3>Tiles component</h3>
          <p>The <code>Tiles</code> component is the one you need to make your app use <span className="rt">react tiles</span>. Its usage is simple:</p>
          <Code>{ require('snippets/usage.html') }</Code>
          The component accepts the following props:
          <ul>
            <li>
              <code>resolver</code>: The object to translate routes into components. See the resolver section to know how to create yours.
            </li>
          </ul>
        </div>
        <div id="links">
          <h3>Link component</h3>
          <p>
            The <code>Link</code> component makes easy navigate within tiles and open new ones. You can use it this way:
          </p>
          <Code>{ require('snippets/linkAPI.html')}</Code>
          <p>The <code>Link</code> component accepts the following props:</p>
          <ul>
            <li>
              <code>to</code>: The route where the tile will navigate to. This prop is mandatory.
            </li>
            <li>
              <code>single</code>: If the prop `single` is present in a `Link` component, when it is clicked, the layout will be reseted and the route will be open alone in a free layout.
            </li>
            <li>
              <code>tile</code>: The tile id where open the route. If there is already a tile open with that id, the tile will navigate to that route.
              <p>If there is no tile in the current layout with that id, a new tile is open. You can then specify a wrapper id, using the <code>wrapper</code> prop to open the tile in a specific wrapper. If none wrapper id is given, we can also have 2 scenarios: If we are in a free layout, a new wrapper and tile is created. Otherwise the tile is open in the current wrapper.</p>
            </li>
            <li>
              <code>wrapper</code>: The wrapper id to open a tile in it. If no wrapper exists with that id in the current layout, a new wrapper is created.
              <p>There is a special case for the wrapper id, if a link is created with the prop <code>wrapper</code> set to <code>floating</code> a new floating tile is open.</p>
            </li>
            <li>
              <code>type</code>: If the current layout is free, the <code>type</code> props can be used to open a new <code>column</code> or <code>row</code>. Default: `column`.
            </li>
            <li>
              <code>position</code>: When opening a new tile, you can use this props to decide the order of the new tile in the current wrapper. Default: The tile is open in the last position.
            </li>
          </ul>
        </div>
        <div id="builder">
          <h3>URL query builder</h3>
          <p>The query builder is used by the <code>Link</code> component internally to create the URL to navigate inside a tile or open a new one.</p>
          <p>The builder is passed as a prop to every route component, so it is possible to use it just calling <code>this.props.builder</code>.</p>
          <p>The object in the prop contains the information of the current layout and generates URL based on it. You can always use the <code>update</code> attribute of its methods to update the internal state and get URLs that makes more than one modifications to the current layout.</p>
          <p>Here it is a list of the builder's most usefult methods:</p>
          <ul>
            <li>
              <code>setTile(tileDefinition)</code>: Returns the URL that adds a tile to the current layout. The <code>tileDefinition</code> arguments can include all the options seen in the <code>Link</code> component. It accepts also the `update` option that will update the internal state of the builder with the tile addition.
            </li>
            <li>
              <code>remove( id, update )</code>: Remove the tile with the given id. If there is no tile with that id the returns the current URL. If the tile is the only one in a wrapper, the wrapper is also removed.
            </li>
            <li>
              <code>resetWrapper( id, tileDefinition, update )</code>: Empties the wrapper with the id given and add a tile in it defined by the <code>tileDefinition</code>. In this case the only useful attributes in the <code>tileDefinition</code> object are the <code>route</code> and <code>id</code> ones.
            </li>
            <li>
              <code>swapType( update )</code>: Transform a column layout into a row one and the other way around. Free layouts are not affected by this method.
            </li>
            <li>
              <code>setFloating( tileId, update )</code>: Transform the tile with the given `tileId` into a floating one.
            </li>
          </ul>
        </div>
      </div>
    );
  },

  scrollTo: function( selector ){
    var top = document.querySelector( selector ).offsetTop;
    if( window.scrollTo ){
      window.scrollTo( 0, top );
    }
  }


});
