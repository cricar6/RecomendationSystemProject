import * as React from 'react';

import './DashBoard.scss';
import { Header } from '../../components/Header/Header';


export class DashBoard extends React.Component {
    render() {
        return <div>
            <Header title="React Seed"
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur ducimus similique incidunt, nostrum placeat, ipsa mollitia, perspiciatis eveniet sed doloremque itaque. Dolorum deserunt maiores vitae molestiae sint iste sed deleniti?"
                img="./assets/img/logo.png" />
        </div>
    }
}
