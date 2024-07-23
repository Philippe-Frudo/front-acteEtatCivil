import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx';
import './index.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Utilisateur from './pages/utilisateur/Utilisateur';
import Login from './pages/login/Login';
import Dashboard from './pages/dashboard/Dashboard';
import Acte from './pages/acte/Acte.jsx';
import Adresse from './pages/adresse/Adresse';
import Fonkotany from './pages/fonkotany/Fonkotany.jsx';
import Commune from './pages/commune/Commune';
import District from './pages/district/District';
import Region from './pages/region/Region';
import Travail from './pages/travail/Travail';
import FormAct from './pages/form_acte/FormAct';
import Utilisateur from './pages/utilisateur/Utilisateur.jsx';
import FormUpdateAct from './pages/form_acte/FormUpdateAct.jsx';
import FormCreateUser from './pages/register/FormCreateUser.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <div className="big-container">
        {(location.pathname == "/" || location.pathname == "/register") ? "" : <App />}
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/register" element={<FormCreateUser />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/acte-etat-civil" element={<Acte />} />
          <Route path="/acte-etat-civil/add-act" element={<FormAct />} />
          <Route path="/acte-etat-civil/update-act" element={<FormUpdateAct />} />
          <Route path="/adresse" element={<Adresse />} />
          <Route path="/fonkotany" element={<Fonkotany />} />
          <Route path="/commune" element={<Commune />} />
          <Route path="/district" element={<District />} />
          <Route path="/region" element={<Region />} />
          <Route path="/travail" element={<Travail />} />
          <Route path="/utilisateur" element={<Utilisateur />} />
        </Routes>
      </div>
    </Router>
  </React.StrictMode>
)
