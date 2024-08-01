import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { regex } from '../../helpers/regex';

const formTravail = ({travail, isEditForm}) => {
        
    const [formTravail, setFormTravail] = useState({
        nom_travail: { value: "", isValid: false, error: "" },
    });

    useEffect(() => {
        if (travail) {
            setFormTravail({
                nom_travail: { value: travail.nom_travail || "", isValid: isEditForm ? true:false, error: "" },
            });
        }
    }, [travail]);

    
    const validateField = (fieldName, value) => {
        let isValid = true;
        let error = "";

        if (!value) {
            isValid = false;
            error = `Ce champ est obligatoire`;

        } else if ( !regex.numberAndDigit.test(value)) {
            isValid = false;
            error = `Les caractères spéciaux ne sont pas autorisés à ce champ.`;
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
    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = Object.values(formTravail).every(field => field.isValid);

        if (isValid) {
            setMessage("En cours de connexion ...");
            travail.nom_travail = formTravail.nom_travail.value;

            isEditForm ? updatTtravail(): addTravail();
        } else {
            setMessage("Vérifier les champs non valides");
        }
    }

    const updateTravail = () => {
        console.log("Data travail:", travail);
        /*APIService.updateFonkontany(fonkotany)
        .then(response => console.log(response));*/
    }

    const addTravail = () => {
        console.log("Data travail:", travail);
        /*APIService.addFonkontany(fonkotany)
        .then(response => console.log(response));*/
    }


  return (
    <>
        {/* <!-- =========== Modal add  travail ========== --> */}
        <div className="modal add-modal active-modal" >
            <div className="modal-container">
                <div className="modal-header">
                    <div>
                        {isEditForm ? 
                        (<h3 className="modal-title">Modifier du travail</h3>):
                        (<h3 className="modal-title">Ajout du travail</h3>)
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
                    <div className="alert-message">
                        {message && <span className='message'>{message}</span>}
                    </div>
                    <div className="content-user">

                        <div className="form-group">
                            <label htmlFor="nom_travail" className="form-group-label">Nom travail:</label>
                            <input
                                type="text"
                                className="form-group-input nom_travail"
                                name="nom_travail"
                                id="nom_travail"
                                placeholder="Nom de Fonkotanay"
                                value={formTravail.nom_travail.value}
                                onChange={handleInputChange}
                            />
                            <span className="msg-error">{!formTravail.nom_travail.isValid && formTravail.nom_travail.error}</span>
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

export default formTravail
