import * as React from 'react';

import './DashBoard.scss';
import { Header } from '../../components/Header/Header';
import { store } from '../../stores/Stores';
import { PersonSelector } from '../../components/PersonSelector/PersonSelector';
import { observer } from 'mobx-react';
import { PersonData } from '../../components/PersonData/PersonData';
import { FoodData } from '../../components/FoodData/FoodData';

@observer export class DashBoard extends React.Component {
    constructor(props:any){
        super(props);
        store.operations.initializeVariables();
        store.operations.generateUserArray();
    }


    render() {


        //Give Style to input in PersonSelector.tsx
        return <div>
            <PersonSelector />
            <PersonData />
            <FoodData />
        </div>
    }
}
