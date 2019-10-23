import React from 'react'
import PropTypes from 'prop-types'


const ProjectCard = ({projectid, image, title}) =>(
    <div className = "projectcard" onMouseEnter={true} onMouseLeave={true}>
                        <div className = "projectimage"><img className = "cardImage" src = {"https://josephtapper.org/Resume/api/images/"+image} alt="somepic" /></div>
                        <div className = "container">
                            {title}
                        </div>
    </div>
)

ProjectCard.propTypes = {
    projectid: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
}
export default ProjectCard