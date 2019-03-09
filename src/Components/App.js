import Main from './Main'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as actions from '../redux/actions'
import {withRouter} from 'react-router'



//APP.JS IS USED TO KEEP REDUX OUT OF THE DISPLAY COMPONENTS

//BINDING REMOVEPOST TO PROPS TO PREVENT FROM HAVING TO USE DISPATCH. FOR THE FN
function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch)
}

//MAPS STATE FROM STORE TO PROPS
function mapStateToProps(state) {
    return {
        posts: state
    }
}

//USING CONNECT TO PASS STATE FROM STORE TO MAIN 
//NOW MAIN IS CONNECTED TO THE STATE AS THE APP COMPONENT
const App = withRouter(connect(mapStateToProps,mapDispatchToProps)(Main))

export default App