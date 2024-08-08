import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {errorBorder, successBorder} from "./../../helpers/borderField";
import AuthentificationService from "../../services/AuthentificationService";
// import "./../register/register.css";
// import "./login.css";


const Login = () => {
    let navigate = useNavigate()

    const [form, setForm] = useState({
            userName: { value: "" },
            password: { value: "" }
        });

    const [message, setMessage] = useState(""); //Vous étes deconnecte. {philippe / philippe}
    const [valid, setValid] = useState(false);
    /**
     * 
     * @param {HTMLInputElement} e 
     */
    const handleInputChange = (e) => {
        const fieldName = e.target.name;
        const fieldValue = e.target.value;
        const newField = { [fieldName]: { value: fieldValue } };
        setForm({ ...form, ...newField });

        if (fieldName === "password") {
            successBorder(".password");
        }
        if (fieldName === "userName") {
            successBorder(".userName");
        }
    }

    const validateForm = () => {
        let newForm = { ...form };

        // Validator Username
        if (form.userName.value.length < 1) {
            errorBorder(".userName");
            newForm.userName = { value: form.userName.value, error: "", isValid: false };
        } else {
            successBorder(".userName");
            newForm.userName = { value: form.userName.value, error: "", isValid: true };
        }

        // Validator Password
        if (form.password.value.length < 1) {
            // Votre mot de passe doit faire au moins 6 caractères de long.
            newForm.password = { value: form.password.value, error: "", isValid: false };
            errorBorder(".password");
        } else {
            successBorder(".password");
            newForm.password = { value: form.password.value, error: "", isValid: true };
        }
        setForm(newForm);
        return newForm.userName.isValid && newForm.password.isValid;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const isFormValid = validateForm();
        console.log(isFormValid);
        if (isFormValid) {
            setMessage("Connexion en cours ...");
            setValid(isFormValid);

            AuthentificationService.login(form)
            .then(data => {
                console.log(data);
                if (data.status) {
                    console.log(data.message);
                    setMessage(data.message);
                    return;
                }else {
                    localStorage.setItem("user", JSON.stringify(data));
                    localStorage.setItem("auth", 1);
                    navigate("/dashboard");
                }
            })
        }
    }

    return (
        <>
            <section className="section container">
                <div className="modal container-authentication" >
                    <h3 className="modal-title" style={{ color: '#000', marginBottom: "10px" }}>Authentification</h3>
                    <span className="modal-subtitle" style={{ color: '#000' }}>Vous allez directement vers la page</span>

                    <div>
                        <form className="form-authentification" id="loginForm" onSubmit={e => handleSubmit(e)}>

                            {/* Message . status: success or error*/}
                            <div className="container-message">
                                {message && valid ? 
                                    ( <p className="message success">{message}</p>):
                                    ( <p className="message error">{message}</p>)
                                }
                            </div>

                            <div className="content-authentification">
                                <div>
                                    <div className="form-group-login">
                                        <div>
                                            <label htmlFor="userName" className="form-group-label">Username</label>
                                            <input 
                                                type="text" 
                                                className="form-group-input userName" 
                                                name="userName" id="userName" 
                                                placeholder="Nom d'utilisateur" 
                                                autoComplete="off" 
                                                value={form.userName.value} 
                                                onChange={e => handleInputChange(e)} 
                                            />
                                            {/* Error  */}
                                            {form.userName.error && <span className="msg-error">{form.userName.error}</span>}
                                        </div>
                                    </div>

                                    <div className="form-group-login" id="form-group">
                                        <div>
                                            <label htmlFor="password" className="form-group-label">Mot de passe</label>
                                            <input 
                                                type="password" 
                                                className="form-group-input password" 
                                                name="password" 
                                                id="password" 
                                                placeholder="Mot de passe" 
                                                autoComplete="off" 
                                                value={form.password.value} 
                                                onChange={e => handleInputChange(e)} 
                                            />
                                            {/* Error  */}
                                            {form.userName.error && <span className="msg-error">{form.password.error}</span>}
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

            {/* <div style={{minWidth:"500px", minHeight:"500px"}}>
            <box-icon name='loader' animation='spin' width="200px" color='rgba(0,0,0,0.74)' ></box-icon>
            </div> */}
        </>
    )
}

export default Login;
