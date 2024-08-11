import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import ModalDelete from '../../components/modal_delete/ModalDelete';
import DETAILS from '../../models/mock-dataActe';
import { makeRequest } from '../../services/axios';
import * as XLSX from 'xlsx';

const ActeDetail = () => {
    const { id } = useParams();
    
    const [detail, setDetail] = useState([]);
    
    const [isDelete, setIsDelete] = useState(false)

    const [error, setError] = useState(false);


// API GET ACTES
    useEffect(() => {
        makeRequest.get(`/getDetail/${id}`)
        .then((res) => { 
            if (!res.data) {
                console.log("Aucun donnée trouvé");
                setError(true); return
            }
            setDetail(res.data); 
            setError(false);
        })
        .catch((error) => { console.log(error); });
    }, []);

    
    //  EXPORTER LE TABLEAU AFFICHER
    const handleOnExport = () => {
        let wa = XLSX.utils.book_new();
        let ws = XLSX.utils.json_to_sheet(actes);

        XLSX.utils.book_append_sheet(wa, ws, "Acte_de_naissance")

        XLSX.writeFile(wa, "Acte_de_naissance.xlsx")
    }


    return (
        <>
                { /* <!-- ===== CARD 1 ===== --> */}
                <div className="card active-main" id="card-1">
                    { /* <!-- ===== HEADER CARD 1 ===== --> */}
                    <header className="main-header-content">
                        <h3 className="main-header-content-title">Detail d'acte de { error && detail.nom_person} { error && detail.prenom_person}</h3>
                        <span className="main-header-content-subtitle">Soutitre page</span>
                        <div className="main-local-nav" >
                            <div className="action-local-nav btn-page-detail">
                                <Link to="/acte-etat-civil">
                                    <button className="btn add-now" id="add-now">
                                        <span className="content-add-now" >
                                        <box-icon type='solid' color='#fff' name='chevron-left'></box-icon>
                                            <span className="add-now-name" id='add-adresse'>Retour</span>
                                        </span>
                                    </button>
                                </Link>

                                <Link to={`/acte-etat-civil/edit/${id}`}>
                                    <button className={error ? "hidden btn add-now":"btn add-now"} id="add-now">
                                        <span className="content-add-now" >
                                            <box-icon name='edit-alt' type='solid' color='#fff' ></box-icon>
                                            <span className="add-now-name" id='add-adresse'>Editer</span>
                                        </span>
                                    </button>
                                </Link>
                            </div>
                        </div>

                        {/* Boutton d'expoertation de fichier */}
                        <button 
                            title='Exporter le table Afficher' 
                            className="btn add-now" id="add-now" 
                            style={{ padding:"0.65rem" }}
                            onClick={handleOnExport}
                        >
                            <span className="content-add-now" style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:"0.5rem" }}>
                                <box-icon className="add-now" name='export' color='#fff' ></box-icon>
                                <span className="add-now-name">Exporter</span>
                            </span>
                        </button>

                    </header>

                    { !error ? (
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
                                        <input type="text" className="form-group-input nom_person" name="nom_person" id="nom_person" disabled value={ error  ? "":detail.nom_person} />
                                    </div>
                                    <div>
                                        <label htmlFor="prenom_person " className="form-group-label">Prénom:</label>
                                        <input type="text" className="form-group-input prenom_person " name="prenom_person" id="prenom_person" disabled value={ error  ? "":detail.prenom_person} />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <div>
                                        <label htmlFor="" className="form-group-label sexe_person ">Sexe:</label>
                                        <input type="text" name="sexe_person" id="sexe_person" className="form-group-input sexe_perso" value={ error  ? "":detail.sexe_person} disabled/>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <div>
                                        <label htmlFor="adrs_person" className="form-group-label">Adresse:</label>
                                        <input type="text" className="form-group-input adrs_person" name="adrs_person" id="adrs_person Adresse" disabled value={ error  ? "":detail.adrs_person}/>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <div style={{position:"relative"}}>
                                        <label htmlFor="nom_travail_person" className="form-group-label">Profession personne:</label>
                                        <input type="text" className="form-group-input nom_travail_person" name="nom_travail_person" 
                                        id="nom_travail_person profession du personne" value={ error  ? "":detail.nom_travail} disabled/>
                                    </div>
                                </div>

                            </fieldset>
                        </div>

                        <div className="content-mere">
                            <h3 className="card-acte">Acte</h3>
                            <fieldset>
                            <div>
                                <label htmlFor="type_acte" className="form-group-label">Type d'acte:</label>
                                <input type="text" className="form-group-input type_acte" name="type_acte" id="type_acte " disabled value={ error  ? "":detail.type_acte} />

                            </div>

                            <div className="form-group form-group-2">
                                <div>
                                <label htmlFor="date_acte" className="form-group-label">Date de l'acte:</label>
                                <input type="date" className="form-group-input date_acte" name="date_acte" id="date_acte Date de l'acte" disabled value={ error  ? "":detail.date_acte} />

                                </div>
                                <div>
                                <label htmlFor="heure_acte" className="form-group-label">Heure:</label>
                                <input type="time" className="form-group-input heure_acte" name="heure_acte" id="heure_acte Heure de l'acte" disabled value={ error  ? "":detail.heure_acte} />
                                </div>
                            </div>
                            
                            <div className="form-group">
                                <div>
                                <label htmlFor="lieu_acte" className="form-group-label">Lieu d'acte:</label>
                                <input type="text" className="form-group-input lieu_acte" name="lieu_acte" id="lieu_acte Lieu de l'acte" disabled value={ error  ? "":detail.lieu_acte} />
                                </div>
                            </div>
                            
                            <div className="form-group form-group-2">
                                <div>
                                    <label htmlFor="date_enreg" className="form-group-label">Date d'enregistrement d'acte:</label>
                                    <input type="date" className="form-group-input date_enreg" name="date_enreg" id="date_enreg Date d'enregistrement d'acte" disabled value={ error  ? "":detail.date_enreg} />
                                </div>
                                <div>
                                    <label htmlFor="heure_enreg" className="form-group-label">Heure d'enregistrement:</label>
                                    <input type="time" className="form-group-input heure_enreg" name="heure_enreg" id="heure_enreg Heure d'enregistrement d'acte" disabled value={ error  ? "":detail.heure_enreg} />
                                </div>
                            </div>

                            <div className="form-group">
                                <div style={{position:"relative"}}>
                                    <label htmlFor="nom_fonkotany" className="form-group-label">Fonkotany:</label>
                                    <input type="text" className="form-group-input nom_fonkotany" name="nom_fonkotany" 
                                    id="nom_fonkotany Fonkotany" disabled value={ error  ? "":detail.nom_fonkotany} />
                                </div>
                            </div>

                            <div className="form-group">
                                <div style={{position:"relative"}}>
                                        <label htmlFor="nom_commune" className="form-group-label">Commune:</label>
                                        <input type="text" className="form-group-input nom_commune" name="nom_commune"
                                        id="nom_commune"placeholder="Commune" disabled value={ error  ? "":detail.nom_commune} 
                                        />
                                </div>
                            </div>
                            
                            <div className="form-group form-group-2">
                                <div>
                                <label htmlFor="nom_district" className="form-group-label">District:</label>
                                <input type="text" className="form-group-input nom_district" name="nom_district" id="nom_district District" disabled value={ error  ? "":detail.nom_district} />
                                </div>

                                <div>
                                <label htmlFor="nom_region" className="form-group-label">Région:</label>
                                <input type="text" className="form-group-input nom_region" name="nom_region" id="nom_region région" disabled value={ error  ? "":detail.nom_region}/>
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
                                        <input type="text" className="form-group-input nom_temoin" name="nom_temoin" id="nom_temoin Nom" disabled value={ error  ? "":detail.nom_temoin}/>
                                    </div>
                                    <div>
                                        <label htmlFor="prenom_temoin" className="form-group-label">Prénom:</label>
                                        <input type="text" className="form-group-input prenom_temoin" name="prenom_temoin" id="prenom_temoin Prénom" disabled value={ error  ? "":detail.prenom_temoin}/>
            
                                    </div>
                                </div>
                                <div className="form-group form-group-2">
                                    <div>
                                        <label htmlFor="date_nais_temoin" className="form-group-label">Date de Naissance:</label>
                                        <input type="date" className="form-group-input date_nais_temoin" name="date_nais_temoin" id="date_nais_temoin Date de naissance" disabled value={ error  ? "":detail.date_nais_temoin}/>
                                    </div>
                                    <div>
                                        <label htmlFor="age_temoin" className="form-group-label">Age:</label>
                                        <input type="text" className="form-group-input age_temoin" name="age_temoin" id="age_temoin Age" disabled value={ error  ? "":detail.age_temoin ? detail.age_temoin:""} />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div>
                                        <label htmlFor="lieu_nais_temoin" className="form-group-label">Lieu de naissance:</label>
                                        <input type="text" className="form-group-input lieu_nais_temoin" name="lieu_nais_temoin" id="lieu_nais_temoin Lieu de naissance" disabled value={ error  ? "":detail.lieu_nais_temoin}/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div >
                                        <label htmlFor="" className="form-group-label sexe_temoin">Sexe:</label> 
                                        <input type="text" name="sexe_temoin" id="sexe_temoin" className="form-group-input sex_F" value={ error  ? "":detail.sexe_temoin} />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <div>
                                        <label htmlFor="adrs_temoin" className="form-group-label">Adresse:</label>
                                        <input type="text" className="form-group-input adrs_temoin" name="adrs_temoin" id="adrs_temoin Adresse" disabled value={ error  ? "":detail.adrs_temoin}/>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <div style={{position:"relative"}}>
                                        <label htmlFor="profession_temoin" className="form-group-label">Profession temoin:</label>
                                        <input type="text" className="form-group-input profession_temoin" name="profession_temoin" 
                                        id="profession_temoin profession" value={ error  ? "":detail.profession_temoin} disabled />
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
                                        <input type="text" className="form-group-input nom_m" name="nom_m" id="nom_m Nom"disabled value={ error  ? "":detail.nom_m}/>
                                    </div>
                                    <div>
                                        <label htmlFor="prenom_m" className="form-group-label">Prénom:</label>
                                        <input type="text" className="form-group-input prenom_m" name="prenom_m" id="prenom_m Prénom"disabled value={ error  ? "":detail.prenom_m}/>
                                    </div>
                                </div>
                            
                                <div className="form-group form-group-2">
                                    <div>
                                        <label htmlFor="date_nais_m" className="form-group-label">Date de Naissance:</label>
                                        <input type="date" className="form-group-input date_nais_m" name="date_nais_m" id="date_nais_m Date de naissance" disabled value={ error  ? "":detail.date_nais_m}/>
                                    </div>
                                    <div>
                                        <label htmlFor="lieu_nais_m" className="form-group-label">Lieu de naissance:</label>
                                        <input type="text" className="form-group-input lieu_nais_m" name="lieu_nais_m" id="lieu_nais_m Lieu de naissance" disabled value={ error  ? "":detail.lieu_nais_m} />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <div>
                                        <label htmlFor="age_m" className="form-group-label">Age:</label>
                                        <input type="text" className="form-group-input age_m" name="age_m" id="age_m Age"disabled value={ error  ? "":detail.age_m } />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <div>
                                        <label htmlFor="adrs_m" className="form-group-label">Adresse:</label>
                                        <input type="text" className="form-group-input adrs_m" name="adrs_m" id="adrs_m Adresse"disabled value={ error  ? "":detail.adrs_m} />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <div style={{position:"relative"}}>
                                        <label htmlFor="profession_m" className="form-group-label">Profession :</label>
                                        <input type="text" className="form-group-input profession_m" name="profession_m" id="profession_m" 
                                        placeholder="profession" disabled value={ error  ? "":detail.profession_m} />
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
                                        <input type="text" className="form-group-input nom_p" name="nom_p" id="nom_p Nom" disabled value={ error  ? "":detail.nom_p}/>
                                    </div>
                                    <div>
                                        <label htmlFor="prenom_p" className="form-group-label">Prénom:</label>
                                        <input type="text" className="form-group-input prenom_p" name="prenom_p" id="prenom_p Prénom" disabled value={ error  ? "":detail.prenom_p}/>
                                    </div>
                                </div>
                        
                                <div className="form-group form-group-2">
                                    <div>
                                        <label htmlFor="date_nais_p" className="form-group-label">Date de Naissance:</label>
                                        <input type="date" className="form-group-input date_nais_p" name="date_nais_p" id="date_nais_p Date de naissance"disabled value={ error  ? "":detail.date_nais_p}/>
                                    </div>
                                    <div>
                                        <label htmlFor="age_p" className="form-group-label">Age:</label>
                                        <input type="text" className="form-group-input age_p" name="age_p" id="age_p Age"disabled value={ error  ? "":detail.age_p}/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div>
                                        <label htmlFor="lieu_nais_p" className="form-group-label">Lieu de naissance:</label>
                                        <input type="text" className="form-group-input lieu_nais_p" name="lieu_nais_p" id="lieu_nais_p Lieu de naissance"disabled value={ error  ? "":detail.lieu_nais_p}/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div>
                                        <label htmlFor="adrs_p" className="form-group-label">Adresse:</label>
                                        <input type="text" className="form-group-input adrs_p" name="adrs_p" id="adrs_p Adresse"disabled value={ error  ? "":detail.adrs_p}/>
                                    </div>
                                </div>
                                
                                <div className="form-group">
                                    <div style={{position:"relative"}}>
                                        <label htmlFor="profession_p" className="form-group-label">Profession :</label>
                                        <input type="text" className="form-group-input profession_p" name="profession_p" 
                                        id="profession_p profession" disabled value={ error  ? "":detail.profession_p} />
                                    </div>
                                </div>

                            </fieldset>
                        </div>


                    </main>
                    ):(
                        <p>Aucun donnee trouvé</p>
                    )}
                </div>

            <ModalDelete id={id} nomPage={"commune"} useDelete={[isDelete, setIsDelete]}/>
        </>
    )
}

export default ActeDetail
