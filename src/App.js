
import React from 'react';
import './App.css';

const BlankBox = () => {
  return (
    <div className="blank-box"></div>
  );
};

const App = () => {
  return (
    <div className="app">
      <nav className="navbar">
        <button className="profile-button">👤</button>
        <div className="login-signup">
          <button className="button">Login</button>
          <button className="button">Signup</button>
        </div>
      </nav>
      <div className="content">
        <BlankBox />
        <section className="about-us">
          <h2>About Us</h2>
          <p>Welcome to our website. Learn more about us here.</p>
        </section>
      </div>
    </div>
  );
};

export default App;
