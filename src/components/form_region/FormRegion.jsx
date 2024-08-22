import React from 'react'
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import RegionService from '../../services/serviceRegion';
import { makeRequest } from '../../services/axios';
import { regex } from '../../helpers/regex';

const FormRegion = ({region, isEditForm}) => {

    const navigate = useNavigate(null)

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

        } else if ( fieldName == "code_region" && !regex.number.test(value)) {
            isValid = false;
            error = `Code invalide, seulement de nombre est autorisé.`;
        } 

        return { isValid, error };
    }

    const handleInputChange = (e) => {
        const fieldName = e.target.name;
        const fieldValue = e.target.value;

        const validation = validateField(fieldName, fieldValue);

        const newField = { [fieldName]: { value: fieldValue, isValid: validation?.isValid , error: validation?.error  } };
        setFormRegion({ ...formRegion, ...newField });
        if (message) {
            setMessage("")
        }
    }
         
    const [message, setMessage] = useState("");
    const [valid, setValid] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = Object.values(formRegion).every(field => field.isValid);

        if (isValid) {
            setValid(isValid);
            setMessage("En cours de connexion ...");
            region.code_region = formRegion.code_region?.value;
            region.nom_region = formRegion.nom_region?.value;

            isEditForm ? updateRegion(): addRegion();
        } else {
            setMessage("Vérifier les champs non valides");
        }
    }

    function updateRegion () {
        makeRequest.put(`/regions/${region.id_region}`, region, {
            headers: {"Content-Type": "application/json"}
        })
        .then(resp => {
            if (!resp.data.status) {
                console.log(resp); 
                setValid(resp.data.status)
                setMessage(resp.data.message)
                return;
            }
            setValid(resp.data.status)
            setMessage(resp.data.message)
            clearData();
            navigate('/region');
        })
        .catch(error => console.log(error) )   
    }


    // ADD REGION
    function addRegion () {
        makeRequest.post(`/regions`, region, {
            headers: {"Content-Type": "application/json"}
        })
        .then(resp => {
            if (!resp.data.status) {
                console.log(resp);
                setValid(resp.data.status)
                setMessage(resp.data.message)
                return;
            }
            setValid(resp.data.status)
            setMessage(resp.data.message)
            clearData()  

        })
        .catch(error => console.log(error) ) 
    }


    // REINITIALISER LES CHAMPS
    function clearData() {
        setFormRegion({ ...formRegion,
            ...{
            code_region: { value: "", isValid: false, error: "" },
            nom_region: { value: "", isValid: false, error: "" },
        }});
    }

    
  return (
    <>
        {/* <!-- =========== Modal add  region ========== --> */}
        <div className="modal add-modal active-modal" >
            <div className="modal-container">
                <div className="modal-header">
                    <div>
                        {isEditForm ? 
                        (<h3 className="modal-title">Modifier région</h3>):
                        (<h3 className="modal-title">Ajouter région</h3>)
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

                    {/* Message de la reponse */}
                    <div className="alert-message">
                        {valid && message ? 
                            ( <p className={message ? "message success":"success"}>{message}</p>):
                            ( <p  className={message ? "message error":"error"}>{message}</p>)
                        }
                    </div>

                    <div className="content-user">

                        {/* Code region */}
                        <div className="form-group">
                            <label htmlFor="code_region" className="form-group-label">Code:</label>
                            <input
                                type="text"
                                className={!formRegion.code_region?.isValid && formRegion.code_region?.error ? "error-border form-group-input code_region":"form-group-input code_region"}
                                name="code_region"
                                id="code_region"
                                placeholder="Code region"
                                value={formRegion.code_region?.value}
                                onChange={handleInputChange}
                            />
                            <span className={isEditForm ? "":"hidden"}><i>Assurez-vous de ne pas confondre le code si vous le modifier</i></span>
                            <span className="msg-error">{!formRegion.code_region?.isValid && formRegion.code_region?.error}</span>
                        </div>

                        {/* Nom Region */}
                        <div className="form-group">
                            <label htmlFor="nom_region" className="form-group-label">Nom région:</label>
                            <input
                                type="text"
                                className={!formRegion.nom_region?.isValid && formRegion.nom_region?.error ? "error-border form-group-input nom_region":"form-group-input nom_region"}
                                name="nom_region"
                                id="nom_region"
                                placeholder="nom"
                                value={formRegion.nom_region?.value}
                                onChange={handleInputChange}
                            />
                            <span className="msg-error">{!formRegion.nom_region?.isValid && formRegion.nom_region?.error}</span>
                        </div>

                        {/* ACTION Form */}
                        <div className="action-group">
                            {isEditForm ? 
                                (
                                <>
                                    <button type="submit" className="btn btn-save" id="save">Modifier</button>
                                    <Link to={`/region`}><button type="reset" className="btn btn-clear" id="clear">Annuler</button></Link>
                                </>
                                ):(
                                <>
                                    <button type="submit" className="btn btn-save" id="save">Enregistrer</button>
                                    <button type="reset" className="btn btn-clear" id="clear" onClick={clearData}>Annuler</button>
                                </>
                                )
                            }
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </>
  )
}

export default FormRegion
