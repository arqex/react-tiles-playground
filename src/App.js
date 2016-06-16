var React = require('react'),
	Menu = require('./Menu'),
	Router = require('react-router'),
	ObjectAssign = require('object-assign'),
	Tiles = require('./react-tiles/src/react-tiles'),
	resolver = require('./react-tiles/src/react-router-resolver')
;

var RouteHandler = Router.RouteHandler;

var App = React.createClass({
	render: function() {
		var appClass = 'app';

		if( window.innerWidth < 1000 )
			appClass += ' smallWindow';
		if( window.innerWidth < 640 )
			appClass += ' tinyWindow';

		return (
			<div className={ appClass }>
				<Menu />
				<div className="appContent tileManager">
					<Tiles {...this.props} resolver={ resolver } />
				</div>
			</div>
		);
	},
	componentDidMount: function(){
		var me = this;
		window.addEventListener( 'resize', function(){
			me.forceUpdate();
		});
	}
});

module.exports = App;
