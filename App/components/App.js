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
                {this.props.Projects.map((project,i)=>(
                    <div className = "projectcard" key={i}>
                        <div className = "projectimage"><img className = "cardImage" src = {"https://josephtapper.org/Resume/api/images/"+project.pr_image} alt="somepic" /></div>
                        <div className = "container">
                            {project.pr_name}
                        </div>
                    </div>
                ))}


                
            </div>
            </div>
        );
    }
}

const mapStateToProps = (state) =>({
    CurrentProject: state.CurrentProject,
    Projects: state.projects
})


export default connect(mapStateToProps)(App)