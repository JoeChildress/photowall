import Main from './Main'
import {connect} from 'react-redux'

//MAPS STATE FROM STORE TO PROPS
function mapStateToProps(state) {
    return {
        posts: state
    }
}

//USING CONNECT TO PASS STATE FROM STORE TO MAIN 
//NOW MAIN IS A CONNECTED COMPONENT
const App = connect(mapStateToProps)(Main)

export default App