import React from 'react';
import logo from './logo.svg';
import bg from './bg.svg'
import './App.css';

function App() {
  return (
    <div className="App">
        <img src={bg} className="bg" alt="bg" />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="coming-soon">
          <div className="sub-title">Stay tuned</div>
          <div className="title">
            COMING SOON
          </div>
        </div>
        <div className="contact">
          <div>We are available please connect with us via</div>
          <div>Phone: <span className="contact-info">+96181111111</span></div>
          <div>Email: <span className="contact-info">support@datasights.com</span></div>
          
        </div>
      </header>
    </div>
  );
}

export default App;
