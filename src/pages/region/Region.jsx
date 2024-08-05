import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { filterTable3Columns } from '../../helpers/searchTable';
import Regionservice from '../../services/serviceRegion';
// import  REGION from '../../helpers/mock-region';
// import "region.css";

const Region = () => {

  const [regions, setRegions] = useState([]);
  useEffect(() => {
    Regionservice.getRegion().then(regions => setRegions(regions));
  }, []);


  return (
    <>
          { /* <!-- ===== CARD 1 ===== --> */}
          <div className="card active-main" id="card-1">
            { /* <!-- ===== HEADER CARD 1 ===== --> */}
            <header className="main-header-content">
              <h3 className="main-header-content-title">Région</h3>
              <span className="main-header-content-subtitle">Soutitre page</span>
              <div className="main-local-nav">
                <div className="action-local-nav">

                  <Link to='/region/add'>
                    <button className="btn add-now" id="add-now">
                      <span className="content-add-now" >
                        <svg className="add-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                          <path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z" />
                        </svg>
                        <span className="add-now-name" id='add-adresse'>Ajouter</span>
                      </span>
                    </button>
                  </Link>

                  <label htmlFor='add-file' className="btn add-file" id="add-file">
                    <span className="content-add-now" >
                      {/* <input type='file' className="add-now-name" id='add-file' /> */}
                      <span>Importer de fichier</span>
                    </span>
                  </label>

                  <div className="search search-local-nav">
                    <label className="content-search">
                    <box-icon name='search-alt' flip='horizontal' animation='tada' color='rgba(0,0,0,0.73)' ></box-icon>
                      <input className="main-search " type="text" placeholder="chercher..."  onInput={(e) =>filterTable3Columns(e.target.value , "table-region")}/>
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
                      <th>Code</th>
                      <th>Nom</th>
                      <th>Modifier</th>
                      <th>Supprimer</th>
                    </tr>
                  </thead>
                  {/* <div className="table-scroll"> */}
                  <tbody id="table-region">
                    {regions?.map(c => (
                        <tr key={c.id_region}>
                          <td>{c.code_region}</td>
                          <td>{c.nom_region}</td>
                          <td className="td-action">
                            <Link to={`/region/edit/${c.id_region}`}>
                                <button className="btn btn-edit" id="edit">
                                <box-icon name='edit-alt' type='solid' color='#fff' ></box-icon>
                                </button>
                            </Link>
                          </td>
                          <td className="td-action">
                              <button className="btn btn-delete" id="remove" >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30px" height="30px">
                                  <path d="M 14.984375 2.4863281 A 1.0001 1.0001 0 0 0 14 3.5 L 14 4 L 8.5 4 A 1.0001 1.0001 0 0 0 7.4863281 5 L 6 5 A 1.0001 1.0001 0 1 0 6 7 L 24 7 A 1.0001 1.0001 0 1 0 24 5 L 22.513672 5 A 1.0001 1.0001 0 0 0 21.5 4 L 16 4 L 16 3.5 A 1.0001 1.0001 0 0 0 14.984375 2.4863281 z M 6 9 L 7.7929688 24.234375 C 7.9109687 25.241375 8.7633438 26 9.7773438 26 L 20.222656 26 C 21.236656 26 22.088031 25.241375 22.207031 24.234375 L 24 9 L 6 9 z" />
                                </svg>
                              </button>
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
                <h3> Nombre total : <span className="nbr">10</span></h3>
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
                    <span id="nbr-table">3</span>
                    <span id="nbr-table">.</span>
                    <span id="nbr-table">.</span>
                    <span id="nbr-table">.</span> --> */}
                </span>
                <span className="next">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M10.061 19.061 17.121 12l-7.06-7.061-2.122 2.122L12.879 12l-4.94 4.939z" />
                  </svg>
                </span>
              </div>
            </div>
          </div>

          { /* <!-- ===== CARD 2 ===== --> */}
          <div className="card" id="card-2">
            <main className="main-main-content" id="main-main-content-2">CARD 2</main>
          </div>

        {/* <FormAddRegion />
        <FormUpdateRegion /> */}

    </>
  )
}

export default Region
