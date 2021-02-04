import React from 'react';
import Crime from './Crime';

export default function CrimesList(props) {
  return (
    <div>
      <ul>
        {props.crimes.map((crime) => (
          <Crime key={crime.id} crime={crime} />
        ))}
      </ul>
    </div>
  );
}
