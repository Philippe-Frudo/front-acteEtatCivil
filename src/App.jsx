import React from 'react';
import "./App.css";
import Header from './components/header/Header.jsx';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Utilisateur from './pages/utilisateur/Utilisateur';
import Login from './pages/login/Login';
import Dashboard from './pages/dashboard/Dashboard';

import Acte from './pages/acte/Acte.jsx';
import FormAddActe from './pages/acte/FormAddActe.jsx';
import ActeDetail from './pages/acte/ActeDetail.jsx';
import FormEditActe from './pages/acte/FormEditActe.jsx';

import District from './pages/district/District';
import Region from './pages/region/Region';
import Travail from './pages/travail/Travail';
import Utilisateur from './pages/utilisateur/Utilisateur.jsx';
import FormCreateUser from './pages/register/FormCreateUser.jsx';

import Fonkotany from './pages/fonkotany/Fonkotany.jsx';
import FormAddFonkotany from './pages/fonkotany/FormAddFonkotany.jsx';
import FormEditFonkotany from './pages/fonkotany/FormEditFonkotany.jsx';

import Commune from './pages/commune/Commune';
import FormAddCommune from './pages/commune/FormAddCommune.jsx';
import FormEditCommune from './pages/commune/FormEditCommune.jsx';

import FormAddDistrict from './pages/district/FormAddDistrict';
import FormEditDistrict from './pages/district/FormEditDistrict';
import FormAddRegion from './pages/region/FormAddRegion.jsx';
import FormEditRegion from './pages/region/FormEditRegion.jsx';
import FormAddTravail from './pages/travail/FormAddTravail.jsx';
import FormEditTravail from './pages/travail/FormEditTravail.jsx';
import MainTop from './components/main_top/MainTop.jsx';

function App() {
    return (
        <>
            
        <Router>
            <div className="big-container">
                {(location.pathname == "/" || location.pathname == "/register") ? "" : <Header />}

                <main className="main">
                    { /* <!-- =====HEADER MAIN ==== --> */}
                    {(location.pathname == "/" || location.pathname == "/register") ? "" :  <MainTop />}

                    { /* <!-- ====== CONTAINER MAIN ===== --> */}
                    <div className="main-container main-container-2" id='main-scroll'>

                    <Routes>
                        <Route exact path="/" element={<Login />} />
                        <Route path="/register" element={<FormCreateUser />} />
                        <Route path="/dashboard" element={<Dashboard />} />

                        <Route path="/acte-etat-civil" element={<Acte />} />
                        <Route path="/acte-etat-civil/add" element={<FormAddActe />} />
                        <Route path="/acte-etat-civil/detail/:id" element={<ActeDetail />} />
                        <Route path="/acte-etat-civil/edit/:id" element={<FormEditActe />} />

                        {/* <Route path="/adresse" element={<Adresse />} /> */}
                        <Route path="/fonkotany" element={<Fonkotany />} />
                        <Route path="/fonkotany/edit/:id" element={<FormEditFonkotany />} />
                        <Route path="/fonkotany/add" element={<FormAddFonkotany />} />

                        <Route path="/commune" element={<Commune />} />
                        <Route path="/commune/add" element={<FormAddCommune />} />
                        <Route path="/commune/edit/:id" element={<FormEditCommune />} />

                        <Route path="/district" element={<District />} />
                        <Route path="/district/add" element={<FormAddDistrict />} />
                        <Route path="/district/edit/:id" element={<FormEditDistrict />} />

                        <Route path="/region" element={<Region />} />
                        <Route path="/region/add" element={<FormAddRegion />} />
                        <Route path="/region/edit/:id" element={<FormEditRegion />} />

                        <Route path="/travail" element={<Travail />} />
                        <Route path="/travail/add" element={<FormAddTravail />} />
                        <Route path="/travail/edit/:id" element={<FormEditTravail />} />

                        <Route path="/utilisateur" element={<Utilisateur />} />
                    </Routes>

                    </div>
                </main>
            </div>

        </Router>
        </>
    )
}

export default App
