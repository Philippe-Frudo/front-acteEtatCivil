import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {errorBorder, successBorder} from "./../../helpers/borderField";
import { makeRequest } from '../../services/axios';
// import "./login.css"


const Login = () => {

    let navigate = useNavigate()

    const [message, setMessage] = useState(""); 
    const [valid, setValid] = useState(false);

    const [form, setForm] = useState(
        {
            userEmail: { value: "" },
            password: { value: "" }
        } );


    /**
     * @param {HTMLInputElement} e 
     */
    const handleInputChange = (e) => {
        const fieldName = e.target.name;
        const fieldValue = e.target.value;
        const newField = { [fieldName]: { value: fieldValue } };
        setForm({ ...form, ...newField });

        if (fieldName === "password") {
            successBorder(`.${fieldName}`);
        }
        if (message) {
            setMessage('')
        }
    }

    //VALIDATION DE FORMULAIRE 
    const validateForm = () => {
        let newForm = { ...form };

        // Validator userEmail
        if (form.userEmail.value.length < 3) {
            errorBorder(".userEmail");
            newForm.userEmail = { value: form.userEmail.value, error: "", isValid: false };
        } else {
            successBorder(".userEmail");
            newForm.userEmail = { value: form.userEmail.value, error: "", isValid: true };
        }

        // Validator Password
        if (form.password.value.length < 5) {
            newForm.password = { value: form.password.value, error: "", isValid: false };
            errorBorder(".password");
        } else {
            successBorder(".password");
            newForm.password = { value: form.password.value, error: "", isValid: true };
        }
        setForm(newForm);
        return newForm.userEmail.isValid && newForm.password.isValid;
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        const isFormValid = validateForm();

        if (isFormValid) {
            setValid(isFormValid);
            // setMessage("Connexion en cours ...");

            // Appel API Authentification
            makeRequest.post(`/officiers/login`, {
                userEmail: form.userEmail.value,
                    password: form.password.value
                }, 
                { headers: {"Content-Type":"application/json" } }
            )
            .then(response => {
                if ( !response.data.status) {
                    setValid(false)
                    console.log(response);
                    setMessage(response.data.message);
                    return;
                }else{
                    setValid(true)
                    localStorage.setItem("user", JSON.stringify(response.data.data));
                    localStorage.setItem("auth", 1);
                    navigate("/dashboard")  
                    location.reload();   
                }
            })
            .catch(error => {
                console.error("Erreur lors de la récupération des données:", error);
            });
        }
    }

    return (
        <>
            <section className="section container" id="login" style={{ minHeigth:"100vh" }}>
                <div className="modal container-authentication" >
                    <h3 className="modal-title" style={{ color: '#000', marginBottom: "10px" }}>Authentification</h3>
                    <span className="modal-subtitle" style={{ color: '#000' }}>Biènvenu sur notre plateforme. Entrer votre compte pour vous accèder.</span>

                    <div>
                        <form className="form-authentification" id="loginForm" onSubmit={e => handleSubmit(e)}>

                            {/* Message . status: success or error*/}
                            <div className="container-message">
                                {message && valid ? 
                                    ( <p className={message ? "message success":"success"}>{message}</p>):
                                    ( <p  className={message ? "message error":"error"}>{message}</p>)
                                }
                            </div>

                            <div className="content-authentification">
                                <div>

                                    {/* Email */}
                                    <div className="form-group-login">
                                        <div>
                                            <label htmlFor="userEmail" className="form-group-label">Email</label>
                                            <input 
                                                type="email" 
                                                className="form-group-input userEmail" 
                                                name="userEmail" id="userEmail" 
                                                placeholder="votre e-mail" 
                                                autoComplete="off" 
                                                // required
                                                value={form.userEmail.value} 
                                                onChange={e => handleInputChange(e)} 
                                            />
                                            {/* Error  */}
                                            {form.userEmail.error && <span className="msg-error">{form.userEmail.error}</span>}
                                        </div>
                                    </div>

                                    {/* Mot de passe */}
                                    <div className="form-group-login" id="form-group">
                                        <div>
                                            <label htmlFor="password" className="form-group-label">Mot de passe</label>
                                            <input 
                                                type="password" 
                                                className="form-group-input password" 
                                                name="password" 
                                                id="password" 
                                                // required
                                                placeholder="votre mot de passe" 
                                                autoComplete="off" 
                                                value={form.password.value} 
                                                onChange={e => handleInputChange(e)} 
                                            />
                                            {/* Error  */}
                                            {form.userEmail.error && <span className="msg-error">{form.password.error}</span>}
                                        </div>
                                    </div>

                                    <div style={{ textAlign: "center", marginTop: "30px" }}>
                                        {/* Submit button */}
                                        <button 
                                            style={{ width: "100%" }} 
                                            type="submit" 
                                            className="btn btn-connect" 
                                            id="connect">Se connecter
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                        <div style={{ textAlign: "start", marginTop: "10px" }}>
                            <Link style={{ cursor: "pointer", marginTop: "1.5rem", fontSize: "1.5rem", textDecoration: "underline" }} to="/register"> 
                                Registre 
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Login;
