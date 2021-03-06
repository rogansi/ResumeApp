import {connect} from 'react-redux'
import TopMenuButton from '../components/TopMenuButton'
import {setContentProjects} from '../actions/actions'

const mapStateToProps = (state,text) =>({
      text:text.text
})

const mapDispatchToProps = (dispatch,text) => ({
    fillProjects: () => dispatch(setContentProjects(text.text)),
})

  export default connect(mapStateToProps,mapDispatchToProps)(TopMenuButton)