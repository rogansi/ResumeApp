//App.js
import React, { Component } from 'react'
import {connect} from 'react-redux'
require("babel-core/register");
require("babel-polyfill");


class App extends Component {
    constructor(props) {
        super(props);

    }
    
    render(){
        return (
            <div id = "content">
            <div id= "appTopMenu">
              HELLO!
            </div>

            <div id= "appSideMenu">
               AGAIN
            </div>

            <div id= "appDisplayContent">
                FINAL
            </div>
            </div>
        );
    }
}


export default connect()(App)