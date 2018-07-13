import React, {Component} from 'react';

const pathToImages = require.context('../../images', true);

class Landing extends Component {
	render() {
		return(
			<div className="jumbotron mt-5">
				<img src={pathToImages('./logo.svg')} className="mx-auto d-block" alt="logo" width="50" height="50"/>
				<h1 className="text-center">Hello World!</h1>
				<p>This is an empty project. The following libs should have been loaded:</p>
				<ul>
					<li>Firebase: {typeof firebase=='undefined' ? 'not loaded' : 'loaded'}</li>
					<li>jQuery: {typeof $=='undefined' ? 'not loaded' : 'loaded'}</li>
					<li>React + Router: if you see this page, React was loaded</li>
					<li>Bootstrap: if you see any styling, Bootstrap was loaded</li>
				</ul>
			</div>
		);
	}
}

export default Landing;