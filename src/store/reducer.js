import {
  CREATE_TASK,
  DELETE_TASK,
  SORTING,
  SWITCH_THEME,
  TASK_DONE,
  TASK_IMPORTANT,
  TASKS_FROM_LS
} from "./actionTypes";


const initialState = {
  darkTheme: false,
  tasks: [],
  showingTasks: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TASKS_FROM_LS: {
      return {
        ...state,
        tasks: action.payload
      }
    }
    case SWITCH_THEME: {
      return {
        ...state,
        darkTheme: !state.darkTheme
      }
    }
    case CREATE_TASK: {
      return {
        ...state,
        tasks: [{text: action.payload.text, id:action.payload.id, completed: false, important: false}, ...state.tasks]
      }
    }
    case TASK_DONE: {
      return {
        ...state,
        tasks: state.tasks.map(item => {
          if (item.id === action.payload) {
            return {
              ...item,
              completed: !item.completed
            }
          } else {
            return item
          }
        })
      }
    }
    case TASK_IMPORTANT: {
      return {
        ...state,
        tasks: state.tasks.map(item => {
          if (item.id === action.payload) {
            return {
              ...item,
              important: !item.important
            }
          } else {
            return item
          }
        })
      }
    }
    case DELETE_TASK: {
      return {
        ...state,
        tasks: state.tasks.filter(item => item.id !== action.payload)
      }
    }
    case SORTING: {
      if (action.payload.completed !== null && action.payload.important !== null) {
        return {
          ...state,
          showingTasks: [...state.tasks.filter(item => item.important === action.payload.important && item.completed === action.payload.completed)]
        }
      } else if (action.payload.completed === null && action.payload.important !== null) {
        return {
          ...state,
          showingTasks: [...state.tasks.filter((item => item.important === action.payload.important))]
        }
      } else if (action.payload.important === null && action.payload.completed !== null) {
        return {
          ...state,
          showingTasks: [...state.tasks.filter((item => item.completed === action.payload.completed))]
        }
      } else {
        return {
          ...state,
          showingTasks: [...state.tasks]
        }
      }

    }
    default:
      return state
  }
}


export default reducer