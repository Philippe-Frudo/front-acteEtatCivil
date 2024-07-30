import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const FormCommune = ({commune, isEditForm}) => {

    const [formCommune, setFormCommune] = useState({
        code_commune: { value: "", isValid: true, error: "" },
        nom_commune: { value: "", isValid: true, error: "" },
        code_district: { value: "", isValid: true, error: "" },
    });

    useEffect(() => {
        if (commune) {
            setFormCommune({
                code_commune: { value: commune.code_commune || "", isValid: true, error: "" },
                nom_commune: { value: commune.nom_commune || "", isValid: true, error: "" },
                code_district: { value: commune.code_district || "", isValid: true, error: "" },
            });
        }
    }, [commune]);


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
        setFormCommune({ ...formCommune, ...newField });
    }
    
    const [message, setMessage] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = Object.values(formCommune).every(field => field.isValid);

        if (isValid) {
            setMessage("En cours de connexion ...");
            commune.code_commune = formCommune.code_commune.value;
            commune.nom_commune = formCommune.nom_commune.value;
            commune.code_district = formCommune.code_district.value;

            isEditForm ? updateCommune(): addCommune();
        } else {
            setMessage("Vérifier les champs non valides");
        }
    }

    
    const updateCommune = () => {
        console.log("Data commune:", commune);
        /*APIService.updateFonkontany(fonkotany)
        .then(response => console.log(response));*/
    }

    const addCommune = () => {
        console.log("Data commune:", commune);
        /*APIService.addFonkontany(fonkotany)
        .then(response => console.log(response));*/
    }

  return (
    <>
    {/* <!-- =========== Modal add  COMMUNE ========== --> */}
    <div className="modal add-modal active-modal" >
        <div className="modal-container">
            <div className="modal-header">
                <div>
                    {isEditForm ? 
                    (<h3 className="modal-title">Modifier Commune</h3>):
                    (<h3 className="modal-title">Ajout Commune</h3>)
                    }

                    <span className="modal-subtitle"></span>
                </div>
                <div>
                    <Link to='/commune'>
                        <button className="btn btn-close" id="close-modale-add">X</button>
                    </Link>
                </div>
            </div>

            <form className="form" id="add-commune" onSubmit={handleSubmit}>
                <div className="alert-message">
                    {message && <span className='message'>{message}</span>}
                </div>
                <div className="content-user">
                    <div className="form-group">
                        <label htmlFor="code_commune" className="form-group-label">Code commune:</label>
                        <input
                            type="text"
                            className="form-group-input code_commune"
                            name="code_commune"
                            id="code_commune"
                            placeholder="code de Fonkotanay"
                            value={formCommune.code_commune.value}
                            onChange={handleInputChange}
                        />
                        <span className="msg-error">{!formCommune.code_commune.isValid && formCommune.code_commune.error}</span>
                    </div>

                    <div className="form-group">
                        <label htmlFor="nom_commune" className="form-group-label">Nom commune:</label>
                        <input
                            type="text"
                            className="form-group-input nom_commune"
                            name="nom_commune"
                            id="nom_commune"
                            placeholder="Nom de Fonkotanay"
                            value={formCommune.nom_commune.value}
                            onChange={handleInputChange}
                        />
                        <span className="msg-error">{!formCommune.nom_commune.isValid && formCommune.nom_commune.error}</span>
                    </div>

                    <div className="form-group">
                        <label htmlFor="code_district" className="form-group-label">Code District:</label>
                        <input
                            type="text"
                            className="form-group-input code_district"
                            name="code_district"
                            id="code_district"
                            placeholder="Code Commune"
                            value={formCommune.code_district.value}
                            onChange={handleInputChange}
                        />
                        <span className="msg-error">{!formCommune.code_district.isValid && formCommune.code_district.error}</span>
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

export default FormCommune
