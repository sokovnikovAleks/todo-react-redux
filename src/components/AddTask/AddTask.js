import React, {useState} from 'react';
import classes from './AddTask.module.css'

const AddTask = () => {
  const [value, setValue] = useState('')

  return (
    <div className={classes.addTask}>
      <input className={classes.input} type="text" value={value} onChange={(e) => setValue(e.target.value)} />
      <button className={classes.button}>Добавить</button>
    </div>
  );
};

export default AddTask;