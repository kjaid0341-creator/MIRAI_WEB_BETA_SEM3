
import React from 'react';

function Service() {
  return (
    <div style={{
      textAlign: 'center',
      padding: '40px 20px',
      backgroundColor: '#fff7ed',
      minHeight: '60vh'
    }}>
      <h1 style={{ color: '#c2410c', fontSize: '36px' }}>
        Our Services
      </h1>

      <p style={{ color: '#555', fontSize: '17px' }}>
        Explore what My Website has to offer.
      </p>

      <div style={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: '25px',
        marginTop: '35px'
      }}>
        <div style={cardStyle}>
          <h2 style={{ color: '#ea580c' }}>Web Development</h2>
          <p>Learn how modern websites are built.</p>
        </div>

        <div style={cardStyle}>
          <h2 style={{ color: '#ea580c' }}>Technology</h2>
          <p>Explore new tools and technologies.</p>
        </div>

        <div style={cardStyle}>
          <h2 style={{ color: '#ea580c' }}>Learning</h2>
          <p>Discover ideas and improve your skills.</p>
        </div>
      </div>
    </div>
  );
}

const cardStyle = {
  backgroundColor: 'white',
  width: '220px',
  padding: '25px',
  borderRadius: '10px',
  boxShadow: '0 4px 12px #00000015'
};

export default Service;
