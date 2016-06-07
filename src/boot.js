var ReactDOM = require('react-dom'),
	Router = require('react-router'),
	routes = require('./routes')
;

require('./appStyle');

ReactDOM.render(
	routes,
	document.getElementById('root')
);
