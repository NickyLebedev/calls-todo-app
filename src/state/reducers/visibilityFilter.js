import { types } from '../../state/actions'
import { SHOW_ALL } from '../../constants/TodoFilters'

const visibilityFilter = (state = SHOW_ALL, action) => {
  switch (action.type) {
    case types.SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

export default visibilityFilter