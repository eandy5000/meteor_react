'use strict'
//libraries
import React from 'react'
import ReactDom from 'react-dom'
import axios from 'axios'

//imported components
import ImageList from './components/image_list'


//component
const App = ()=> {
    return (
        <div>
            <h1>Image List</h1>
            <ImageList />
        </div>
    )
}

//need this to delay js until page loads
Meteor.startup(() => {
    ReactDom.render(<App />, document.querySelector("#container"))
})

