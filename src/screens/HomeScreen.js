var React = require('react'),
  Tiles = require('../react-tiles/src/react-tiles')
;

var Link = Tiles.Link;

var Home = React.createClass({
  getInitialState: function(){
    return {
      showTooMany: false
    };
  },

  render: function(){
    return (
      <div className="homeScreen">
        <h2>Welcome to multi-route React</h2>
        <p>If you are developing a react app and you need to display more than one route at the same time <span className="rt">react-tiles</span> is here to help.</p>
        <button onClick={ () => this.showSidebar() }>Show me <span className="rt">react-tiles</span> working now!</button>
        { this.renderTooMany() }
        <p><span className="rt">react tiles</span> divides your app's layout in columns or rows loading one or more routes in them, the way you can use all the app's screen you need at the same time, in one browser window. <strong>Try to click the button above again!</strong></p>
        <p>But not everything is about columns and rows. Your may prefer to freed your tiles:</p>
        <Link to="/floatingTile" className="btn" wrapper="floating">Open a float tile</Link>
        <p>Isn't it nice? You can create all the tiles you want and drag them to the bottom and the left of the screen to create crazy layouts.</p>
        <p>You can also use your browser's back and forward button to go through your layout history. That is because <span className="rt">react tiles</span> uses a URL approach to define the layouts, that way opening tiles is as simple as clicking a link and you can share your layouts URLs.</p>
        <h3>Everything is about URLs</h3>
        <p>Even if <span className="rt">react-tiles</span> is a tool with a nice visual impact, the most important part of it is not the tiles but the URLs.</p>
        <p>Every time a tile is open a new URL is generated that includes the route of the open tile, so you can share or save the layout. This url centered approach makes easier to open, close or update tiles in the layout using actual links, and it plays really well with the browser history.</p>
        <p>A convienent <code>Link</code> component is shiped with <span className="rt">react-tiles</span> to make the navigation simple inside you tiled application. For example, <Link to="/sidebar">here it is a link that works inside this tile</Link>.</p>
        <p>Do you want to use it in your app? <Link to="/getStarted">Get started now!</Link></p>
      </div>
    );
  },
  renderTooMany: function(){
    if( !this.state.showTooMany ) return;

    return (
      <div className="warn">
        <p>Hey!! Seems like you want to open a bunch of tiles in the same wrapper!</p>
        <p><span className="rt">react-tiles</span> allows to detect the tiles on a wrapper at anytime. So this site is coded to not to allow more than 3 tiles per wrapper.</p>
      </div>
    )
  },

  showSidebar: function(){
    var builder = Tiles.getQueryBuilder(),
      sidebarInfo = Tiles.getWrapperInfo('sidebar')
    ;

    if( sidebarInfo && sidebarInfo.children.length > 2 ){
      return this.setState({showTooMany: true});
    }

    var url = builder.setTile({
      target: 'sidebar',
      type: 'column',
      route: '/sidebar'
    });

    console.log( url );
    location.href = url;
  }
});

module.exports = Home;
