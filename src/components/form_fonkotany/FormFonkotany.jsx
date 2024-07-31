import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { errorBorder, messageValidator, searchAddress, successBorder } from '../../helpers/borderField';
import { ADDRESS } from '../../models/mock-address';

const FormFonkotany = ({ fonkotany, isEditForm }) => {

    const [showList, setShowList] = useState(false);
    const [commune, setCommune] = useState("");

    document.querySelectorAll("input").forEach(input => {
        input.addEventListener("focus", () => {
            if (input.className !== "nom_commune") {
                setShowList(false);
            }
        })
    });


    const [formFonkotany, setFormFonkotany] = useState({
        code_commune: { value: "", isValid: true, error: "" },
        nom_fonkotany: { value: "", isValid: true, error: "" },
        code_fonkotany: { value: "", isValid: true, error: "" },
    });

    useEffect(() => {
        if (fonkotany) {
            setFormFonkotany({
                code_commune: { value: fonkotany.code_commune || "", isValid: true, error: "" },
                nom_fonkotany: { value: fonkotany.nom_fonkotany || "", isValid: true , error: "" },
                code_fonkotany: { value: fonkotany.code_fonkotany || "", isValid: true, error: "" },
            });
                        
            ADDRESS.forEach(f => {
                if (f.code_commune == fonkotany.code_commune) {
                    setDistrict(f.nom_commune); return; 
                }
            })
        }
    }, [fonkotany]);
    

    //CHANGE VALUE COMMUNE
    const setAddressPerson = (commune) => {
        const newField = { code_commune: { value: commune.code_commune, isValid: true } };
        setFormFonkotany({ ...formFonkotany, ...newField });
        setCommune(commune.nom_commune)
        setShowList(false);
    }

    
    const validateField = (fieldName, value) => {
        let isValid = true;
        let error = "";

        if (!value.trim()) {
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

        //INPUT change CODE COMMUNE
     const handleInputChangeCommune = (e) => {
            setCommune(e.target.value);
            if (!e.target.value) {
                const validation = validateField(e.target.name, e.target.value);
                const newField = { code_commune: { value: "", isValid: validation.isValid , error: validation.error } };
                setFormFonkotany({ ...formFonkotany , ...newField });
            }
    }
    // console.log("Valeur de Code COMMUNE: ",formFonkotany.code_commune.value);  
        

    const [message, setMessage] = useState("");
    const [valid, setValid] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = Object.values(formFonkotany).every(field => field.isValid);

        if (isValid && formFonkotany.code_fonkotany.value) {
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

   /* const validFormFonkotany = () => {
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
    }*/

    
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

                        <div className="alert-message">
                            {message && valid? 
                                (<span className='message success'>{message}</span>):
                                (<span className='message error'>{message}</span>)
                            }
                        </div>
                    <form className="form" id="add-fonkotany" onSubmit={handleSubmit}>
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
                            <div className="form-group" style={{position:"relative"}}>
                                <label htmlFor="nom_commune" className="form-group-label">Code Commune:</label>
                                <input
                                    type="text"
                                    className="form-group-input nom_commune"
                                    name="nom_commune"
                                    id="nom_commune"
                                    placeholder="Commune"
                                    defaultValue={commune}
                                    onChange={handleInputChangeCommune}
                                    onKeyUp={(e) => searchAddress(e.target.id, "list_commune") }
                                    onFocus={() => setShowList(true) }
                                />
                  
                                <ul id="list_commune" className={ showList ? "showList list":"list"}>
                                    {ADDRESS?.map(adrs => (
                                    <li key={adrs.id_adrs}>
                                        <p className='list-p' onClick={() => setAddressPerson(adrs)}>
                                        {adrs.code_postal} &nbsp;
                                        {adrs.nom_adrs} &nbsp;
                                        {adrs.nom_fonkotany} &nbsp;
                                        {adrs.code_commune} &nbsp;
                                        {adrs.nom_commune} &nbsp;
                                        {adrs.code_district} &nbsp;
                                        {adrs.nom_district} &nbsp;
                                        {adrs.code_region} &nbsp;
                                        {adrs.nom_region} &nbsp;
                                        </p>
                                    </li>
                                    ))}
                                </ul>
                                 <span className="msg-error">
                                    {!formFonkotany.code_commune.isValid && formFonkotany.code_commune.error}
                                </span>
                            </div>
                            <div className="action-group">
                                {isEditForm ? 
                                (<button type="submit" className="btn btn-save" id="save">Modifier</button>):
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
