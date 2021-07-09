import React, {useEffect, useState} from 'react';
import classes from './Sorting.module.css'
import SortButton from "../SortButton/SortButton";
import {useDispatch, useSelector} from "react-redux";
import {sorting} from "../../store/actions";

const Sorting = () => {

  const dispatch = useDispatch()
  const tasks = useSelector(state => state.tasks)

  const [completed, setCompleted] = useState(null)
  const [important, setImportant] = useState(null)

  useEffect(() => {
    dispatch(sorting(completed, important))
  }, [completed, important, tasks])

  const firstLineHandler = name => {
    setCompleted(name)
  }
  const secondLineHandler = name => {
    setImportant(name)
  }

  return (
    <div className={classes.wrapper}>
      <div className={classes.line}>
        <SortButton name={true} title={'Выполнено'} activeName={completed} handler={firstLineHandler} />
        <SortButton name={false} title={'В процессе'} activeName={completed} handler={firstLineHandler} />
        <SortButton name={null} title={'Все'} activeName={completed} handler={firstLineHandler} />
      </div>
      <div className={classes.line}>
        <SortButton name={true} title={'Важные'} activeName={important} handler={secondLineHandler} />
        <SortButton name={false} title={'Обычные'} activeName={important} handler={secondLineHandler} />
        <SortButton name={null} title={'Все'} activeName={important} handler={secondLineHandler} />
      </div>
    </div>
  );
};

export default Sorting;