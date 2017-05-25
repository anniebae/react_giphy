import React, { Component } from 'react';
import ImageResults from '../components/ImageResults';

const url = 'https://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q=';

export class One extends Component {
	constructor(props) {
		super(props);
		this.onChange = this.onChange.bind(this)
		this.state = {
			urls: [],
		};
	}

    onChange(e) {
       const query = e.target.value || '';
       fetch(url + query.replace(/ /g, '+'))
       	.then(res => res.json())
       	.then(json => json.data)
       	.then(data => data.map(obj => obj.images.fixed_height.url))
       	.then(urls => this.setState({urls: urls}));



    }

	render() {
		return (
			<div>
				<input type="text" onChange={this.onChange} />
				<ImageResults urls={this.state.urls} />
			</div>
		);
	}
}

export default One;