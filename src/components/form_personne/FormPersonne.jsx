import React, { useState } from 'react'
import handleSex from "../../constants/sexe";
import { messageValidator, successBorder} from '../../helpers/borderField';
import "./form_add_personne.css";


const FormPersonne = ({ useFormPersonne }) => {

    const [formPersonne, setFormPersonne] = useFormPersonne;
    /**
     * 
     * @param {HTMLInputElement} e 
     */
    const handleInputChange = (e) => {
        const fieldName = e.target.name;
        const fieldValue = e.target.value;
        const newField = { [fieldName]: { value: fieldValue } };

        setFormPersonne(prevState => ({ ...prevState, ...newField }));

        if (fieldName != "sexe_person") {
            successBorder(`.${fieldName}`);
            messageValidator(`.${fieldName}`, "");
        }
    }


    return (
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
                        <input type="text" className="form-group-input nom_person" name="nom_person" id="nom_person" placeholder="Nom" value={formPersonne.nom_person.value} onChange={handleInputChange} />
                        <span className="msg-error"></span>
                    </div>
                    <div>
                        <label htmlFor="prenom_person " className="form-group-label">Prénom:</label>
                        <input type="text" className="form-group-input prenom_person " name="prenom_person" id="prenom_person " placeholder="Prénom" value={formPersonne.prenom_person.value} onChange={handleInputChange} />
                        <span className="msg-error"></span>
                    </div>
                </div>

                <div className="form-group">
                    <div>
                        <label htmlFor="" className="form-group-label sexe_person ">Sexe:</label>
                        <label className="sex-group">
                            <input type="radio" name="sexe_person" id="sexe_person" className="form-group-input sexe_perso" value="F" defaultChecked onChange={handleInputChange} onClick={(e) => { handleSex(e) }} /> Féminin
                        </label>
                        <label className="sex-group">
                            <input type="radio" name="sexe_person" id="sexe_person" className="form-group-input sexe_perso" value="M" onChange={handleInputChange} onClick={(e) => { handleSex(e) }} />Masculin
                        </label>
                    </div>
                </div>
                <div className="form-group">
                    <div>
                        <label htmlFor="adrs_person" className="form-group-label">Adresse:</label>
                        <input type="text" className="form-group-input adrs_person" name="adrs_person" id="adrs_person" placeholder="Adresse" value={formPersonne.adrs_person.value} onChange={handleInputChange}/>
                        <span className="msg-error"></span>
                    </div>
                </div>
                <div className="form-group">
                    <div>
                        <label htmlFor="id_travail" className="form-group-label">Travail:</label>
                        <input type="text" className="form-group-input id_travail" name="id_travail" id="id_travail" placeholder="Travail" value={formPersonne.id_travail.value} onChange={handleInputChange}/>
                        
                        {/* <select name="" id="id_travail" >
                            <option value={formPersonne.id_travail.value}>Docteur</option>
                            <option value={formPersonne.id_travail.value}>Informaticien</option>
                        </select> */}
                        <span className="msg-error"></span>
                    </div>
                </div>

            </fieldset>
        </div>
    )
}

export default FormPersonne;
