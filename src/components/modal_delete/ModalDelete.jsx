import React from 'react'
import { hiddenDeleteModal } from '../../constants/modal';
const ModalDelete = () => {
    return (
        <>
            {/* <!-- =========== Modal Delete ========== --> */}
            <div className="modal delete-modal">
                <div className="modal-container">
                    <div className="modal-header">
                        <div>
                            <h3 className="modal-title">Confirmer la suppression</h3>
                            <span className="modal-subtitle"></span>
                        </div>
                        <div>
                            <button type="submit" className="btn btn-close" id="close-modale-add" onClick={hiddenDeleteModal}>X</button>
                        </div>
                    </div>

                    <div className="action-group" style={{ padding: "1rem 1rem 2rem 1rem", display: "flex", SalignContent: "center", justifyContent: "center" }}>
                        <button type="submit" className="btn btn-save" id="delete">Confirmer</button>
                        <button type="reset" className="btn btn-clear" id="cancel">Annuler</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ModalDelete
