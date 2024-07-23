import React from 'react'
import FormAddPersonne from '../../components/form_personne/FormAddPersonne';
import FormAddMere from '../../components/form_mere/FormAddMere';
import FormAddPere from '../../components/form_pere/FormAddPere';
import FormAddTemoin from '../../components/form_temoin/FormAddTemoin';
import FormAddAct from '../../components/form_acte/FormAddAct';
import MainTop from "../../components/main_top/MainTop";
import { useNavigate } from 'react-router-dom';

const FormUpdateAct = () => {
    const navigate = useNavigate();

    function handleClickAdd() {
        navigate("/acte-etat-civil/");
    }

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
                            <h3 className="main-header-content-title">Ajout d'une nouvelle  acte</h3>
                            <span className="main-header-content-subtitle">Soutitre page</span>
                            <div className="main-local-nav">
                                <div className="action-local-nav">
                                    <button className="btn add-now" id="add-now" onClick={handleClickAdd}>
                                        <span className="content-add-now" >
                                            <svg className="add-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                <path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z" />
                                            </svg>
                                            <span className="add-now-name" id='add-adresse'>Retour</span>
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </header>
                        { /* <!-- MAIN CARD 1 --> */}
                        <main className="main-main-content" id="main-main-content-1" >
                            <form className="form" id="form-add-act">

                                {/* Message . status: success or error*/}
                                <div className="alert-message {/*status*/}" >
                                    <span className='message'> </span>
                                </div>

                                <div className="content-user">

                                    <FormAddPersonne />
                                    <FormAddAct />
                                    <FormAddMere />
                                    <FormAddPere />
                                    <FormAddTemoin />
                                    <div className="action-group">
                                        <button type="submit" className="btn btn-save" id="save">Envoyer</button>
                                        <button type="submit" className="btn btn-clear" id="clear">Annuler</button>
                                    </div>
                                </div>
                            </form>
                        </main>
                    </div>

                </div>
            </main>

        </>
    )
}

export default FormUpdateAct;
