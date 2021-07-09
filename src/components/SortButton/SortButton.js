import React from 'react';
import classes from './SortButton.module.css'

const SortButton = ({title, name, handler, activeName}) => {
  const cls = [classes.btn]

  if (name === activeName) cls.push(classes.btnActive)

  const clickHandler = () => {
    handler(name)
  }
  return (
    <button className={cls.join(' ')} onClick={clickHandler}>{title}</button>
  );
};

export default SortButton;