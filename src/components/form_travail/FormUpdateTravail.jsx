import React from 'react'
import { hiddenUpdateModal } from "../../constants/modal";

const FormUpdateTravail = () => {
    return (

        <>
            {/* <!-- =========== Modal update Region ========== --> */}
            <div className="modal update-modal" >
                <div className="modal-container">
                    <div className="modal-header">
                        <div>
                            <h3 className="modal-title">Modifier travail</h3>
                            <span className="modal-subtitle"></span>
                        </div>
                        <div>
                            <button type="reset" className="btn btn-close" id="close-modale-add" onClick={hiddenUpdateModal}>X</button>
                        </div>
                    </div>
                    <form className="form" id="update-region">

                        {/* Message . status: success or error*/}
                        <div className="alert-message {/*status*/}" >
                            <span className='message'>fbmkdmbdk </span>
                        </div>

                        <div className="content-user">
                            <div className="form-group">
                                <div>
                                    <label htmlFor="id_travail" className="form-group-label">ID :</label>
                                    <input type="text" className="form-group-input id_travali" name="id_travail" id="id_travail" placeholder="ID" />
                                    <span className="msg-error"></span>
                                </div>
                            </div>
                            <div className="form-group">
                                <div>
                                    <label htmlFor="nom_travail" className="form-group-label">Nom du travail:</label>
                                    <input type="text" className="form-group-input nom_travail" name="nom_travail" id="nom_travail" placeholder="Nom du tavail" />
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

export default FormUpdateTravail
