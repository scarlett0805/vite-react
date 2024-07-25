import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { ConfigProvider } from 'antd';
import { antdTheme } from './common/antdTheme.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ConfigProvider 
      theme={{
        token: antdTheme
      }}>
       <App/>
    </ConfigProvider>
  </React.StrictMode>,
);
