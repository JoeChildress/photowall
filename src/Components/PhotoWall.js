import React, {Component} from 'react';
import Photo from './Photo'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

class PhotoWall extends Component { 
	render() {

		//LINK IS USED FOR REACT ROUTER TO TRACK THE URL CHANGES
		return <div>
			<Link className="addIcon" to="AddPhoto"></Link>
			{/* <button className="addIcon" onClick={this.props.onToggleScreen} ></button> */}
			<div className="photoGrid">
						{this.props.posts.map((post, index) => <Photo key={index} post={post} onRemovePhoto={this.props.onRemovePhoto} />)}
			</div>
		</div>
	}
}

PhotoWall.propTypes = {
	posts: PropTypes.array.isRequired,
	onRemovePhoto: PropTypes.func.isRequired
}

export default PhotoWall