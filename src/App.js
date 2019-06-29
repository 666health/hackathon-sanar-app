import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import DoctorLogin from './pages/login/doctor';
import PatientLogin from './pages/login/patient';

import './App.css';

function Index() {
  return <h2>Home</h2>;
}

function App() {
  return (
    <Router>
      <div>
        <Route path="/" exact component={Index} />
        <Route path="/paciente/login" exact component={PatientLogin} />
        <Route path="/medico/login" exact component={DoctorLogin} />
      </div>
    </Router>
  );
}

export default App;
