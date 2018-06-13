import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as TodoActions from '../../state/actions'
import TodoList from '../components/TodoList'
import { getVisibleTodos } from '../../state/selectors'

const mapStateToProps = state => ({
  filteredTodos: getVisibleTodos(state)
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(TodoActions, dispatch),
})

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default VisibleTodoList
