import React, {Component} from 'react';

class List extends Component {
    render() {
        return (
            <ul>
                {this.props.tasks.map((task) => <li key={task}>{task}</li>)}
            </ul>
        );
    }
}

export default List