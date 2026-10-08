// // // import React from 'react'
// // // import users from './Users.jsx'
// // // console.log(users);

// // // function App() {
// // //   return (
// // //     <div>
// // //       <h1>THIS IS FUNCTIONAL APP</h1>
// // //       </div>
// // //   )
// // // }

// // // export default App


// // import users from "./users";

// // function App() {
// //   return (
// //     <div>
// //       {users.map((user) => (
// //         <div key={user.id}>
// //           <img src={user.image} alt={user.name} />
// //           <h2>{user.name}</h2>
// //           <p>{user.role}</p>
// //           <p>{user.location}</p>
// //           <p>{user.experience}</p>
// //         </div>
// //       ))}
// //     </div>
// //   );
// // }

// // export default App;


// import users from "./users";
// import "./App.css";

// function App() {
//   return (
//     <div className="app">

//       {/* Background Effects */}
//       <div className="glow glow-1"></div>
//       <div className="glow glow-2"></div>

//       {/* 3D Floating Cube */}
//       <div className="cube-scene">
//         <div className="cube">
//           <div className="cube-face cube-face--front"></div>
//           <div className="cube-face cube-face--back"></div>
//           <div className="cube-face cube-face--left"></div>
//           <div className="cube-face cube-face--right"></div>
//           <div className="cube-face cube-face--top"></div>
//           <div className="cube-face cube-face--bottom"></div>
//         </div>
//       </div>

//       {/* Header */}
//       <header className="header">
//         <div className="badge">✦ OUR COMMUNITY</div>

//         <h1>
//           Meet the <span>Creators.</span>
//         </h1>

//         <p>
//           Discover talented developers, designers and AI enthusiasts
//           building the future.
//         </p>
//       </header>

//       {/* User Cards */}
//       <div className="user-container">

//         {users.map((user) => (
//           <div className="user-card" key={user.id}>

//             {/* Card Top */}
//             <div className="card-top">
//               <span className="user-id">
//                 #{String(user.id).padStart(2, "0")}
//               </span>

//               <span className="status">
//                 <span></span> Available
//               </span>
//             </div>

//             {/* Profile Image */}
//             <div className="image-container">
//               <img
//                 src={user.image}
//                 alt={user.name}
//                 className="user-image"
//               />
//             </div>

//             {/* User Details */}
//             <h2>{user.name}</h2>

//             <div className="role">
//               {user.role}
//             </div>

//             <div className="line"></div>

//             {/* Info */}
//             <div className="info">

//               <div className="info-item">
//                 <span className="icon">⌖</span>
//                 <div>
//                   <small>LOCATION</small>
//                   <p>{user.location}</p>
//                 </div>
//               </div>

//               <div className="info-item">
//                 <span className="icon">◈</span>
//                 <div>
//                   <small>EXPERIENCE</small>
//                   <p>{user.experience}</p>
//                 </div>
//               </div>

//             </div>

//             {/* Button */}
//             <button className="profile-btn">
//               View Profile
//               <span>↗</span>
//             </button>

//           </div>
//         ))}

//       </div>

//       {/* Footer */}
//       <footer>
//         <span>✦</span> Built for the next generation of creators
//       </footer>

//     </div>
//   );
// }

// export default App;


// import users from "./users";
// function App() {

//   const beginners = users.filter((user) => {
//     return parseFloat(user.experience) < 2;
//   });
//   return (
//     <div>
//       <h1>Users</h1>
//       {beginners.map((user) => (
//         <div key={user.id}>
//           <img
//             src={user.image}
//             alt={user.name}
//           />
//           <h2>{user.name}</h2>
//           <p>Role: {user.role}</p>
//           <p>Location: {user.location}</p>
//           <p>Experience: {user.experience}</p>
//           <hr />
//         </div>
//       ))}
//     </div>
//   );
// }

// import React from 'react';
// import Adminpanel from './Adminpanel';
// import LoginForm from './LoginForm';

// function App() {
//   const isloggedin = true;

//   if (isloggedin) {
//     return <Adminpanel />;
//   }

//   return <LoginForm />;
// }

// export default App;

// import React from 'react';
// import Adminpanel from './Adminpanel';
// import Loginform from './LoginForm';

// function App() {
//   let content;
//   const isloggedin = false;
//   if(isloggedin){
//     content = <Adminpanel/>;
//   }else{
//     content=<Loginform/>;
//   }
//   return (
//     <div>
//       {content}
//       <h1>Lorem ipsum, dolor sit am</h1>
//     </div>
//   );
// }

// export default App;


import React from 'react'
import Card from './Card'
console.log(Card);
const saif="chicken";

function App() {
  const age=89;


  return (
    <div>
      {/* <h1>my age is {age}</h1> */}
      <Card my age={age} fname="saif"/>
    </div>
  )
}

export default App