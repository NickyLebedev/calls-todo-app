export const types = {
  ADD_TODO: 'CALLS/TODO/ADD',
  DELETE_TODO: 'CALLS/TODO/DELETE',
  COMPLETE_TODO: 'CALLS/TODO/COMPLETE',
  COMPLETE_ALL_TODOS: 'CALLS/TODO/COMPLETE_ALL',
  CLEAR_COMPLETED: 'CALLS/TODO/CLEAR_COMPLETED',
  SORT_TODOS: 'CALLS/TODO/SORT',
  SET_VISIBILITY_FILTER: 'CALLS/TODO/SET_VISIBILITY_FILTER'
}

export const addTodo = todoItem => ({ type: types.ADD_TODO, todoItem })
export const deleteTodo = id => ({ type: types.DELETE_TODO, id })
export const completeTodo = id => ({ type: types.COMPLETE_TODO, id })
export const completeAllTodos = () => ({ type: types.COMPLETE_ALL_TODOS })
export const sortTodos = (sort) => ({ type: types.SORT_TODOS, sort })
export const clearCompleted = () => ({ type: types.CLEAR_COMPLETED })
export const setVisibilityFilter = filter => ({ type: types.SET_VISIBILITY_FILTER, filter })
