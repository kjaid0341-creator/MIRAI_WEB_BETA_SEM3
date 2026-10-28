
import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router';
import Home from './components/Home';
import About from './components/About';
import Service from './components/Service';
import Help from './components/Help';

function App() {
  return (
    <BrowserRouter>
      <div>
        <h1>My Website</h1>

        <Link to="/">Home</Link> {" | "}
        <Link to="/about">About</Link> {" | "}
        <Link to="/service">Service</Link> {" | "}
        <Link to="/help">Help</Link>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/help" element={<Help />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


// export default App;

// import React from 'react';
// import {
//   BrowserRouter,
//   Routes,
//   Route,
//   Link
// } from 'react-router';

// import Home from './components/Home';
// import About from './components/About';
// import Service from './components/Service';
// import Help from './components/Help';

// function App() {
//   return (
//     <BrowserRouter>
//       <div style={{ minHeight: '100vh', fontFamily: 'Arial, sans-serif' }}>

//         <nav style={{
//           backgroundColor: '#172554',
//           padding: '20px',
//           display: 'flex',
//           justifyContent: 'space-between',
//           alignItems: 'center',
//           flexWrap: 'wrap',
//           gap: '15px'
//         }}>
//           <h2 style={{ color: 'white', margin: 0 }}>
//             My Website
//           </h2>

//           <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
//             <Link to="/" style={linkStyle}>Home</Link>
//             <Link to="/about" style={linkStyle}>About</Link>
//             <Link to="/service" style={linkStyle}>Services</Link>
//             <Link to="/help" style={linkStyle}>Help</Link>
//           </div>
//         </nav>

//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/service" element={<Service />} />
//           <Route path="/help" element={<Help />} />
//         </Routes>

//         <footer style={{
//           backgroundColor: '#172554',
//           color: 'white',
//           padding: '18px',
//           textAlign: 'center',
//           marginTop: '40px'
//         }}>
//           <p>© 2026 My Website. All rights reserved.</p>
//         </footer>

//       </div>
//     </BrowserRouter>
//   );
// }

// const linkStyle = {
//   color: 'white',
//   textDecoration: 'none',
//   fontWeight: 'bold'
// };

// export default App;
