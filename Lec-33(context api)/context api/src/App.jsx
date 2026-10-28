import React, { createContext } from 'react';
import Navbar from './Navbar';
import A from './components/A';

export const info = createContext();

function App() {
  const name = "ali";
  const AGE = 22;
  const college = "mirai";
  const dist = "ghaziabad";

  return (
    <info.Provider value={{ college, dist }}>
      <div>
        APP
        <Navbar />
        <A data={{ name, AGE }} />
      </div>
    </info.Provider>
  );
}

export default App;