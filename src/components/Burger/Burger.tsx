import React from "react";
// @ts-ignore
import classes from './Burger.css';
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";


const burger = (props: any) => 

{
    let transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                return <BurgerIngredient key={igKey + i} type={igKey}/>;
            });
        }).reduce((arr, el) => {
            return arr.concat(el);
        }, []);

    if (transformedIngredients.length === 0) {
        (transformedIngredients as any) = <p>Please start adding ingredients!</p>;
    }
//     const burger = (props:any) => {
//         let transformedIngredients = Object.keys(props.ingredients)
//           .map(item => {
//             return [...Array(props.ingredients[item])].map((emptyStr, index) => {
//               // console.log({ emptyStr, item });
//               return <BurgerIngredient key={item + index} type={item} />;
//             });
//           })
//           .reduce((arr, currArr) => {
//             return arr.concat(currArr);
//           }, []);
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
};

export default burger;
