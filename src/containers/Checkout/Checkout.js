import React ,{Component} from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';

class Checkout extends Component{
    state={
        ingredients:{
            cheese:2,
            salad:1,
            meat:1,
            bacon:0
        }
    }
    render(){
        return(
            <CheckoutSummary ingredients={this.state.ingredients} />
        )
    }
}

export default Checkout;