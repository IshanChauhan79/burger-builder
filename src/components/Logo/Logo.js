import React from 'react';
import classes from './Logo.module.css'
import BurgerLogo from '../../assets/images/burgerlogo.png'
const Logo =(props)=>{
    return(
        // <div className={classes.Logo} style={{height:props.height}}>
        <div className={classes.Logo} >

            <img src={BurgerLogo} alt="My Borger" />
        </div>
    )};
export default Logo;