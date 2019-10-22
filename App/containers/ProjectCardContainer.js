import {connect} from 'react-redux'
import ProjectCard from '../components/ProjectCard'
import {getProjectById} from '../actions/actions'

const mapStateToProps = (state) =>({
      projects: state.projects
})

const mapDispatchToProps = (dispatch) => ({
  selectProject: (id) => dispatch(getProjectById(id))
})

  export default connect(mapStateToProps,mapDispatchToProps)(ProjectCard)