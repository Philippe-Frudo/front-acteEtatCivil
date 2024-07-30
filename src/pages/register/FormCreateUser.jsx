import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Officier from '../../models/officier';
// import './register.css';


const FormCreateUser = () => {

    const [officier] = useState(new Officier());

    const [formOfficier, setFormOfficier] = useState({
        photo_off: { value: officier.photo_off , isValid: false, error: "" },
        nom_off: { value: officier.nom_off, isValid: false, error: "" },
        prenom_off: { value: officier.prenom_off, isValid: false, error: "" },
        sexe_off: { value: officier.sexe_off, isValid: false, error: "" },
        email_off: { value: officier.email_off, isValid: false, error: "" },
        code_commune: { value: officier.code_commune, isValid: false, error: "" },
        motPass_off: { value: officier.motPass_off , isValid: false, error: "" }
    });

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

        const newField = { [fieldName]: { value: validator.value , error: validator.error } }
        setFormOfficier({ ...formOfficier, ...newField });
    }

    const [message, setMessage] = useState("");
    const [valid, setValid] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault()
        const isValid = Object.values(formOfficier).every(field => field.isValid);
        if (isValid) {
            setValid(isValid);
            setMessage("En cours de connexion");
            
            officier.nom_off = formOfficier.nom_off.value;
            officier.prenom_off = formOfficier.prenom_off.value;
            officier.sexe_off = formOfficier.sexe_off.value;
            officier.email_off = formOfficier.email_off.value;
            officier.code_commune = formOfficier.code_commune.value;
            officier.motPass_off = formOfficier.motPass_off.value;
            
            console.log(officier);
                    
            useEffect(() => {
                // API
                console.log({message});
            })
        }else {
            setMessage("Vérifie les champs obligatoire ou non valide");
        }
    }


    return (
        <section className="section container">
            <div className="modal container-authentication">
                <h3 className="modal-title" style={{ color: '#000', marginBottom: "10px" }}>S'inscrire</h3>
                <span className="modal-subtitle" style={{ color: '#000' }}>Vous allez créer un compte pour que vous autorisez à connecter</span>
                <div>
                    <Link to="/" style={{ fontSize: "1.5rem", textDecoration: "underline" }}>Login</Link>
                </div>
                <div className="container-message">
                   {valid ? 
                    ( <p className="message success">{message}</p>):
                    ( <p className="message error">{message}</p>)
                   }
                </div>
                <form className="form" id="add-officier" onSubmit={handleSubmit}>

                    <div className="content-user">
                        <div className="form-group">
                            <div>
                            </div>
                        </div>

                        <div className="form-group">
                            <div>
                                <label htmlFor="nom_off" className="form-group-label">Nom:</label>
                                <input type="text" 
                                className="form-group-input nom_off" 
                                name="nom_off" 
                                id="nom_off" 
                                placeholder="Nom" 
                                value={formOfficier.nom_off.value}
                                onChange={handleInputChange}
                                />
                                <span className="msg-error">{!formOfficier.nom_off.isValid && formOfficier.nom_off.nom_off} </span>

                            </div>
                        </div>

                        <div className="form-group">
                            <div>
                                <label htmlFor="prenom_off" className="form-group-label">Prénom:</label>
                                <input type="text" 
                                className="form-group-input prenom_off" 
                                name="prenom_off" id="prenom_off" 
                                placeholder="Prénom" 
                                value={formOfficier.prenom_off.value}
                                onChange={handleInputChange}
                                />
                                <span className="msg-error">{!formOfficier.prenom_off.isValid && formOfficier.nom_off.prenom_off}</span>
                            </div>
                        </div>

                        <div className="form-group">
                            <div>
                                <label htmlFor="" className="form-group-label sexe_off">Sexe:</label>
                                <label className="sex-group">
                                    <input 
                                    type="radio" 
                                    name="sexe_off" 
                                    // id="sexe_off" 
                                    className="form-group-input sex_F" 
                                    value="F" 
                                    onClick={(e) => { handleSex(e) }} 
                                    onChange={handleInputChange}/>
                                    Feminin
                                </label>
                                <label className="sex-group">
                                    <input 
                                    type="radio" 
                                    name="sexe_off" 
                                    id="sexe_off" 
                                    className="form-group-input sex_M" 
                                    value="M" 
                                    defaultChecked 
                                    onClick={(e) => { handleSex(e) }} 
                                    onChange={handleInputChange}/>
                                    Masculin
                                </label>
                            </div>
                        </div>

                        <div className="form-group">
                            <div>
                                <label htmlFor="email_off" className="form-group-label">Email:</label>
                                <input 
                                type="text" 
                                className="form-group-input email_off" 
                                name="email_off" 
                                id="email_off" 
                                placeholder="E-mail" 
                                value={formOfficier.email_off.value}
                                onChange={handleInputChange}
                                />
                                <span className="msg-error">{!formOfficier.email_off.isValid && formOfficier.email_off.nom_off}</span>
                            </div>
                        </div>

                        <div className="form-group">
                            <div>
                                <label htmlFor="nom_commune" className="form-group-label">Commune:</label>
                                <input 
                                type="text" 
                                className="form-group-input nom_commune" 
                                name="nom_commune" 
                                id="nom_commune" 
                                placeholder="Commune"
                                // value={formOfficier.code_commune.value}
                                onChange={handleInputChange}
                                />
                                <span className="msg-error">{!formOfficier.code_commune.isValid && formOfficier.code_commune.nom_off}</span>
                            </div>
                        </div>

                        <div className="form-group">
                            <div>
                                <label htmlFor="motPass_off" className="form-group-label">Mot de passe:</label>
                                <input 
                                type="password" 
                                className="form-group-input motPass_off" 
                                name="motPass_off" 
                                id="motPass_off" 
                                placeholder="Mot de passe" 
                                value={formOfficier.motPass_off.value}
                                onChange={handleInputChange}
                                />
                                {/* <span className="msg-error">{formOfficier.pass.isValid && formOfficier.email_off.nom_off}</span> */}
                            </div>
                        </div>

                        <div className="form-group">
                            <div>
                                <label htmlFor="confirmPwd" className="form-group-label">Confirmer le mot de passe:</label>
                                <input 
                                type="password" 
                                className="form-group-input confirmPwd" 
                                name="confirmPwd" id="confirmPwd" 
                                placeholder="Confirmer le mot de passe" 
                                onChange={handleInputChange}
                                />
                                <span className="msg-error">{!formOfficier.motPass_off.isValid && formOfficier.motPass_off.nom_off}</span>
                            </div>
                        </div>

                        <div className="action-group">
                            <button type="submit" className="btn btn-save" id="save">S'inscrire</button>
                            <button type="reset" className="btn btn-clear" id="clear">Annuler</button>
                        </div>

                    </div>
                </form>
            </div>
        </section>
    )
}

export default FormCreateUser;
