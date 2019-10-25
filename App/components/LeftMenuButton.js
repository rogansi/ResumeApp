import React from 'react'
import PropTypes from 'prop-types'


const LeftMenuButton = ({fillProjects, text}) =>(
    <div className = "leftmenubutton" onClick={()=>fillProjects(text)}>
                   {text}    
    </div>
)

LeftMenuButton.propTypes = {
    text:PropTypes.string.isRequired,
    fillProjects: PropTypes.func.isRequired
}
export default LeftMenuButton