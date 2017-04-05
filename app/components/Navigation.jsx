var React = require('react');
var {Link, IndexLink} = require('react-router');

var Navigation = (props) => {
	return(
		<div>
		<h2>Nav Component</h2>
			<ul>
				<li><IndexLink to="/" activeClassName="active" activeStyle={{ fontWeight:'bold'}}>Get Weather</IndexLink></li>
				<li><Link to="about" activeClassName="active" activeStyle={{ fontWeight:'bold'}}>About</Link></li>
				<li><Link to="examples" activeClassName="active" activeStyle={{ fontWeight:'bold'}}>Examples</Link></li>
			</ul>
		</div>
	);
}

module.exports = Navigation
