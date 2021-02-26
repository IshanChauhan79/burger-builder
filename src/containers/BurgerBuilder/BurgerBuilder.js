import React ,{Component} from 'react';
import Aux from '../../hoc/Auxiliary/Auxiliary'
import Burger from '../../components/Burger/Burger'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import {connect} from 'react-redux';
import * as burgerBuilderActions from '../../store/actions/index';

// const INGREDIENTS_PRICE={
//     salad:0.5,
//     cheese:0.4,
//     meat:1.3,
//     bacon:0.3
// }


class BurgerBuilder extends Component{

    state={
        // ingredients:null,
        // totalPrice:4,
        purchaseable:false,
        purchasing:false,
        // loading:false,
        // error:false
    }
   
    componentDidMount(){
        this.props.onInitIngredients();
        // axios.get('/ingredients.json')
        // .then(response=>{
        //     this.setState({ingredients:response.data})
        // })
        // .catch(error=>{
        //     this.setState({error:true})
        // })
    }




    updatePurchaseState(ingredients){
        // const ingredients={
        //     ... this.state.ingredients
        // };
        const sum =Object.keys(ingredients)
            .map(igkey => {
                return ingredients[igkey]
            })
            .reduce((sum,el)=>{
                return sum+el;
            },0)
        return sum>0
    }



    purchaseHandler=()=>{
        this.setState({purchasing:true})
    }



    cancelOrderHandler=()=>{
        this.setState({purchasing:false})
    }


    purchaseCancelHandler=()=>{
        this.setState({purchasing:false});
    }


    purchaseContinueHandler=()=>{
        // this.setState({loading:true})
        // const order={
        //     ingredients:this.state.ingredients,
        //     price:this.state.totalPrice,
        //     customer:{
        //         name:'ishan',
        //         address:{
        //             area:'dilshad',
        //             house:'A-74B'
        //         },
        //         email:'test@gmail.com'
        //     },
        //     delivery:'fast'
        // }
        // axios.post('/orders.json',order)
        //     .then(response=>
        //         this.setState({loading:false,purchasing:false})
        //     )
        //     .catch(err=>
        //         this.setState({loading:false,purchasing:false})
        //     );
        // alert('You Continued!');

        // const queryParams =[];
        // for (let i in this.state.ingredients){
        //     queryParams.push(encodeURIComponent(i)+ "=" + encodeURIComponent(this.state.ingredients[i]));
        // }
        // queryParams.push("price="+ this.state.totalPrice)
        // const queryString=queryParams.join('&');
        // this.props.history.push({
        //     pathname:'/checkout',
        //     search:'?'+queryString
        //     }
        // );

        this.props.history.push('/checkout');
    }



    render(){
        const disabledInfo={
            // ...this.state.ingredients
            ...this.props.ings
        }
        for(let key in disabledInfo){
            disabledInfo[key]=disabledInfo[key] <=0;//reurn true or false
        }

        let orderSummary =null;
        

        let burger=this.props.error?<p>Ingredients cant be loaded</p>:<Spinner/>

        // if (this.state.ingredients){
        if (this.props.ings){
            orderSummary=<OrderSummary 
                // ingredients={this.state.ingredients}
                ingredients={this.props.ings}
                purchaseCancel={this.purchaseCancelHandler}
                purchaseContinue={this.purchaseContinueHandler}
                price={this.props.price}
            />;

            burger=(<Aux>
                <Burger ingredients={this.props.ings}/>

                <BuildControls 
                    ingredientAdded={this.props.onIngredientAdded}
                    ingredientRemove={this.props.onIngredientRemoved}
                    // ingredientAdded={this.addIngredientHandler}
                    // ingredientRemove={this.removeIngredientHandler}
                    disabled={disabledInfo}
                    price={this.props.price}
                    purchaseable={this.updatePurchaseState(this.props.ings)}
                    ordered={this.purchaseHandler}
                />
            </Aux>
            )
            // if(this.state.loading){
            //     orderSummary=(
            //         <Spinner />
                    
            //     )
            // }
        }

        return(
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.cancelOrderHandler}>
                    {orderSummary}
                </Modal>

                {burger}
            </Aux>
        )
    }
}

const mapStateToProps = state => {
    return {
        ings:state.ingredients,
        price:state.totalPrice,
        error:state.error
    }

}
const mapDispatchToProps = dispatch => {
    return {
        onIngredientAdded : (ingName) => dispatch(burgerBuilderActions.addIngredient(ingName)),
        onIngredientRemoved : (ingName) => dispatch(burgerBuilderActions.removeIngredient(ingName)),
        onInitIngredients : () => dispatch(burgerBuilderActions.initIngredients())
    }

}

export default connect(mapStateToProps,mapDispatchToProps)(withErrorHandler(BurgerBuilder,axios));



    // addIngredientHandler=(type)=>{
    //     const oldCount=this.state.ingredients[type];
    //     const updatedCount=oldCount+1;
    //     const updatedIngredients={
    //         ...this.state.ingredients
    //     };
    //     updatedIngredients[type]=updatedCount;
    //     const oldPrice=this.state.totalPrice;
    //     const priceAddition = INGREDIENTS_PRICE[type];
    //     const newPrice =oldPrice+priceAddition;
    //     this.setState({totalPrice:newPrice,ingredients:updatedIngredients});
    //     this.updatePurchaseState(updatedIngredients);

    // }

    // removeIngredientHandler=(type)=>{
    //     const oldCount=this.state.ingredients[type];
    //     if(oldCount<=0){
    //         return;
    //     }
    //     const updatedCount=oldCount-1;

    //     const updatedIngredients={
    //         ...this.state.ingredients
    //     };
    //     updatedIngredients[type]=updatedCount;
    //     const oldPrice=this.state.totalPrice;
    //     const priceAddition = INGREDIENTS_PRICE[type];
    //     const newPrice =oldPrice-priceAddition;
    //     this.setState({totalPrice:newPrice,ingredients:updatedIngredients});
    //     this.updatePurchaseState(updatedIngredients);

    // }