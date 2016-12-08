'use strict'
//libraries
import React from 'react'
import ReactDom from 'react-dom'


//component
const App = ()=> {
    return (
        <div>
        React App
        </div>
    )
}

//need this to delay js until page loads
Meteor.startup(() => {
    ReactDom.render(<App />, document.querySelector("#container"))
})

