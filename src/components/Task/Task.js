import React from 'react';
import classes from './Task.module.css';
import {BiCheckCircle, BsStar, FiDelete} from "react-icons/all";
import {useDispatch} from "react-redux";
import {deleteTask, taskDone, taskImportant} from "../../store/actions";

const Task = ({item, index}) => {

  const dispatch = useDispatch()

  const doneHandler = () => {
    dispatch(taskDone(item.id))
  }
  const starHandler = () => {
    dispatch(taskImportant(item.id))
  }
  const deleteHandler = () => {
    dispatch(deleteTask(item.id))
  }

  let importantText = "Отметить как важное"
  let completedText = "Отметить как сделанное"

  const classesStar = []
  const classesDone = []
  const classesText = []
  if (item.important) {
    classesStar.push(classes.star)
    classesText.push(classes.weight)
    importantText = "Убрать из важных"
  }
  if (item.completed) {
    classesDone.push(classes.done)
    classesText.push(classes.lineThrough)
    completedText = "Убрать из сделанных"
  }

  return (
    <div className={classes.taskWrapper}>

      <div>
        <span>{index + 1}. </span>
        <span className={classesText.join(' ')}>{item.text}</span>
      </div>

      <div className={classes.icons}>
        <BiCheckCircle className={classesDone.join(' ')} onClick={doneHandler} title={completedText} />
        <BsStar className={classesStar.join(' ')} onClick={starHandler} title={importantText} />
        <FiDelete  className={classes.delete} onClick={deleteHandler} title={'Удалить'} />
      </div>
    </div>
  );
};

export default React.memo(Task);