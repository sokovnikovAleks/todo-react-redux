import React, {useState} from 'react';
import classes from './Header.module.css'

const Header = () => {

  const [theme, setTheme] = useState(false)

  const changeTheme = () => {
    setTheme(!theme)
  }

  const tumblerClasses = [classes.tumbler]
  const circleClasses = [classes.circle]
  if (theme) {
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