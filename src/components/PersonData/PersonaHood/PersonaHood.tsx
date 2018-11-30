import * as React from 'react';

import './PersonaHood.scss';
import { store } from '../../../stores/Stores';

interface PersonaHoodProps {
    id: string;
    name: string;
    img: string;
}

export const PersonaHood = ({ id, name, img }: PersonaHoodProps) => {
    let personaHoodStyle = {

        backgroundImage: `url(./assets/img/foto/${img}.jpg)`,

      };
    
    return <div className="personaHood" onClick={(e) => {
        e.preventDefault();
            store.operations.getSelectedPersonData(id);
        }}>
        <div className="background"  style={personaHoodStyle}>
        </div>
    </div>;
}

