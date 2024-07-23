import React from 'react'
import { hiddenUpdateModal } from '../../constants/modal'

const FormUpdateFonkotany = () => {
    return (
        <>
            {/* <!-- =========== Modal Modifier Fonkotany ========== --> */}
            <div className="modal update-modal" >
                <div className="modal-container">
                    <div className="modal-header">
                        <div>
                            <h3 className="modal-title">Modifier Fonkontany</h3>
                            <span className="modal-subtitle"></span>
                        </div>
                        <div>
                            <button type="submit" className="btn btn-close" id="close-modale-add" onClick={hiddenUpdateModal}>X</button>
                        </div>
                    </div>
                    <form className="form" id="add-fonkotany">

                        {/* Message . status: success or error*/}
                        <div className="alert-message {/*status*/}" >
                            <span className='message'> </span>
                        </div>

                        <div className="content-user">
                            <div className="form-group">
                                <div>
                                </div>
                            </div>
                            <div className="form-group">
                                <div>
                                    <label htmlFor="codeF" className="form-group-label">Code Fonkontany:</label>
                                    <input type="text" className="form-group-input codeF" name="codePostal" id="codeF" placeholder="Code Fonkotany" />
                                    <span className="msg-error"></span>
                                </div>
                            </div>
                            <div className="form-group">
                                <div>
                                    <label htmlFor="nom_F" className="form-group-label">Nom Fonkotany:</label>
                                    <input type="text" className="form-group-input nom_F" name="nom_F" id="nom_F" placeholder="Nom de Fonkotnay" />
                                    <span className="msg-error"></span>
                                </div>
                            </div>
                            <div className="form-group">
                                <div>
                                    <label htmlFor="code_C" className="form-group-label">Code Commune:</label>
                                    <input type="text" className="form-group-input code_C" name="code_C" id="code_C" placeholder="Code Commune" />
                                    <span className="msg-error"></span>
                                </div>
                            </div>
                            <div className="action-group">
                                <button type="submit" className="btn btn-save" id="save">Envoyer</button>
                                <button type="reset" className="btn btn-clear" id="clear">Annuler</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        </>
    )
}

export default FormUpdateFonkotany
