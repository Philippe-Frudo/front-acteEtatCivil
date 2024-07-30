import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./acte.css";
import { ACTES } from '../../models/mock-acte';
import { showDeleteModal } from '../../constants/modal';
import ModalDelete from '../../components/modal_delete/ModalDelete';

/*import ActeNaissance from './ActeNaissance';
import ActeMariage from './ActeMariage';
import ActeDece from './ActeDece';
import ActeDivorce from './ActeDivorce';*/



const Acte = () => {

    function cardActive(classe) {
        const cards = document.querySelectorAll(".card");
        cards.forEach(element => {
            element.classList.remove("active-main")
        });
        let card = document.querySelector(`#${classe}`);
        if (card.id) {
            card.classList.add("active-main");
            return true;
        }
    }

    function handleActiveCard(event) {
        const datamain = event.currentTarget.dataset.main;
        if (datamain) {
            if (cardActive(datamain)) {
                document.querySelectorAll(`.${event.target.classList[0]}`).forEach(element => {
                    element.classList.remove("active-navigate");
                });
                event.currentTarget.classList.add("active-navigate");
            }
        }
    }

    
    const navigate = useNavigate();
    const handleDetail = (id) => {
        navigate(`/acte-etat-civil/detail/${id}`, { replace: true });
    }


    return (
        <>
                { /* <!-- ===== HEADER CARD 1 ===== --> */}
                <header className="main-header-content">
                    <h3 className="main-header-content-title">Acte d'Etat Civil</h3>
                    <span className="main-header-content-subtitle">Soutitre page</span>
                    <div className="main-local-nav">
                        <ul>
                            <li className="nav-local-li card-1 active-navigate" data-main="card-1" onClick={e => handleActiveCard(e)}>Naissance</li>
                            <li className="nav-local-li card-2" data-main="card-2" onClick={e => handleActiveCard(e)}>Mariage</li>
                            <li className="nav-local-li card-3" data-main="card-3" onClick={e => handleActiveCard(e)}>Divorce</li>
                            <li className="nav-local-li card-4" data-main="card-4" onClick={e => handleActiveCard(e)}>Décé</li>
                        </ul>
                        <div className="action-local-nav">

                            <Link to='/acte-etat-civil/add'>
                                <button className="btn add-now" id="add-now">
                                    <span className="content-add-now">
                                        <svg className="add-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                            <path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z" />
                                        </svg>
                                        <span className="add-now-name">Ajouter</span>
                                    </span>
                                </button>
                            </Link>

                            <div className="search search-local-nav">
                                <label className="content-search">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                        <path d="M19.023 16.977a35.13 35.13 0 0 1-1.367-1.384c-.372-.378-.596-.653-.596-.653l-2.8-1.337A6.962 6.962 0 0 0 16 9c0-3.859-3.14-7-7-7S2 5.141 2 9s3.14 7 7 7c1.763 0 3.37-.66 4.603-1.739l1.337 2.8s.275.224.653.596c.387.363.896.854 1.384 1.367l1.358 1.392.604.646 2.121-2.121-.646-.604c-.379-.372-.885-.866-1.391-1.36zM9 14c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z" />
                                    </svg>
                                    <input className="main-search " type="text" placeholder="chercher..." />
                                </label>
                            </div>
                        </div>
                    </div>
                </header>

                { /* <!-- ===== CARD 1 ===== --> */}
                <div className="card active-main" id="card-1">

                        { /* <!-- MAIN CARD 1 --> */}
                        <main className="main-main-content" id="main-main-content-1">
                            <div className="table-content">
                                <table className="table" id="nom-table">
                                    <thead>
                                        <tr>
                                            <th>ID acte</th>
                                            <th>Type Acte</th>
                                            <th>id Personne</th>
                                            <th>Nom</th>
                                            <th>Prenom</th>
                                            <th>Sexe</th>
                                            <th>date Acte</th>
                                            <th>heure acte</th>
                                            <th>date d'anregistremment</th>
                                            <th>heure enregistrement</th>
                                            <th>Détail</th>
                                            {/* <th>Modifier</th> */}
                                            <th>Supprimer</th>
                                        </tr>
                                    </thead>
                                    {/* <div className="table-scroll"> */}
                                    <tbody id="body-nom-table">
                                        {ACTES.map((acte) => (
                                            <tr key={acte.id_acte}>
                                                <td>{acte.id_acte}</td>
                                                <td>{acte.type_acte}</td>
                                                <td>{acte.id_p}</td>
                                                <td>{acte.nom_p}</td>
                                                <td>{acte.prenom_p}</td>
                                                <td>{acte.sexe_p}</td>
                                                <td>{acte.date_acte}</td>
                                                <td>{acte.heure_acte}</td>
                                                <td>{acte.date_enreg}</td>
                                                <td>{acte.heure_enrg}</td>
                                                <td className="td-action">
                                                    <button className="btn btn-edit" id="edit" onClick={() => { handleDetail(acte.id_acte) }}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                            <path d="m16 2.012 3 3L16.713 7.3l-3-3zM4 14v3h3l8.299-8.287-3-3zm0 6h16v2H4z" />
                                                        </svg>
                                                    </button>
                                                </td>
                                                <td className="td-action">
                                                    <button className="btn btn-delete" id="remove" onClick={() => { showDeleteModal(acte.id_acte) }}>
                                                        {/* <?xml version="1.0"? > */}
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30px" height="30px">
                                                            <path d="M 14.984375 2.4863281 A 1.0001 1.0001 0 0 0 14 3.5 L 14 4 L 8.5 4 A 1.0001 1.0001 0 0 0 7.4863281 5 L 6 5 A 1.0001 1.0001 0 1 0 6 7 L 24 7 A 1.0001 1.0001 0 1 0 24 5 L 22.513672 5 A 1.0001 1.0001 0 0 0 21.5 4 L 16 4 L 16 3.5 A 1.0001 1.0001 0 0 0 14.984375 2.4863281 z M 6 9 L 7.7929688 24.234375 C 7.9109687 25.241375 8.7633438 26 9.7773438 26 L 20.222656 26 C 21.236656 26 22.088031 25.241375 22.207031 24.234375 L 24 9 L 6 9 z" />
                                                        </svg>
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}

                                    </tbody>
                                    {/* </div> */}
                                </table>
                            </div>
                        </main>

                        <div className="status-table">
                            <div>
                                <h3> Nombre total : <span className="nbr">10</span></h3>
                            </div>
                            <div className="next-prev">
                                <span className="previous">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                        <path d="M13.939 4.939 6.879 12l7.06 7.061 2.122-2.122L11.121 12l4.94-4.939z" />
                                    </svg>
                                </span>
                                <span className="nbr-table">
                                    <span id="nbr-table">1</span>
                                    <span id="nbr-table">2</span>
                                </span>
                                <span className="next">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                        <path d="M10.061 19.061 17.121 12l-7.06-7.061-2.122 2.122L12.879 12l-4.94 4.939z" />
                                    </svg>
                                </span>
                            </div>
                        </div>

                        <ModalDelete />
                        
                </div>

                { /* <!-- ===== CARD 2 (Mariage)===== --> */}

                { /* <!-- ===== CARD 3 (Divorce)===== --> */}

                { /* <!-- ===== CARD 4 (Dece)===== --> */}
        </>
    )
}

export default Acte;
