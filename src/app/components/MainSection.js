import React from 'react'
import PropTypes from 'prop-types'
import Footer from './Footer'
import VisibleTodoList from '../containers/VisibleTodoList'
import mapUtcFormat from '../../utils'

const MainSection = ({ todosCount, completedCount, actions, nearestTodo }) =>
  (
    <section className="main row">
      <div className="four columns">
        {
          <div>
            <h4>Nearest call</h4>
            {nearestTodo
              ? <ul>
                  <li><label>Name:</label>{nearestTodo.name}</li>
                  <li><label>Phone:</label>{nearestTodo.phone}</li>
                  <li><label>Time:</label>{mapUtcFormat(nearestTodo.time)}</li>
                </ul>
              : <span>Not exists</span>}
          </div>
        }
      </div>
      <div className="eight columns">
        {
          !!todosCount &&
          <span>
            <input
              className="toggle-all"
              type="checkbox"
              checked={completedCount === todosCount}
              readOnly
            />
            <label onClick={actions.completeAllTodos} />
          </span>
        }
        <VisibleTodoList />
        {
          !!todosCount &&
          <Footer
            completedCount={completedCount}
            activeCount={todosCount - completedCount}
            onClearCompleted={actions.clearCompleted}
          />
        }
      </div>
    </section>
  )

MainSection.propTypes = {
  todosCount: PropTypes.number.isRequired,
  completedCount: PropTypes.number.isRequired,
  nearestTodo: PropTypes.object,
  actions: PropTypes.object.isRequired
}

export default MainSection