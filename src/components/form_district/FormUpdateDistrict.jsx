import React from 'react'
import { hiddenUpdateModal } from '../../constants/modal'

const FormUpdateDistrict = () => {
    return (
        <>
            {/* <!-- =========== Modal add District ========== --> */}
            <div className="modal update-modal" >
                <div className="modal-container">
                    <div className="modal-header">
                        <div>
                            <h3 className="modal-title">Modifer district</h3>
                            <span className="modal-subtitle"></span>
                        </div>
                        <div>
                            <button type="submit" className="btn btn-close" id="close-modale-add" onClick={hiddenUpdateModal}>X</button>
                        </div>
                    </div>

                    <form className="form" id="add-district">

                        {/* Message . status: success or error*/}
                        <div className="alert-message {/*status*/}" >
                            <span className='message'> </span>
                        </div>

                        <div className="content-user">
                            <div className="form-group">
                            </div>
                            <div className="form-group">
                                <div>
                                    <label htmlFor="code_D" className="form-group-label">Code :</label>
                                    <input type="text" className="form-group-input code_D" name="code_D" id="code_D" placeholder="Code district" />
                                    <span className="msg-error"></span>
                                </div>
                            </div>
                            <div className="form-group">
                                <div>
                                    <label htmlFor="nom_D" className="form-group-label">Nom district:</label>
                                    <input type="text" className="form-group-input nom_D" name="nom_D" id="nom_D" placeholder="Nom de district" />
                                    <span className="msg-error"></span>
                                </div>
                            </div>
                            <div className="form-group">
                                <div>
                                    <label htmlFor="code_R" className="form-group-label">Code region:</label>
                                    <input type="text" className="form-group-input code_R" name="code_R" id="code_R" placeholder="Code region" />
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

export default FormUpdateDistrict
