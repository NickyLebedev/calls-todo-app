import { connect } from 'react-redux'
import * as TodoActions from '../../state/actions'
import { bindActionCreators } from 'redux'
import MainSection from '../components/MainSection'
import { getCompletedTodoCount, getNearestTodo } from '../../state/selectors'

const mapStateToProps = state => ({
  todosCount: state.todos.list.length,
  completedCount: getCompletedTodoCount(state),
  nearestTodo: getNearestTodo(state)
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(TodoActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainSection)
