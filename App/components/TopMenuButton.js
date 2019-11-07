import React from 'react'
import PropTypes from 'prop-types'


const TopMenuButton = ({fillProjects, text}) =>(
    <div className = "topmenubutton" onClick={()=>fillProjects(text)}>
                   <img src = {"/App/styles/images/"+text+".png"}    />
    </div>
)

TopMenuButton.propTypes = {
    text:PropTypes.string.isRequired,
    fillProjects: PropTypes.func.isRequired
}
export default TopMenuButton