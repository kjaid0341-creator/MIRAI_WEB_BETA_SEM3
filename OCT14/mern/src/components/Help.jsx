
import React from 'react';

function Help() {
  return (
    <div style={{
      textAlign: 'center',
      padding: '40px 20px',
      backgroundColor: '#faf5ff',
      minHeight: '60vh'
    }}>
      <h1 style={{ color: '#7e22ce', fontSize: '36px' }}>
        Help Center
      </h1>

      <p style={{ color: '#555' }}>
        How can we help you?
      </p>

      <h2 style={{ color: '#6b21a8', marginTop: '30px' }}>
        Frequently Asked Questions
      </h2>

      <div style={{
        maxWidth: '650px',
        margin: '25px auto',
        textAlign: 'left'
      }}>
        <div style={itemStyle}>
          <h3 style={{ color: '#7e22ce' }}>
            1. What is My Website?
          </h3>
          <p>It is a website built using React.</p>
        </div>

        <div style={itemStyle}>
          <h3 style={{ color: '#7e22ce' }}>
            2. How can I explore the pages?
          </h3>
          <p>Use the navigation links at the top of the website.</p>
        </div>

        <div style={itemStyle}>
          <h3 style={{ color: '#7e22ce' }}>
            3. How can I contact support?
          </h3>
          <p>Email us at support@mywebsite.com.</p>
        </div>
      </div>
    </div>
  );
}

const itemStyle = {
  backgroundColor: 'white',
  padding: '15px 20px',
  marginBottom: '15px',
  borderRadius: '8px',
  boxShadow: '0 2px 8px #00000010'
};

export default Help;
