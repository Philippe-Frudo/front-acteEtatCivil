import React from 'react'
import { hiddenDeleteModal } from '../../constants/modal';
import { makeRequest } from '../../services/axios';
// import FonkotanyService from '../../services/serviceFonkotany';
// import TravailService from '../../services/serviceTravail';
// import RegionService from '../../services/serviceRegion';
// import DistrictService from '../../services/serviceDistrict';
// import CommuneService from '../../services/serviceCommune';
// import ActeService from '../../services/serviceActe';
// import Auth from '../../services/Auth';
// import PersonneService from '../../services/servicePersonne';


const ModalDelete = ({id, nomPage, useDelete, setData}) => {
    
    const [isDelete, setIsDelete] = useDelete;

    const handleDelete = (nomPage) => {
        switch(nomPage){
            case "travail" :
                if (isDelete) {
                    // API DELETE COMMUNE
                    makeRequest.delete(`/travails/${id}`)
                    .then(response => {
                        if (!response.data) {
                            console.log(response);
                            console.log("Aucun donnée trouvé"); return
                        }
                        setData((prev) => prev.filter((d)=> d.id_travail !== id))
                        setIsDelete(false); 
                        hiddenDeleteModal()
                    })
                    .catch(error => console.log(error) ) 
                }
                break;

            case "officier" :

                if (isDelete) {
                    // API DELETE OFFICIER UTILISATER
                    makeRequest.delete(`/officiers/${id}`)
                    .then(response => {
                        if (!response.data) {
                            console.log(response);
                            console.log("Aucun donnée trouvé"); return
                        }
                        setData((prev) => prev.filter((d)=> d.id_off !== id))
                        setIsDelete(false); 
                        hiddenDeleteModal()
                    })
                    .catch(error => console.log(error) ) 
                }
                break;

            case "region" :
                if (isDelete) {
                     // API DELETE REGION
                     makeRequest.delete(`/regions/${id}`)
                     .then(response => {
                         if (!response.data) {
                             console.log(response);
                             console.log("Aucun donnée trouvé"); return
                         }
                         setData((prev) => prev.filter((d)=> d.id_region !== id))
                         setIsDelete(false); 
                         hiddenDeleteModal()
                     })
                     .catch(error => console.log(error) );
                }
                break;

            case "district" :
                if (isDelete) {
                     // API DELETE DISTRICT
                     makeRequest.delete(`/districts/${id}`)
                     .then(response => {
                         if (!response.data) {
                             console.log(response);
                             console.log("Aucun donnée trouvé"); return
                         }
                         setData((prev) => prev.filter((d)=> d.id_district !== id))
                         setIsDelete(false); 
                         hiddenDeleteModal()
                     })
                     .catch(error => console.log(error) ) 
                }
                break;

            case "commune" :
                    if (isDelete) {
                        // API DELETE COMMUNE
                        makeRequest.delete(`/communes/${id}`)
                        .then(response => {
                            if (!response.data) {
                                console.log(response);
                                console.log("Aucun donnée trouvé"); return
                            }
                            setData((prev) => prev.filter((d)=> d.id_commune !== id))
                            setIsDelete(false); 
                            hiddenDeleteModal()
                        })
                        .catch(error => console.log(error) ) 
                    }
                break;

            case "fonkotany" :
                if (isDelete) {
                     // API DELETE FONKOTANY
                     makeRequest.delete(`/fonkotany/${id}`)
                     .then(response => {
                         if (!response.data) {
                             console.log(response);
                             console.log("Aucun donnée trouvé"); return
                         }
                         setData((prev) => prev.filter((d)=> d.id_fonkotany !== id))
                         setIsDelete(false); 
                         hiddenDeleteModal()
                     })
                     .catch(error => console.log(error) ) 
                }
                break;

            case "acte" :
                if (isDelete) {
                    // API DELETE PERSONNE
                    makeRequest.delete(`/actes/${id}`)
                    .then(response => {

                        if (!response.data) {
                            console.log("Errer de supression",response.data);
                           return
                        }
                        deletePerson(response.data)

                        setData((prev) => prev.filter((d)=> d.id_acte !== id))
                        setIsDelete(false); 
                        hiddenDeleteModal()
                    })
                    .catch(error => console.log(error) ) 

                    const deletePerson = (idP) => {
                        // API DELETE PERSONNE
                        if (idP) {
                            makeRequest.delete(`/personnes/${idP}`).then(response => {
                                if (!response.data) {
                                    console.log(response.data);
                                    return
                                }
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
                        style={{ backgroundColor:"red" }}
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
