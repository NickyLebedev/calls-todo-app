import { types } from '../actions'
import uuid from 'uuid'
import moment from 'moment'
import {
  isBeforeCurrentTime,
  timeSortComparator,
  stringSortComparator,
  stringSortComparatorReverse,
  timeSortComparatorReverse,
  currentTimeDiff,
} from '../../utils'

const initialState = {
  list: [
    {
      name: 'Complete all tasks',
      time: moment().format(),
      phone: '+420111222333',
      completed: true,
      id: uuid()
    }
  ],
  primaryTodo: null,
}

export function updateCompleted(list) {
  return list.map(todo => {
    return {
      ...todo,
      completed: isBeforeCurrentTime(todo.time),
    }
  })
}

export function sortTodos(list, sortField, sortType) {
  let comparator
  if (sortField === 'name') {
    comparator = sortType
        ? stringSortComparator
        : stringSortComparatorReverse
  } else if (sortField === 'time') {
    comparator = sortType
        ? timeSortComparator
        : timeSortComparatorReverse
  }
  return list.sort(comparator)
}

export function updatePrimaryTodo(list, primaryTodo) {
  let nearestDiff = Number.MAX_VALUE
  let targetIndex = -1

  for (let i = 0; i < list.length; ++i) {
    const time = list[i].time
    const diff = currentTimeDiff(time)
    if (diff < nearestDiff && diff > 0) {
      nearestDiff = diff
      targetIndex = i
    }
  }

  return (targetIndex !== -1) ? list[targetIndex] : null
}

export default function todos(state = initialState, action) {
  let list
  switch (action.type) {
    case types.ADD_TODO:
      const { time } = action.todoItem
      const newState = updateCompleted(state.list)
      list = [
        ...newState,
        {
          id: uuid(),
          completed: isBeforeCurrentTime(time),
          ...action.todoItem
        }
      ]
      return {
        list,
        primaryTodo: updatePrimaryTodo(list, state.primaryTodo)
      }

    case types.DELETE_TODO:
      list = state.list.filter(todo =>
        todo.id !== action.id
      )
      return {
        list,
        primaryTodo: updatePrimaryTodo(list, state.primaryTodo),
      }

    case types.COMPLETE_TODO:
      list = state.list.map(todo =>
        todo.id === action.id ?
          { ...todo, completed: !todo.completed } :
          todo
      )
      return {
        list,
        primaryTodo: updatePrimaryTodo(list, state.primaryTodo)
      }

    case types.COMPLETE_ALL_TODOS:
      const areAllMarked = state.list.every(todo => todo.completed)
      list = state.list.map(todo => ({
        ...todo,
        completed: !areAllMarked
      }))
      return {
        list,
        primaryTodo: updatePrimaryTodo(list, state.primaryTodo),
      }

    case types.SORT_TODOS:
      const { sort } = action
      return {
        list: [...sortTodos(state.list, sort.field, sort.type)],
        primaryTodo: state.primaryTodo,
      }

    case types.CLEAR_COMPLETED:
      return {
        list: state.list.filter(todo => todo.completed === false),
        primaryTodo: state.primaryTodo,
      }

    default:
      return state
  }
}
