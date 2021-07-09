import React, {useState} from 'react';
import {v4} from 'uuid'
import classes from './AddTask.module.css'
import {useDispatch} from "react-redux";
import {createTask} from "../../store/actions";

const AddTask = () => {

  const dispatch = useDispatch()

  const [value, setValue] = useState('')

  const addTask = (event) => {
    event.preventDefault()
    const id = v4()
    dispatch(createTask(value, id))
    setValue('')
  }

  return (
    <form className={classes.addTask} onSubmit={addTask}>
      <input className={classes.input} type="text" value={value} onChange={(e) => setValue(e.target.value)} />
      <button className={classes.button} type={"submit"} >Добавить</button>
    </form>
  );
};

export default AddTask;