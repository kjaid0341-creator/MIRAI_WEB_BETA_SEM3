
import React from 'react';

function About() {
  return (
    <div style={{
      textAlign: 'center',
      padding: '50px 20px',
      backgroundColor: '#f0fdf4',
      minHeight: '60vh'
    }}>
      <h1 style={{ color: '#15803d', fontSize: '36px' }}>
        About Us
      </h1>

      <p style={{
        color: '#555',
        fontSize: '18px',
        lineHeight: '1.8'
      }}>
        Welcome to My Website! We are passionate about
        technology, creativity, and learning.
      </p>

      <h2 style={{ color: '#166534', marginTop: '30px' }}>
        Our Mission
      </h2>

      <p style={{ color: '#555', fontSize: '18px' }}>
        Our mission is to help people discover new ideas
        and improve their skills.
      </p>
    </div>
  );
}

export default About;
