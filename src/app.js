import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import Main from '../components/Main'
import ImageResults from '../components/ImageResults'

class App extends Component {
	render() {
		return(
			<div>
				<Main />
			</div>
		)
	}
}

var app = document.getElementById('app');
ReactDOM.render(<App />, app);