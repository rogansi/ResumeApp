//App.js
import React, { Component } from 'react'
import {connect} from 'react-redux'
import C from '../init/constants'
import ProjectCardContainer  from '../containers/ProjectCardContainer'
import ContactCardContainer  from '../containers/ContactCardContainer'
import LeftMenuButtonContainer from '../containers/LeftMenuButtonContainer'
require("babel-core/register");
require("babel-polyfill");


class App extends Component {
    constructor(props) {
        super(props);

    }
    contentSwitch(param){
        switch(param){
            case C.HOME:
                return <div>Awesome looking home page</div>
            case C.PROJECTS:
                return this.props.Projects.map((project,i)=>(<ProjectCardContainer key={i} image={project.pr_image} title={project.pr_name} projectid={i}></ProjectCardContainer>))
            case C.REFERENCES:
                console.log(this.props.Contacts[0].co_firstName)
                return this.props.Contacts.map((contact,i)=>(<ContactCardContainer key={i} person={contact}></ContactCardContainer>))
            case C.CONTACT:
                return <div>Ways to get a hold of me</div>

            default:
               return <div>Awesome looking home page</div>
        }
    }
    render(){
        return (
            <div id = "content">
            <div id= "appTopMenu">
              
            </div>

            <div id= "appSideMenu">
               <LeftMenuButtonContainer text={C.HOME}></LeftMenuButtonContainer>
               <LeftMenuButtonContainer text={C.PROJECTS}></LeftMenuButtonContainer>
               <LeftMenuButtonContainer text={C.REFERENCES}></LeftMenuButtonContainer>
               <LeftMenuButtonContainer text={C.CONTACT}></LeftMenuButtonContainer>
            </div>

            <div id = "appDisplayContent">
                {(this.props.Projects.length>0)?this.contentSwitch(this.props.Content):<div>There are no projects</div>}
            </div>
            </div>
        );
    }
}

const mapStateToProps = (state) =>({
    CurrentProject: state.resume.CurrentProject,
    Projects: state.resume.projects,
    Contacts: state.resume.contacts,
    Content: state.appContent.Displayed
})


export default connect(mapStateToProps)(App)