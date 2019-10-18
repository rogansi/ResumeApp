import {connect} from 'react-redux'
import Votetable from '../components/ProjectCard'
import {candyVote} from '../actions/actions'

const mapStateToProps = (state) =>({
      votes: state.votes,
      snacks: state.snacks,
      choices: state.choices
})

const mapDispatchToProps = (dispatch) => ({
  snackVote: (id,votes,choices) => dispatch(candyVote(id,votes,choices)),
  
})

  export default connect(mapStateToProps,mapDispatchToProps)(ProjectCard)