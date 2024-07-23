import React from 'react'

const FormAddTemoin = () => {
    return (
        <>

            <div className="content-mere">
                <h3 className="card-acte">Témoin</h3>
                <fieldset>
                    <div className="form-group form-group-2">
                        <div>
                            <label htmlFor="nom_temoin" className="form-group-label">Nom:</label>
                            <input type="text" className="form-group-input nom_temoin" name="nom_temoin" id="nom_temoin" placeholder="Nom" />
                            <span className="msg-error"></span>
                        </div>
                        <div>
                            <label htmlFor="prenom_temoin" className="form-group-label">Prénom:</label>
                            <input type="text" className="form-group-input prenom_temoin" name="prenom_temoin" id="prenom_temoin" placeholder="Prénom" />
                            <span className="msg-error"></span>
                        </div>
                    </div>
                    <div className="form-group">
                        <div>
                            <label htmlFor="date_nais_temoin" className="form-group-label">Date de Naissance:</label>
                            <input type="data" className="form-group-input date_nais_temoin" name="date_nais_temoin" id="date_nais_temoin" placeholder="Date de naissance" />
                            <span className="msg-error"></span>
                        </div>
                    </div>
                    <div className="form-group">
                        <div>
                            <label htmlFor="lieu_nais_temoin" className="form-group-label">Lieu de naissance:</label>
                            <input type="text" className="form-group-input lieu_nais_temoin" name="lieu_nais_temoin" id="lieu_nais_temoin" placeholder="Lieu de naissance" />
                            <span className="msg-error"></span>
                        </div>
                    </div>
                    <div className="form-group">
                        <div >
                            <label htmlFor="" className="form-group-label sexe_temoin">Sexe:</label>
                            <label className="sex-group">
                                <input type="radio" name="sexe_temoin" id="sexe_temoin" className="form-group-input sex_F" value="F" defaultChecked onClick={(e) => { handleSex(e) }} />Feminin
                            </label>
                            <label className="sex-group">
                                <input type="radio" name="sexe_temoin" id="sexe_temoin" className="form-group-input sex_temoin" value="M" defaultChecked onClick={(e) => { handleSex(e) }} />Masculin
                            </label>
                        </div>
                    </div>
                    <div className="form-group">
                        <div>
                            <label htmlFor="adrs_temoin" className="form-group-label">Adresse:</label>
                            <input type="text" className="form-group-input adrs_temoin" name="adrs_temoin" id="adrs_temoin" placeholder="Adresse" />
                            <span className="msg-error"></span>
                        </div>
                    </div>
                    <div className="form-group">
                        <div>
                            <label htmlFor="nom_travail" className="form-group-label">Travail:</label>
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

export default FormAddTemoin;
