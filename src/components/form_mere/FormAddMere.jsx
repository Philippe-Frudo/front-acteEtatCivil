import React from 'react'

const FormAddMere = () => {
    return (
        <>

            <div className="content-mere">
                <h3 className="card-acte">Mère</h3>
                <fieldset>
                    <div className="form-group form-group-2">
                        <div>
                            <label htmlFor="nom_m" className="form-group-label">Nom:</label>
                            <input type="text" className="form-group-input nom_m" name="nom_m" id="nom_m" placeholder="Nom" />
                            <span className="msg-error"></span>
                        </div>
                        <div>
                            <label htmlFor="prenom_m" className="form-group-label">Prénom:</label>
                            <input type="text" className="form-group-input prenom_m" name="prenom_m" id="prenom_m" placeholder="Prénom" />
                            <span className="msg-error"></span>
                        </div>
                    </div>
                 
                    <div className="form-group">
                        <div>
                            <label htmlFor="date_nais_m" className="form-group-label">Date de Naissance:</label>
                            <input type="date" className="form-group-input date_nais_m" name="date_nais_m" id="date_nais_m" placeholder="Date de naissance" />
                            <span className="msg-error"></span>
                        </div>
                    </div>
                    <div className="form-group">
                        <div>
                            <label htmlFor="lieu_nais_m" className="form-group-label">Lieu de naissance:</label>
                            <input type="text" className="form-group-input lieu_nais_m" name="lieu_nais_m" id="lieu_nais_m" placeholder="Lieu de naissance" />
                            <span className="msg-error"></span>
                        </div>
                    </div>
                    <div className="form-group">
                        <div>
                            <label htmlFor="adrs_m" className="form-group-label">Prénom:</label>
                            <input type="text" className="form-group-input adrs_m" name="adrs_m" id="adrs_m" placeholder="Adresse" />
                            <span className="msg-error"></span>
                        </div>
                    </div>
                    <div className="form-group">
                        <div>
                            <label htmlFor="id_travail" className="form-group-label">Travail:</label>
                            <input type="text" className="form-group-input id_travail" name="id_travail" id="id_travail" placeholder="Travail" />
                            <span className="msg-error"></span>
                        </div>
                    </div>
                    <div className="form-group group-adresse">
                        <div>
                            <label htmlFor="code_fonkotanty" className="form-group-label">Fonkotany:</label>
                            <input type="text" className="form-group-input code_fonkotany" name="code_fonkotany" id="code_fonkotany" placeholder="Fonkontany" />
                            <span className="msg-error"></span>
                        </div>
                        <div>
                            <label htmlFor="code_commune" className="form-group-label">Commune:</label>
                            <input type="text" className="form-group-input code_commune" name="code_commune" id="code_commune" placeholder="Commune" />
                            <span className="msg-error"></span>
                        </div>
                        <div>
                            <label htmlFor="code_district" className="form-group-label">District:</label>
                            <input type="text" className="form-group-input code_district" name="code_district" id="nom_district" placeholder="District" />
                            <span className="msg-error"></span>
                        </div>
                        <div>
                            <label htmlFor="code_region" className="form-group-label">Region:</label>
                            <input type="text" className="form-group-input code_region" name="code_region" id="code_region" placeholder="Région" />
                            <span className="msg-error"></span>
                        </div>
                    </div>

                </fieldset>
            </div >
        </>
    )
}

export default FormAddMere
