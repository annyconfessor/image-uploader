import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './routes';
import reportWebVitals from './reportWebVitals';
import styled from 'styled-components'

import './index.css'

const Background = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  background-color: #F6F8FB;
`

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Background>
      <App />
    </Background>
  </React.StrictMode>
);

reportWebVitals();


