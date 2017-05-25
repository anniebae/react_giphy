import React, { Component } from 'react';

export class ImageResults extends Component {
	render() {
		
		return (
			<div className="imageResults">
				<ul className="gifListWrapper">
					{this.props.urls.map(url =>
						<a href={url} target="_blank" key={url}>
							<li>
								<img src={url} alt=""/>
							</li>
						</a>
					)}
				</ul>
			</div>
		);
	}
}


export default ImageResults;