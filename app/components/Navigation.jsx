var React = require('react');
var {Link, IndexLink} = require('react-router');

var Navigation = (props) => {
	return(
		<div>
		<h2>Nav Component</h2>
			<ul>
				<li><IndexLink to="/" activeClassName="active-link">Get Weather</IndexLink></li>
				<li><Link to="about" activeClassName="active-link">About</Link></li>
				<li><Link to="examples" activeClassName="active-link">Examples</Link></li>
			</ul>
		</div>
	);
}

module.exports = Navigation
