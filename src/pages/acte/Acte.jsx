import React, { useEffect, useState } from 'react';
import "./acte.css";
import MainTop from '../../components/main_top/MainTop';
import { useNavigate } from 'react-router-dom';
import ActeNaissance from './ActeNaissance';
import ActeMariage from './ActeMariage';
import ActeDece from './ActeDece';
import ActeDivorce from './ActeDivorce';


import ActeAll from './ActeAll';
import { ACTES } from '../../models/mock-acte';


const Acte = () => {
    const navigate = useNavigate();

    function handleClickAdd() {
        navigate("/acte-etat-civil/add-acte");
    }

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

    // const [personnes, setPersonnes] = useState([]);
    let [actes, setActes] = useState([]);

    useEffect(() => {
        setActes(ACTES);

        //   fetch("http://localhost:3001/pokemons")
        //   .then(response => response.json)
        //   .then((pokemons) => {
        //     setPokemons(pokemons)
        //   });

    }, []);


    return (
        <main className="main">
            { /* <!-- =====HEADER MAIN ==== --> */}
            <MainTop />

            { /* <!-- ====== CONTAINER MAIN ===== --> */}
            <div className="main-container main-container-2" id="main-scroll">

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
                            <button className="btn add-now" id="add-now" onClick={handleClickAdd}>
                                <span className="content-add-now">
                                    <svg className="add-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                        <path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z" />
                                    </svg>
                                    <span className="add-now-name">Ajouter</span>
                                </span>
                            </button>
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
                    Acte
                    <ActeAll actes={actes} />
                    {/* Naissance */}
                    {/* <ActeNaissance /> */}
                </div>

                { /* <!-- ===== CARD 2 ===== --> */}
                <div className="card" id="card-2">
                    Mariage
                    {/* <ActeMariage /> */}

                </div>

                { /* <!-- ===== CARD 3 ===== --> */}
                <div className="card" id="card-3">
                    Divorce
                    {/* <ActeDivorce /> */}

                </div>

                { /* <!-- ===== CARD 4 ===== --> */}
                <div className="card" id="card-4">
                    Dece
                    {/* <ActeDece /> */}

                </div>
            </div>
        </main>
    )
}

export default Acte;
