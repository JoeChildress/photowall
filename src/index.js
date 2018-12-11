import React, {Component} from 'react';
import ReactDOM from 'react-dom';

const tasks = ['text1', 'text2', 'text3'];

class List extends Component {
    render() {
        return (
            <ul>
                {this.props.tasks.map((task) => <li key={task}>{task}</li>)}
            </ul>
        );
    }
}

class Header extends Component {
    render() {
        return <h1>{this.props.title}</h1>
    }
}

class Main extends Component {
    render() {
        return  <div>
                    <Header title={'My Props Title'} />
                    <List tasks={['thing one','thing two']}/>
										<List tasks={['cat one','cat two']}/>
                </div>
    }
}

ReactDOM.render(<Main />, document.getElementById('root'));

