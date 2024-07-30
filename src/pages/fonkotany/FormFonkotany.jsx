import React, { useEffect, useState } from 'react'
import { errorBorder, messageValidator, successBorder } from '../../helpers/borderField';
import { useNavigate } from 'react-router-dom';

const FormFonkotany = ({ fonkotany, isEditForm }) => {
    const [formFonkotany, setFormFonkotany] = useState({
        code_commune: { value: "", isValid: isEditForm ? true:false, error: "" },
        nom_fonkotany: { value: "", isValid: isEditForm ? true:false, error: "" },
        code_fonkotany: { value: "", isValid: isEditForm ? true:false, error: "" },
    });

    useEffect(() => {
        if (fonkotany) {
            setFormFonkotany({
                code_commune: { value: fonkotany.code_commune || "", isValid: isEditForm ? true:false, error: "" },
                nom_fonkotany: { value: fonkotany.nom_fonkotany || "", isValid: isEditForm ? true:false, error: "" },
                code_fonkotany: { value: fonkotany.code_fonkotany || "", isValid: isEditForm ? true:false, error: "" },
            });
        }
    }, [fonkotany]);

    
    
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

        const validator = validateField(fieldName, fieldValue);
        const newField = { [fieldName]: { value: fieldValue, isValid: true } };
        setFormFonkotany({ ...formFonkotany, ...newField });
    }

    const [message, setMessage] = useState("");
    const [valid, setValid] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = Object.values(formFonkotany).every(field => field.isValid);

        if (isValid) {
            setValid(isValid);
            setMessage("En cours de connexion ...");
            fonkotany.code_fonkotany = formFonkotany.code_fonkotany.value;
            fonkotany.nom_fonkotany = formFonkotany.nom_fonkotany.value;
            fonkotany.code_commune = formFonkotany.code_commune.value;
            console.log(fonkotany);
            isEditForm ? updateFonkotany(): addFonkotany();
        } else {
            setMessage("Vérifier les champs non valides");
        }
    }

    const updateFonkotany = () => {
        /*APIService.updateFonkontany(fonkotany)
        .then(response => console.log(response));*/
    }

    const addFonkotany = () => {
        /*APIService.addFonkontany(fonkotany)
        .then(response => console.log(response));*/
    }

    const validFormFonkotany = () => {
        let newForm = { ...formFonkotany };

        //Validation code du fonkotany
        if (!formFonkotany.code_fonkotany.value) {
            newForm.code_fonkotany = {value: formFonkotany.code_fonkotany.value, error: "", isValid: false };
            errorBorder(".code_fonkotany");
            messageValidator(".code_fonkotany", newForm.code_fonkotany.error);
        }else {
            newForm.code_fonkotany = {value: formFonkotany.code_fonkotany.value, error: "", isValid: true };
            successBorder(".code_fonkotany");
            messageValidator(".code_fonkotany", newForm.code_fonkotany.error);
        }

        //Validation code du fonkotany
        if (!formFonkotany.nom_fonkotany.value) {
            newForm.nom_fonkotany = {value: formFonkotany.nom_fonkotany.value, error: "", isValid: false };
            errorBorder(".nom_fonkotany");
            messageValidator(".nom_fonkotany", newForm.nom_fonkotany.error);
        }else {
            newForm.nom_fonkotany = {value: formFonkotany.nom_fonkotany.value, error: "", isValid: true };
            successBorder(".nom_fonkotany");
            messageValidator(".nom_fonkotany", newForm.nom_fonkotany.error);
        }

        //Validation de code commune
        if (!formFonkotany.code_commune.value) {
            newForm.code_commune = {value: formFonkotany.code_commune.value, error: "", isValid: false };
            errorBorder(".code_commune");
            messageValidator(".code_commune", newForm.code_commune.error);
        }else {
            newForm.code_commune = {value: formFonkotany.code_commune.value, error: "", isValid: true };
            successBorder(".nom_fonkotany");
            messageValidator(".code_commune", newForm.code_commune.error);
        }

        setFormFonkotany(newForm);
        return newForm.code_fonkotany.isValid && newForm.nom_fonkotany.isValid && newForm.code_commune.isValid
    }

    
    const navigate = useNavigate();
    const handleClickBack = () => {
        navigate("/fonkotany", {replace: true});
    }

    return (
        <>
            {/* <!-- =========== Modal add Fonkontany ========== --> */}
            <div className="modal add-modal active-modal" >
                <div className="modal-container">
                    <div className="modal-header">
                        <div>
                            {isEditForm ? 
                            (<h3 className="modal-title">Modifier Fonkontany</h3>):
                            (<h3 className="modal-title">Ajout Fonkontany</h3>)}
                            <span className="modal-subtitle"></span>
                        </div>
                        <div>
                            <button className="btn btn-close" id="close-modale-add" onClick={handleClickBack}>X</button>
                        </div>
                    </div>

                    <form className="form" id="add-fonkotany" onSubmit={handleSubmit}>
                        <div className="alert-message">
                            {message ? 
                                (<span className='message success'>{message}</span>):
                                (<span className='message error'>{message}</span>)
                            }
                        </div>
                        <div className="content-user">
                            <div className="form-group">
                                <label htmlFor="code_fonkotany" className="form-group-label">Code fonkotany:</label>
                                <input
                                    type="text"
                                    className="form-group-input code_fonkotany"
                                    name="code_fonkotany"
                                    id="code_fonkotany"
                                    placeholder="code de Fonkotanay"
                                    value={formFonkotany.code_fonkotany.value}
                                    onChange={handleInputChange}
                                />
                                <span className="msg-error">
                                    {!formFonkotany.code_fonkotany.isValid && formFonkotany.code_fonkotany.error}
                                </span>

                            </div>
                            <div className="form-group">
                                <label htmlFor="nom_fonkotany" className="form-group-label">Nom Fonkotany:</label>
                                <input
                                    type="text"
                                    className="form-group-input nom_fonkotany"
                                    name="nom_fonkotany"
                                    id="nom_fonkotany"
                                    placeholder="Nom de Fonkotanay"
                                    value={formFonkotany.nom_fonkotany.value}
                                    onChange={handleInputChange}
                                />
                                 <span className="msg-error">
                                    {!formFonkotany.nom_fonkotany.isValid && formFonkotany.nom_fonkotany.error}
                                </span>
                            </div>
                            <div className="form-group">
                                <label htmlFor="code_commune" className="form-group-label">Code Commune:</label>
                                <input
                                    type="text"
                                    className="form-group-input code_commune"
                                    name="code_commune"
                                    id="code_commune"
                                    placeholder="Code Commune"
                                    value={formFonkotany.code_commune.value}
                                    onChange={handleInputChange}
                                />
                                 <span className="msg-error">
                                    {!formFonkotany.code_commune.isValid && formFonkotany.code_commune.error}
                                </span>
                            </div>
                            <div className="action-group">
                                {isEditForm ? (<button type="submit" className="btn btn-save" id="save">Modifier</button>):
                                (<button type="submit" className="btn btn-save" id="save">Envoyer</button>)}

                                <button type="reset" className="btn btn-clear" id="clear">Annuler</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default FormFonkotany;
