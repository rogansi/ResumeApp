import React from 'react'
import PropTypes from 'prop-types'


const SingleProject = ({person}) =>(
    <div className = "contactcard">
                   <p>{person.co_firstName+' '+person.co_lastName}</p>
                   <p>{person.co_employer}</p>     
    </div>
)

SingleProject.propTypes = {
    person: PropTypes.object.isRequired
}
export default SingleProject