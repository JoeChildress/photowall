import React, {Component} from 'react'
import Title from './Title'
import PhotoWall from './PhotoWall'
import AddPhoto from './AddPhoto'
import {Route} from 'react-router-dom'

class Main extends Component {

    //CONSTRUCTOR GETS CALLED BEFORE COMP GETS MOUNTED
    constructor() {

        //ALLOWS THE USE OF THIS WHEN EXTENDING TO ANOTHER CLASS
        super()
        this.state = {
            posts: [{
                id: "0",
                description: "beautiful landscape",
                imageLink: "https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/i4eeacaa2dbf12d6d/version/1490299332/most-beautiful-landscapes-in-europe-lofoten-european-best-destinations-copyright-iakov-kalinin.jpg" +
                "3919321_1443393332_n.jpg"
                }, {
                id: "1",
                description: "Aliens???",
                imageLink: "https://img.purch.com/rc/640x415/aHR0cDovL3d3dy5zcGFjZS5jb20vaW1hZ2VzL2kvMDAwLzA3Mi84NTEvb3JpZ2luYWwvc3BhY2V4LWlyaWRpdW00LWxhdW5jaC10YXJpcS1tYWxpay5qcGc=" +
                "08323785_735653395_n.jpg"
                }, {
                id: "2",
                description: "On a vacation!",
                imageLink: "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/08/24/104670887-VacationExplainsTHUMBWEB.1910x1000.jpg"
                }],
            screen: 'photos'
        } 
        
        this.removePhoto = this.removePhoto.bind(this);
        this.addPhoto = this.addPhoto.bind(this);
    }

    removePhoto(postRemoved) {
        console.log(postRemoved.description);
        this.setState((state) => ({
            posts: state.posts.filter(post => post !== postRemoved )
        }))
    }

    addPhoto(newPost) {
        this.setState((state) => ({
            posts: state.posts.concat([newPost])
        }))
    }


    //CALLED AFTER INITIAL INSERTION OF COMPONENT
    //USE FOR ASYNC DATA CALLS TO UPDATE STATE
    componentDidMount() {

        //SIMULATED FETCH FOR DATA
        const data = this.simulateFetchFromDataBase();

        //UPDATE STATE WITH NEW DATA WHICH TRIGGERS RENDER
        this.setState({
            posts: data
        })
    }

    render() {

        //USE EXACT PATH FOR BASE URL BECAUSE OTHER URLS CONTAIN / AS WELL
        //USE HISTORY TO UPDATE THE PATH
        return  <div>
            
            <Route exact path='/' render = {() => (
                    <div>
                            <Title title={'Photowall'} />
                            <PhotoWall posts={this.state.posts} onRemovePhoto={this.removePhoto} />
                    </div>
            )} />  

            
            <Route path='/AddPhoto' render = {({history}) => (
                    <div>
                        <AddPhoto onAddPhoto={(addedPhoto) => {
                            this.addPhoto(addedPhoto)
                            history.push("/");
                        }} />
                    </div>
            )}/>       
        </div>

    }

    simulateFetchFromDataBase() {
        return [{
            id: "0",
            description: "beautiful landscape",
            imageLink: "https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/i4eeacaa2dbf12d6d/version/1490299332/most-beautiful-landscapes-in-europe-lofoten-european-best-destinations-copyright-iakov-kalinin.jpg" +
            "3919321_1443393332_n.jpg"
            }, {
            id: "1",
            description: "Aliens???",
            imageLink: "https://img.purch.com/rc/640x415/aHR0cDovL3d3dy5zcGFjZS5jb20vaW1hZ2VzL2kvMDAwLzA3Mi84NTEvb3JpZ2luYWwvc3BhY2V4LWlyaWRpdW00LWxhdW5jaC10YXJpcS1tYWxpay5qcGc=" +
            "08323785_735653395_n.jpg"
            }, {
            id: "2",
            description: "On a vacation!",
            imageLink: "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/08/24/104670887-VacationExplainsTHUMBWEB.1910x1000.jpg"
            }]
    }
}

export default Main