var React = require('react');

module.exports = React.createClass({
  render: function(){
    return (
      <pre className={ this.props.lang || 'javascript' } ref="code">
        { this.props.children }
      </pre>
    );
  },
  shouldComponentUpdate(){
    return false;
  },
  componentDidMount(){
    hljs.highlightBlock( this.refs.code );
  }
});
