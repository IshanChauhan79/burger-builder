import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredients/BurgerIngredients'



const Burger =(props)=> {
    let transformedIngredients=Object.keys(props.ingredients)//create an array of ingredients
        .map(igKey=>{
            return [...Array(props.ingredients[igKey])] //create an array acc to ingredients value then spread them ,(only purpose is to loop that many times)
                    .map((_,i)=>{//using index only donct care about the value (noramlly undefiend because of new array creation)
                       return( <BurgerIngredient key={igKey+i} type={igKey}/>)//looping
                    })
        })
        .reduce((arr,el)=>{
            return arr.concat(el)
        },[]);

    if (transformedIngredients.length===0){
        transformedIngredients=<p>Please add ingredients</p>
    }

    // console.log(props.ingredients)
    // const tf=Object.keys(props.ingredients);

    // var ar=[]
    // for( var i=0; i< tf.length;i++){
    //     var ing=tf[i];
    //     for(var j=0; j<props.ingredients[ing];j++ ){           
    //         ar.push(tf[i]);
    //     }
    // }
    // console.log(ar);


    return(
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
        
    );
}
export default Burger;