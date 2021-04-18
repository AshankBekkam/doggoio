import React from 'react'
import './Homepage.css'
import { CardList } from '../components/card-list/card-list.component';
import { SearchBox } from '../components/search-box/search-box.component';


export const Homepage = (props) => {
    return (
        <div className = 'App'>
        <h1 className = 'main-heading'>Doggos.io</h1>
            <CardList dogs={props.dogs} />
        </div>
    )
}
