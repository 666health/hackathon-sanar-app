import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import DoctorLogin from './pages/login/doctor';
import PatientLogin from './pages/login/patient';
import DoctorRegister from './pages/register/doctor';
import PatientRegister from './pages/register/patient';
import Calendar from './pages/home';
import Alarms from './pages/alarms';
import BottomNavigation from './components/bottom-bar';
import Topbar from './components/topbar';
import Treatments from './pages/treatments';

function App() {
  console.log('app');
  return (
    <Router>
      <Topbar />
      <div>
        <Route path='/' exact component={Calendar} />
        <Route path='/paciente/login' exact component={PatientLogin} />
        <Route path='/medico/login' exact component={DoctorLogin} />
        <Route path='/paciente/register' exact component={PatientRegister} />
        <Route path='/medico/register' exact component={DoctorRegister} />
        <Route path='/alarmes' exact component={Alarms} />
        <Route path='/tratamentos' exact component={Treatments} />
      </div>
      <BottomNavigation />
    </Router>
  );
}

export default App;
