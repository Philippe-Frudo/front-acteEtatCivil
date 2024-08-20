import React, { useEffect, useRef, useState } from 'react';
import "./App.css";
import Header from './components/header/Header.jsx';

import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './pages/login/Login';
import Dashboard from './pages/dashboard/Dashboard';

import Acte from './pages/acte/Acte.jsx';
import FormAddActe from './pages/acte/FormAddActe.jsx';
import ActeDetail from './pages/acte/ActeDetail.jsx';
import FormEditActe from './pages/acte/FormEditActe.jsx';

import District from './pages/district/District';
import Region from './pages/region/Region';
import Travail from './pages/travail/Travail';
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
import PageNotFound from './pages/PageNotFound.jsx';




function App() {


    const [user, setUser] = useState([])
    const refBody = useRef();

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

    const path = location.pathname == "/" || location.pathname == "/register" || location.pathname == "/404"

    return (
        <>
            
        <Router>
            <div ref={refBody} className={ path ? "": "big-container"} >

                {path ? null : <Header refBody={refBody}/>}

                <main className="main">
                    { /* <!-- =====HEADER MAIN ==== --> */}
                    { path ? null :  <MainTop />}

                    { /* <!-- ====== CONTAINER MAIN ===== --> */}
                    <div className="main-container main-container-2" id={ path ? "": "main-scroll" }>


                    <Routes>


                        <Route exact path="/" element={<Login />} />
                        <Route path="/register" element={<FormCreateUser />} />


                        {user.isAdmin ? (<Route path="/user" element={<User />} />):('') }

                        <Route path="/dashboard" element={<Dashboard user={user}/>} />


                        <Route path="/acte-etat-civil" element={<Acte user={user}/>} />
                        <Route path="/acte-etat-civil/detail/:id" element={<ActeDetail />} />
                        <Route path="/acte-etat-civil/add" element={<FormAddActe />} />
                        <Route path="/acte-etat-civil/edit/:id" element={<FormEditActe />} />
                        

                        {user.isAdmin ? (<Route path="/travail" element={<Travail />} />):('') }
                        {user.isAdmin ? (<Route path="/travail/add" element={<FormAddTravail />} />):('') }
                        {user.isAdmin ? (<Route path="/travail/edit/:id" element={<FormEditTravail />} />):('') }


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



                        {/* Paage non trouver */}
                        <Route path="/404" element={<PageNotFound refBody={refBody}/>} />
                        <Route path="*" element={<Navigate replace to="/404" />} />


                    </Routes>

                    </div>
                </main>
            </div>

        </Router>
        </>
    )
}

export default App
