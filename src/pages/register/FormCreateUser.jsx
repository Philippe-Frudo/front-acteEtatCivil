import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Officier from '../../models/officier';
import handleSex from './../../constants/sexe'
import { searchAddress } from '../../helpers/borderField';
import { regex } from '../../helpers/regex';
import { makeRequest } from '../../services/axios';
import './register.css';
import emailjs from "@emailjs/browser";

// import CommuneService from '../../services/serviceCommune';
// import OfficierService from '../../services/serviceOfficier';
// import ADDRESS from '../../models/mock-address';

const FormCreateUser = () => {

    const [cMotPass, setCMotPass] = useState("")
    const [showList, setShowList] = useState(false);
    const [communes, setCommunes] = useState([]);
    const [nomCommune, setNomCommune] = useState("");
  
  
    //API GET COMMUNES
    useEffect(() => {
        makeRequest.get('/communes')
        .then(resp => { setCommunes(resp.data); })
        .catch(error => {console.log(error);})
    }, []);


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
        prenom_off: { value: officier?.prenom_off, isValid: true, error: "" },
        sexe_off: { value: officier?.sexe_off, isValid: false, error: "" },
        email_off: { value: officier?.email_off, isValid: false, error: "" },
        id_commune: { value: officier?.id_commune, isValid: false, error: "" },
        motPass_off: { value: officier?.motPass_off , isValid: false, error: "" }
    });

      //==========INPUT  CHANGE value FIELD nom COMMUNE ==========
  const inputChangeCommune = (e) => {
    setNomCommune(e.target.value);
    
    //Si le champ est null id_commune est null
    if (!e.target.value) {
      const newField = { id_commune: { value: '', isValid: false } };  
        setFormOfficier({ ...formOfficier, ...newField });
    }
  }

  // ======CHANGE ID CIMMUNE PAR UN CLICK DE NOM COMMUNE=====
  const handleSetCodeCommune = (commune) => {
    const newField = { id_commune: { value: commune.id_commune,  isValid: true } };
    setFormOfficier({ ...formOfficier, ...newField });

    setNomCommune(commune.nom_commune);
    
    setShowList(false);
  }
  

    const validateField = (fieldName, value) => {
        let isValid = true;
        let error = "";
        // let txtContent = document.querySelector(fieldName).previousElementSibling.innerText;

        if (fieldName == "prenom_off") {
            if (value) {
                if ( value && !regex.prenom.test(value)) {
                    isValid = false;
                    error = `Les caractères spéciaux ne sont pas autorisés au prenom, `;
                }  
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
        // console.log(fieldName, newField[fieldName].isValid);
        if(message) {
            setMessage("")
        }
    }


    const [message, setMessage] = useState("");
    const [valid, setValid] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault()
        // const validator = validateField(fieldName, fieldValue);
        let isValid = Object.values(formOfficier).every(field => field.isValid);

        if (isValid) {
            setValid(isValid);
            setMessage("En cours de connexion");
            
            officier.nom_off = formOfficier.nom_off.value;
            officier.prenom_off = formOfficier.prenom_off.value;
            officier.sexe_off = formOfficier.sexe_off.value;
            officier.email_off = formOfficier.email_off.value;
            officier.id_commune = formOfficier.id_commune.value;
            officier.motPass_off = formOfficier.motPass_off.value;
            
            console.log(officier);
            
            register();

        }else {
            setValid(false);
            setMessage("Vérifier les champs non valides");
        }

    }

    function register() {
        // API CREER OFFICIER (UTILISATEUR)
        makeRequest.post('/officiers', officier, {
           headers: {"Content-Type":"application/json"}
        }
        ).then(response => {

            if ( !response.data.status) {
                setValid(false)
                setMessage(response.data.message)
                return
            }
            setValid(true)
            setMessage(response.data.message)

            // Email JS
            emailjs
            .send("service_erl068v","template_dswbbur", 
                {
                    nom_off: officier.nom_off,
                    prenom_off: officier.prenom_off,
                    sexe_off: officier.sexe_off,
                    email_off:  officier.email_off,
                    motPass_off: officier.motPass_off,
                    nom_commune: nomCommune,
                    reply_to: '',
                }, 
                "OM-fB_NYpfB3XoSrO" )
            .then(response => { console.log('SUCCES', response); })
            .catch(error => console.log("Erreur d'envoi email", error) );

            clearData();
        })
        // .then( () => useNavigate('/login') )
        .catch(error => { console.error( error) });
    }
    

    //  CLEAR DATA
    function clearData() {
        setFormOfficier(
            { 
                ...formOfficier, 
                ...{
                    photo_off: { value: '' , isValid: true, error: "" },
                    nom_off: { value:'', isValid: true, error: "" },
                    prenom_off: { value: '', isValid: true, error: "" },
                    sexe_off: { value: 'M', isValid: true, error: "" },
                    email_off: { value: '', isValid: false, error: "" },
                    id_commune: { value: '', isValid: false, error: "" },
                    motPass_off: { value: '' , isValid: false, error: "" }
                }
        });
        setCMotPass("");
        setNomCommune('');
        // setMessage("")
        setShowList(false)
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
                        ( <p className={message ? "message success":"success"}>{message}</p>):
                        ( <p  className={message ? "message error":"error"}>{message}</p>)
                    }
                    </div>
                </div>

                <form className="form" id="add-officier" onSubmit={handleSubmit}>

                    <div className="content-user">
                        <div className="form-group">
                            <div>
                            </div>
                        </div>

                        {/* Nom */}
                        <div className="form-group">
                            <div>
                                <label htmlFor="nom_off" className="form-group-label">Nom:</label>
                                <input type="text" 
                                className={!formOfficier.nom_off.isValid && formOfficier.nom_off.error ? "error-border form-group-input nom_off": "form-group-input nom_off"}
                                name="nom_off" 
                                id="nom_off" 
                                placeholder="Nom" 
                                value={formOfficier.nom_off.value}
                                onChange={handleInputChange}
                                />
                                <span className="msg-error">{!formOfficier.nom_off.isValid && formOfficier.nom_off.error} </span>

                            </div>
                        </div>

                        {/* Prenom */}
                        <div className="form-group">
                            <div>
                                <label htmlFor="prenom_off" className="form-group-label">Prénom:</label>
                                <input type="text" 
                                className={!formOfficier.prenom_off.isValid && formOfficier.prenom_off.error ? "error-border form-group-input prenom_off":"form-group-input prenom_off"  }
                                name="prenom_off" 
                                id="prenom_off" 
                                placeholder="Prénom" 
                                value={formOfficier.prenom_off.value}
                                onChange={handleInputChange}
                                />
                                <span className="msg-error">{!formOfficier.prenom_off.isValid && formOfficier.prenom_off.error}</span>
                            </div>
                        </div>

                        {/* Sexe */}
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

                        {/* Email */}
                        <div className="form-group">
                            <div>
                                <label htmlFor="email_off" className="form-group-label">Email:</label>
                                <input 
                                type="email" 
                                className={!formOfficier.email_off.isValid && formOfficier.email_off.error ? "error-border form-group-input email_off": "form-group-input email_off" }
                                name="email_off" 
                                id="email_off" 
                                // required
                                placeholder="E-mail" 
                                value={formOfficier.email_off.value}
                                onChange={handleInputChange}
                                />
                                <span className="msg-error">{!formOfficier.email_off.isValid && formOfficier.email_off.error}</span>
                            </div>
                        </div>
                        
                        {/* Commune */}
                        <div className="form-group">
                            <div style={{position:"relative"}}>
                                <label htmlFor="nom_commune" className="form-group-label">Commune:</label>
                                <input
                                    type="text" 
                                    className={!formOfficier.email_off.isValid && formOfficier.id_commune.error ? "error-border form-group-input nom_commune":"form-group-input nom_commune" }
                                    name="nom_commune"
                                    id="nom_commune"
                                    autoComplete='off'
                                    placeholder="Commune" 
                                    value={nomCommune} 
                                    onChange={inputChangeCommune}
                                    onKeyUp={(e) => searchAddress(e.target.id, "list_commune") }
                                    onFocus={() => setShowList(true) } 
                                />

                                <ul id="list_commune" className={ showList ? "showList list":"list"}>
                                    {communes?.map(c => (
                                    <li key={c.id_commune}>
                                        <p className='list-p' onClick={() => handleSetCodeCommune(c)}>
                                        {c.nom_commune}({c.code_commune})
                                        </p>
                                    </li>
                                    ))}
                                </ul>

                                <span className=""><i>Assurez-vous de sélectionner la commune</i></span>
                                <span className="msg-error">{!formOfficier.id_commune.isValid && formOfficier.id_commune.error}</span>
                            </div>
                        </div>

                        {/* Mod de passe */}
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
                        
                        {/* Mod de passe de confirmation */}
                        <div className="form-group" style={{marginTop:"1rem"}}>
                            <div>
                                <label htmlFor="motPass_off" className="form-group-label">Confirmer le mot de passe:</label>
                                <input
                                type="password" 
                                className={!formOfficier.motPass_off.isValid && formOfficier.motPass_off.error ? "error-border form-group-input motPass_off":"form-group-input motPass_off" }
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
                            <button type="reset" className="btn btn-clear" id="clear" onClick={clearData}>Annuler</button>
                        </div>

                    </div>
                </form>
            </div>
        </section>
    )
}

export default FormCreateUser;
