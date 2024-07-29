import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import ModalDelete from '../../components/modal_delete/ModalDelete';
import MainTop from '../../components/main_top/MainTop';
import DETAILS from '../../models/mock-dataActe';

const ActeDetail = () => {

    const navigate = useNavigate();

    const [detail, setDetail] = useState([]);
    // Recuperation de l'ID dans le LOCATION
    let ID = String;
    let pathName = window.location.pathname;
    const tabID = [];
    for (let i = pathName.length; i > 0; i--) {
        if (pathName[i] === "/") break;
        tabID.unshift(pathName[i]);
    }
    ID = tabID.join("");

    useEffect(() => {   
        DETAILS.forEach(detail => {
            if (ID === detail.id_person.toString()) {
                setDetail(detail); return;
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

    function handleClickBack() {
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
                        <h3 className="main-header-content-title">Detail d'acte de {detail.nom_person} {detail.prenom_person}</h3>
                        <span className="main-header-content-subtitle">Soutitre page</span>
                        <div className="main-local-nav" >
                            <div className="action-local-nav" style={{display: "flex", justifyContent:"flex-end" }}>
                                <button className="btn add-now" id="add-now" onClick={handleClickBack}>
                                    <span className="content-add-now" >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                            <path fill='#fff' d="M13.939 4.939 6.879 12l7.06 7.061 2.122-2.122L11.121 12l4.94-4.939z" />
                                        </svg>
                                        <span className="add-now-name" id='add-adresse'>Retour</span>
                                    </span>
                                </button>
                                <button className="btn add-now" id="add-now" onClick={handleEditActe}>
                                    <span className="content-add-now" >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                            <path fill='#fff' d="m16 2.012 3 3L16.713 7.3l-3-3zM4 14v3h3l8.299-8.287-3-3zm0 6h16v2H4z" />
                                        </svg>
                                        <span className="add-now-name" id='add-adresse'>Editer</span>
                                    </span>
                                </button>
                            </div>
                        </div>
                    </header>

                    <main className="main-main-content" id="main-main-content-1">
                
                        <div className="content-personne">
                            <h3 className='card-acte'>Personne</h3>
                            <fieldset>
                                <div className="form-group">
                                    <div>
                                    </div>
                                </div>
                                <div className="form-group form-group-2">
                                    <div>
                                        <label htmlFor="nom_person" className="form-group-label">Nom:</label>
                                        <input type="text" className="form-group-input nom_person" name="nom_person" id="nom_person" placeholder="Nom"disabled value={detail.nom_person} />
                                    </div>
                                    <div>
                                        <label htmlFor="prenom_person " className="form-group-label">Prénom:</label>
                                        <input type="text" className="form-group-input prenom_person " name="prenom_person" id="prenom_person " placeholder="Prénom"disabled value={detail.prenom_person} />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <div>
                                        <label htmlFor="" className="form-group-label sexe_person ">Sexe:</label>
                                        <input type="text" name="sexe_person" id="sexe_person" className="form-group-input sexe_perso" value={detail.sexe_person} disabled/>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <div>
                                        <label htmlFor="adrs_person" className="form-group-label">Adresse:</label>
                                        <input type="text" className="form-group-input adrs_person" name="adrs_person" id="adrs_person" placeholder="Adresse" disabled value={detail.adrs_person}/>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <div style={{position:"relative"}}>
                                        <label htmlFor="nom_travail_person" className="form-group-label">Profession personne:</label>
                                        <input type="text" className="form-group-input nom_travail_person" name="nom_travail_person" 
                                        id="nom_travail_person" placeholder="profession du personne" value={detail.nom_travail} disabled/>
                                    </div>
                                </div>

                            </fieldset>
                        </div>

                        <div className="content-mere">
                            <h3 className="card-acte">Acte</h3>
                            <fieldset>
                            <div>
                                <label htmlFor="type_acte" className="form-group-label">Type d'acte:</label>
                                <input type="text" className="form-group-input date_acte" name="type_acte" id="type_acte" placeholder="Type d'acte" disabled value={detail.nom_type} />
                            </div>

                            <div className="form-group form-group-2">
                                <div>
                                <label htmlFor="date_acte" className="form-group-label">Date de l'acte:</label>
                                <input type="date" className="form-group-input date_acte" name="date_acte" id="date_acte" placeholder="Date de l'acte" disabled value={detail.date_acte} />

                                </div>
                                <div>
                                <label htmlFor="heure_acte" className="form-group-label">Heure:</label>
                                <input type="time" className="form-group-input heure_acte" name="heure_acte" id="heure_acte" placeholder="Heure de l'acte" disabled value={detail.heure_acte} />
                                </div>
                            </div>
                            
                            <div className="form-group">
                                <div>
                                <label htmlFor="lieu_acte" className="form-group-label">Lieu d'acte:</label>
                                <input type="text" className="form-group-input lieu_acte" name="lieu_acte" id="lieu_acte" placeholder="Lieu de l'acte" disabled value={detail.lieu_acte} />
                                </div>
                            </div>
                            
                            <div className="form-group form-group-2">
                                <div>
                                    <label htmlFor="date_enreg" className="form-group-label">Date d'enregistrement d'acte:</label>
                                    <input type="date" className="form-group-input date_enreg" name="date_enreg" id="date_enreg" placeholder="Date d'enregistrement d'acte" disabled value={detail.date_enreg} />
                                </div>
                                <div>
                                    <label htmlFor="heure_enreg" className="form-group-label">Heure d'enregistrement:</label>
                                    <input type="time" className="form-group-input heure_enreg" name="heure_enreg" id="heure_enreg" placeholder="Heure d'enregistrement d'acte" disabled value={detail.heure_enreg} />
                                </div>
                            </div>

                            <div className="form-group">
                                <div style={{position:"relative"}}>
                                    <label htmlFor="nom_fonkotany" className="form-group-label">Fonkotany:</label>
                                    <input type="text" className="form-group-input nom_fonkotany" name="nom_fonkotany" 
                                    id="nom_fonkotany" placeholder="Fonkotany" disabled value={detail.nom_fonkotany} />
                                </div>
                            </div>

                            <div className="form-group">
                                <div style={{position:"relative"}}>
                                        <label htmlFor="nom_commune" className="form-group-label">Commune:</label>
                                        <input type="text" className="form-group-input nom_commune" name="nom_commune"
                                        id="nom_commune"placeholder="Commune" disabled value={detail.nom_commune} 
                                        />
                                </div>
                            </div>
                            
                            <div className="form-group form-group-2">
                                <div>
                                <label htmlFor="nom_district" className="form-group-label">District:</label>
                                <input type="text" className="form-group-input nom_district" name="nom_district" id="nom_district" placeholder="District" disabled value={detail.nom_district} />
                                </div>

                                <div>
                                <label htmlFor="nom_region" className="form-group-label">Région:</label>
                                <input type="text" className="form-group-input nom_region" name="nom_region" id="nom_region" placeholder="région" disabled value={detail.nom_region}/>
                                </div>
                            </div>

                            </fieldset>
                        </div>

                        <div className="content-mere">
                            <h3 className="card-acte">Témoin</h3>
                            <fieldset>
                                <div className="form-group form-group-2">
                                    <div>
                                        <label htmlFor="nom_temoin" className="form-group-label">Nom:</label>
                                        <input type="text" className="form-group-input nom_temoin" name="nom_temoin" id="nom_temoin" placeholder="Nom" disabled value={detail.nom_temoin}/>
                                    </div>
                                    <div>
                                        <label htmlFor="prenom_temoin" className="form-group-label">Prénom:</label>
                                        <input type="text" className="form-group-input prenom_temoin" name="prenom_temoin" id="prenom_temoin" placeholder="Prénom" disabled value={detail.prenom_temoin}/>
            
                                    </div>
                                </div>
                                <div className="form-group form-group-2">
                                    <div>
                                        <label htmlFor="date_nais_temoin" className="form-group-label">Date de Naissance:</label>
                                        <input type="date" className="form-group-input date_nais_temoin" name="date_nais_temoin" id="date_nais_temoin" placeholder="Date de naissance" disabled value={detail.date_nais_temoin}/>
                                    </div>
                                    <div>
                                        <label htmlFor="age_temoin" className="form-group-label">Age:</label>
                                        <input type="text" className="form-group-input age_temoin" name="age_temoin" id="age_temoin" placeholder="Age" disabled value={detail.age_temoin ? detail.age_temoin:""} />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div>
                                        <label htmlFor="lieu_nais_temoin" className="form-group-label">Lieu de naissance:</label>
                                        <input type="text" className="form-group-input lieu_nais_temoin" name="lieu_nais_temoin" id="lieu_nais_temoin" placeholder="Lieu de naissance" disabled value={detail.lieu_nais_temoin}/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div >
                                        <label htmlFor="" className="form-group-label sexe_temoin">Sexe:</label> 
                                        <input type="radio" name="sexe_temoin" id="sexe_temoin" className="form-group-input sex_F" value={detail.sexe_temoin} />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <div>
                                        <label htmlFor="adrs_temoin" className="form-group-label">Adresse:</label>
                                        <input type="text" className="form-group-input adrs_temoin" name="adrs_temoin" id="adrs_temoin" placeholder="Adresse" disabled value={detail.adrs_temoin}/>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <div style={{position:"relative"}}>
                                        <label htmlFor="profession_temoin" className="form-group-label">Profession temoin:</label>
                                        <input type="text" className="form-group-input profession_temoin" name="profession_temoin" 
                                        id="profession_temoin" placeholder="profession" value={detail.profession_temoin} disabled />
                                    </div>
                                </div>
                            </fieldset>
                        </div>

                        <div className="content-mere">
                            <h3 className="card-acte">Mère</h3>
                            <fieldset>
                                <div className="form-group form-group-2">
                                    <div>
                                        <label htmlFor="nom_m" className="form-group-label">Nom:</label>
                                        <input type="text" className="form-group-input nom_m" name="nom_m" id="nom_m" placeholder="Nom"disabled value={detail.nom_m}/>
                                    </div>
                                    <div>
                                        <label htmlFor="prenom_m" className="form-group-label">Prénom:</label>
                                        <input type="text" className="form-group-input prenom_m" name="prenom_m" id="prenom_m" placeholder="Prénom"disabled value={detail.prenom_m}/>
                                    </div>
                                </div>
                            
                                <div className="form-group form-group-2">
                                    <div>
                                        <label htmlFor="date_nais_m" className="form-group-label">Date de Naissance:</label>
                                        <input type="date" className="form-group-input date_nais_m" name="date_nais_m" id="date_nais_m" placeholder="Date de naissance" disabled value={detail.date_nais_m}/>
                                    </div>
                                    <div>
                                        <label htmlFor="lieu_nais_m" className="form-group-label">Lieu de naissance:</label>
                                        <input type="text" className="form-group-input lieu_nais_m" name="lieu_nais_m" id="lieu_nais_m" placeholder="Lieu de naissance" disabled value={detail.lieu_nais_m} />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <div>
                                        <label htmlFor="age_m" className="form-group-label">Age:</label>
                                        <input type="text" className="form-group-input age_m" name="age_m" id="age_m" placeholder="Age"disabled value={detail.age_m } />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <div>
                                        <label htmlFor="adrs_m" className="form-group-label">Adresse:</label>
                                        <input type="text" className="form-group-input adrs_m" name="adrs_m" id="adrs_m" placeholder="Adresse"disabled value={detail.adrs_m} />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <div style={{position:"relative"}}>
                                        <label htmlFor="profession_m" className="form-group-label">Profession :</label>
                                        <input type="text" className="form-group-input profession_m" name="profession_m" id="profession_m" 
                                        placeholder="profession" disabled value={detail.profession_m} />
                                    </div>
                                </div>

                            </fieldset>
                        </div>

                        <div className="content-mere">
                            <h3 className="card-acte">Père</h3>
                            <fieldset>
                                <div className="form-group form-group-2">
                                    <div>
                                        <label htmlFor="nom_p" className="form-group-label">Nom:</label>
                                        <input type="text" className="form-group-input nom_p" name="nom_p" id="nom_p" placeholder="Nom" disabled value={detail.nom_p}/>
                                    </div>
                                    <div>
                                        <label htmlFor="prenom_p" className="form-group-label">Prénom:</label>
                                        <input type="text" className="form-group-input prenom_p" name="prenom_p" id="prenom_p" placeholder="Prénom" disabled value={detail.prenom_p}/>
                                    </div>
                                </div>
                        
                                <div className="form-group form-group-2">
                                    <div>
                                        <label htmlFor="date_nais_p" className="form-group-label">Date de Naissance:</label>
                                        <input type="date" className="form-group-input date_nais_p" name="date_nais_p" id="date_nais_p" placeholder="Date de naissance"disabled value={detail.date_nais_p}/>
                                    </div>
                                    <div>
                                        <label htmlFor="age_p" className="form-group-label">Age:</label>
                                        <input type="text" className="form-group-input age_p" name="age_p" id="age_p" placeholder="Age"disabled value={detail.age_p}/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div>
                                        <label htmlFor="lieu_nais_p" className="form-group-label">Lieu de naissance:</label>
                                        <input type="text" className="form-group-input lieu_nais_p" name="lieu_nais_p" id="lieu_nais_p" placeholder="Lieu de naissance"disabled value={detail.lieu_nais_p}/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div>
                                        <label htmlFor="adrs_p" className="form-group-label">Adresse:</label>
                                        <input type="text" className="form-group-input adrs_p" name="adrs_p" id="adrs_p" placeholder="Adresse"disabled value={detail.adrs_p}/>
                                    </div>
                                </div>
                                
                                <div className="form-group">
                                    <div style={{position:"relative"}}>
                                        <label htmlFor="profession_p" className="form-group-label">Profession :</label>
                                        <input type="text" className="form-group-input profession_p" name="profession_p" 
                                        id="profession_p" placeholder="profession" disabled value={detail.profession_p} />
                                    </div>
                                </div>

                            </fieldset>
                        </div>

                        <ModalDelete id={detail.id_acte} />

                    </main>
                </div>
            </div>

        </main>

        </>
    )
}

export default ActeDetail
