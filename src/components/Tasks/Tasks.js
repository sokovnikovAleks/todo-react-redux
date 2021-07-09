import React from 'react';
import classes from './Tasks.module.css'
import Sorting from "../Sorting/Sorting";
import {useSelector} from "react-redux";
import Task from "../Task/Task";

const Tasks = () => {

  const tasks = useSelector(state => state.showingTasks)

  return (
    <div className={classes.wrapper}>
      <Sorting />

      { tasks.length > 0 ?
        tasks.map((item, index) => <Task item={item} index={index} key={item.id} />)
        : <p>Здесь пока пусто...</p>
      }
    </div>
  );
};

export default Tasks;