var React = require('react');

var SidebarLink = React.createClass({
  render(){
    return (
      <div>
        <h3>Floating tile</h3>
        <div>
          <p>This tile has been open as floating. Floating tiles has some nice features:</p>
          <ul>
            <li><strong>They are resizable.</strong> try to drag the edge of the tiles to change its size.</li>
            <li><strong>They are draggable.</strong> It is possible to change the position of the tile dragging them from the top of the tile.</li>
            <li><strong>They are dockable.</strong> Move the tile to the right of the bottom of the screen, and it will become part of the tile mosaic.</li>
          </ul>

          <p>Docked tiles, can be converted into floating ones just dragging them from the top of the tile out of its originial position. Dragging the tiles this way makes easier to get the layout you need at anytime.</p>

        </div>
      </div>
    )
  }
});

module.exports = SidebarLink;
