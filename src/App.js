import React, {useEffect, useLayoutEffect} from "react";
import './App.css';
import Header from "./components/Header/Header";
import AddTask from "./components/AddTask/AddTask";
import Tasks from "./components/Tasks/Tasks";
import {useDispatch, useSelector} from "react-redux";
import {switchTheme, tasksFromLS} from "./store/actions";


function App() {

  const darkTheme = useSelector(state => state.darkTheme)
  const tasks = useSelector(state => state.tasks)
  const dispatch = useDispatch()

  const classesApp = ['app']
  const classesWrapper = ['wrapper']

  if (darkTheme) {
    classesApp.push('appDark')
    classesWrapper.push('wrapperDark')
  }

  useLayoutEffect(() => {
    const theme = JSON.parse(localStorage.getItem('darkTheme'))
    if (theme !== darkTheme && theme !== null) dispatch(switchTheme())
  }, [])
  useEffect(() => {
    const tasksLS = JSON.parse(localStorage.getItem('tasks'))
    if (tasksLS) {
      dispatch(tasksFromLS(tasksLS))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])
  useEffect(() => {
    localStorage.setItem('darkTheme', JSON.stringify(darkTheme))
  }, [darkTheme])

  return (
    <div className={classesWrapper.join(' ')}>
      <div className={classesApp.join(' ')}>
        <Header />
        <AddTask />
        <Tasks />
      </div>
    </div>
  )
}

export default App;
