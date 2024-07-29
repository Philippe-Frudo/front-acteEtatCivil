import React, { useState } from 'react'
import MainTop from "../../components/main_top/MainTop";
import { useNavigate } from 'react-router-dom';

import Personne from '../../models/personne';
import Acte from '../../models/acte';
import FormActeAndBirthday from './FormActeAndActBirthday';

const FormAddActe = () => {

    const navigate = useNavigate();
    const handleClickBack = () => {
        navigate("/acte-etat-civil/");
    }

    
    const [personne] = useState(new Personne());
    const [acte] = useState(new Acte());

    return (
        <>
            <main className="main">
                { /* <!-- =====HEADER MAIN ==== --> */}
                <MainTop />

                { /* <!-- ====== CONTAINER MAIN ===== --> */}
                <div className="main-container main-container-2" id='main-scroll'>
                    { /* <!-- ===== CARD 1 ===== --> */}
                    <div className="card active-main" id="card-1">
                        { /* <!-- ===== HEADER CARD 1 ===== --> */}
                        <header className="main-header-content">
                            <h3 className="main-header-content-title">Modifier une  acte</h3>
                            <span className="main-header-content-subtitle">Soutitre page</span>
                            <div className="main-local-nav">
                                <div className="action-local-nav">
                                    <button className="btn add-now" id="add-now" onClick={handleClickBack}>
                                        <span className="content-add-now" >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                <path fill='#fff' d="M13.939 4.939 6.879 12l7.06 7.061 2.122-2.122L11.121 12l4.94-4.939z" />
                                            </svg>
                                            <span className="add-now-name" id='add-adresse'>Retour</span>
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </header>
                        { /* <!-- MAIN CARD 1 --> */}
                        <main className="main-main-content" id="main-main-content-1" style={{marginTop: "0", paddingTop:"0"}}>

                            <FormActeAndBirthday personne={personne} acte={acte} isEditForm={true} />

                        </main>
                    </div>
                </div>

            </main>

        </>
    )
}

export default FormAddActe;
