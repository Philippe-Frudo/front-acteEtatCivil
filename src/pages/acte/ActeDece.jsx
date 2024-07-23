import React from 'react'
import { useNavigate } from 'react-router-dom';

const ActeDece = () => {
    

  const navigate = useNavigate();

  function handleClickDetail() {
    navigate("/acte-etat-civil/detail-act");
  }

  function handleClickUpdate() {
    navigate("/acte-etat-civil/update-act");
  }

    return (
        <>
            { /* <!-- MAIN CARD 1 --> */}
            <main className="main-main-content" id="main-main-content-4">
                <div className="table-content">
                    <table className="table" id="nom-table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nom</th>
                                <th>Prenom</th>
                                <th>Sexe</th>
                                <th>Adresse</th>
                                <th>Son acte</th>
                                <th>Détail</th>
                                <th>Modifier</th>
                                <th>Supprimer</th>
                            </tr>
                        </thead>
                        {/* <div className="table-scroll"> */}
                        <tbody id="body-nom-table">
                            <tr>
                                <td>1</td>
                                <td>Frudo</td>
                                <td>Philippe</td>
                                <td>M</td>
                                <td>Adresse - Fonkotany  <br />- Commune - Region</td>
                                <td>Naissace - Mariage </td>
                                <td className="td-action">
                                    <button className="btn btn-edit" id="edit" onClick={(id => handleClickDetail(id))}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                            <path d="m16 2.012 3 3L16.713 7.3l-3-3zM4 14v3h3l8.299-8.287-3-3zm0 6h16v2H4z" />
                                        </svg>
                                    </button>
                                </td>
                                <td className="td-action">
                                    <button className="btn btn-edit" id="edit" onClick={(id => handleClickUpdate(id))}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                            <path d="m16 2.012 3 3L16.713 7.3l-3-3zM4 14v3h3l8.299-8.287-3-3zm0 6h16v2H4z" />
                                        </svg>
                                    </button>
                                </td>
                                <td className="td-action">
                                    <button className="btn btn-delete" id="remove">
                                        {/* <?xml version="1.0"? > */}
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30px" height="30px">
                                            <path d="M 14.984375 2.4863281 A 1.0001 1.0001 0 0 0 14 3.5 L 14 4 L 8.5 4 A 1.0001 1.0001 0 0 0 7.4863281 5 L 6 5 A 1.0001 1.0001 0 1 0 6 7 L 24 7 A 1.0001 1.0001 0 1 0 24 5 L 22.513672 5 A 1.0001 1.0001 0 0 0 21.5 4 L 16 4 L 16 3.5 A 1.0001 1.0001 0 0 0 14.984375 2.4863281 z M 6 9 L 7.7929688 24.234375 C 7.9109687 25.241375 8.7633438 26 9.7773438 26 L 20.222656 26 C 21.236656 26 22.088031 25.241375 22.207031 24.234375 L 24 9 L 6 9 z" />
                                        </svg>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Frudo</td>
                                <td>Philippe</td>
                                <td>M</td>
                                <td>Adresse - Fonkotany  <br />- Commune - Region</td>
                                <td>Naissace - Mariage </td>
                                <td className="td-action">
                                    <button className="btn btn-edit" id="edit" onClick={(id => handleClickDetail(id))}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                            <path d="m16 2.012 3 3L16.713 7.3l-3-3zM4 14v3h3l8.299-8.287-3-3zm0 6h16v2H4z" />
                                        </svg>
                                    </button>
                                </td>
                                <td className="td-action">
                                    <button className="btn btn-edit" id="edit" onClick={(id => handleClickUpdate(id))}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                            <path d="m16 2.012 3 3L16.713 7.3l-3-3zM4 14v3h3l8.299-8.287-3-3zm0 6h16v2H4z" />
                                        </svg>
                                    </button>
                                </td>
                                <td className="td-action">
                                    <button className="btn btn-delete" id="remove">
                                        {/* <?xml version="1.0"? > */}
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30px" height="30px">
                                            <path d="M 14.984375 2.4863281 A 1.0001 1.0001 0 0 0 14 3.5 L 14 4 L 8.5 4 A 1.0001 1.0001 0 0 0 7.4863281 5 L 6 5 A 1.0001 1.0001 0 1 0 6 7 L 24 7 A 1.0001 1.0001 0 1 0 24 5 L 22.513672 5 A 1.0001 1.0001 0 0 0 21.5 4 L 16 4 L 16 3.5 A 1.0001 1.0001 0 0 0 14.984375 2.4863281 z M 6 9 L 7.7929688 24.234375 C 7.9109687 25.241375 8.7633438 26 9.7773438 26 L 20.222656 26 C 21.236656 26 22.088031 25.241375 22.207031 24.234375 L 24 9 L 6 9 z" />
                                        </svg>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Frudo</td>
                                <td>Philippe</td>
                                <td>M</td>
                                <td>Adresse - Fonkotany  <br />- Commune - Region</td>
                                <td>Naissace - Mariage </td>
                                <td className="td-action">
                                    <button className="btn btn-edit" id="edit" onClick={(id => handleClickDetail(id))}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                            <path d="m16 2.012 3 3L16.713 7.3l-3-3zM4 14v3h3l8.299-8.287-3-3zm0 6h16v2H4z" />
                                        </svg>
                                    </button>
                                </td>
                                <td className="td-action">
                                    <button className="btn btn-edit" id="edit" onClick={(id => handleClickUpdate(id))}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                            <path d="m16 2.012 3 3L16.713 7.3l-3-3zM4 14v3h3l8.299-8.287-3-3zm0 6h16v2H4z" />
                                        </svg>
                                    </button>
                                </td>
                                <td className="td-action">
                                    <button className="btn btn-delete" id="remove">
                                        {/* <?xml version="1.0"? > */}
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30px" height="30px">
                                            <path d="M 14.984375 2.4863281 A 1.0001 1.0001 0 0 0 14 3.5 L 14 4 L 8.5 4 A 1.0001 1.0001 0 0 0 7.4863281 5 L 6 5 A 1.0001 1.0001 0 1 0 6 7 L 24 7 A 1.0001 1.0001 0 1 0 24 5 L 22.513672 5 A 1.0001 1.0001 0 0 0 21.5 4 L 16 4 L 16 3.5 A 1.0001 1.0001 0 0 0 14.984375 2.4863281 z M 6 9 L 7.7929688 24.234375 C 7.9109687 25.241375 8.7633438 26 9.7773438 26 L 20.222656 26 C 21.236656 26 22.088031 25.241375 22.207031 24.234375 L 24 9 L 6 9 z" />
                                        </svg>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Frudo</td>
                                <td>Philippe</td>
                                <td>M</td>
                                <td>Adresse - Fonkotany  <br />- Commune - Region</td>
                                <td>Naissace - Mariage </td>
                                <td className="td-action">
                                    <button className="btn btn-edit" id="edit" onClick={(id => handleClickDetail(id))}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                            <path d="m16 2.012 3 3L16.713 7.3l-3-3zM4 14v3h3l8.299-8.287-3-3zm0 6h16v2H4z" />
                                        </svg>
                                    </button>
                                </td>
                                <td className="td-action">
                                    <button className="btn btn-edit" id="edit" onClick={(id => handleClickUpdate(id))}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                            <path d="m16 2.012 3 3L16.713 7.3l-3-3zM4 14v3h3l8.299-8.287-3-3zm0 6h16v2H4z" />
                                        </svg>
                                    </button>
                                </td>
                                <td className="td-action">
                                    <button className="btn btn-delete" id="remove">
                                        {/* <?xml version="1.0"? > */}
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30px" height="30px">
                                            <path d="M 14.984375 2.4863281 A 1.0001 1.0001 0 0 0 14 3.5 L 14 4 L 8.5 4 A 1.0001 1.0001 0 0 0 7.4863281 5 L 6 5 A 1.0001 1.0001 0 1 0 6 7 L 24 7 A 1.0001 1.0001 0 1 0 24 5 L 22.513672 5 A 1.0001 1.0001 0 0 0 21.5 4 L 16 4 L 16 3.5 A 1.0001 1.0001 0 0 0 14.984375 2.4863281 z M 6 9 L 7.7929688 24.234375 C 7.9109687 25.241375 8.7633438 26 9.7773438 26 L 20.222656 26 C 21.236656 26 22.088031 25.241375 22.207031 24.234375 L 24 9 L 6 9 z" />
                                        </svg>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Frudo</td>
                                <td>Philippe</td>
                                <td>M</td>
                                <td>Adresse - Fonkotany  <br />- Commune - Region</td>
                                <td>Naissace - Mariage </td>
                                <td className="td-action">
                                    <button className="btn btn-edit" id="edit" onClick={(id => handleClickDetail(id))}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                            <path d="m16 2.012 3 3L16.713 7.3l-3-3zM4 14v3h3l8.299-8.287-3-3zm0 6h16v2H4z" />
                                        </svg>
                                    </button>
                                </td>
                                <td className="td-action">
                                    <button className="btn btn-edit" id="edit" onClick={(id => handleClickUpdate(id))}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                            <path d="m16 2.012 3 3L16.713 7.3l-3-3zM4 14v3h3l8.299-8.287-3-3zm0 6h16v2H4z" />
                                        </svg>
                                    </button>
                                </td>
                                <td className="td-action">
                                    <button className="btn btn-delete" id="remove">
                                        {/* <?xml version="1.0"? > */}
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30px" height="30px">
                                            <path d="M 14.984375 2.4863281 A 1.0001 1.0001 0 0 0 14 3.5 L 14 4 L 8.5 4 A 1.0001 1.0001 0 0 0 7.4863281 5 L 6 5 A 1.0001 1.0001 0 1 0 6 7 L 24 7 A 1.0001 1.0001 0 1 0 24 5 L 22.513672 5 A 1.0001 1.0001 0 0 0 21.5 4 L 16 4 L 16 3.5 A 1.0001 1.0001 0 0 0 14.984375 2.4863281 z M 6 9 L 7.7929688 24.234375 C 7.9109687 25.241375 8.7633438 26 9.7773438 26 L 20.222656 26 C 21.236656 26 22.088031 25.241375 22.207031 24.234375 L 24 9 L 6 9 z" />
                                        </svg>
                                    </button>
                                </td>
                            </tr>

                        </tbody>
                        {/* </div> */}
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
                        <span id="nbr-table">2</span>
                    </span>
                    <span className="next">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path d="M10.061 19.061 17.121 12l-7.06-7.061-2.122 2.122L12.879 12l-4.94 4.939z" />
                        </svg>
                    </span>
                </div>
            </div>

        </>
    )
}

export default ActeDece
