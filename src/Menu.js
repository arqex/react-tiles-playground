var React = require('react'),
	RouterLink = require('react-router').Link,
	Tiles = require('./react-tiles/src/react-tiles')
;

var Menu = React.createClass({
	getInitialState: function(){
		return {
			open: false
		};
	},
	render: function() {
		var className = (this.props.className || '') + ' menu';
		if( this.state.open )
			className += ' menuOpen';

		return (
			<div className={ className }>
				<a className="menuToggle" onClick={ this.openMenu }>
					<img src="/assets/img/react-tiles-logo.png" />
				</a>
				<div className="logo">
					<img src="/assets/img/react-tiles-logo.png" />
					<h1>react-tiles</h1>
				</div>
				<div className="version">v{ Tiles.version }</div>
				<div className="menuItems">
					<div className="menuItem">
						<span>· </span>
						<RouterLink to='/'>Home</RouterLink>
					</div>
					<div className="menuItem">
						<span>· </span>
						<RouterLink to='/getStarted'>Get started</RouterLink>
					</div>
					<div className="menuItem">
						<span>· </span>
						<RouterLink to='/troubleshoot'>Troubleshoot</RouterLink>
					</div>
					<div className="menuItem">
						<span>· </span>
						<a href='https://github.com/arqex/react-tiles'>Github</a>
					</div>
				</div>
				<div className="copy">
					2016 by <a href="http://arqex.com" className="rt">arqex</a>
				</div>
			</div>
		);
	},
	openMenu: function(){
		this.setState( {open: true} );

		document.addEventListener( 'click', this.closeMenu );
	},
	closeMenu: function(){
		this.setState( {open: false} );
		document.removeEventListener( 'click', this.closeMenu );
	}
});

module.exports = Menu;
