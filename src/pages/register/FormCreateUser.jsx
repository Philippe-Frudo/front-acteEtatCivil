import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Officier from '../../models/officier';
import handleSex from './../../constants/sexe'
import ADDRESS from '../../models/mock-address';
import { searchAddress } from '../../helpers/borderField';
import './register.css';
import { regex } from '../../helpers/regex';


const FormCreateUser = () => {

    const [cMotPass, setCMotPass] = useState("")
    const [showList, setShowList] = useState(false);
    const [commune, setCommune] = useState("");

    document.querySelectorAll("input").forEach(input => {
        input.addEventListener("focus", () => {
            if (input.className !== "nom_commune") {
                setShowList(false);
            }
        })
    });


    const [officier] = useState(new Officier());

    const [formOfficier, setFormOfficier] = useState({
        photo_off: { value: officier?.photo_off , isValid: true, error: "" },
        nom_off: { value: officier?.nom_off, isValid: false, error: "" },
        prenom_off: { value: officier?.prenom_off, isValid: false, error: "" },
        sexe_off: { value: officier?.sexe_off, isValid: false, error: "" },
        email_off: { value: officier?.email_off, isValid: false, error: "" },
        code_commune: { value: officier?.code_commune, isValid: false, error: "" },
        motPass_off: { value: officier?.motPass_off , isValid: false, error: "" }
    });


    
    //CHANGE VALUE COMMUNE
    const setAddressPerson = (commune) => {
        const newField = { code_commune: { value: commune.code_commune, isValid: true } };
        setFormOfficier({ ...formOfficier, ...newField });
        setCommune(commune.nom_commune)
        setShowList(false);
    }

    const validateField = (fieldName, value) => {
        let isValid = true;
        let error = "";
        // let txtContent = document.querySelector(fieldName).previousElementSibling.innerText;

        if (fieldName == "prenom_off") {
            if ( value && !regex.prenom.test(value)) {
                isValid = false;
                error = `Les caractères spéciaux ne sont pas autorisés au prenom, `;
            }
        }

        if (fieldName !== "prenom_off" && !value) {
            isValid = false;
            error = `Ce champ est obligatoire`;

        } else if (("nom_off" == fieldName) && !regex.nom.test(value)) {
            isValid = false;
            error = `Les caractères spéciaux, éspace ne sont pas autorisés au nom`;

        } else if (("email_off"==fieldName) && !regex.email.test(value)) {
            isValid = false;
            error = `L'email n'est pas valide`;

        } else if (fieldName === "motPass_off" && value !== cMotPass) {
            isValid = false;
            error = `Le mot de passe de confirmation n'est pas valide"`;
        }

        return { isValid, error };
    }

    const handleInputChange = (e) => {
        const fieldName = e.target.name;
        const fieldValue = e.target.value;

        const validator = validateField(fieldName, fieldValue);

        const newField = { [fieldName]: { value: fieldValue, isValid: validator.isValid, error: validator.error } }
        setFormOfficier({ ...formOfficier, ...newField });
        console.log(fieldName, newField[fieldName].isValid);
    }
    console.log(formOfficier.code_commune.isValid);


     //INPUT change CODE COMMUNE
     const handleInputChangeCommune = (e) => {
            setCommune(e.target.value);
            if (!e.target.value) {
                const validation = validateField(e.target.name, e.target.value);
                const newField = { code_commune: { value: "", isValid: validation.isValid , error: validation.error } };
                setFormOfficier({ ...formOfficier , ...newField });
            }
    }
    // console.log("Valeur de Code COMMUNE: ",formFonkotany.code_commune.value);  
      


    const [message, setMessage] = useState("");
    const [valid, setValid] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault()
        const isValid = Object.values(formOfficier).every(field => field.isValid);
        console.log("valid:", isValid);
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
                    
            /*useEffect(() => {
                // API
                console.log({message});
            })*/
        }else {
            setValid(false);
            setMessage("Vérifie les champs obligatoire ou non valide");
        }
    }

    return (
        <section className="section container">
            <div className="modal container-authentication">
                <div style={{marginLeft:"1rem"}}>

                    <h3 className="modal-title" style={{ color: '#000', marginBottom: "10px" }}>S'inscrire</h3>
                    <span className="modal-subtitle" style={{ color: '#000' }}>Vous allez créer un compte pour que vous autorisez à connecter</span>
                    <div>
                        <Link to="/" style={{ fontSize: "1.5rem", textDecoration: "underline" }}>Login</Link>
                    </div>
                    <div className="container-message">
                    {message && valid ? 
                        ( <p className="message success">{message}</p>):
                        ( <p className="message error">{message}</p>)
                    }
                    </div>
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
                                <span className="msg-error">{!formOfficier.nom_off.isValid && formOfficier.nom_off.error} </span>

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
                                <span className="msg-error">{!formOfficier.prenom_off.isValid && formOfficier.prenom_off.error}</span>
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
                                <span className="msg-error">{!formOfficier.email_off.isValid && formOfficier.email_off.error}</span>
                            </div>
                        </div>

                        <div className="form-group">
                            <div style={{position:"relative"}}>
                                <label htmlFor="nom_commune" className="form-group-label">Commune:</label>
                                <input 
                                    type="text" 
                                    className="form-group-input nom_commune" 
                                    name="nom_commune" 
                                    id="nom_commune" 
                                    placeholder='commune'
                                    value={commune}
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
                                <span className="msg-error">{!formOfficier.code_commune.isValid && formOfficier.code_commune.error}</span>
                            </div>
                        </div>

                        <div className="form-group">
                            <div>
                                <label htmlFor="confirmPwd" className="form-group-label">Mot de passe:</label>
                                <input 
                                type="password" 
                                className="form-group-input confirmPwd" 
                                name="confirmPwd" id="confirmPwd" 
                                placeholder="Confirmer le mot de passe" 
                                value={cMotPass}
                                onChange={(e) =>setCMotPass(e.target.value)}
                                />
                                {/* <span className="msg-error">{!formOfficier.motPass_off.isValid && formOfficier.motPass_off.nom_off}</span> */}
                            </div>
                        </div>
                        
                        <div className="form-group" style={{marginTop:"1rem"}}>
                            <div>
                                <label htmlFor="motPass_off" className="form-group-label">Confirmer le mot de passe:</label>
                                <input 
                                type="password" 
                                className="form-group-input motPass_off" 
                                name="motPass_off" 
                                id="motPass_off" 
                                placeholder="Mot de passe" 
                                value={formOfficier.motPass_off.value}
                                onChange={handleInputChange}
                                />
                                <span className="msg-error">{!formOfficier.motPass_off.isValid && formOfficier.motPass_off.error}</span>
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
