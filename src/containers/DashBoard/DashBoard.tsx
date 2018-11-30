import * as React from 'react';

import './DashBoard.scss';
import { Header } from '../../components/Header/Header';
import { store } from '../../stores/Stores';
import { PersonSelector } from '../../components/PersonSelector/PersonSelector';
import { observer } from 'mobx-react';
import { PersonData } from '../../components/PersonData/PersonData';
import { FoodData } from '../../components/FoodData/FoodData';
import { IngredientVisualizer } from '../../components/IngredientVisualizer/IngredientVisualizer';

@observer export class DashBoard extends React.Component {
    constructor(props: any) {
        super(props);
        store.operations.initializeVariables();
        store.operations.generateUserArray();
    }


    render() {


        //Give Style to input in PersonSelector.tsx
        return <div className='dashBoard'>
            <PersonSelector />
            <div className={store.dash.showSelector ? 'data withMargin' : 'data  withoutMargin' }>
                <PersonData />
                <FoodData />
            </div>
            <IngredientVisualizer />

            <div className={store.dash.showSelector ? 'toogler tooglerHidden' : 'toogler  tooglerVisible' } onClick={
                (e) => {
                    store.dash.showSelector = !store.dash.showSelector;
                    console.log(store.dash.showSelector, 'store dash show selector')
                }
            }>

            </div>
            }
        
        
        </div>
    }
}
