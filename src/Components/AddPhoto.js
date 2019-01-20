import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class AddPhoto extends Component {

    constructor() {
        super()
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault();
        const imageLink = e.target.elements.link.value
        const imageDescription = e.target.elements.description.value
        const post = {
            index: 0,
            description: imageDescription,
            imageLink: imageLink
        }

        if (imageLink && imageDescription) {
            this.props.onAddPhoto(post);
        }
    }

    render() {
        return (<div>
                    <h1>Photowall</h1>
                    <div className="form">
                        <form onSubmit={this.handleSubmit}>
                            <input type="text" placeholder="Link" name="link"/>
                            <input type="text" placeholder="Description" name="description"/>
                            <button>Post</button>
                        </form>
                    </div>
                </div>)

    }
}

export default AddPhoto
