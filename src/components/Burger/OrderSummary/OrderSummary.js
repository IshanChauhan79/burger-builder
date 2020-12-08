import React,{ Component } from 'react';
// import classes from './OrderSummary.module.css'
import Aux from '../../../hoc/Auxiliary'
import Button from '../../UI/Button/Button'
class OrderSummary extends Component {
    // shouldComponentUpdate(){
    //     console.log('Order summary -----will update ')
    //     return true;
    // }
    render(){
        const ingredientSummary=Object.keys(this.props.ingredients)
        .map(igkey => {
        return(<li key={igkey}><span style={{textTransform:'capitalize'}}>{igkey}</span>:{this.props.ingredients[igkey]}</li>)
        });
        return(
            <Aux >
                <h3>Your Order</h3>
                <p>A delicious burger with the following ingredient: </p>

                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total Price:{this.props.price.toFixed(2)}</strong> </p>
                <p>Continue to Checkout</p>
                <Button btnType='Danger' clicked={this.props.purchaseCancel}>CANCEL</Button>
                <Button btnType='Success' clicked={this.props.purchaseContinue}>CONTINUE</Button>
            </Aux>
        )
    }
}


export default OrderSummary;