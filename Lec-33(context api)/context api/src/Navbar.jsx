import React, { useContext } from 'react'
import { info } from './App';


function Navbar() {
    const {college,dist}=useContext(info);

  return (
    <div>
        <h1>Navbar</h1>
        <h2>College : {college}</h2>
        <h2>dist : {dist}</h2>
    </div>
  )
}

export default Navbar