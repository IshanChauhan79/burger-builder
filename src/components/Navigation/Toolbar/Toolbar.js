import React from 'react';
import classes from './Toolbar.module.css';
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationsItems/NavigationItems'

const Toolbar =(props)=>{
    return(
        <header className={classes.Toolbar}>
            <div>MENU</div>
            {/* <Logo height="80%"/> */}
            <div className={classes.Logo}>
                <Logo/>
            </div>
            <nav className={classes.DesktopOnly}>
                <NavigationItems />
            </nav>
        </header>
    )};
export default Toolbar;
