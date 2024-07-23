import React from 'react'
import { hiddenAddModal } from '../../constants/modal'

const FormAddCommune = () => {
    return (
        <>
            {/* <!-- =========== Modal add Fonkontany ========== --> */}
            <div className="modal add-modal" >
                <div className="modal-container">
                    <div className="modal-header">
                        <div>
                            <h3 className="modal-title">Ajout Commune</h3>
                            <span className="modal-subtitle"></span>
                        </div>
                        <div>
                            <button type="submit" className="btn btn-close" id="close-modale-add" onClick={hiddenAddModal}>X</button>
                        </div>
                    </div>

                    <form className="form" id="add-commune">

                        {/* Message . status: success or error*/}
                        <div className="alert-message {/*status*/}" >
                            <span className='message'> </span>
                        </div>

                        <div className="content-user">
                            <div className="form-group">
                                <div>
                                    <label htmlFor="code_C" className="form-group-label">Code :</label>
                                    <input type="text" className="form-group-input code_C" name="code_C" id="code_C" placeholder="Code commune" />
                                    <span className="msg-error"></span>
                                </div>
                            </div>
                            <div className="form-group">
                                <div>
                                    <label htmlFor="nom_C" className="form-group-label">Nom commune:</label>
                                    <input type="text" className="form-group-input nom_C" name="nom_C" id="nom_C" placeholder="Nom de commune" />
                                    <span className="msg-error"></span>
                                </div>
                            </div>
                            <div className="form-group">
                                <div>
                                    <label htmlFor="code_C" className="form-group-label">Code district:</label>
                                    <input type="text" className="form-group-input code_C" name="code_C" id="code_C" placeholder="Code district" />
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

export default FormAddCommune
