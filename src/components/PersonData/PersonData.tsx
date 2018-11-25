import * as React from 'react';

import './PersonData.scss';
import { store } from '../../stores/Stores';
import { observer } from 'mobx-react';
import { PersonaHood } from './PersonaHood/PersonaHood';


@observer export class PersonData extends React.Component {

    constructor(props: any) {
        super(props);

    }

    render() {
        let personPhotoStyle = {

            backgroundImage: `url(./assets/img/foto/${store.operations.actualPerson.image}.jpg )`,
    
          };
        
        //Give Style to input in PersonSelector.tsx
        if (store.operations.actualUserID != '') {
            return <section className="personDataComponent">
                <span className="hoodCapacity">{store.operations.k}</span>
                <div className="foodHood">
                {(store.operations.foodHood != null) ? store.operations.foodHood.map(
                (e: any) =>
                    <PersonaHood key={e.id} id={e.id} name={e.name} img={e.image} />
            ) : console.log("Esta wea no funciona")
            }
                </div>
                <div className ="personPhoto" style={personPhotoStyle} />
                <div className="data">
                </div>
                <p className="personName">{store.operations.actualPerson.name}</p>
                <p className= "personID">{store.operations.actualPerson.id}</p>
            </section>;
        }

        return null;

    }
}
