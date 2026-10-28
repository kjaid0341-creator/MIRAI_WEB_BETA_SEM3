import React,{useContext} from 'react';
import {info} from '../App';
import D from './D';
import { AngryDevesh } from './A';

function C({ name, age }) {
    const {college,dist}=useContext(info);
    const {lunch,mood}=useContext(AngryDevesh);
  return (
    <div>
        <h2>college : {college}</h2>
        <h2>dist : {dist}</h2>
      <D name={name} age={age} />
      <p>{lunch}</p>
      <p>{mood}</p>
    </div>
  );
}

export default C;