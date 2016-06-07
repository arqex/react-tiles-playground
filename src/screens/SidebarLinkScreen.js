var React = require('react'),
  TileManager = require('../react-tiles/src/react-tiles')
;

var SidebarLink = React.createClass({
  render(){
    return (
      <div>
        <h3>Simple links</h3>
        <div>
          <p>This route can be loaded in the same tile than the link that was clicked in a really simple way.</p>
          <p>React tiles come with a link component that makes easy to navigate within the tiles or open new tiles.</p>

        </div>
      </div>
    )
  }
});

module.exports = SidebarLink;
