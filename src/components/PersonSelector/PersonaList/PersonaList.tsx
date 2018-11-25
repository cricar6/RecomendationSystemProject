import * as React from 'react';

import './PersonaList.scss';
import { store } from '../../../stores/Stores';

interface PersonaListProps {
    id: string;
    name: string;
    img: string;
}

export const PersonaList = ({ id, name, img }: PersonaListProps) => {
    let personaListStyle = {

        backgroundImage: `url(./assets/img/foto/${img}.jpg)`,

      };
    
    return <div className="personaList" onClick={(e) => {
        e.preventDefault();
        store.operations.actualUserID = id;
        console.log(store.operations.actualUserID);
        store.operations.getSelectedPersonData();
        }}>
            <p>{name.substr(0,name.indexOf(' '))}</p>

        <div className="background"  style={personaListStyle}>
        </div>
    </div>;
}

