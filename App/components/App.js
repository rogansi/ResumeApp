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

            <div id = "appDisplayContent">
                <div className = "projectcard">
                    <div className = "projectimage"><img className = "cardImage" src = {"https://josephtapper.org/Resume/api/images/"+this.props.CurrentProject.pr_image} alt="somepic" /></div>
                    <div className = "container">
                        {this.props.CurrentProject.pr_name}
                    </div>
                </div>
            </div>
            </div>
        );
    }
}

const mapStateToProps = (state) =>({
    CurrentProject: state.CurrentProject
})


export default connect(mapStateToProps)(App)