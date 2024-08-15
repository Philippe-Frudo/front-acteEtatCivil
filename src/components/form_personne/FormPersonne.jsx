import React, { useEffect, useState } from 'react'
import handleSex from "../../constants/sexe";
import { hiddenList, messageValidator, searchAddress, showList, successBorder } from '../../helpers/borderField';
import TRAVAILS from '../../models/mock-travail';
import TravailService from '../../services/serviceTravail';


const FormPersonne = ({ useFormPersonne, useTravails }) => {

    const [travails, setTravails] = useTravails;


    const [formPersonne, setFormPersonne] = useFormPersonne;
    /**
     * @param {HTMLInputElement} e 
     */
    const handleInputChange = (e) => {
        const fieldName = e.target.name;
        const fieldValue = e.target.value;
        const newField = { [fieldName]: { value: fieldValue } };
        setFormPersonne(prevState => ({ ...prevState, ...newField }));

        if (!("sexe_person").includes(fieldName)) {
            successBorder(`.${fieldName}`);
            messageValidator(`.${fieldName}`, "");
        }
    }
    
    
    /* ===============CHANGE TRAVAIL personne=============== */
    const [fieldTravailPersonne, setFieldTravailPersonne] = useState("");
    
    const handleInputChangeTravailPerson = (e) => {
        const fieldName = e.target.name;
        setFieldTravailPersonne(e.target.value);

        if (fieldName) {
            successBorder(`.${fieldName}`);
            messageValidator(`.${fieldName}`, "");  
        }
    }

    useEffect(() => {
        let comm = travails.find(trav => trav.id_travail === formPersonne.id_travail.value);
        if (comm) {
          setFieldTravailPersonne(comm.nom_travail);
        } else {
        //   console.log('Travail non trouvé.');
        }
      }, [formPersonne, travails]);
    

    //====== CHANGE (id_person ) PAR CLICK TRAVAIL PERSON========
  const handleClickTravailPerson = (trav) => {
    if (trav.id_travail) {
      const newField = { id_travail: { value: trav.id_travail } };
      setFormPersonne(prevState => ({ ...prevState, ...newField })); 
    }
    if (trav.nom_travail) {
        setFieldTravailPersonne(trav.nom_travail);
    }
    hiddenList(".list_travail_person")
  }

   
/* ===============CHANGE PAR CLICK TRAVAIL MERE =============== */
    const handleClickTravailMere = (trav) => {
        const newFieldMere = { profession_m: {value: trav.nom_travail } }
        setFormPersonne(prevState => ({...prevState, ...newFieldMere}));
        hiddenList(".list_travail_mere")
    }
    

    
/* =============== TRAVAIL PERE =============== */
    const handleClickTravailPere = (trav) => {
        
        const newFieldPere = { profession_p: { value: trav.nom_travail } }
        setFormPersonne(prevState => ({...prevState, ...newFieldPere}));
        
        hiddenList(".list_travail_pere")
    }

  
    return (
        <>
            // { /* <!-- =========== Modal add Personne ========== --> */ }
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
                            <input 
                                type="text" 
                                className="form-group-input nom_person" 
                                name="nom_person" id="nom_person" 
                                placeholder="Nom" 
                                value={formPersonne.nom_person.value} 
                                onChange={handleInputChange} 
                            />
                            <span className="msg-error"></span>
                        </div>
                        <div>
                            <label htmlFor="prenom_person " className="form-group-label">Prénom:</label>
                            <input 
                                type="text" 
                                className="form-group-input prenom_person " 
                                name="prenom_person" 
                                id="prenom_person" 
                                placeholder="Prénom" 
                                value={formPersonne.prenom_person.value} 
                                onChange={handleInputChange} 
                            />
                            <span className="msg-error"></span>
                        </div>
                    </div>

                    <div className="form-group">
                        <div>
                            <label htmlFor="" className="form-group-label sexe_person ">Sexe:</label>
                            <label className="sex-group">
                                <input type="radio" 
                                name="sexe_person" 
                                id="sexe_person" 
                                className="form-group-input sexe_perso" 
                                value="F" 
                                defaultChecked 
                                onChange={handleInputChange} 
                                onClick={(e) => { handleSex(e) }} 
                                /> Féminin
                            </label>
                            <label className="sex-group">
                                <input type="radio" 
                                name="sexe_person" 
                                id="sexe_person" 
                                className="form-group-input sexe_perso" 
                                value="M" onChange={handleInputChange} 
                                onClick={(e) => { handleSex(e) }} 
                                />Masculin
                            </label>
                        </div>
                    </div>

                    <div className="form-group">
                        <div>
                            <label htmlFor="adrs_person" className="form-group-label">Adresse:</label>
                            <input 
                                type="text" 
                                className="form-group-input adrs_person" 
                                name="adrs_person" 
                                id="adrs_person" 
                                placeholder="Adresse" 
                                value={formPersonne.adrs_person.value} 
                                onChange={handleInputChange}
                            />
                            <span className="msg-error"></span>
                        </div>
                    </div>

                    <div className="form-group">
                        <div style={{position:"relative"}}>
                            <label htmlFor="nom_travail_person" className="form-group-label">Profession:</label>
                            <input 
                                type="text" 
                                className="form-group-input nom_travail_person" 
                                name="nom_travail_person" 
                                id="nom_travail_person" 
                                placeholder="profession du personne" 
                                value={fieldTravailPersonne} 
                                onChange={handleInputChangeTravailPerson}
                                onKeyUp={(e) => searchAddress(e.target.id, "list_travail_person") }
                                onFocus={() => showList(".list_travail_person") } 
                                // onBlur={() => hiddenList(".adrs_person")}
                            />
                            <ul id="list_travail_person" className="list list_travail_person">
                                {travails?.map(trav => (
                                    <li key={trav.id_travail}>
                                    <p onClick={() => handleClickTravailPerson(trav)} className='list-p'>
                                        {trav.nom_travail}
                                    </p>
                                    </li>
                                ))}
                            </ul>
                            <span className="msg-error"></span>
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
                            <input 
                                type="text" 
                                className="form-group-input nom_m" 
                                name="nom_m" id="nom_m" 
                                placeholder="Nom" 
                                value={formPersonne.nom_m.value} 
                                onChange={handleInputChange}
                            />
                            <span className="msg-error"></span>
                        </div>

                        <div>
                            <label htmlFor="prenom_m" className="form-group-label">Prénom:</label>
                            <input 
                                type="text" 
                                className="form-group-input prenom_m" 
                                name="prenom_m" id="prenom_m" 
                                placeholder="Prénom" 
                                value={formPersonne.prenom_m.value} 
                                onChange={handleInputChange}
                            />
                            <span className="msg-error"></span>
                        </div>
                    </div>
                
                    <div className="form-group form-group-2">
                        <div>
                            <label htmlFor="date_nais_m" className="form-group-label">Date de Naissance:</label>
                            <input
                                type="date" 
                                className="form-group-input date_nais_m" 
                                name="date_nais_m" 
                                id="date_nais_m" 
                                placeholder="Date de naissance" 
                                value={formPersonne.date_nais_m.value} 
                                onChange={handleInputChange}
                            />
                            <span className="msg-error"></span>
                        </div>
                        <div>
                            <label htmlFor="age_m" className="form-group-label">Age:</label>
                            <input 
                                type="text" 
                                className="form-group-input age_m" 
                                name="age_m" id="age_m" 
                                placeholder="Age" 
                                value={formPersonne.age_m.value ? formPersonne.age_m.value :""} 
                                onChange={handleInputChange} 
                                disabled
                            />
                            <span className="msg-error"></span>
                        </div>        
                    </div>

                    <div className="form-group">
                        <div>
                            <label htmlFor="lieu_nais_m" className="form-group-label">Lieu de naissance:</label>
                            <input 
                                type="text" 
                                className="form-group-input lieu_nais_m" 
                                name="lieu_nais_m" 
                                id="lieu_nais_m" 
                                placeholder="Lieu de naissance" 
                                value={formPersonne.lieu_nais_m.value} 
                                onChange={handleInputChange} 
                            />
                            <span className="msg-error"></span>
                        </div>
                       
                    </div>

                    <div className="form-group">
                        <div>
                            <label htmlFor="adrs_m" className="form-group-label">Adresse:</label>
                            <input 
                                type="text" 
                                className="form-group-input adrs_m" 
                                name="adrs_m" 
                                id="adrs_m" 
                                placeholder="Adresse" 
                                value={formPersonne.adrs_m.value} 
                                onChange={handleInputChange} 
                            />
                            <span className="msg-error"></span>
                        </div>
                    </div>

                    <div className="form-group">
                        <div style={{position:"relative"}}>
                            <label htmlFor="profession_m" className="form-group-label">Profession :</label>
                            <input 
                                type="text" 
                                className="form-group-input profession_m" 
                                name="profession_m" 
                                id="profession_m" 
                                placeholder="profession" 
                                value={formPersonne.profession_m.value} 
                                onChange={handleInputChange}
                                onKeyUp={(e) => searchAddress(e.target.id, "list_travail_mere") }
                                onFocus={() => showList(".list_travail_mere") } 
                                // onBlur={() => hiddenList(".adrs_person")}
                            />
                            <ul id="list_travail_mere" className="list list_travail_mere">
                                {travails?.map(trav => (
                                    <li key={trav.id_travail}>
                                        <p onClick={() => handleClickTravailMere(trav)} className='list-p'>
                                            {trav.nom_travail}
                                        </p>
                                    </li>
                                ))}
                            </ul>

                            <span className="msg-error"></span>
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
                            <input 
                                type="text" 
                                className="form-group-input nom_p" 
                                name="nom_p" 
                                id="nom_p" 
                                placeholder="Nom" 
                                value={formPersonne.nom_p.value} 
                                onChange={handleInputChange}
                            />
                            <span className="msg-error"></span>
                        </div>

                        <div>
                            <label htmlFor="prenom_p" className="form-group-label">Prénom:</label>
                            <input 
                                type="text" 
                                className="form-group-input prenom_p" 
                                name="prenom_p" id="prenom_p" 
                                placeholder="Prénom" 
                                value={formPersonne.prenom_p.value} 
                                onChange={handleInputChange}
                            />
                            <span className="msg-error"></span>
                        </div>
                    </div>
            
                    <div className="form-group form-group-2">
                        <div>
                            <label htmlFor="date_nais_p" className="form-group-label">Date de Naissance:</label>
                            <input 
                                type="date" 
                                className="form-group-input date_nais_p" 
                                name="date_nais_p" 
                                id="date_nais_p" 
                                placeholder="Date de naissance" 
                                value={formPersonne.date_nais_p.value} 
                                onChange={handleInputChange}
                            />
                            <span className="msg-error"></span>
                        </div>

                        <div>
                            <label htmlFor="age_p" className="form-group-label">Age:</label>
                            <input t
                                ype="text" 
                                className="form-group-input age_p" 
                                name="age_p" 
                                id="age_p" 
                                placeholder="Age" 
                                value={formPersonne.age_p.value ? formPersonne.age_p.value:""} 
                                onChange={handleInputChange} 
                                disabled
                            />
                            <span className="msg-error"></span>
                        </div>
                    </div>

                    <div className="form-group">
                        <div>
                            <label htmlFor="lieu_nais_p" className="form-group-label">Lieu de naissance:</label>
                            <input 
                                type="text" 
                                className="form-group-input lieu_nais_p" 
                                name="lieu_nais_p" 
                                id="lieu_nais_p" 
                                placeholder="Lieu de naissance" 
                                value={formPersonne.lieu_nais_p.value} 
                                onChange={handleInputChange}
                            />
                            <span className="msg-error"></span>
                        </div>
                    </div>

                    <div className="form-group">
                        <div>
                            <label htmlFor="adrs_p" className="form-group-label">Adresse:</label>
                            <input 
                                type="text" 
                                className="form-group-input adrs_p" 
                                name="adrs_p" 
                                id="adrs_p" 
                                placeholder="Adresse" 
                                value={formPersonne.adrs_p.value} 
                                onChange={handleInputChange}
                            />
                            <span className="msg-error"></span>
                        </div>
                    </div>
                    
                    <div className="form-group">
                        <div style={{position:"relative"}}>
                            <label htmlFor="profession_p" className="form-group-label">Profession :</label>
                            <input 
                                type="text" 
                                className="form-group-input profession_p" 
                                name="profession_p" 
                                id="profession_p" 
                                placeholder="profession" 
                                value={formPersonne.profession_p.value} 
                                onChange={handleInputChange}
                                onKeyUp={(e) => searchAddress(e.target.id, "list_travail_pere") }
                                onFocus={() => showList(".list_travail_pere") } 
                                // onBlur={() => hiddenList(".adrs_person")}
                            />
                            <ul id="list_travail_pere" className="list list_travail_pere">
                                {travails?.map(trav => (
                                    <li key={trav.id_travail}>
                                        <p onClick={() => handleClickTravailPere(trav)} className='list-p'>
                                            {trav.nom_travail}
                                        </p>
                                    </li>
                                ))}
                            </ul>
                            <span className="msg-error"></span>
                        </div>
                    </div>
                </fieldset>
            </div>
        </>
    )
}

export default FormPersonne;
