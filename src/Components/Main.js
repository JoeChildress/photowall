import React, {Component} from 'react'
import Title from './Title'
import PhotoWall from './PhotoWall'
import AddPhoto from './AddPhoto'
import Single from './Single'
import {Route, Link} from 'react-router-dom'

//import {removePost} from '../redux/actions'

class Main extends Component {

    //CONSTRUCTOR GETS CALLED BEFORE COMP GETS MOUNTED
    constructor() {

			//ALLOWS THE USE OF THIS WHEN EXTENDING TO ANOTHER CLASS
			super()
			
		}

    render() {
			console.log(this.props)

			//USE EXACT PATH FOR BASE URL BECAUSE OTHER URLS CONTAIN / AS WELL
			//USE HISTORY TO UPDATE THE PATH
			return ( 
				<div>
					<h1>
						 <Link to='/'>Photowall</Link>
					</h1> 
					<Route exact path='/' render = {() => (
						<div>
							<PhotoWall {...this.props} />
						</div>
					)} /> 
					
					<Route path='/AddPhoto' render = {({history}) => (
						<div>
							<AddPhoto {...this.props} />
						</div>
					)}/>

					<Route path='/single/:id' render = {(params) => (
						<div>
							<Single {...this.props} {...params} />
						</div>
					)}/>
			</div>
			)
				}

    }

export default Main