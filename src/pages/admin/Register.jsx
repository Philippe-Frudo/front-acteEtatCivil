import { useRef, useState, useEffect } from "react";
import Axios from "../../api/Axios";


const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const REGISTER_URL = "/register";

const Register = () => {
    
    // const userRef = useRef(null);
    // const errRef = useRef(null);

    const [user, setUser] = useState("");
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    const [pwd, setPwd] = useState("");
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState("");
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);
    
    const [errorMsg, setErrorMsg] = useState("");
    const [success, setSuccess] = useState(false);

    // useEffect( () => {
    //     if (userRef.current) {
    //         userRef.current.focus();
    //       }
    // }, []);

    useEffect( () => {
        const result = USER_REGEX.test(user);
        console.log(result);
        console.log(user);
        setValidName(result);
    }, [user]);

    useEffect( () => {
        const result = PWD_REGEX.test(user);
        console.log(result);
        console.log(pwd);
        setValidPwd(result);
        const match = pwd === matchPwd;
        setValidPwd(match);
    }, [pwd, matchPwd]);

    useEffect( () => {
        setErrorMsg("");
    }, [user, pwd, matchPwd]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        // If button enable with JS hack
        const v1 = USER_REGEX.test(user);
        const v2 = PWD_REGEX.test(pwd);

        if (!v1 || !v2) {
            setErrorMsg("Invalide Entry");
            return;
        }

        try {
            const response = await Axios.post(
                REGISTER_URL, 
                JSON.stringify(user, pwd),
                {
                    headers:{"Content-Type":"application/json"},
                    withCredentials: true
                }
            );
            console.log(response.data);
            console.log(response.accessToken);
            console.log(JSON.stringify(response))
            setSuccess(true)
            // Clear input fields

        } catch (err) {
            if (!err?.response) {
                setErrorMsg("No Server response")
            } else if (err.response?.status === 409 ) {
                setErrorMsg("Username Taken")
                
            } else {
                setErrorMsg("Registration Felaid")
            }
            errRef.current.focus()
        }
    }

  return (
    <>
    {success ? (
        <section>
            <h1>Success !</h1>
            <p>
                <a href="#">Sign In</a>
            </p>
        </section>
    ): (
        <section>
        <p className={errorMsg ? "errorMsg" : "offscreen"}></p>
        <h1>Enregistrement</h1>

        <form>
            <span>
                <label htmlFor="username">
                    Username
                    <span className={validName ? "valid":"hide" }>
                        {/* icon-check */}
                    </span>
                    <span className={(validName || !user) ? "hide":"invalid" }>
                        {/* icon-time(X) */}
                    </span>
                </label>
                <input 
                type="text" 
                id="username" 
                // ref={useRef}
                autoComplete="off"
                onChange={(e) => setUser(e.target.value)}
                required
                aria-invalid = {validName ? "false":"true"}
                aria-describedby="uidnote"
                onFocus={() => setUserFocus(true)}
                onBlur={() => setUserFocus(false)}
                />
                <p 
                id="uidnote" 
                className={userFocus && user && !validName ? "instructions":"offscreen"}>
                    {/* Icon-svg infoCircle */}
                    4 à 24 charactères. <br /> 
                    Obligqtoire commencer par de:. <br /> 
                    Lettre, nombre, underscores, trait d'union.
                </p>
            </span>

            <span>
                <label htmlFor="password">
                    Password
                    <span className={validPwd ? "valid":"hide" }>
                        {/* icon-check */}
                    </span>
                    <span className={(validPwd || !pwd) ? "hide":"invalid" }>
                        {/* icon-time(X) */}
                    </span>
                </label>
                <input 
                type="password" 
                id="password" 
                onChange={(e) => setPwd(e.target.value)}
                required
                aria-invalid = {validPwd ? "false":"true"}
                aria-describedby="pwdnote"
                onFocus={() => setPwdFocus(true)}
                onBlur={() => setPwdFocus(false)} 
                />
                <p 
                id="pwdnote" 
                className={pwdFocus && !validPwd ? "instructions":"offscreen"}>
                    {/* Icon-svg infoCircle */}
                    8 à 24 charactères. <br /> 
                    inclut obligatoirement de MAJ et Min lettres, de nombre et de chaine de caractere. <br /> 
                    Autoriser de caractere special de special caractere: 
                    <span aria-label="exclamation mark">!</span>.
                    <span aria-label="at symbol ">@</span>.
                    <span aria-label="hashtag">#</span>.
                    <span aria-label="percent">%</span>.
                    <span aria-label="dollar sign">$</span>.
                </p>
            </span>

            <span>
                <label htmlFor="confirm_pwd">
                    CConfirm mot de passe
                    <span className={validMatch && validMatch ? "valid":"hide" }>
                        {/* icon-check */}
                    </span>
                    <span className={(validMatch || !pwd) ? "hide":"invalid" }>
                        {/* icon-time(X) */}
                    </span>
                </label>
                <input 
                type="password" 
                id="confirm_pwd" 
                onChange={(e) => setMatchPwd(e.target.value)}
                required
                aria-invalid = {validPwd ? "false":"true"}
                aria-describedby="confirmnote"
                onFocus={() => setMatchFocus(true)}
                onBlur={() => setMatchFocus(false)} 
                />
                <p 
                id="confirmnote" 
                className={matchFocus && !validMatch ? "instructions":"offscreen"}>
                    {/* Icon-svg infoCircle */}
                    Le mot de passe est obligatoirement la meme au-dessus.
                </p>
            </span>

            <button disabled={ !validName || !validPwd || !validMatch ? true : false} >Sing Up</button>
        </form>
        <p>
            Already registered ?
            <span className="line">
                {/* Input Router link here */}
                <a href="#">Sing In</a>
            </span>
        </p>

        </section>

    )

    }
    </>
  )
}

export default Register
