var React = require('react'),
  Tiles = require('../react-tiles/src/react-tiles')
;

var Link = Tiles.Link;

var EndTour = React.createClass({
  getInitialState: function(){
    return {
      showTooMany: false
    };
  },

  render: function(){
    return (
      <div>
        <h2>It seems to be working!</h2>
        <p>If you are seeing this tile, you already know what are the main benefits of <span className="rt">react tiles</span>.</p>
      </div>
    )
  }

});

module.exports = EndTour;
