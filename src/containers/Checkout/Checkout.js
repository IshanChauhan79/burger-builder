import React ,{Component} from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';

class Checkout extends Component{
    state={
        ingredients:{
            cheese:0,
            salad:0,
            meat:0,
            bacon:0
        }
    }
    componentDidMount(){
        const query = new URLSearchParams(this.props.location.search);
        
        const ingredients={};
        for (let param of query.entries()){
            console.log(param[1]);
            //[salad , 1 , meat , 2 , ...]
            ingredients[param[0]]=+param[1];
        }
        this.setState({ingredients:ingredients})
    }
    checkoutCancelledHandler = () => {
        this.props.history.goBack();

    }
    checkoutContinuedHandler = () => {
        this.props.history.replace('/checkout/contact-data')
        
    }

    render(){
        return(
            <CheckoutSummary 
                ingredients={this.state.ingredients}
                checkoutCancelled={this.checkoutCancelledHandler} 
                checkoutContinued={this.checkoutContinuedHandler}/>
        )
    }
}

export default Checkout;