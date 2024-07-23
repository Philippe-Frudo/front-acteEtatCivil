import React from 'react'

const FormAddPere = () => {
    return (
        <>
            <div className="content-mere">
                <h3 className="card-acte">Père</h3>
                <fieldset>
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
                            <label htmlFor="date_nais_p" className="form-group-label">Date de Naissance:</label>
                            <input type="date" className="form-group-input date_nais_p" name="date_nais_p" id="date_nais_p" placeholder="Date de naissance" />
                            <span className="msg-error"></span>
                        </div>
                    </div>
                    <div className="form-group">
                        <div>
                            <label htmlFor="lieu_nais_p" className="form-group-label">Lieu de naissance:</label>
                            <input type="text" className="form-group-input lieu_nais_p" name="lieu_nais_p" id="lieu_nais_p" placeholder="Lieu de naissance" />
                            <span className="msg-error"></span>
                        </div>
                    </div>
                    <div className="form-group form-group-2">
                        <div>
                            <label htmlFor="adrs_p" className="form-group-label">Prénom:</label>
                            <input type="text" className="form-group-input adrs_p" name="adrs_p" id="adrs_p" placeholder="Adresse" />
                            <span className="msg-error"></span>
                        </div>
                        <div>
                            <label htmlFor="nom_travail" className="form-group-label">Prénom:</label>
                            <input type="text" className="form-group-input nom_travail" name="nom_travail" id="nom_region" placeholder="Région" />
                            <span className="msg-error"></span>
                        </div>
                    </div>
                    <div className="form-group group-adresse">
                        <div>
                            <label htmlFor="code_fonkotany" className="form-group-label">Fonkotany:</label>
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

export default FormAddPere;
