
import React from 'react';

function Home() {
  return (
    <div style={{
      textAlign: 'center',
      padding: '50px 20px',
      backgroundColor: '#eff6ff',
      minHeight: '60vh'
    }}>
      <h1 style={{
        color: '#1d4ed8',
        fontSize: '40px'
      }}>
        Welcome to My Website
      </h1>

      <p style={{ fontSize: '18px', color: '#555' }}>
        Your one-stop destination to learn, explore, and grow.
      </p>

      <h2>Explore Our Website</h2>

      <p style={{ color: '#555' }}>
        Discover our services and learn more about us.
      </p>

      <button
        onClick={() => alert('Welcome to My Website!')}
        style={{
          padding: '12px 25px',
          backgroundColor: '#2563eb',
          color: 'white',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer'
        }}
      >
        Get Started
      </button>
    </div>
  );
}

export default Home;
