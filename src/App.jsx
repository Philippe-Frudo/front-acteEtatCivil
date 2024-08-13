import React, { useEffect, useState } from 'react';
import "./App.css";
import Header from './components/header/Header.jsx';

import { BrowserRouter as Router, Route, Routes, useNavigate, useNavigation } from 'react-router-dom';
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
import Auth from './services/Auth.js';

import User from './pages/user/User.jsx'




function App() {


    const [user, setUser] = useState([])

    //=== API DET FORMATION UTILISATEUR (Officier) ===
    useEffect(() => {
        Auth.getFormation()
            .then(resp => {
                if (!resp || !resp.data) {  // Assurez-vous que resp n'est pas null ou undefined
                    console.log('Utilisateur non identifié');
                    return;
                }
                setUser(resp.data);
            });
    }, []);

    

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

                        {user.isAdmin ? (<Route path="/user" element={<User />} />):('') }

                        <Route path="/dashboard" element={<Dashboard />} />


                        <Route path="/acte-etat-civil" element={<Acte user={user}/>} />
                        <Route path="/acte-etat-civil/detail/:id" element={<ActeDetail />} />
                        <Route path="/acte-etat-civil/add" element={<FormAddActe />} />
                        <Route path="/acte-etat-civil/edit/:id" element={<FormEditActe />} />
                        

                        <Route path="/travail" element={<Travail />} />
                        <Route path="/travail/add" element={<FormAddTravail />} />
                        <Route path="/travail/edit/:id" element={<FormEditTravail />} />


                        <Route path="/fonkotany" element={<Fonkotany />} />
                        <Route path="/fonkotany/edit/:id" element={<FormEditFonkotany />} />
                        <Route path="/fonkotany/add" element={<FormAddFonkotany />} />

                        {user.isAdmin ? (<Route path="/commune" element={<Commune />} />):('') }
                        {user.isAdmin ? (<Route path="/commune/add" element={<FormAddCommune />} />):('') }
                        {user.isAdmin ? (<Route path="/commune/edit/:id" element={<FormEditCommune />} />):('') }


                        {user.isAdmin ? (<Route path="/district" element={<District />} />):('') }
                        {user.isAdmin ? (<Route path="/district/add" element={<FormAddDistrict />} />):('') }
                        {user.isAdmin ? (<Route path="/district/edit/:id" element={<FormEditDistrict />} />):('') }
                        

                        {user.isAdmin ? (<Route path="/region" element={<Region />} />):('') }
                        {user.isAdmin ? (<Route path="/region/add" element={<FormAddRegion />} />):('') }
                        {user.isAdmin ? (<Route path="/region/edit/:id" element={<FormEditRegion />} />):('') }


                        {/* {user.isAdmin ? (<Route path="/utilisateur" element={<Utilisateur />} />):(null) } */}
                    </Routes>

                    </div>
                </main>
            </div>

        </Router>
        </>
    )
}

export default App
