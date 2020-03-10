import React from 'react'
import PropTypes from 'prop-types'


const ContactCard = ({person}) =>(
    <div className = "contactcard">
                   <p>{person.co_firstName+' '+person.co_lastName}</p>
                   <p>{person.co_title}</p>
                   <p>{person.co_employer}</p>
                   <div><a href = {"tel:"+person.co_phone}><img  className = "connectImage" src = {"/App/styles/images/contact_phone.png"}    /></a> 
                   <a href = {"mailto:"+person.co_email}><img  className = "connectImage" src = {"/App/styles/images/contact_email.png"}    /></a>
                   </div> 
    </div>
)

ContactCard.propTypes = {
    person: PropTypes.object.isRequired
}
export default ContactCard