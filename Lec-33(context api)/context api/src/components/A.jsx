import React, { createContext } from 'react';
import B from './B';
export const AngryDevesh=createContext();

function A({ data }) {
    const lunch ="no lunch due to vikas sir"
    const mood="Angry"
  return (
    <AngryDevesh.Provider value={{lunch,mood}}>
        <div>
            A
            <B name={name} AGE={AGE}/>
        </div>
    </AngryDevesh.Provider>
  );
}

export default A;