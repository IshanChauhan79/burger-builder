import React from 'react';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import classes from './CheckoutSummary.module.css';

const CheckoutSummary = (props) =>{
    return(
        <div className={classes.CheckoutSummary}>
            <h1>We hope you like the burger</h1>
            <div style={{width:'100%',margin:'0px'}}>
                <Burger ingredients={props.ingredients} />
            </div>

            <Button 
                btnType="Danger"
                clicked={props.checkoutCancelled}
            >CANCEL</Button>

            <Button 
                btnType="Success"
                clicked={props.checkoutContinued}
            >CONTINUE</Button>
        </div>
    )

}
export default CheckoutSummary;