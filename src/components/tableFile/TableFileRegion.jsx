import React, { useState } from 'react'
import RegionService from '../../services/serviceRegion';


const TableFileRegion = ({useData, useAccept}) => {
    const [dataFile, setDataFile] = useData;
    const[acceptFile, setAcceptFile] = useAccept;
    

    const handaleClickBack = ()=> {
        setAcceptFile(false)
        setDataFile(null);
    }

    const [message, setMessage] = useState("");
    
    const addRegion = () => {
        console.log("Data File region:", dataFile);
        RegionService.addObjectRegion(dataFile).then(response => setMessage(response));
    }

  return (
    <>
        <div className="modal add-modal active-modal" style={{ width:"100%" }}>
    {dataFile ? (
            <div className="modal-container" style={{ maxHeight: '90vh' }}>
                <div className="modal-header">
                    <div>
                        <h3 className="modal-title">Le contenu du fichier</h3>
                        <span className="modal-subtitle"></span>
                    </div>
                    <div>
                        <button className="btn btn-close" id="close-modale-add" onClick={handaleClickBack} >X</button>
                    </div>
                </div>

                    <div className="">
                        {message ? 
                            (<span className='message success'>{message}</span>):
                            (<span className='message error'>{message}</span>)
                        }
                    </div>

                    { /* <!-- MAIN CARD 1 --> */}
                <main className="main-main-content" id="main-main-content-1">
                <div className="table-content">
                    <table className="table" id="nom-table">
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
                    </table>

                    
                </div>
                    <button 
                    className="btn add-now" id="add-now" 
                    style={{ padding:"0.5rem 0.8rem", marginTop:"0.5rem" }}
                    onClick={addRegion}
                    >
                      <span className="content-add-now" style={{ display:"flex", alignItems:"center"}}>
                        <svg className="add-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                          <path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z" />
                        </svg>
                        <span className="add-now-name" id='add-adresse'>Ajouter</span>
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
