import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { regex } from '../../helpers/regex';
import { makeRequest } from '../../services/axios';
// import TravailService from './../../services/serviceTravail'

const formTravail = ({travail, isEditForm}) => {
    const navigate = useNavigate();
        
    const [formTravail, setFormTravail] = useState({
        nom_travail: { value: "", isValid: false, error: "" },
    });

    useEffect(() => {
        if (travail) {
            setFormTravail({
                nom_travail: { value: travail.nom_travail || "", isValid: true, error: "" },
            });
        }
    }, [travail]);

    
    const validateField = (fieldName, value) => {
        let isValid = true;
        let error = "";

        if (!value) {
            isValid = false;
            error = `Ce champ est obligatoire`;

        }

        return { isValid, error };
    }

    const handleInputChange = (e) => {
        const fieldName = e.target.name;
        const fieldValue = e.target.value;

        const validation = validateField(fieldName, fieldValue);

        const newField = { [fieldName]: { value: fieldValue, isValid: validation.isValid , error: validation.error  } };
        setFormTravail({ ...formTravail, ...newField });
        if (message) {
            setMessage("")
        }
    }

    const [valid, setValid] = useState(false);
    const [message, setMessage] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = Object.values(formTravail).every(field => field.isValid);

        if (isValid && formTravail.nom_travail?.value) {
            setValid(isValid)
            setMessage("En cours de connexion ...");
            travail.nom_travail = formTravail.nom_travail?.value;
            
            isEditForm ? updateTravail(): addTravail();
        } else {
            setMessage("Vérifier les champs non valides");
        }
    }

    
    function updateTravail () {
        console.log("Data travail:", travail);
        makeRequest.put(`/travails/${travail.id_travail}`, travail, {
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
            navigate('/travail')
        })
        .catch(error => console.log(error) )   
    }


    function addTravail () {
        console.log("Data travail:", travail);
        makeRequest.post(`/travails`, travail, {
            headers: {"Content-Type": "application/json"}
        })
        .then(resp => {

            if (!resp.data.status) {
                setValid(resp.data.status)
                setMessage(resp.data.message)
                return;
            }
            console.log(resp);
            setValid(resp.data.status)
            setMessage(resp.data.message)
            clearData()   
        })
        .catch(error => console.log(error) ) 
    }


    function clearData() {
        setFormTravail({
            ...formTravail, 
            ...{
            nom_travail: { value: "", isValid: false, error: "" },
            }
        });
    }

  return (
    <>
        {/* <!-- =========== Modal add  travail ========== --> */}
        <div className="modal add-modal active-modal" >
            <div className="modal-container">
                <div className="modal-header">
                    <div>
                        {isEditForm ? 
                        (<h3 className="modal-title">Modifier travail</h3>):
                        (<h3 className="modal-title">Ajouter travail</h3>)
                        }

                        <span className="modal-subtitle"></span>
                    </div>
                    <div>
                        <Link to='/travail'>
                            <button className="btn btn-close" id="close-modale-add">X</button>
                        </Link>
                    </div>
                </div>

                <form className="form" id="add-travail" onSubmit={handleSubmit}>

                    {/* Message reponse */}
                    <div className="alert-message">
                        {message && valid ? 
                           ( <p className={message ? "message success":"success"}>{message}</p>):
                           ( <p  className={message ? "message error":"error"}>{message}</p>)
                        }
                    </div>
                    <div className="content-user">

                        {/* Nom Travail */}
                        <div className="form-group">
                            <label htmlFor="nom_travail" className="form-group-label">Nom travail:</label>
                            <input
                                type="text"
                                className={!formTravail.nom_travail?.isValid && formTravail.nom_travail?.error ? "error-border form-group-input nom_travail": "form-group-input nom_travail"}
                                name="nom_travail"
                                id="nom_travail"
                                placeholder="nom"
                                value={formTravail.nom_travail?.value}
                                onChange={handleInputChange}
                            />
                            <span className="msg-error">{!formTravail.nom_travail?.isValid && formTravail.nom_travail?.error}</span>
                        </div>

                        <div className="action-group">
                            {isEditForm ? 
                            (<button type="submit" className="btn btn-save" id="save">Modifier</button>):
                            (<button type="submit" className="btn btn-save" id="save">Enregistrer</button>)
                            }

                            <button type="reset" className="btn btn-clear" id="clear" onClick={clearData}>Annuler</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </>
  )
}

export default formTravail
