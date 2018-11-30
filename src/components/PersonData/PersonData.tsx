import * as React from 'react';

import './PersonData.scss';
import { store } from '../../stores/Stores';
import { observer } from 'mobx-react';
import { PersonaHood } from './PersonaHood/PersonaHood';


@observer export class PersonData extends React.Component {

    constructor(props: any) {
        super(props);

    }

    showThings() {
        if (store.dash.showHood) {
            return (store.operations.foodHood != null) ? store.operations.foodHood.map(
                (e: any) =>
                    <PersonaHood key={e.id} id={e.id} name={e.name} img={e.image} />
            ) : console.log("Esta wea no funciona")

        } else {
            return <div className='personaHood' />


        }
    }

    render() {
        let personPhotoStyle = {

            backgroundImage: `url(./assets/img/foto/${store.operations.actualPerson.image}.jpg )`,

        };


        //Give Style to input in PersonSelector.tsx
        if (store.operations.actualUserID != '') {
            return <section className="personDataComponent">
                <span className="hoodCapacity"
                    onMouseOut={(e) => {
                        console.log('moussout')
                        store.dash.showHood = false;
                    }}
                    onMouseOver={(e) => {
                        console.log('moussin')
                        store.dash.showHood = true;

                    }}
                >{store.operations.k}</span>
                
                <div className={store.dash.showHood == false? ' foodHood hidden' : 'foodHood visible'} >
                    {
                        this.showThings()
                    }

                </div>
                <div className="personPhoto"
                    style={personPhotoStyle}
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={(e) => {
                        store.operations.getSelectedPersonData(store.dash.userID);
                        console.log(store.operations.actualUserID);
                    }} />
                <div className="data">
                </div>
                <p className="personName">{store.operations.actualPerson.name}</p>
                <p className="personID">{store.operations.actualPerson.id}</p>
            </section>;
        }

        return <section className="personDataComponent">
            <span className="hoodCapacity">{store.operations.k}</span>
            <div className={store.dash.showHood == false? ' foodHood hidden' : 'foodHood visible'} >
                    {
                        this.showThings()
                    }

                </div>
            <div className="personPhoto"
                onDragOver={(e) => e.preventDefault()}
                onDrop={(e) => {
                    store.operations.getSelectedPersonData(store.dash.userID);
                    console.log(store.operations.actualUserID);
                }}

            />
            <div className="data">
            </div>
            <p className="personName">Nombre</p>
            <p className="personID">ID</p>
        </section>;;

    }
}
