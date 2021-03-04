import React , {Component} from 'react';
import {connect} from 'react-redux'
import Order from '../../components/Order/Order';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'
import * as actions from '../../store/actions/index';


class Orders extends Component {
    // state={
    //     orders:[],
    //     loading:true
    // }

    componentDidMount(){
        this.props.onFetchOrders();
        // axios.get('./orders.json')
        //     .then(res => {
        //         const fetchOrders=[]
        //         for (let key in res.data){
        //             fetchOrders.push({
        //                 ...res.data[key],
        //                 id:key
        //             });
        //         }
        //         this.setState({loading:false,orders:fetchOrders});

        //     })
        //     .catch(err => {
        //         this.setState({loading:false});

        //     })
    }

    render(){
        let orders=this.props.orders.map(order => (
                <Order 
                    key={order.id}
                    ingredients={order.ingredients}
                    price={+order.price}         
                />))
        if (this.props.loading){
            orders=<Spinner />
        }
        return(
            <div>
                {orders}

            </div>
            
        )
    }
}
const mapStateToprops= state =>{
    return{
        orders:state.order.orders,
        loading:state.order.loading
    }
}
const mapDispatchToProps = dispatch => {
    return{
        onFetchOrders:()=>dispatch(actions.fetchOrders())
    }
}

export default connect(mapStateToprops,mapDispatchToProps)(withErrorHandler(Orders,axios));
