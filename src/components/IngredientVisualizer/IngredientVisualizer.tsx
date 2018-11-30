import * as React from 'react';

import './IngredientVisualizer.scss';
import { store } from '../../stores/Stores';
import { observer } from 'mobx-react';
import { Ingredient } from './Ingredient/Ingredient';


@observer export class IngredientVisualizer extends React.Component {

    constructor(props: any) {
        super(props);

    }
    showThings() {
 
            return (store.operations.topIngredientsArray != null) ? store.operations.topIngredientsArray.map(
                (e: any) =>
                    <Ingredient key={e.id} name={e.name} />
            ) : console.log("Esta wea no funciona")

        
    }
    render() {

        //Give Style to input in PersonSelector.tsx
        if (store.operations.actualUserID != '') {
            return <section className="ingredientvisualizerComponent">
            <div className={store.dash.showIngredients? 'ingredients ingredientsShown' : 'ingredients ingredientsHidden'}
                    onMouseOver = {
                        (e) => {
                            store.dash.showIngredients = true;
                        }
                    }
                    onMouseOut = {
                        (e) => {
                            store.dash.showIngredients = false;
                        }
                    }>
            {this.showThings()}
            </div>

            </section>;
        }

        return <section className="ingredientvisualizerComponent">
                 <div className="ingredients">
            </div>

        </section>;
    }
}
