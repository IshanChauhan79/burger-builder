import React from 'react';
import Aux from '../Auxiliary/Auxiliary';
import classes from './Layout.module.css';
import {connect} from 'react-redux'
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends React.Component{
    state={
        showSideDrawer:true
    }
    sideDrawerClosedHandler=()=>{
        this.setState({showSideDrawer:false});
        
    }
    sideDrawerToggleHandler=()=>{
        this.setState((prevState)=>{
            return{showSideDrawer:!prevState.showSideDrawer}})
    }

    render(){
       
        return(
        <Aux>
            <Toolbar drawerToggleclicked={this.sideDrawerToggleHandler} isAuth={this.props.isAuthenticated}/>
            <SideDrawer 
                isAuth={this.props.isAuthenticated}
                open={this.state.showSideDrawer}
                closed={this.sideDrawerClosedHandler} />
            <main className={classes.Content}>
                {this.props.children}
            </main>

        </Aux>
        )
    }
}

const mapStateToProps= state =>{
    return{
        isAuthenticated:state.auth.token !==null
    }
}
    
export default connect(mapStateToProps)(Layout);