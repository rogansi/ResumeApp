//App.js
import React, { Component } from 'react'
import {connect} from 'react-redux'
import ProjectCardContainer  from '../containers/ProjectCardContainer'
import LeftMenuButtonContainer from '../containers/LeftMenuButtonContainer'
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
               <LeftMenuButtonContainer text="HOME"></LeftMenuButtonContainer>
               <LeftMenuButtonContainer text="PROJECTS"></LeftMenuButtonContainer>
               <LeftMenuButtonContainer text="REFERENCES"></LeftMenuButtonContainer>
               <LeftMenuButtonContainer text="CONTACT"></LeftMenuButtonContainer>
            </div>

            <div id = "appDisplayContent">
                {(this.props.Projects.length>0 && this.props.Content=="PROJECTS")?this.props.Projects.map((project,i)=>(<ProjectCardContainer key={i} image={project.pr_image} title={project.pr_name} projectid={i}></ProjectCardContainer>)):<div></div>}
            </div>
            </div>
        );
    }
}

const mapStateToProps = (state) =>({
    CurrentProject: state.resume.CurrentProject,
    Projects: state.resume.projects,
    Content: state.appContent.Displayed
})


export default connect(mapStateToProps)(App)