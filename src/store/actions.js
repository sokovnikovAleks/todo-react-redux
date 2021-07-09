import {
  CREATE_TASK,
  DELETE_TASK,
  SORTING,
  SWITCH_THEME,
  TASK_DONE,
  TASK_IMPORTANT,
  TASKS_FROM_LS
} from "./actionTypes";


export const switchTheme = () => {
  return {
    type: SWITCH_THEME
  }
}

export const createTask = (text, id) => {
  return {
    type: CREATE_TASK,
    payload: {text, id}
  }
}

export const taskDone = id => {
  return {
    type: TASK_DONE,
    payload: id
  }
}

export const taskImportant = id => {
  return {
    type: TASK_IMPORTANT,
    payload: id
  }
}

export const sorting = (completed, important) => {
  return {
    type: SORTING,
    payload: {important, completed}
  }
}

export const tasksFromLS = tasks => {
  return {
    type: TASKS_FROM_LS,
    payload: tasks
  }
}

export const deleteTask = id => {
  return {
    type: DELETE_TASK,
    payload: id
  }
}