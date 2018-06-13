import React, { Component } from 'react'
import PropTypes from 'prop-types'
import mapUtcFormat from '../../utils'

export default class TodoItem extends Component {
  static propTypes = {
    todo: PropTypes.object.isRequired,
    deleteTodo: PropTypes.func.isRequired,
    completeTodo: PropTypes.func.isRequired
  }

  render() {
    const { todo, completeTodo, deleteTodo } = this.props

    return (
      <tr>
        <td className="view">
          <span>
            <input
              className="toggle-all"
              type="checkbox"
              checked={todo.completed}
              readOnly
            />
            <label onClick={() => completeTodo(todo.id)} />
          </span>
        </td>
        <td>{todo.name}</td>
        <td>{todo.phone}</td>
        <td>{mapUtcFormat(todo.time)}</td>
        <td>
          <a className="button button-icon" onClick={() => deleteTodo(todo.id)}><i className="fa fa-remove"></i></a>
        </td>
      </tr>
    )
  }
}
