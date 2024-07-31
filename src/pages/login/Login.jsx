import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {errorBorder, successBorder} from "./../../helpers/borderField";
// import "./login.css";


const Login = () => {

    let navigate = useNavigate()

    const [form, setForm] = useState(
        {
            userName: { value: "" },
            password: { value: "" }
        }
    );

    const [message, setMessage] = useState("Vous etes deconnecte. {philippe / philippe}");

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


    /* const validateForm = () => {
         let newForm = form;
 
         //Validator Username
         if (form.userName.value.length < 3) {
             errorBorder(".userName");
             const errorMsg = "Votre prenom doit faire au moins 3 caractére de long";
             const newField = { value: form.userName.value, error: errorMsg, isValid: false };
             newForm = { ...form, ...{ userName: newField } }
         } else {
             successBorder(".userName");
             const newField = { value: form.userName.value, error: "", isValid: true }
             newForm = { ...form, ...{ userName: newField } }
         }
 
         //Validator password
         if (form.password.value.length < 6) {
             errorBorder(".password");
             const errorMsg = "Votre mot de passe doit faire au moins 6 caractére de long.";
             const newField = { value: form.password.value, error: errorMsg, isValid: false };
             newForm = { ...form, ...{ password: newField } }
         } else {
             successBorder(".password");
             const newField = { value: form.password.value, error: "", isValid: true };
             newForm = { ...form, ...{ password: newField } };
         }
 
         setForm(newForm);
         console.log("Username " + form.userName.isValid);
         console.log("Pwd " + form.password.isValid);
         return form.userName.isValid && form.password.isValid;
     }*/

    const validateForm = () => {
        let newForm = { ...form };

        // Validator Username
        if (form.userName.value.length < 3) {
            errorBorder(".userName");
            newForm.userName = { value: form.userName.value, error: "Votre prenom doit faire au moins 3 caractères de long", isValid: false };
        } else {
            successBorder(".userName");
            newForm.userName = { value: form.userName.value, error: "", isValid: true };
        }

        // Validator Password
        if (form.password.value.length < 6) {
            newForm.password = { value: form.password.value, error: "Votre mot de passe doit faire au moins 6 caractères de long.", isValid: false };
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
            // API(Laraver)
           /* AuthentificationService.login(form.userName.value, form.password.value)
                .then(isAuthenticated => {
                    if (!isAuthenticated) {
                        setMessage("Identifiant ou mot de passe incorrect.");
                        return;
                    }
                    console.log(message);
                    navigate("/dashboard");
                });*/
        }
    }


    return (
        <>
            <section className="section container">
                <div className="modal container-authentication" >
                    <h3 className="modal-title" style={{ color: '#000', marginBottom: "10px" }}>Authentification</h3>
                    <span className="modal-subtitle" style={{ color: '#000' }}>Vous allez directement vers la page</span>

                    {/* <div className="container-message">
                        <p className="message">{AlertMessage}</p>
                    </div> */}
                    <div>

                        <form className="form-authentification" id="loginForm" onSubmit={e => handleSubmit(e)}>

                            {/* Message . status: success or error*/}
                            <div className=" {/*status*/}" style={{margin: "1rem 0"}}>
                                {/* Error  */}
                                {message && <span className='message'>{message}</span>}
                            </div>

                            <div className="content-authentification">
                                <div>
                                    <div className="form-group-login">
                                        <div>
                                            <label htmlFor="userName" className="form-group-label">Username</label>
                                            <input type="text" className="form-group-input userName" name="userName" id="userName" placeholder="Nom d'utilisateur" autoComplete="off" value={form.userName.value} onChange={e => handleInputChange(e)} />
                                            {/* Error  */}
                                            {form.userName.error && <span className="msg-error">{form.userName.error}</span>}
                                        </div>
                                    </div>

                                    <div className="form-group-login" id="form-group">
                                        <div>
                                            <label htmlFor="password" className="form-group-label">Mot de passe</label>
                                            <input type="password" className="form-group-input password" name="password" id="password" placeholder="Mot de passe" autoComplete="off" value={form.password.value} onChange={e => handleInputChange(e)} />
                                            {/* Error  */}
                                            {form.userName.error && <span className="msg-error">{form.password.error}</span>}
                                        </div>
                                    </div>

                                    <div style={{ textAlign: "center", marginTop: "30px" }}>
                                        {/* Submit button */}
                                        <button style={{ width: "100%" }} type="submit" className="btn btn-connect" id="connect">Se connecter</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                        <div style={{ textAlign: "start", marginTop: "10px" }}>
                            <Link style={{ cursor: "pointer", marginTop: "1.5rem", fontSize: "1.5rem", textDecoration: "underline" }} to="/register"> Registre </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Login;
