import React from 'react';
import classes from './Toolbar.module.css';
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationsItems/NavigationItems'
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle'

const Toolbar =(props)=>{
    return(
        <header className={classes.Toolbar}>
            <DrawerToggle clicked={props.drawerToggleclicked}/>
            {/* <Logo height="80%"/> */}
            <div className={classes.Logo}>
                <Logo/>
            </div>
            <nav className={classes.DesktopOnly}>
                <NavigationItems isAuthenticated={props.isAuth} />
            </nav>
        </header>
    )};
export default Toolbar;
