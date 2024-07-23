import React from 'react'
// import "./main_top.css";

const MainTop = () => {

    function showNav() {
        document.querySelector(".header").classList.add("header-top");
    }
  return (
    
    <>
        <div className="main-container main-container-1">
            <div className="main-header">
                <div className="main-header-left title">
                    <span>
                        <h2 className="main-title">TITRE</h2>
                        <span className="main-subtitle">Sous Titre</span>
                    </span>
                    <span className="btn-show-menu-icon" onClick={showNav}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"/>
                        </svg>
                    </span>
                </div>
                <div className="main-header-right">
                    <div className="search">
                        <label className="content-search">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M19.023 16.977a35.13 35.13 0 0 1-1.367-1.384c-.372-.378-.596-.653-.596-.653l-2.8-1.337A6.962 6.962 0 0 0 16 9c0-3.859-3.14-7-7-7S2 5.141 2 9s3.14 7 7 7c1.763 0 3.37-.66 4.603-1.739l1.337 2.8s.275.224.653.596c.387.363.896.854 1.384 1.367l1.358 1.392.604.646 2.121-2.121-.646-.604c-.379-.372-.885-.866-1.391-1.36zM9 14c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z"/>
                            </svg>
                            <input className="main-search" type="text" placeholder="chercher..." />
                        </label>
                    </div>
                    <div className="notification">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path d="M19 13.586V10c0-3.217-2.185-5.927-5.145-6.742C13.562 2.52 12.846 2 12 2s-1.562.52-1.855 1.258C7.185 4.074 5 6.783 5 10v3.586l-1.707 1.707A.996.996 0 0 0 3 16v2a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-2a.996.996 0 0 0-.293-.707L19 13.586zM19 17H5v-.586l1.707-1.707A.996.996 0 0 0 7 14v-4c0-2.757 2.243-5 5-5s5 2.243 5 5v4c0 .266.105.52.293.707L19 16.414V17zm-7 5a2.98 2.98 0 0 0 2.818-2H9.182A2.98 2.98 0 0 0 12 22z"/>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default MainTop
