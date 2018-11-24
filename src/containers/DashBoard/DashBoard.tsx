import * as React from 'react';

import './DashBoard.scss';
import { Header } from '../../components/Header/Header';
import { store } from '../../stores/Stores';


export class DashBoard extends React.Component {
    render() {

        store.operations.initializeVariables();
        store.operations.generateUserArray();
        store.operations.getFoodHood(store.operations.actualUserID, store.operations.foodArray, store.operations.k);
        store.operations.generateFoodResults();
        store.operations.generateIngredientResults();
        store.operations.generateRestaurantResults();

        return <div>
            <Header title="React Seed"
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur ducimus similique incidunt, nostrum placeat, ipsa mollitia, perspiciatis eveniet sed doloremque itaque. Dolorum deserunt maiores vitae molestiae sint iste sed deleniti?"
                img="./assets/img/logo.png" />
        </div>
    }
}
