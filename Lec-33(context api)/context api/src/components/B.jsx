import React ,{useContext}from 'react';
import {info} from '../App';
import C from './C';

function B({ name, age }) {
    const {college,dist}=useContext(info);
  return (
    <div>
      B
      <h2>college: {college}</h2>
      <h2>dist:{dist}</h2>
      <C name={name} age={age} />
    </div>
  );
}

export default B;