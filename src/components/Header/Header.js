import React from 'react';
import classes from './Header.module.css'
import {useDispatch, useSelector} from "react-redux";
import {switchTheme} from "../../store/actions";

const Header = () => {

  const darkTheme = useSelector(state => state.darkTheme)
  const dispatch = useDispatch()

  const changeTheme = () => {
    dispatch(switchTheme())
  }

  const tumblerClasses = [classes.tumbler]
  const circleClasses = [classes.circle]
  if (darkTheme) {
    tumblerClasses.push(classes.tumblerDark)
    circleClasses.push(classes.circleDark)
  }

  return (
    <div className={classes.header}>
      <h1 className={classes.title}>todo-ReactJs</h1>
      <div className={classes.theme}>
        <span className={classes.themeTitle}>Тема</span>
        <div className={tumblerClasses.join(' ')} onClick={changeTheme}>
          <div className={circleClasses.join(' ')} />
        </div>
      </div>
    </div>
  );
};

export default Header;