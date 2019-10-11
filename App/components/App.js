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
            <div id= "all">
              HELLO
            </div>
        );
    }
}


export default connect()(App)