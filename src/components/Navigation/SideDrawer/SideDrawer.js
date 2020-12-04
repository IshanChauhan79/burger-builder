import React from 'react';
import Logo from '../../Logo/Logo';
// import NavigationItem from '../NavigationsItems/NavigationItem/NavigationItem';
import NavigationItems from '../NavigationsItems/NavigationItems';
import classes from './SideDrawer.module.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Auxiliary';


const SideDrawer =(props)=>{
    let attachedClasses=[classes.SideDrawer,props.open?classes.Open:classes.Close];
    // if(props.open){
    //     attachedClasses=[classes.SideDrawer,classes.Open];
    // }
    return(
        <Aux>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attachedClasses.join(' ')}>
                {/* <Logo height="11%"/> */}
                <div className={classes.Logo}>
                    <Logo/>
                </div>
                <nav>
                    <NavigationItems/>
                </nav>

            </div>
        </Aux>
    );

}

export default SideDrawer;