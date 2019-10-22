//App.js
import React, { Component } from 'react'
import {connect} from 'react-redux'
import ProjectCardContainer from '../containers/ProjectCardContainer'
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
              
            </div>

            <div id= "appSideMenu">
               
            </div>

            <div id = "appDisplayContent">
                {(this.props.Projects.length>0)?this.props.Projects.map((project,i)=>(<ProjectCardContainer key={i} image={project.pr_image} title={project.pr_name} projectid={i}></ProjectCardContainer>)):<div></div>}
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