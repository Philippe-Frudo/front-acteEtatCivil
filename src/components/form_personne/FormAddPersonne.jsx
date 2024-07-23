import React, { useState } from 'react'
import handleSex from "../../constants/sexe";

const FormAddPersonne = () => {


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
                        <label htmlFor="nom_p" className="form-group-label">Nom:</label>
                        <input type="text" className="form-group-input nom_p" name="nom_p" id="nom_p" placeholder="Nom" />
                        <span className="msg-error"></span>
                    </div>
                    <div>
                        <label htmlFor="prenom_p" className="form-group-label">Prénom:</label>
                        <input type="text" className="form-group-input prenom_p" name="prenom_p" id="prenom_p" placeholder="Prénom" />
                        <span className="msg-error"></span>
                    </div>
                </div>

                <div className="form-group">
                    <div>
                        <label htmlFor="" className="form-group-label sexe_p">Sexe:</label>
                        <label className="sex-group">
                            <input type="radio" name="sexe_p" id="sexe_p" className="form-group-input sex_F" value="F" defaultChecked onClick={(e) => { handleSex(e) }} />Feminin
                        </label>
                        <label className="sex-group">
                            <input type="radio" name="sexe_p" id="sexe_p" className="form-group-input sex_M" value="M" defaultChecked onClick={(e) => { handleSex(e) }} />Masculin
                        </label>
                    </div>
                </div>
                <div className="form-group">
                    <div>
                        <label htmlFor="id_trav" className="form-group-label">Travail:</label>
                        <input type="text" className="form-group-input id_trav" name="id_travail" id="id_trav" placeholder="Travail" />
                        <span className="msg-error"></span>
                    </div>
                </div>
                <div className="form-group">
                    <div>
                        <label htmlFor="id_adrs" className="form-group-label">Adresse:</label>
                        <input type="text" className="form-group-input id_adrs" name="adrs_p" id="id_adrs" placeholder="Adresse" />
                        <span className="msg-error"></span>
                    </div>
                </div>
                <div className="form-group group-adresse">
                    <div>
                        <label htmlFor="code_f" className="form-group-label">Fonkotany:</label>
                        <input type="text" className="form-group-input code_f" name="code_f" id="code_f" placeholder="Fonkontany" />
                        <span className="msg-error"></span>
                    </div>
                    <div>
                        <label htmlFor="code_com" className="form-group-label">Commune:</label>
                        <input type="text" className="form-group-input code_com" name="code_com" id="code_com" placeholder="Commune" />
                        <span className="msg-error"></span>
                    </div>
                    <div>
                        <label htmlFor="code_district" className="form-group-label">District:</label>
                        <input type="text" className="form-group-input code_district" name="code_district" id="code_district" placeholder="District" />
                        <span className="msg-error"></span>
                    </div>
                    <div>
                        <label htmlFor="code_region" className="form-group-label">Region:</label>
                        <input type="text" className="form-group-input code_region" name="code_region" id="code_region" placeholder="Région" />
                        <span className="msg-error"></span>
                    </div>
                </div>

            </fieldset>
        </div>
    )
}

export default FormAddPersonne;
