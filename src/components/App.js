import React, { Component } from 'react';
import { BrowserRouter as Router, Route, PropsRoute} from 'react-router-dom';

class App extends Component {
	render() {
		return(
			<div className="container">
				<div className="jumbotron mt-5">
					<h1 className="text-center">Hello World!</h1>
					<p>This is an empty project. The following libs should have been loaded:</p>
					<ul>
						<li>Firebase: {typeof firebase=='undefined' ? 'not loaded' : 'loaded'}</li>
						<li>jQuery: {typeof $=='undefined' ? 'not loaded' : 'loaded'}</li>
						<li>React + Router: if you see this page, React was loaded</li>
						<li>Bootstrap: if you see any styling, Bootstrap was loaded</li>
					</ul>
				</div>
			</div>
		);
	}
}

export default App