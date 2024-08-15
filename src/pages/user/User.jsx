import React, { useEffect, useState } from 'react';
import "./user.css";

import ModalDelete from '../../components/modal_delete/ModalDelete';
import { filterTable10Columns } from '../../helpers/searchTable';
import { showDeleteModal } from '../../constants/modal';
import { makeRequest } from '../../services/axios';
// import OfficierService from '../../services/serviceOfficier';


const Officier = () => {

    const [message, setMessage] = useState('');
    const [accept, setAccept] = useState(false);

    const [officier, setOfficier] = useState([]);
    const count = officier.length
    
    //API GET COMMUNES
    useEffect(() => {
        makeRequest.get('/officiers')
        .then(resp => { 
            if (!resp.data) {
                console.log(resp);
                return
            }
            setOfficier(resp.data); 
            setAccept(false)
        })
        .catch(error => {console.log(error);})
    }, [accept]);


    // console.log(officier);
    

    const [isDelete, setIsDelete] = useState(false)
    const [id, setId] = useState(null);

    const handleDelete = (id) => {
        setId(id);
        setIsDelete(true)
        showDeleteModal()
    }

    // ===== API CONFIRM L'UTILISATEUR =====

    const handleConfirm = (id) => {
         // Appel API Authentification
        makeRequest.post(`/officiers/confirm`, { id: id }, 
          { 
            headers: {"Content-Type":"application/json" } 
          }
      )
      .then(response => {
          if ( !response.data) {
                setError(true)
              console.log("Aucun donnée à trouver")
              console.log(response);
              setMessage(response.data);
              return;
            }
            console.log(response);
            setAccept(true)
            
            setMessage(response.data);
      })
      .catch(error => {
          console.error(error);
      });
    }

    
    
    const subjectConfirm = encodeURIComponent("Confirmation d'officier(utilisateur)");
    const subjectDelete = encodeURIComponent("Confirmation d'officier(utilisateur)");

    return (
        <>
                    { /* <!-- ===== CARD 1 ===== --> */}
                    <div className="card active-main" id="card-1">
                        { /* <!-- ===== HEADER CARD 1 ===== --> */}
                        <header className="main-header-content">
                            <h3 className="main-header-content-title">Utilisateur</h3>
                            <span className="main-header-content-subtitle">Soutitre page</span>
                            <div className="main-local-nav">

                                <div className="action-local-nav">

                                    {/* <Link to="/Officier/add" >
                                        <button className="btn add-now" id="add-now">
                                            <span className="content-add-now" >
                                                <box-icon className="add-now" name='plus-medical' color="#fff" ></box-icon>
                                                <span className="add-now-name" id='add-adresse'>Ajouter</span>
                                            </span>
                                        </button>
                                    </Link> */}

                                    <div className="search search-local-nav">
                                        <label className="content-search">
                                            <box-icon name='search-alt' flip='horizontal' animation='tada' color='rgba(0,0,0,0.73)' ></box-icon>
                                            <input className="main-search " type="text" placeholder="chercher..." onInput={(e) =>filterTable10Columns(e.target.value , "table-Officier")}/>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </header>

                        { /* <!-- MAIN CARD 1 --> */}
                        <main className="main-main-content" id="main-main-content-1">
                            <div className="table-content">
                                <table className="table" id="nom-table">
                                    <thead>
                                        <tr>
                                            <th>Profile</th>
                                            <th>Nom</th>
                                            <th>Prenom</th>
                                            <th>Sexe</th>
                                            <th>Email</th>
                                            <th>Commune</th>
                                            <th>District</th>
                                            <th>Région</th>
                                            <th>Supprimer</th>
                                            <th>Confirmer</th>
                                        </tr>
                                    </thead>
                                    <tbody id="table-Officier">
                                        {officier?.map(f => (
                                            <tr key={f.id_off}>
                                                <td>
                                                    <p className="link isConnect" style={{ display:"initial" }}>
                                                        {f.isConnect ? (
                                                            <span id='connect' className="connect" title='connecter'></span>    
                                                        ):(<span className="disConnect" title='déconnecter'></span>)
                                                        }
)
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                            <path fill="#000" d="M7.5 6.5C7.5 8.981 9.519 11 12 11s4.5-2.019 4.5-4.5S14.481 2 12 2 7.5 4.019 7.5 6.5zM20 21h1v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h17z" />
                                                        </svg>
                                                    </p>
                                                </td>
                                                <td>{f.nom_off}</td>
                                                <td>{f.prenom_off}</td>
                                                <td>{f.sexe_off}</td>
                                                <td>{f.email_off}</td>
                                                <td>{f.nom_commune}</td>
                                                <td>{f.nom_district}</td>
                                                <td>{f.nom_region}</td>

                                  
                                              <td className="td-action">
                                                  <button className="btn btn-delete" id="remove"  onClick={() => handleDelete(f.id_off)}>
                                                  <a href={`mailto:${f.email_off}?subject=${encodeURIComponent("Suppression de compte.")}&body=${encodeURIComponent("Votre compte est supprimé par l'administrateur.") }` }> 
                                                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="20px" height="20px">
                                                          <path d="M 14.984375 2.4863281 A 1.0001 1.0001 0 0 0 14 3.5 L 14 4 L 8.5 4 A 1.0001 1.0001 0 0 0 7.4863281 5 L 6 5 A 1.0001 1.0001 0 1 0 6 7 L 24 7 A 1.0001 1.0001 0 1 0 24 5 L 22.513672 5 A 1.0001 1.0001 0 0 0 21.5 4 L 16 4 L 16 3.5 A 1.0001 1.0001 0 0 0 14.984375 2.4863281 z M 6 9 L 7.7929688 24.234375 C 7.9109687 25.241375 8.7633438 26 9.7773438 26 L 20.222656 26 C 21.236656 26 22.088031 25.241375 22.207031 24.234375 L 24 9 L 6 9 z" />
                                                      </svg>
                                                  </a>
                                                  </button>
                                              </td>
                                              <td className="td-action">
                                                  {f.isConfirm == 1 ? (
                                                    <>
                                                        <button className="btn btn-edit" id="remove" title='Déjà confirmé' style={{ cursor:"default" }} disabled>
                                                                <box-icon name='check-double' color='#fff'></box-icon>
                                                        </button>
                                                    </>
                                                    ):(
                                                        <button 
                                                        className="btn btn-edit" 
                                                        id="edit" title='confirmer' 
                                                        onClick={() => handleConfirm(f.id_off)}
                                                        >
                                                        <a href={`mailto:${f.email_off}?subject=${subjectConfirm}&body=${encodeURIComponent("Bonjour! vous pouvez vous connecter à votre compte. vous avez été confirmé") }` }> 
                                                        <box-icon name='check' color='#fff' ></box-icon>
                                                        </a>
                                                    </button>
                                                    )
                                                  }
                                              </td>
                                          </tr>
                                            )
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </main>
                        
                        <div className="status-table">
                            <div>
                                <h3> Nombre total : <span className="nbr">{count}</span></h3>
                            </div>
                            <div className="next-prev">
                                <span className="previous">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                        <path d="M13.939 4.939 6.879 12l7.06 7.061 2.122-2.122L11.121 12l4.94-4.939z" />
                                    </svg>
                                </span>
                                <span className="nbr-table">
                                    <span id="nbr-table">1</span>
                                    { /* <!-- <span id="nbr-table">2</span>
                                  <span id="nbr-table">3</span>*/}
                                </span>
                                <span className="next">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                        <path d="M10.061 19.061 17.121 12l-7.06-7.061-2.122 2.122L12.879 12l-4.94 4.939z" />
                                    </svg>
                                </span>
                            </div>
                        </div>
                    </div>

            <ModalDelete id={id} nomPage={"officier"} useDelete={[isDelete, setIsDelete]} setData={setOfficier}/>
        </>
    )
}

export default Officier;
