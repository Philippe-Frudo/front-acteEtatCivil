import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { ACTES } from '../../models/mock-acte';
import ModalDelete from '../../components/modal_delete/ModalDelete';

const ActeDetail = () => {

    const navigate = useNavigate();

    const [acte, setActe] = useState([]);

    // Recuperation de l'ID dans le LOCATION
    let ID = String;
    let pathName = window.location.pathname;
    const tabID = [];
    for (let i = pathName.length; i > 0; i--) {
        if (pathName[i] === "/") break;
        tabID.unshift(pathName[i]);
    }
    ID = tabID.join("");

    // Supprimer la valeur de l'ID lorsqu'on retourne
    // const setID = () => {
    //     ID = null;
    // }

    // console.log("type " + typeof ID);

    useEffect(() => {
        ACTES.forEach(acte => {
            if (ID === acte.id_acte.toString()) {
                setActe(acte);
                return;
            }
        });
        /*fetch(`http://localhost:3001/pokemons/${ID}`)
        .then(response => response.json )
        .then(pokemon => {
            if(pokemon.id) setPokemon(pokemon)
            }
        );*/
        /* "+ permet de convertir un nombre une chaine de caractere en entier"
        PokemonService.getPokemonById(+ID).then(pokemon => setPokemon(pokemon));*/

    }, [ID]);


    function handleEditActe(id) {
        navigate(`/acte-etat-civil/edit/${id}`, { replace: true });
    }


    return (
        <>
            { /* <!-- =========== Modal add Personne ========== --> */}
            <Link to="/acte-etat-civil/">Retour</Link> <br />
            {/* <h3 className='card-acte'>Details</h3> */}
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
                                <th>Modifier</th>
                                <th>Supprimer</th>
                            </tr>
                        </thead>
                        <tbody id="body-nom-table">
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
                                    <button className="btn btn-edit" id="edit" onClick={() => handleEditActe(acte.id_acte)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                            <path d="m16 2.012 3 3L16.713 7.3l-3-3zM4 14v3h3l8.299-8.287-3-3zm0 6h16v2H4z" />
                                        </svg>
                                    </button>
                                </td>
                                <td className="td-action">
                                    <button className="btn btn-delete" id="remove" onClick={() => handleDelete(acte.id_acte)}>
                                        {/* <?xml version="1.0"? > */}
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30px" height="30px">
                                            <path d="M 14.984375 2.4863281 A 1.0001 1.0001 0 0 0 14 3.5 L 14 4 L 8.5 4 A 1.0001 1.0001 0 0 0 7.4863281 5 L 6 5 A 1.0001 1.0001 0 1 0 6 7 L 24 7 A 1.0001 1.0001 0 1 0 24 5 L 22.513672 5 A 1.0001 1.0001 0 0 0 21.5 4 L 16 4 L 16 3.5 A 1.0001 1.0001 
                                            0 0 0 14.984375 2.4863281 z M 6 9 L 7.7929688 24.234375 C 7.9109687 25.241375 8.7633438 26 9.7773438 26 L 20.222656 26 C 21.236656 26 22.088031 25.241375 22.207031 24.234375 L 24 9 L 6 9 z" />
                                        </svg>
                                    </button>
                                </td>
                            </tr>

                        </tbody>
                        {/* </div> */}
                    </table>
                </div>
                <ModalDelete id={acte.id_acte} />

            </main>
        </>

    )
}

export default ActeDetail
