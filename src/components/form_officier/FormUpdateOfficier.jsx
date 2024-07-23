import React from 'react'
import { hiddenUpdateModal } from "../../constants/modal";
import handleSex from '../../constants/sexe';

const FormUpdateOfficier = () => {
    return (
        <>
            {/* <!-- =========== Modal add officier ========== --> */}
            <div className="modal update-modal" >
                <div className="modal-container">
                    <div className="modal-header">
                        <div>
                            <h3 className="modal-title">Modifier le compte</h3>
                            <span className="modal-subtitle"></span>
                        </div>
                        <div>
                            <button type="reset" className="btn btn-close" id="close-modale-add" onClick={hiddenUpdateModal}>X</button>
                        </div>
                    </div>
                    <form className="form" id="update-officier">

                        {/* Message . status: success or error*/}
                        <div className="alert-message {/*status*/}" >
                            <span className='message'>fbmkdmbdk </span>
                        </div>

                        <div className="content-user">
                            <div className="form-group">
                                <div>
                                </div>
                            </div>
                            <div className="form-group form-group-2">
                                <div>
                                    <label htmlFor="nom_O" className="form-group-label">Nom:</label>
                                    <input type="text" className="form-group-input nom_O" name="nom_O" id="nom_O" placeholder="Nom" />
                                    <span className="msg-error"></span>
                                </div>
                                <div>
                                    <label htmlFor="prenom_O" className="form-group-label">Prénom:</label>
                                    <input type="text" className="form-group-input prenom_O" name="prenom_O" id="prenom_O" placeholder="Prénom" />
                                    <span className="msg-error"></span>
                                </div>
                            </div>

                            <div className="form-group">
                                <div>
                                    <label htmlFor="" className="form-group-label sexe_O">Sexe:</label>
                                    <label className="sex-group">
                                        <input type="radio" name="sexe_O" id="sexe_O" className="form-group-input sex_F" value="F" defaultChecked onClick={(e) => { handleSex(e) }} />Feminin
                                    </label>
                                    <label className="sex-group">
                                        <input type="radio" name="sexe_O" id="sexe_O" className="form-group-input sex_M" value="M" defaultChecked onClick={(e) => { handleSex(e) }} />Masculin
                                    </label>
                                </div>
                            </div>
                            <div className="form-group">
                                <div>
                                    <label htmlFor="adrs_O" className="form-group-label">Adresse:</label>
                                    <input type="text" className="form-group-input adrs_O" name="adrs_O" id="adrs_O" placeholder="Adresse" />
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
                                    <label htmlFor="nom_fonkotanty" className="form-group-label">Fonkotany:</label>
                                    <input type="text" className="form-group-input nom_fonkotany" name="nom_fonkotany" id="nom_fonkotany" placeholder="Adresse" />
                                    <span className="msg-error"></span>
                                </div>
                                <div>
                                    <label htmlFor="nom_commune" className="form-group-label">Commune:</label>
                                    <input type="text" className="form-group-input nom_commune" name="nom_commune" id="nom_commune" placeholder="Commune" />
                                    <span className="msg-error"></span>
                                </div>
                                <div>
                                    <label htmlFor="nom_district" className="form-group-label">District:</label>
                                    <input type="text" className="form-group-input nom_district" name="nom_district" id="nom_district" placeholder="District" />
                                    <span className="msg-error"></span>
                                </div>
                                <div>
                                    <label htmlFor="nom_region" className="form-group-label">Region:</label>
                                    <input type="text" className="form-group-input nom_region" name="nom_region" id="nom_region" placeholder="Région" />
                                    <span className="msg-error"></span>
                                </div>
                            </div>
                            <div className="form-group">
                                <div>
                                    <label htmlFor="password" className="form-group-label">Mot de passe:</label>
                                    <input type="password" className="form-group-input password" name="password" id="password" placeholder="Mot de passe" />
                                    <span className="msg-error"></span>
                                </div>
                            </div>
                            <div className="form-group">
                                <div>
                                    <label htmlFor="confirmPwd" className="form-group-label">Mot de passe:</label>
                                    <input type="password" className="form-group-input confirmPwd" name="confirmPwd" id="confirmPwd" placeholder="Confirmer le mot de passe" />
                                    <span className="msg-error"></span>
                                </div>
                            </div>
                            <div className="action-group">
                                <button type="submit" className="btn btn-save" id="save">Modifier</button>
                                <button type="reset" className="btn btn-clear" id="clear">Annuler</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default FormUpdateOfficier
