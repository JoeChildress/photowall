import React, {Component} from 'react';
import ReactDOM from 'react-dom';

const tasks = ['text1', 'text2', 'text3'];

class List extends Component {
    render() {
        return (
            <ul>
                {tasks.map((task) => <li key={task}>{task}</li>)}
            </ul>
        );
    }
}

class Header extends Component {
    render() {
        return <h1>My List</h1>
    }
}

class Main extends Component {
    render() {
        return  <div>
                    <Header />
                    <List />
                </div>
    }
}

ReactDOM.render(<Main />, document.getElementById('root'));

