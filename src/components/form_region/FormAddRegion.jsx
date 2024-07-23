import React from 'react'
import { hiddenAddModal } from '../../constants/modal'

const FormAddRegion = () => {

    return (
        <>
            {/* <!-- =========== Modal add Region ========== --> */}
            <div className="modal add-modal" >
                <div className="modal-container">
                    <div className="modal-header">
                        <div>
                            <h3 className="modal-title">Ajout région</h3>
                            <span className="modal-subtitle"></span>
                        </div>
                        <div>
                            <button type="submit" className="btn btn-close" id="close-modale-add" onClick={hiddenAddModal}>X</button>
                        </div>
                    </div>
                    <form className="form" id="add-region">
                        
                        {/* Message . status: success or error*/}
                        <div className="alert-message {/*status*/}" >
                            <span className='message'>fbmkdmbdk </span>
                        </div>

                        <div className="content-user">
                            <div className="form-group">
                                <div>
                                    <label htmlFor="code_R" className="form-group-label">Code :</label>
                                    <input type="text" className="form-group-input code_R" name="code_R" id="code_R" placeholder="Code région" />
                                    <span className="msg-error"></span>
                                </div>
                            </div>
                            <div className="form-group">
                                <div>
                                    <label htmlFor="nom_R" className="form-group-label">Nom région:</label>
                                    <input type="text" className="form-group-input nom_R" name="nom_R" id="nom_R" placeholder="Nom région " />
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

export default FormAddRegion
