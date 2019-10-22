import React from 'react'
import PropTypes from 'prop-types'


const ProjectCard = ({projectid, image, title}) =>(
    <div className = "projectcard">
                        <div className = "projectimage"><img className = "cardImage" src = {"https://josephtapper.org/Resume/api/images/"+image} alt="somepic" /></div>
                        <div className = "container">
                            {title}
                        </div>
    </div>
)

ProjectCard.propTypes = {
    projectid: PropTypes.number,
    image: PropTypes.string,
    title: PropTypes.string
}
export default ProjectCard