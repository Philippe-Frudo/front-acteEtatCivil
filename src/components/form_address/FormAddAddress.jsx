import React from 'react'
import { hiddenAddModal } from '../../constants/modal'

const FormAddAddress = () => {


    return (
        <>
            {/* <!-- =========== Modal add Address ========== --> */}
            <div className="modal add-modal" >
                <div className="modal-container">
                    <div className="modal-header">
                        <div>
                            <h3 className="modal-title">Ajout adresse</h3>
                            <span className="modal-subtitle"></span>
                        </div>
                        <div>
                            <button type="submit" className="btn btn-close" id="close-modale-add" onClick={hiddenAddModal}>X</button>
                        </div>
                    </div>

                    <form className="form" id="add-address">

                        {/* Message . status: success or error*/}
                        <div className="alert-message {/*status*/}" >
                            <span className='message'> </span>
                        </div>

                        <div className="content-user">
                            <div className="form-group">
                                <div>
                                    <label htmlFor="codePostal" className="form-group-label">Code postal:</label>
                                    <input type="text" className="form-group-input codePostal" name="codePostal" id="codePostal" placeholder="Code postal" />
                                    <span className="msg-error"></span>
                                </div>
                            </div>
                            <div className="form-group">
                                <div>
                                    <label htmlFor="rue" className="form-group-label">Rue:</label>
                                    <input type="text" className="form-group-input rue" name="rue" id="rue" placeholder="Rue" />
                                    <span className="msg-error"></span>
                                </div>
                            </div>
                            <div className="form-group">
                                <div>
                                    <label htmlFor="email" className="form-group-label">Code Fonkotany:</label>
                                    <input type="email" className="form-group-input email" name="email" id="email" placeholder="Code fonkotany" />
                                    <span className="msg-error"></span>
                                </div>
                            </div>
                            <div className="action-group">
                                <button type="submit" className="btn btn-save" id="save">Envoyer</button>
                                <button type="submit" className="btn btn-clear" id="clear">Annuler</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        </>
    )
}

export default FormAddAddress
