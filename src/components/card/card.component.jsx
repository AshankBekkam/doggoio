import React from 'react';
import {Link} from 'react-router-dom'
import './card.styles.css';

export const Card = props => (
  <Link className = 'tag' to = {{
    pathname:'/infopage',
    id:props.dogs.id,
    name:props.dogs.name,
    bred_for:props.dogs.bred_for,
    life_span:props.dogs.life_span,
    temper:props.dogs.temperament,
    group:props.dogs.breed_group,
    origin:props.dogs.origin,
    weight:props.dogs.weight.metric,
    height:props.dogs.height.metric,
    url:props.dogs.image.url

}}>
  <div className='card-container'>
    <h1 className = 'list_item'> {props.dogs.name} </h1>
    <h2> {props.dogs.bred_for} </h2>

  </div>
  </Link>
  
);
