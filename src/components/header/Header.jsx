import React, { useEffect, useState } from "react";
import DataNav from "./../../constants/dataLinks";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../Logo";
// import {logo_instat} from './../../assets/logo_instat';
// import Nav from "./../nav/Nav";
import "./header.css";
import Auth from "../../services/Auth";

const Header = () => {

    // ====== AUTHENTIFICATION ======
    const auth = new Auth();

    const [user, setUser] = useState([])

    //=== API DET FORMATION UTILISATEUR (Officier) ===
    useEffect(() => {
        Auth.getFormation()
            .then(resp => {
                if (!resp || !resp.data) {  
                    console.log('Utilisateur non identifié');
                    return;
                }
                setUser(resp.data);
            });
    }, []);

;
    const navigate = useNavigate();
    
    function logout(e) {
        e.preventDefault()
        if ( Auth.logOut()) {
            navigate('/');
            console.log("Logout");  
        }
    }
  

    let [isOn, setIsOn] = useState(false);
    function handleToggle() {
        setIsOn(!isOn);
    }

    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [screenHeight, setScreenHeight] = useState(window.innerHeight);

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
            setScreenHeight(window.innerHeight);
        };
        window.addEventListener('resize', handleResize);
        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    function handleClick() {
        if (isOn) {
            setIsOn(!isOn);
        }
        document.querySelector(".header").classList.remove("header-top");
    }

    function hideMenu() {
        document.querySelector(".header").classList.remove("header-top");
    }

    const navs = ["/dashboard", "/acte-etat-civil", "/fonkotany" ]

    const filterData = DataNav.filter(data => navs.includes(data.root) )
    
    
    return (
        <>
            <header className={isOn ? "header max-header" : "header"}>
                <div className={isOn ? "menu menu-right" : "menu"} >
                    <svg onClick={handleToggle} className={isOn ? "show-details active-rotate" : "show-details"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path d="M10.061 19.061 17.121 12l-7.06-7.061-2.122 2.122L12.879 12l-4.94 4.939z" />
                    </svg>
                </div>
                <span >
                    <div className="header-content header-content-1">
                        <div className={isOn ? "logo flex-start" : "logo"}>
                            <div className="">
                                <Logo/>
                            </div>
                            <div className={isOn ? "logo-name show-details-menu" : "logo-name"}>
                                <h3 className="logo-tagName">INSTAT</h3>
                            </div>
                        </div>
                    </div>

                    <div className="header-content header-content-2">
                        <div className={isOn ? "nav flex-start" : "nav"}>

                            {/* Nvigation */}
                            <nav className="card-link">
                                <ul className="ul">
                                    {user.isAdmin ? (
                                        <>
                                        {DataNav.map((data) => {
                                            return (
                                                <li className="ul-li" key={data.id}>
                                                    <Link to={data.root} className="link" onClick={handleClick}>
                                                        <span dangerouslySetInnerHTML={{ __html: data.svg }} />
                                                        <span className={isOn ? "link-name show-details-menu" : "link-name"} id="link-name">{data.name}</span>
                                                    </Link>
                                                </li>
                                            )
                                        })}
                                        </>
                                        
                                    ):(
                                        <>
                                        {filterData.map((data) => {
                                            return (
                                                <li className="ul-li" key={data.id}>
                                                    <Link to={data.root} className="link" onClick={handleClick}>
                                                        <span dangerouslySetInnerHTML={{ __html: data.svg }} />
                                                        <span className={isOn ? "link-name show-details-menu" : "link-name"} id="link-name">{data.name}</span>
                                                    </Link>
                                                </li>
                                            )
                                        })}
                                        </>

                                    )}
                                </ul>
                            </nav>

                        </div>
                    </div>
                    
                    <div className="header-content header-content-3">
                        <div className={isOn ? "card-user border-card-user" : "card-user"}>
                            <div className={isOn ? "card-user-img flex-start" : "card-user-img"}>
                                <div className="remove-menu" onClick={hideMenu}>
                                    X
                                </div>
                                <div className="card-user-info">
                                    <a href="#" className="link user-image">
                                        {user.connect && <span className="connect" id="connect"></span>}
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                            <path fill="#fff" d="M7.5 6.5C7.5 8.981 9.519 11 12 11s4.5-2.019 4.5-4.5S14.481 2 12 2 7.5 4.019 7.5 6.5zM20 21h1v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h17z" />
                                        </svg>
                                    </a>

                                    <p className={isOn ? "user-name show-details-menu" : "user-name"} id="fullname">{user?.nom} <br /> {user?.prenom}</p>
                                    <p className={isOn ? "user-email show-details-menu" : "user-email"}>{user?.email}</p>
                                </div>
                                <h3 className="logout" id="logout">
                                    <a href="" className="link link-logout" id="logout" onClick={logout}>
                                        <svg className="logout" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                            <path d="M16 13v-2H7V8l-5 4 5 4v-3z" /><path d="M20 3h-9c-1.103 0-2 .897-2 2v4h2V5h9v14h-9v-4H9v4c0 1.103.897 2 2 2h9c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2z" />
                                        </svg>
                                        <span className="logout-name">Déconnexion</span>
                                    </a>
                                </h3>
                            </div>
                        </div>
                    </div>
                </span>
            </header>
        </>

    )
}

export default Header
