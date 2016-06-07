var React = require('react'),
	RouterLink = require('react-router').Link
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
				<div className="menuItems">
					<div className="menuItem">
						<span>· </span>
						<RouterLink to='/posts'>Home</RouterLink>
					</div>
					<div className="menuItem">
						<span>· </span>
						<RouterLink to='/posts'>Home</RouterLink>
					</div>
					<div className="menuItem">
						<span>· </span>
						<RouterLink to='/posts'>Home</RouterLink>
					</div>
					<div className="menuItem">
						<span>· </span>
						<RouterLink to='/posts'>Home</RouterLink>
					</div>
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
