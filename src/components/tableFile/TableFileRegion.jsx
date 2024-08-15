import React, { useState } from 'react'
// import RegionService from '../../services/serviceRegion';
// import DistrictService from '../../services/serviceDistrict';
// import CommuneService from '../../services/serviceCommune';
// import FonkotanyService from '../../services/serviceFonkotany';
// import ActeService from '../../services/serviceActe';
// import TravailService from '../../services/serviceTravail';
import { makeRequest } from '../../services/axios';
// import PersonneService from '../../services/servicePersonne';

const TableFileRegion = ({useData, useAccept, nameFile}) => {
    console.log(nameFile);
    
    const [dataFile, setDataFile] = useData;
    const[acceptFile, setAcceptFile] = useAccept;
    

    const handaleClickBack = ()=> {
        setAcceptFile(false)
        setDataFile(null);
        setDataFile([])
    }


    const [status, setStatus] = useState(false);
    const [message, setMessage] = useState(null);
    
    const handleAddFile = (name) => {

        switch(name){
            case "travail" :
                    console.log("Data File travail:", dataFile);
                   
                    makeRequest.post(`/addAlltravail`, dataFile, {
                        headers: {"Content-Type": "application/json"}
                    })
                    .then(resp => { 
                        if (resp.data.status) {
                            console.log(resp); 
                            setStatus(resp.data.status);
                            setMessage(resp.data.rejeter)
                            return;
                        }
                        setMessage("L'ajout des donneés du fichier est tous succés")
                    })
                    .catch(error => console.log(error) )  
                
                break;

            case "région" :
                    console.log("Data File region:", dataFile);
                   
                    makeRequest.post(`/addAllRegion`, dataFile, {
                        headers: {"Content-Type": "application/json"}
                    })
                    .then(resp => { 
                        if (resp.data.status) {
                            console.log(resp); 
                            setStatus(resp.data.status);
                            setMessage(resp.data.rejeter)
                            return;
                        }
                        setMessage("L'ajout des donneés du fichier est tous succés")
                    })
                    .catch(error => console.log(error) )  
                
                break;

            case "district" :

                    console.log("Data File disrict:", dataFile);
                    makeRequest.post(`/addAlldistrict`, dataFile, {
                        headers: {"Content-Type": "application/json"}
                    })
                    .then(resp => { 
                        if (resp.data.status) {
                            console.log(resp); 
                            setStatus(resp.data.status);
                            setMessage(resp.data.rejeter)
                            return;
                        }
                        setMessage("L'ajout des donneés du fichier est tous succés")
                    })
                    .catch(error => console.log(error) );
                
                break;

            case "commune" :
                    console.log("Data File commune:", dataFile);
                    makeRequest.post(`/addAllCommune`, dataFile, {
                        headers: {"Content-Type": "application/json"}
                    })
                    .then(resp => { 
                        if (resp.data.status) {
                            console.log(resp); 
                            setStatus(resp.data.status);
                            setMessage(resp.data.rejeter)
                            return;
                        }
                        setMessage("L'ajout des donneés du fichier est tous succés")
                    })
                    .catch(error => console.log(error) )  

                break;

            case "fonkotany":
                    console.log("Data File fonkotany:", dataFile);

                    makeRequest.post(`/addAllfonkotany`, dataFile, {
                        headers: {"Content-Type": "application/json"}
                    })
                    .then(resp => { 
                        if (resp.data.status) {
                            console.log(resp); 
                            setStatus(resp.data.status);
                            setMessage(resp.data.rejeter)
                            return;
                        }
                        setMessage("L'ajout des donneés du fichier est tous succés")
                    })
                    .catch(error => console.log(error) )  

                break;
            
            default: 
            setMessage('Fichier non identifier');
        }
    }

    const lenghtColumn = dataFile.length
    // console.log(Object.keys(dataFile[0]).map((v, i, n)=>  console.log(n)) )
    // console.log( Object.keys(dataFile[0]));
   
  return (
    <>
        <div className="modal add-modal active-modal" style={{ width:"100%" }}>
    {dataFile ? (
            <div className="modal-container" style={{ maxHeight: '90vh', overflowY:"auto", overflowX:"none" }}>
                <div className="modal-header">
                    <div>
                        <h3 className="modal-title">Le contenu du fichier {nameFile}</h3>
                        <span className="modal-subtitle"></span>
                    </div>
                    <div>
                        <button className="btn btn-close" id="close-modale-add" onClick={handaleClickBack} >X</button>
                    </div>
                </div>
                    <div className="">
                        {status ? (
                            !message ? 
                                (<span className='message success'>{message}</span>):
                                (<span className='message error'>
                                    {message.length >1 ? 
                                    'Les fichiers existent déjà dans la base de donnee: ':'Le fichier existe déj dans la base de donnee: '
                                    }
                                     {message}
                                </span>)
                        ):(null)

                        }
                    </div>

                    { /* <!-- MAIN CARD 1 --> */}
                <main className="main-main-content" id="main-main-content-1">
                <div className="table-content">
                    <table className="table" id="nom-table">
                        {lenghtColumn > 2 ? 
                        (
                        <>
                            <thead>
                                <tr>
                                    <th>Code</th>
                                    <th>Nom</th>
                                    <th>code {nameFile}</th>
                                </tr>
                            </thead>
                            <tbody id="table-region" className='table-scroll'>
                                {Array.isArray(dataFile) && dataFile.length > 0 ? (
                                    dataFile.map((rows, index) => (
                                    <tr key={index}>
                                    { Object.values(rows).map((value, index) => (
                                            <td key={index}>{value}</td>
                                    )) }
                                    </tr>
                                ))
                                ) : (
                                    <tr>
                                        <td colSpan="2">Aucune donnée disponible</td>
                                    </tr>
                                )}
                            </tbody>
                        </>
                        ):(
                        <>
                            <thead>
                                <tr>
                                    <th>Code</th>
                                    <th>Nom</th>
                                </tr>
                            </thead>
                            <tbody id="table-region" className='table-scroll'>
                                {Array.isArray(dataFile) && dataFile.length > 0 ? (
                                    dataFile.map((rows, index) => (
                                    <tr key={index}>
                                    { Object.values(rows).map((value, index) => (
                                            <td key={index}>{value}</td>
                                    )) }
                                    </tr>
                                ))
                                ) : (
                                    <tr>
                                        <td colSpan="2">Aucune donnée disponible</td>
                                    </tr>
                                )}
                            </tbody>
                        </>
                         )}
                    </table>

                    
                </div>
                    <button 
                    className="btn add-now" id="add-now" 
                    style={{ padding:"0.5rem 0.8rem", marginTop:"0.5rem" }}
                    onClick={() => handleAddFile(nameFile)}
                    >
                      <span className="content-add-now" style={{ display:"flex", alignItems:"center", gap:"0.5rem"}}>
                       
                        <box-icon  className="add-icon" name='save' type='solid' color='#fff'></box-icon>
                        <span className="add-now-name" id='add-adresse'>Enregistrer</span>
                      </span>
                    </button>
                </main>
            
            </div>

):(
        <>
            Telechargement
        </>
    )
    
}
</div>
</>
  )
}

export default TableFileRegion
