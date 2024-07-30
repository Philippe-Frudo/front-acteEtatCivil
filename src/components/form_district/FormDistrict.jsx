import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
const FormDistrict = ({district, isEditForm}) => {
    
    const [formDistrict, setFormDistrict] = useState({
        code_district: { value: "", isValid: false, error: "" },
        nom_district: { value: "", isValid: false, error: "" },
        code_region: { value: "", isValid: false, error: "" },
    });

    useEffect(() => {
        if (district) {
            setFormDistrict({
                code_district: { value: district.code_district || "", isValid: true, error: "" },
                nom_district: { value: district.nom_district || "", isValid: true, error: "" },
                code_region: { value: district.code_region || "", isValid: true, error: "" },
            });
        }
    }, [district]);
    
    const validateField = (fieldName, value) => {
        let isValid = true;
        let error = "";

        if (!value) {
            isValid = false;
            error = "Ce champ est obligatoire";
        } else if (/[^a-zA-Z0-9 ]{3,30}/.test(value)) {
            isValid = false;
            error = "Caractères spéciaux non autorisés";
        }
        return { isValid, error };
    }

    // console.log(formDistrict.code_district.isValid);

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
        const isValid = Object.values(formDistrict).every(field => field.isValid);

        if (isValid) {
            setMessage("En cours de connexion ...");
            district.code_district = formDistrict.code_district.value;
            district.nom_district = formDistrict.nom_district.value;
            district.code_region = formDistrict.code_region.value;

            isEditForm ? updateDistrict(): addDistrict();

        } else {
            setMessage("Vérifier les champs non valides");
        }
    }

    
    const updateDistrict = () => {
        console.log("Data District:", district);
        /*APIService.updateFonkontany(fonkotany)
        .then(response => console.log(response));*/
    }

    const addDistrict = () => {
        console.log("Data District:", district);
        /*APIService.addFonkontany(fonkotany)
        .then(response => console.log(response));*/
    }

  return (
    <>
    {/* <!-- =========== Modal add  District ========== --> */}
    <div className="modal add-modal active-modal" >
        <div className="modal-container">
            <div className="modal-header">
                <div>
                    {isEditForm ? 
                    (<h3 className="modal-title">Modifier District</h3>):
                    (<h3 className="modal-title">Ajout District</h3>)
                    }
                    <span className="modal-subtitle"></span>
                </div>
                <div>
                    <Link to='/district'>
                        <button className="btn btn-close" id="close-modale-add">X</button>
                    </Link>
                </div>
            </div>

            <form className="form" id="add-District" onSubmit={handleSubmit}>
                <div className="alert-message">
                    {message && <span className='message'>{message}</span>}
                </div>
                <div className="content-user">
                    <div className="form-group">
                        <label htmlFor="code_district" className="form-group-label">Code District:</label>
                        <input
                            type="text"
                            className="form-group-input code_district"
                            name="code_district"
                            id="code_district"
                            placeholder="code de Fonkotanay"
                            value={formDistrict.code_district.value}
                            onChange={handleInputChange}
                        />
                        <span className="msg-error">{!formDistrict.code_district.isValid && formDistrict.code_district.error}</span>
                    </div>

                    <div className="form-group">
                        <label htmlFor="nom_district" className="form-group-label">Nom District:</label>
                        <input
                            type="text"
                            className="form-group-input nom_district"
                            name="nom_district"
                            id="nom_district"
                            placeholder="Nom de Fonkotanay"
                            value={formDistrict.nom_district.value}
                            onChange={handleInputChange}
                        />
                        <span className="msg-error">{!formDistrict.nom_district.isValid && formDistrict.nom_district.error}</span>
                    </div>

                    <div className="form-group">
                        <label htmlFor="code_region" className="form-group-label">Code District:</label>
                        <input
                            type="text"
                            className="form-group-input code_region"
                            name="code_region"
                            id="code_region"
                            placeholder="Code region"
                            value={formDistrict.code_region.value}
                            onChange={handleInputChange}
                        />
                        <span className="msg-error">{!formDistrict.code_region.isValid && formDistrict.code_region.error}</span>
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

export default FormDistrict
