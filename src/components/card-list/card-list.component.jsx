import React from 'react';

import { Card } from '../card/card.component';

import './card-list.styles.css';

export const CardList = props => (
  <div className='card-list'>
    {props.dogs.map(dog => (
      <Card key={dog.id} dogs={dog} />
    ))}
  </div>
);
