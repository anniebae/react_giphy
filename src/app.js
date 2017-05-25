import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import One from '../components/One'
import ImageResults from '../components/ImageResults'
import Gif from '../components/Gif'

class App extends Component {
	render() {
		return(
			<div>
				<One />
			</div>
		)
	}
}

var app = document.getElementById('app');
ReactDOM.render(<App />, app);