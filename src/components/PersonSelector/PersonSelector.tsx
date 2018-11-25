import * as React from 'react';

import './PersonSelector.scss';
import { store } from '../../stores/Stores';
import { PersonaList } from './PersonaList/PersonaList';
import { observer } from 'mobx-react';

@observer export class PersonSelector extends React.Component {

    constructor(props:any){
        super(props);

    }

    render() {

        let searchIconStyle = {

            backgroundImage: `url(./assets/img/icons/searchIcon.png)`,
    
        };
        
        //Give Style to input in PersonSelector.tsx
        return <section className="personSelectorComponent">
        <div className="searchBar">
            <div className="icon" style={searchIconStyle} />
            <input onChange={(e:
                any) => {
                e.preventDefault();
                store.dash.modifyVar(e.target.value);
                store.dash.search()
                console.log(store.operations.userArrayBackup)
            }} type="text" />
        </div>
        <div className="personSelector">
            {(store.operations.userArrayBackup != null) ? store.operations.userArrayBackup.map(
                (e: any) =>
                    <PersonaList key={e.id} id={e.id} name={e.name} img={e.image} />
            ) : console.log("Esta wea no funciona")
            }
        </div>
    </section>;
    }
}
