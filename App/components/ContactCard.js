import React from 'react'
import PropTypes from 'prop-types'


const ContactCard = ({person}) =>(
    <div className = "contactcard">
                   <p>{person.co_firstName+' '+person.co_lastName}</p>
                   <p>{person.co_employer}</p>     
    </div>
)

ContactCard.propTypes = {
    person: PropTypes.object.isRequired
}
export default ContactCard