import React from 'react'
import { hiddenUpdateModal } from '../../constants/modal'

const FormUpdateCommune = () => {
    return (
        <>
            {/* <!-- =========== Modal add Commune ========== --> */}
            <div className="modal update-modal" >
                <div className="modal-container">
                    <div className="modal-header">
                        <div>
                            <h3 className="modal-title">Modifer Commune</h3>
                            <span className="modal-subtitle"></span>
                        </div>
                        <div>
                            <button type="submit" className="btn btn-close" id="close-modale-add" onClick={hiddenUpdateModal}>X</button>
                        </div>
                    </div>
                    <form className="form" id="update-commune">

                        {/* Message . status: success or error*/}
                        <div className="alert-message {/*status*/}" >
                            <span className='message'> </span>
                        </div>

                        <div className="content-user">
                            <div className="form-group">
                                <div>
                                    <label htmlFor="code_C" className="form-group-label">Code:</label>
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

export default FormUpdateCommune
