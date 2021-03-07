import React, {Component} from 'react';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import Spinner from '../../components/UI/Spinner/Spinner';
import classes from './Auth.module.css';
import * as actions from '../../store/actions/index';
import {connect} from 'react-redux';


class Auth extends Component{
    state={
        controls:{ 
            email:{
                elementType:'input',
                elementConfig:{
                    type:'email',
                    placeholder:'Your Email'
                },
                value:'',
                validation:{
                    required:true,
                    isEmail:true
                },
                valid:false,
                touched:false
            },
            password:{
                elementType:'input',
                elementConfig:{
                    type:'password',
                    placeholder:'Password'
                },
                value:'',
                validation:{
                    required:true,
                    minLength:6
                },
                valid:false,
                touched:false
            }
        },
        isSignUp:true
    }
    checkValidity(value,rules){
        let isValid = true;
        if (!rules) {
            return true;
        }
        
        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }

        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid
        }

        if (rules.maxLength) {
            isValid = value.length <= rules.maxLength && isValid
        }

        if (rules.isEmail) {
            const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
            isValid = pattern.test(value) && isValid
        }

        if (rules.isNumeric) {
            const pattern = /^\d+$/;
            isValid = pattern.test(value) && isValid
        }

        return isValid;

    }
    inputChangeHandler =(event,controlName)=>{
        const updatedControls={
            ...this.state.controls,
            [controlName]:{
                ...this.state.controls[controlName],
                value:event.target.value,
                valid:this.checkValidity(event.target.value,this.state.controls[controlName].validation),
                touched:true
            }

        };
        this.setState({controls:updatedControls});
        // const updatedFormElement={
        //     ...updatedOrderForm[inputIdentifier]
        // };
        // updatedFormElement.value=event.target.value;
        // updatedFormElement.touched=true;
        // updatedFormElement.valid=this.checkValidity(updatedFormElement.value,updatedFormElement.validation);
        // updatedOrderForm[inputIdentifier]=updatedFormElement;

        // let formIsValid =true;
        // for (let inputIdentifiers in updatedOrderForm){
        //     formIsValid=updatedOrderForm[inputIdentifiers].valid && formIsValid;
        // }
        // // console.log(updatedFormElement);
        // this.setState({controls:updatedOrderForm,formIsValid:formIsValid})

    }
    onSubmitHandler =(event)=>{
        event.preventDefault();
        // console.log(this.state.controls.email.value,this.state.controls.password.value)
        this.props.onAuth(this.state.controls.email.value,this.state.controls.password.value,this.state.isSignUp)
    }
    switchAuthModeHnadler=()=>{
        this.setState(prevState=>{
            return{isSignUp:!prevState.isSignUp}
        })
    }

    render (){
        const formElementsArray =[];
        for (let key in this.state.controls){
            formElementsArray.push({
                id:key,
                config:this.state.controls[key]
            })
        }
        let form=formElementsArray.map(formElement =>(
            <Input 
                key={formElement.id}
                elementType={formElement.config.elementType} 
                elementConfig={formElement.config.elementConfig}
                value={formElement.config.value}
                invalid={!formElement.config.valid}
                touched={formElement.config.touched}
                shouldValidate={formElement.config.validation}
                changed={(event)=>this.inputChangeHandler(event,formElement.id)} />
        ))

        // const form =formElementsArray.map(formElement=>{
            // <div>hello</div>
            // <Input 
            //     key={formElement.id}
            //     elementType={formElement.config.elementType} 
            //     elementConfig={formElement.config.elementConfig}
            //     value={formElement.config.value}
            //     invalid={!formElement.config.valid}
            //     touched={formElement.config.touched}
            //     shouldValidate={formElement.config.validation}
            //     changed={(event)=>this.inputChangeHandler(event,formElement.id)}
            // />
        // })
        if(this.props.loading){
            form=<Spinner/>
        }
        let errorMesssage=null;
        if(this.props.error){
            errorMesssage=(
                <p>{this.props.error.message}</p>
            )
        }
        return(
            
            <div className={classes.Auth}>
                {errorMesssage}
                <form onSubmit={this.onSubmitHandler}>
                    {form}
                    <Button btnType="Success">Submit</Button>

                </form>
                <Button btnType='Danger' clicked={this.switchAuthModeHnadler}>SWITCH TO {this.state.isSignUp?'SIGNIN':'SIGNUP'}</Button>
            </div>
        );
    }
}

const mapStateToProps =state =>{
    return{
        loading:state.auth.loading,
        error:state.auth.error
    }
}

const mapDispatchToProps =(dispatch) => {
    return{
        onAuth:(email,password,isSignUp)=>dispatch(actions.auth(email,password,isSignUp))

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Auth);