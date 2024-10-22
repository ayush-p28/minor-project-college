import React from "react";
import ReactDOM from 'react-dom/client'
import LoginForm from './components/login/Login.jsx'

import Navabar from "./components/navbar/Navabar";

ReactDOM.createRoot(document.getElementById('header')).render(
    <React.StrictMode>
      <Navabar />
    </React.StrictMode>,
  )
  ReactDOM.createRoot(document.getElementById('Loginheader')).render(
      <React.StrictMode>
      <LoginForm/>
    </React.StrictMode>,
  )