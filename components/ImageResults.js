import React, { Component } from 'react';

export class ImageResults extends Component {
	render() {
		
		return (
			<div>
				<ul className="gifListWrapper" style={{
					display: 'flex',
					flexWrap: 'wrap',
					listStyleType: 'none'}}>
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