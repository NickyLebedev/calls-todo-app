import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import TodoForm from '../components/forms/TodoForm'
import { addTodo } from '../../state/actions'

export const Header = ({ addTodo }) => (
  <header className="header container">
    <h1>Simple calls todo app</h1>
    <TodoForm
      addTodo={addTodo}
    />
  </header>
)

Header.propTypes = {
  addTodo: PropTypes.func.isRequired
}

export default connect(null, { addTodo })(Header)