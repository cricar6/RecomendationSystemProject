import * as React from 'react';

import './DashBoard.scss';
import { Header } from '../../components/Header/Header';
import { store } from '../../stores/Stores';
import { PersonSelector } from '../../components/PersonSelector/PersonSelector';
import { observer } from 'mobx-react';

@observer export class DashBoard extends React.Component {
    constructor(props:any){
        super(props);
        store.operations.initializeVariables();
        store.operations.generateUserArray();
        store.operations.getFoodHood(store.operations.actualUserID, store.operations.foodArray, store.operations.k);
        store.operations.generateFoodResults();
        store.operations.generateIngredientResults();
        store.operations.generateRestaurantResults();
    }


    render() {


        //Give Style to input in PersonSelector.tsx
        return <div>
            <PersonSelector />
        </div>
    }
}
