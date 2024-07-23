import { useState } from "react";
import FormCreateUser from "../register/FormCreateUser";
import { Link } from "react-router-dom";

const Login = () => {
    // const [isRegister, setIsRegister] = useState(false);
    // localStorage.setItem("status", isRegister);

    return (
        <>
            <section className="section container" style={{ marginTop: "6rem" }}>
                <div className="modal container-authentication">
                    <h3 className="modal-title" style={{ color: '#000', marginBottom: "10px" }}>Authentification</h3>
                    <span className="modal-subtitle" style={{ color: '#000' }}>Vous allez directement vers la page</span>
                    <div className="container-message">
                        <p className="message"></p>
                    </div>
                    <form action="" method="post" className="form-authentification" id="loginForm">
                        {/* Message . status: success or error*/}
                        <div className="alert-message {/*status*/}" >
                            <span className='message'></span>
                        </div>

                        <div className="content-authentification">
                            <div>
                                <div className="form-group">
                                    <div>
                                        <label htmlFor="username" className="form-group-label">Username</label>
                                        <input type="text" className="form-group-input username" name="username" id="username" placeholder="Nom d'utilisateur" autoComplete="false" />
                                        <span className="msg-error"></span>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div>
                                        <label htmlFor="password" className="form-group-label">Mot de passe</label>
                                        <input type="password" className="form-group-input password" name="password" id="password" placeholder="Mot de passe" autoComplete="false" />
                                        <span className="msg-error"></span>
                                    </div>
                                </div>
                                <div style={{ textAlign: "center", marginTop: "10px" }}>
                                    <button style={{ width: "100%" }} type="submit" className="btn btn-connect" id="connect">Se connecter</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div>
                    <Link style={{ cursor: "pointer", marginTop: "1.5rem", fontSize: "1.5rem", textDecoration: "underline" }} to="/register">Registre</Link>
                </div>
            </section>
        </>
    )
}

export default Login;
