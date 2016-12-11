'use strict'
//libraries
import React, {Component} from 'react'
import ReactDom from 'react-dom'
import axios from 'axios'

//imported components
import ImageList from './components/image_list'



//component
class App extends Component {
    constructor(props){
        super(props)

        this.state = {
            images: []
        }
    }

    componentWillMount(){
        axios
            .get("https://api.imgur.com/3/gallery/hot/viral/0")
            .then(res => console.log(res))
    }
    
    render() {
            return (
            <div>
                <h1>Image List</h1>
                <ImageList />
            </div>
        )
    }
}

//need this to delay js until page loads
Meteor.startup(() => {
    ReactDom.render(<App />, document.querySelector("#container"))

})

