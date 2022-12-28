import React from 'react';
// @ts-ignore
import './BurgerIngredient.css'
import bottom from '../../../assets/bottom.jpg';
import top from '../../../assets/top.jpg';
import cheese from '../../../assets/cheese.jpg';
import lettuse from '../../../assets/lettuse.jpg';
import tomato from '../../../assets/tomato.jpg';
import meat from '../../../assets/meat.jpg';
import { render } from 'enzyme';
interface Props {
    type: string;
}

const BurgerIngredient = (props: Props) =>     {
    let ingredient = null;

    switch (props.type) {
        case ('bread-bottom'):
            ingredient =(<React.Fragment><div className="BreadBottom"/>
            <p>check</p></React.Fragment>);
            break;
        case ('bread-top'):
            ingredient = (
                <div className="BreadTop">
                    <div className="Seeds1"/>
                    <div className="Seeds2"/>
                </div>
            );
            break;
        case ('meat'):
            ingredient = <div className="Meat"/>;
            break;
        case ('cheese'):
            ingredient = <div className="cheese_trial"/>;
            break;
        case ('bacon'):
            ingredient = <div className="Bacon"/>;
            break;
        case ('salad'):
            ingredient = <div className="Salad"/>;
            break;
        case('onion'):
        ingredient = <div className="Onion"/>;
        break;

        default:
            ingredient = null;
    }
    return ingredient;
// };
// let ingredient = null;

// switch(props.type) {
//     case 'bread-bottom':
//         ingredient = <div><img src={bottom} alt="Bottom Bread" /></div>
//         break;
//     case 'bread-top':
//         ingredient = <div><img src={top} alt="Top Bread" /></div>
//         break;
//     case 'meat':
//         ingredient = <div><img src={meat} alt="Meat" /></div>
//         break;
//     case 'salad':
//         ingredient = <div><img src={lettuse} alt="Salad" /></div>
//         break;
//     case 'cheese':
//         ingredient = <div><img src={cheese} alt="Cheese" /></div>
//         break;
//     default:
//         ingredient = null;
// }
// return (
//     <div className="Ingredient">
//         {ingredient}
//     </div>
// )
}


export default BurgerIngredient;

