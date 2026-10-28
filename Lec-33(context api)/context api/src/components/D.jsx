import React, { useContext } from 'react';
import { info } from '../App';

function D({ name, age }) {
  const { college, dist } = useContext(info);

  return (
    <div>
      <h1>My name is {name}</h1>
      <h2>My age is {age}</h2>
      <h2>My college is {college}</h2>
      <h2>My district is {dist}</h2>
    </div>
  );
}

export default D;