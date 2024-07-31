import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const FormRegion = ({region, isEditForm}) => {

    const [formRegion, setFormRegion] = useState({
        code_region: { value: "", isValid: false, error: "" },
        nom_region: { value: "", isValid: false, error: "" },
    });

    useEffect(() => {
        if (region) {
            setFormRegion({
                code_region: { value: region.code_region || "", isValid: isEditForm ? true:false, error: "" },
                nom_region: { value: region.nom_region || "", isValid: isEditForm ? true:false, error: "" },
            });
        }
    }, [region]);

    
    const validateField = (fieldName, value) => {
        let isValid = true;
        let error = "";

        if (!value) {
            isValid = false;
            error = "Ce champ est obligatoire";
        } else if (/[^a-zA-Z0-9 ]/.test(value)) {
            isValid = false;
            error = "Caractères spéciaux non autorisés";
        }
        return { isValid, error };
    }

    const handleInputChange = (e) => {
        const fieldName = e.target.name;
        const fieldValue = e.target.value;

        const validation = validateField(fieldName, fieldValue);

        const newField = { [fieldName]: { value: fieldValue, isValid: validation.isValid , error: validation.error  } };
        setFormDistrict({ ...formDistrict, ...newField });
    }
         
    const [message, setMessage] = useState("");
    const [valid, setValid] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = Object.values(formRegion).every(field => field.isValid);

        if (isValid) {
            setValid(isValid);
            setMessage("En cours de connexion ...");
            region.code_region = formRegion.code_region.value;
            region.nom_region = formRegion.nom_region.value;

            isEditForm ? updateRegion(): addRegion();
        } else {
            setMessage("Vérifier les champs non valides");
        }
    }

    const updateRegion = () => {
        console.log("Data region:", region);
        /*APIService.updateFonkontany(fonkotany)
        .then(response => console.log(response));*/
    }

    const addRegion = () => {
        console.log("Data region:", region);
        /*APIService.addFonkontany(fonkotany)
        .then(response => console.log(response));*/
    }


  return (
    <>
        {/* <!-- =========== Modal add  region ========== --> */}
        <div className="modal add-modal active-modal" >
            <div className="modal-container">
                <div className="modal-header">
                    <div>
                        {isEditForm ? 
                        (<h3 className="modal-title">Modifier region</h3>):
                        (<h3 className="modal-title">Ajout region</h3>)
                        }

                        <span className="modal-subtitle"></span>
                    </div>
                    <div>
                        <Link to='/region'>
                            <button className="btn btn-close" id="close-modale-add">X</button>
                        </Link>
                    </div>
                </div>

                <form className="form" id="add-region" onSubmit={handleSubmit}>
                    <div className="alert-message">
                        {valid && message ? 
                            (<span className='message success'>{message}</span>):
                            (<span className='message error'>{message}</span>)
                        }
                    </div>
                    <div className="content-user">

                        <div className="form-group">
                            <label htmlFor="code_region" className="form-group-label">Code Region:</label>
                            <input
                                type="text"
                                className="form-group-input code_region"
                                name="code_region"
                                id="code_region"
                                placeholder="Code region"
                                value={formRegion.code_region.value}
                                onChange={handleInputChange}
                            />
                            <span className="msg-error">{!formRegion.code_region.isValid && formRegion.code_region.error}</span>
                        </div>

                        <div className="form-group">
                            <label htmlFor="nom_region" className="form-group-label">Nom region:</label>
                            <input
                                type="text"
                                className="form-group-input nom_region"
                                name="nom_region"
                                id="nom_region"
                                placeholder="Nom de Fonkotanay"
                                value={formRegion.nom_region.value}
                                onChange={handleInputChange}
                            />
                            <span className="msg-error">{!formRegion.nom_region.isValid && formRegion.nom_region.error}</span>
                        </div>

                        <div className="action-group">
                            {isEditForm ? 
                            (<button type="submit" className="btn btn-save" id="save">Modifier</button>):
                            (<button type="submit" className="btn btn-save" id="save">Envoyer</button>)
                            }

                            <button type="reset" className="btn btn-clear" id="clear">Annuler</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </>
  )
}

export default FormRegion
