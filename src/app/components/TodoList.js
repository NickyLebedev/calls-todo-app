import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TodoItem from './TodoItem'

class TodoList extends Component {
  static propTypes = {
    filteredTodos: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
      name: PropTypes.string.isRequired,
      time: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
    }).isRequired).isRequired,
    actions: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props)

    this.handleNameSortClick = this.handleNameSortClick.bind(this)
    this.handleTimeSortClick = this.handleTimeSortClick.bind(this)
  }

  state = {
    nameAsc: true,
    timeAsc: true,
  }

  handleNameSortClick() {
    const isAsc = this.state.nameAsc
    this.props.actions.sortTodos({field: 'name', type: isAsc})
    this.setState({nameAsc: !isAsc})
  }

  handleTimeSortClick() {
    const isAsc = this.state.timeAsc
    this.props.actions.sortTodos({field: 'time', type: isAsc})
    this.setState({timeAsc: !isAsc})
  }

  render() {
    const { filteredTodos, actions } = this.props
    return (
      <table className="u-full-width">
        <thead>
          <tr>
            <th></th>
            <th column="name" onClick={this.handleNameSortClick}>Name</th>
            <th>Phone number</th>
            <th column="time" onClick={this.handleTimeSortClick}>Time</th>
            <th>Other actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredTodos.map(todo =>
            <TodoItem key={todo.id} todo={todo} {...actions} />
          )}
        </tbody>
      </table>
    )
  }
}

export default TodoList
