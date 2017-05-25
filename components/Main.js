import React, { Component } from 'react';
import ImageResults from '../components/ImageResults';

import css from '../src/stylesheets/styles.css'

const url = 'https://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q=';

export class Main extends Component {
	constructor(props) {
		super(props);
		this.onChange = this.onChange.bind(this)
		this.state = {
			urls: [],
		};
	}

	componentDidMount() {
		const babyElephantsUrl = 'https://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q=baby+elephants'
		fetch(babyElephantsUrl)
			.then(res => res.json())
			.then(json => json.data)
			.then(data => data.map(obj => obj.images.fixed_height.url))
			.then(urls => this.setState({urls: urls}))
	}

    onChange(e) {
       const query = e.target.value || '';
       fetch(url + query.replace(/ /g, '+'))
       	.then(res => res.json())
       	.then(json => json.data)
       	.then(data => data.map(obj => obj.images.fixed_height.url))
       	.then(urls => this.setState({urls: urls}));

       	if (query == '') {
       		this.componentDidMount();
       	}
    }

   

	render() {
		return (
			<div className="mainWrapper">
				<p className="title">SEARCH A GIF!</p>
				<input
					type="text" className="searchField" onChange={this.onChange} autoFocus />
				<ImageResults urls={this.state.urls} />
			</div>
		);
	}
}

export default Main;