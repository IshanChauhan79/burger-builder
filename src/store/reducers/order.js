// import { act } from 'react-dom/test-utils';
import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../../shared/utility'

const initialState={
    orders:[],
    loading:false,
    purchased:false
}
const purchseInit=(state,action)=>{
    return updateObject(state,{purchased:false})
}
const purchseBurgerStart=(state,action)=>{
    return updateObject(state,{loading:true})
}
const purchseBurgerSuccess=(state,action)=>{
    const newOrder=updateObject(action.orderData,{id:action.orderId})
            return updateObject(state,{
                loading:false,
                orders:state.orders.concat(newOrder),
                purchased:true}
            )
}
const purchseBurgerFail=(state,action)=>{
    return updateObject(state,{loading:false});
}
const fetchOrderStart=(state,action)=>{
    return updateObject(state,{loading:true});
}
const fetchOrderSuccess=(state,action)=>{
    return updateObject(state,{orders:action.orders,loading:false});
}
const fetchOrderFail=(state,action)=>{
    return updateObject(state,{loading:false});
}

const reducer = (state = initialState, action) => {
    switch (action.type){
        case actionTypes.PURCHASE_INIT: return purchseInit(state,action)
        case actionTypes.PURCHASE_BURGER_START: return purchseBurgerStart(state,action)
        case actionTypes.PURCHASE_BURGER_SUCCESS: return purchseBurgerSuccess(state,action)  
        case actionTypes.PURCHASE_BURGER_FAIL: return purchseBurgerFail(state,action)
        case actionTypes.FETCH_ORDERS_START: return fetchOrderStart(state,action)
        case actionTypes.FETCH_ORDERS_SUCCESS: return fetchOrderSuccess(state,action)    
        case actionTypes.FETCH_ORDERS_FAIL: return fetchOrderFail(state,action)                        
        default: return state;
    }
}

export default reducer;