import * as React from 'react';

import './FoodData.scss';
import { store } from '../../stores/Stores';
import { observer } from 'mobx-react';

@observer export class FoodData extends React.Component {

    constructor(props: any) {
        super(props);

    }

    render() {

        let boldStyle = {

            fontWeight: 700,
    
          };
        
        //Give Style to input in PersonSelector.tsx
        if (store.operations.actualUserID != '') {
            return <section className="foodDataComponent">
                <p className='foodTitle'>Comida</p>
                <p className='foodStars'>
                    {store.operations.topFoodPunctation}
                </p>
                <p className='food'>
                    {store.operations.topFoodName}
                </p>
                <div className='restaurants'>
                {store.operations.topRestaurantName == 'Precio'? <span style={boldStyle}>Precio</span> : <span>Precio</span> }
                {store.operations.topRestaurantName == 'Variedad'? <span style={boldStyle}>Variedad</span> : <span>Variedad</span> }
                {store.operations.topRestaurantName == 'Decoracion'? <span style={boldStyle}>Decoración</span> : <span>Decoración</span> }
                </div>

                <p>
                    {store.operations.topIngredientsArray[0].name}
                </p>
            </section>;
        }

        return null;
    }
}
