import React from 'react'
import { hiddenDeleteModal } from '../../constants/modal';
import TravailService from '../../services/serviceTravail';
import RegionService from '../../services/serviceRegion';
import DistrictService from '../../services/serviceDistrict';
import CommuneService from '../../services/serviceCommune';
import FonkotanyService from '../../services/serviceFonkotany';
import ActeService from '../../services/serviceActe';
import { makeRequest } from '../../services/axios';
// import PersonneService from '../../services/servicePersonne';


const ModalDelete = ({id, nomPage, useDelete}) => {
    
    const [isDelete, setIsDelete] = useDelete;

    const handleDelete = (nomPage) => {
        switch(nomPage){
            case "travail" :
                if (isDelete) {
                    TravailService.deleteTravail(id)
                    .then(resp => {
                        console.log
                        ( resp.mersage)
                    })
                    .then(() =>{ setIsDelete(false); hiddenDeleteModal();})
                }
                break;

            case "région" :
                if (isDelete) {
                    RegionService.deleteRegion(+id)
                    .then(resp => {
                        console.log(resp.mersage)
                    }) 
                    .then( () =>{setIsDelete(false); hiddenDeleteModal() })
                }
                break;

            case "district" :
                if (isDelete) {
                    DistrictService.deleteDistrict(id)
                    .then(resp => {
                        console.log(resp.mersage)
                    }).then( () =>{setIsDelete(false); hiddenDeleteModal() });
                }
                break;

            case "commune" :
                if (isDelete) {
                    CommuneService.deleteCommune(id)
                    .then(resp => {
                        console.log(resp.mersage)
                    }).then( () =>{setIsDelete(false); hiddenDeleteModal() });
                }
                break;

            case "fonkotany" :
                if (isDelete) {
                    FonkotanyService.deleteFonkotany(id)
                    .then(resp => {
                        console.log(resp.mersage)
                    }).then( () =>{setIsDelete(false); hiddenDeleteModal() });
                }
                break;

            case "acte" :
                if (isDelete) {
                    // API DELETE PERSONNE
                    makeRequest.delete(`/actes/${id}`).then(response => {
                        if (!response.data) {
                            console.log("Aucun donnée trouvé"); return
                        }
                        console.log(response.data);
                        deletePerson(response.data)
                    })
                    .catch(error => console.log(error) ) 


                    const deletePerson = (idP) => {
                        // API DELETE PERSONNE
                        if (idP) {
                            makeRequest.delete(`/personnes/${idP}`).then(response => {
                                if (!response.data) {
                                    console.log("Aucun donnée trouvé"); return
                                }
                                console.log(response.data);
                            })
                            .catch(error => console.log(error) )      
                        }
                    }
                }
                break;
            
                default: 
                console.log('Fichier non identifier');
        }

    }

    return (
        <>
            {/* <!-- =========== Modal Delete ========== --> */}
            <div className="modal delete-modal">
                <div className="modal-container">
                    <div className="modal-header">
                        <div>
                            <h3 className="modal-title">Confirmer la suppression du {nomPage} {id}</h3>
                            <span className="modal-subtitle"></span>
                        </div>
                        <div>
                            <button type="submit" className="btn btn-close" id="close-modale-add" onClick={hiddenDeleteModal}>X</button>
                        </div>
                    </div>

                    <div className="action-group" style={{ padding: "1rem 1rem 2rem 1rem", display: "flex", SalignContent: "center", justifyContent: "center" }}>
                        <button 
                        type="submit" 
                        className="btn btn-save" 
                        id="delete" 
                        onClick={() => handleDelete(nomPage)}
                        >
                            Confirmer
                        </button>

                        <button type="reset" className="btn btn-clear" id="cancel" onClick={hiddenDeleteModal}>Annuler</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ModalDelete
