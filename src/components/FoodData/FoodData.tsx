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
            color: '#686868'
        };
        let starStyle = {
        }
        //Give Style to input in PersonSelector.tsx
        if (store.operations.actualUserID != '') {
            return <section className="foodDataComponent">
                <p className='foodTitle'>Para este grupo:</p>

                <p className='food'>
                    {store.operations.topFoodName} ({store.operations.topFoodPunctation.toFixed(2)})
                </p>
                <p className='foodStars' data-stars={Math.round(store.operations.topFoodPunctation)}>
                    <svg height="25" width="23" className="star rating" data-rating="1">
                        <polygon points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78" />
                    </svg>
                    <svg height="25" width="23" className="star rating" data-rating="2">
                        <polygon points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78" />
                    </svg>
                    <svg height="25" width="23" className="star rating" data-rating="3">
                        <polygon points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78" />
                    </svg>
                    <svg height="25" width="23" className="star rating" data-rating="4">
                        <polygon points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78" />
                    </svg>
                    <svg height="25" width="23" className="star rating" data-rating="5">
                        <polygon points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78" />
                    </svg>
                </p>
                <div className='restaurants'>
                    {store.operations.topRestaurantName == 'Precio' ? <span style={boldStyle}>precio</span> : <span>precio</span>}
                    {store.operations.topRestaurantName == 'Variedad' ? <span style={boldStyle}>variedad</span> : <span>variedad</span>}
                    {store.operations.topRestaurantName == 'Decoracion' ? <span style={boldStyle}>decoración</span> : <span>decoración</span>}
                </div>


            </section>;
        }

        return <section className="foodDataComponent">
            <p className='foodTitle'>Para este grupo:</p>

            <p className='food'>
                Comida
                </p>
            <p className='foodStars' data-stars={0}>
                <svg height="25" width="23" className="star rating" data-rating="1">
                    <polygon points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78" />
                </svg>
                <svg height="25" width="23" className="star rating" data-rating="2">
                    <polygon points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78" />
                </svg>
                <svg height="25" width="23" className="star rating" data-rating="3">
                    <polygon points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78" />
                </svg>
                <svg height="25" width="23" className="star rating" data-rating="4">
                    <polygon points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78" />
                </svg>
                <svg height="25" width="23" className="star rating" data-rating="5">
                    <polygon points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78" />
                </svg>
            </p>
            <div className='restaurants'>
                {store.operations.topRestaurantName == 'Precio' ? <span style={boldStyle}>precio</span> : <span>precio</span>}
                {store.operations.topRestaurantName == 'Variedad' ? <span style={boldStyle}>variedad</span> : <span>variedad</span>}
                {store.operations.topRestaurantName == 'Decoracion' ? <span style={boldStyle}>decoración</span> : <span>decoración</span>}
            </div>

        </section>;
    }
}
