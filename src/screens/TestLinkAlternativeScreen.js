var React = require("react");
var {Link} = require("../react-tiles/src/react-tiles");

module.exports = function(){
  return (
    <div>
      <h2>Alternative link test screen</h2>
      <p>You are trying the <code>Link</code> component uh? Nice, this is the content of the route <Link to="/testLinkAlternative" single>/testLink</Link>.</p>
      <p>All the link examples open this route. It is a bit boring, but <span className="rt">react tiles</span>'s developer is a lazy one...</p>
      <p>You can use your browser's back button to recover the previous layout.</p>
    </div>
  )
}
