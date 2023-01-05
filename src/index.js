import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
<html>
  <head>
    <title>My Website</title>
    <style>
      body {
        margin: 0;
        padding: 0;
        position: relative;
      }
      img {
        width: 100%;
        height: 100%;
      }
      a.enter-button {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 21px;
        font-family: Berlin Sans FB, sans-serif;
        color: rgb(255, 255, 255);
        text-decoration: none;
        border: none;
        background: transparent;
        cursor: pointer;
        text-shadow: 16px 16px 32px rgba(0,0,0,0.5);
        letter-spacing: 3px;
        transition: all 0.5s ease;
      }
      a.enter-button:hover {
        color: rgb(233, 41, 41);
      }
    </style>
  </head>
  <body>
    <img src="https://media4.giphy.com/media/Xic34SaR9k0LSdjmdt/giphy.gif?cid=790b7611e924852ced5779c0bd72802528d44d35bcf097b5&rid=giphy.gif&ct=g" alt="Background GIF" width="100%" height="100%">
    <a href="https://www.example.com/main" class="enter-button">[ENTER]</a>
    onclick="fadeOut()">Enter</a>
    <script>
      function fadeOut() {
        document.body.classList.add('fade-out');
      }
    </script>
  </body>
</html>
