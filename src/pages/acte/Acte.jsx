import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "./acte.css";
import { showDeleteModal } from '../../constants/modal';
import ModalDelete from '../../components/modal_delete/ModalDelete';
import { filterTable3Columns } from '../../helpers/searchTable';
import ActeService from '../../services/serviceActe';
import TravailService from '../../services/serviceTravail';
import FonkotanyService from '../../services/serviceFonkotany';
import CommuneService from '../../services/serviceCommune';
import DistrictService from '../../services/serviceDistrict';
import RegionService from '../../services/serviceRegion';
import { searchAddress } from '../../helpers/borderField';
import axios from 'axios';
import { makeRequest } from '../../services/axios';
import _ from 'lodash';
import * as XLSX from 'xlsx';

// import ACTES from '../../models/mock-acte';



const Acte = () => {

    const [actes, setActes] = useState([]);

    // console.log(actes);
    

    const [nomTravail, setNomTravail] = useState('');
    const [nomFonkotany, setNomFonkotany] = useState('');
    const [nomCommune, setNomCommune] = useState('');
    const [nomDistrict, setNomDistrict] = useState('');
    const [nomRegion, setNomRegion] = useState('');

    const [showListTravails, setShowListTravails] = useState([]);
    const [showListFonkotany, setShowListFonkotany] = useState(false);
    const [showListCommune, setShowListCommune] = useState(false);
    const [showListDistrict, setShowListDistrict] = useState(false);
    const [showListRegion, setShowListRegion] = useState(false);

    const [typesActe, setTypesActe] = useState([]);
    const [travails, setTravails] = useState([]);
    const [fonkotany, setFonkotany] = useState([]);
    const [communes, setCommunes] = useState([]);
    const [districts, setDistricts] = useState([]);
    const [regions, setRegions] = useState([]);

    const [error, setError] = useState(false);



    //API GET REGIONS
    useEffect(() => {
        makeRequest.get('/regions')
        .then(resp => { setRegions(resp.data); })
        .catch(error => {console.log(error);})
    }, []);
    
    //API GET DISTRICTS
    useEffect(() => {
        makeRequest.get('/districts')
        .then(resp => { setDistricts(resp.data); })
        .catch(error => {console.log(error);})
    }, []);
    
    //API GET COMMUNES
    useEffect(() => {
        makeRequest.get('/communes')
        .then(resp => { setCommunes(resp.data); })
        .catch(error => {console.log(error);})
    }, []);
    
    
    //API GET FONKOTANY
    useEffect(() => {
        makeRequest.get('/fonkotany')
        .then(resp => { setFonkotany(resp.data); })
        .catch(error => {console.log(error);})
    }, []);
    
    
    //API GET TYPES ACTES
    useEffect(() => {
        makeRequest.get('/typesActe')
        .then(resp => { setTypesActe(resp.data) })
        .catch(error => {console.log(error);})
    }, []);
    
    const [listSearch, setListSearch] = useState({
        id_type: {value: '' },
        id_fonkotany: {value: '' },
        id_commune: {value: '' },
        id_district: {value: '' },
        id_region: {value: '' }
    });


    // API GET ACTES
    // Fonction debounced pour limiter la fréquence des appels API
        useEffect(() => {
        makeRequest.get(`/actes?id=${listSearch.id_type.value}&fonkotany=${listSearch.id_fonkotany.value}&commune=${listSearch.id_commune.value}&district=${listSearch.id_district.value}&region=${listSearch.id_region.value}`)
        .then((res) => { 
            if (!res.data) {
                console.log("Aucun donnée trouvé");
                setError(false); return
            }
            setActes(res.data); 
            setError(true);
        })
        .catch((error) => { console.log(error); });
    }, [listSearch,]);
    
    
    //  INPUT CHANGE TYPE
    const handleInputChange = (e) => {
        const fieldName = e.target.name.trim();
        const fieldValue = e.target.value.trim();
        const newField = { [fieldName]: { value: fieldValue } };
        setListSearch(({ ...listSearch, ...newField }));   
    }


    //========== CHANGE LA VALEUR DE L'ID FONKOTANY CHERCHER PAR CLICK ========
    const handleClickFonkotany = (fonkotany) => {
        if (fonkotany.id_fonkotany) {
        const newField = { id_fonkotany: { value: fonkotany.id_fonkotany } };
        setListSearch({ ...listSearch, ...newField }); 
        }
        if (fonkotany.nom_fonkotany) {
            setNomFonkotany(fonkotany.nom_fonkotany);
        }
        
        setShowListFonkotany(false)
    }
    const inputChangeFonkotany = (input) => {
        setNomFonkotany(input.target.value)
        if (!nomFonkotany) {
            setListSearch(({ ...listSearch, ...{ id_fonkotany: { value: NaN } } }));
        }
    }

    // ====== CHANGE LA VALEUR DE L'ID COMMUNE CHERCHER PAR CLICK =====
    const handleClickCodeCommune = (commune) => {
        const newField = { id_commune: { value: commune.id_commune } };
        setListSearch(({ ...listSearch, ...newField })); 
        
        if (commune.nom_commune) {
            setNomCommune(commune.nom_commune);
        }
        
        setShowListCommune(false);
    }   
    const inputChangeCommune = (input) => {
        setNomCommune(input.target.value)
        if (!nomCommune) {
            setListSearch(({ ...listSearch, ...{ id_commune: { value: NaN} } }));
        }
    }

        
    //======= CHANGE VALUER DE L'ID DISTRICT PAR UN CLICK========
    const handleClickDistrict = (district) => {
        const newField = { id_district: { value: district.id_district, isValid: true } };
        setListSearch({ ...listSearch, ...newField });
        console.log(district.nom_district);
        if (district.nom_district) {
            setNomDistrict(district.nom_district);
        }
        
        setShowListDistrict(false);
    }
    const inputChangeDistrict= (input) => {
        setNomDistrict(input.target.value);
        if (!nomDistrict) {
            setListSearch(({ ...listSearch, ...{ id_district: { value: NaN} } }));
        }
    }


    //======= CHANGE VALUER DE L'ID REGION PAR UN CLICK========
    const handleClickRegion = (region) => {
        const newField = { id_region: { value: region.id_region, isValid: true } };
        setListSearch({ ...listSearch, ...newField });
        if (region.nom_region) {
            setNomRegion(region.nom_region);
        }
        
        setShowListRegion(false);
    }
    const inputChangeRegion= (input) => {
        setNomRegion(input.target.value);
        if (!nomRegion) {
            setListSearch(({ ...listSearch, ...{ id_Region: { value: NaN} } }));
        }
    }

    
    const [isDelete, setIsDelete] = useState(false)
    const [id, setId] = useState(null);
    const handleDelete = (id) => {
        setId(id);
        setIsDelete(true)
        showDeleteModal()
    }
    

    function cardActive(classe) {
        const cards = document.querySelectorAll(".card");
        cards.forEach(element => {
            element.classList.remove("active-main")
        });
        let card = document.querySelector(`#${classe}`);
        if (card.id) {
            card.classList.add("active-main");
            return true;
        }
    }

    function handleActiveCard(event) {
        const datamain = event.currentTarget.dataset.main;
        if (datamain) {
            if (cardActive(datamain)) {
                document.querySelectorAll(`.${event.target.classList[0]}`).forEach(element => {
                    element.classList.remove("active-navigate");
                });
                event.currentTarget.classList.add("active-navigate");
            }
        }
    }


    //  EXPORTER LE TABLEAU AFFICHER
    const handleOnExport = () => {
        let wa = XLSX.utils.book_new();
        let ws = XLSX.utils.json_to_sheet(actes);

        XLSX.utils.book_append_sheet(wa, ws, "Acte_de_naissance")

        XLSX.writeFile(wa, "Acte_de_naissance.xlsx")
    }

    return (
        <>
                { /* <!-- ===== HEADER CARD 1 ===== --> */}
                <header className="main-header-content">
                    <h3 className="main-header-content-title">Acte d'Etat Civil</h3>
                    <span className="main-header-content-subtitle">Soutitre page</span>
                    
                    {/* <div className="main-local-nav">
                        <ul>
                            <li className="nav-local-li card-1 active-navigate" data-main="card-1" onClick={e => handleActiveCard(e)}>Naissance</li>
                            <li className="nav-local-li card-2" data-main="card-2" onClick={e => handleActiveCard(e)}>Mariage</li>
                            <li className="nav-local-li card-3" data-main="card-3" onClick={e => handleActiveCard(e)}>Divorce</li>
                            <li className="nav-local-li card-4" data-main="card-4" onClick={e => handleActiveCard(e)}>Décé</li>
                        </ul>
                    </div> */}

                    {/* // FILTRATION DES ACTES */}
                    <div className="search-filter">
                            {/* <div>
                                <select 
                                    className="form-group-input select id_type" 
                                    name="id_type" 
                                    id="id_type" 
                                    disabled
                                    placeholder='Choisir le type'
                                    onChange={handleInputChange}
                                >
                                    {typesActe.map(type => ( 
                                        <option key={type.id_type} value={type.id_type}>{type.nom_type}</option>
                                    ))}
                                </select>
                            </div> */}
                            
                            <div>
                                <select 
                                    className="form-group-input select id_type" 
                                    name="id_type" 
                                    id="id_type" 
                                    placeholder='Choisir le fonkoany'
                                    onChange={handleInputChange}
                                >
                                    <option value=''>Selectionner le type d'acte</option>
                                    {typesActe.map(type => ( 
                                        <option key={type.id_type} value={type.id_type}>{type.nom_type}</option>
                                    ))}
                                </select>
                            </div>

                            <div className="form-group input-relative">
                                <div className='input-relative'>
                                    {/* <label htmlFor="nom_fonkotany" className="form-group-label">Fonkotany:</label> */}
                                    <input 
                                        type="text" 
                                        className="form-group-input nom_fonkotany" 
                                        name="nom_fonkotany" 
                                        id="nom_fonkotany" 
                                        placeholder="Choisir le Fonkotany chercher" 
                                        value={nomFonkotany} 
                                        onChange={(e) => inputChangeFonkotany(e)}
                                        onKeyUp={(e) => searchAddress(e.target.id, "list_fonkotany") }
                                        onFocus={() => setShowListFonkotany(true) } 
                                        // onBlur={() => hiddenList(".adrs_person")}
                                    />
                                    <ul id="list_fonkotany" className={ showListFonkotany ? "list showList":"list"}>
                                        {fonkotany.length > 0 && fonkotany?.map(fonk => (
                                        <li key={fonk.id_fonkotany}>
                                            <p onClick={() => handleClickFonkotany(fonk)} className='list-p'>
                                             {fonk.nom_fonkotany} ({fonk.code_fonkotany})
                                            </p>
                                        </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        
                            <div className="form-group">
                                <div className='input-relative'>
                                    {/* <label htmlFor="nom_commune" className="form-group-label">Commune:</label> */}
                                    <input
                                        type="text" 
                                        className="form-group-input nom_commune" 
                                        name="nom_commune"
                                        id="nom_commune"
                                        placeholder="Choisir la commune chercher"
                                        value={nomCommune} 
                                        onChange={(e) => inputChangeCommune(e)}
                                        onKeyUp={(e) => searchAddress(e.target.id, "list_communes_search") }
                                        onFocus={() => setShowListCommune(true) } 
                                    />
                                    <ul id="list_communes_search" className={showListCommune ? "list showList": "list"}>
                                        {regions.length > 0 && communes?.map(c => (
                                        <li key={c.id_commune}>
                                            <p className='list-p' onClick={() => handleClickCodeCommune(c)}>
                                                {c.nom_commune} ({c.code_commune})
                                            </p>
                                        </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div className="form-group input-relative">
                                {/* <label htmlFor="nom_district" className="form-group-label">Code District:</label> */}
                                <input
                                    type="text"
                                    className="form-group-input nom_district"
                                    name="nom_district"
                                    id="nom_district"
                                    placeholder="Selectionner la district chercher"
                                    value={nomDistrict}
                                    onChange={(e) => inputChangeDistrict(e)}
                                    onKeyUp={(e) => searchAddress(e.target.id, "list_district") }
                                    onFocus={() => setShowListDistrict(true) }
                                />
                
                                <ul id="list_district" className={ showListDistrict ? "showList list":"list"}>
                                    {districts.length > 0 && districts?.map(c => (
                                    <li key={c.id_district}>
                                        <p className='list-p' onClick={() => handleClickDistrict(c)}>
                                            {c.nom_district}({c.code_district})
                                        </p>
                                    </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="form-group input-relative">
                                {/* <label htmlFor="nom_region" className="form-group-label">Region:</label> */}
                                <input
                                    type="text"
                                    className="form-group-input nom_region"
                                    name="nom_region"
                                    id="nom_region"
                                    placeholder="Selectionner la region chercher"
                                    value={nomRegion}
                                    onChange={(e) => inputChangeRegion(e) }
                                    onKeyUp={(e) => searchAddress(e.target.id, "list_region") }
                                    onFocus={() => setShowListRegion(true) }
                                />
                                <ul id="list_region" className={ showListRegion ? "showList list":"list"}>
                                    {regions.length > 0 && regions?.map(c => (
                                    <li key={c.id_region}>
                                        <p className='list-p' onClick={() => handleClickRegion(c)}>
                                            {c.nom_region}({c.code_region})
                                        </p>
                                    </li>
                                    ))}
                                </ul>
                            </div>
                    </div>


                   <div className='right'>
                        <div className="action-local-nav">
                            <Link to='/acte-etat-civil/add'>
                                <button className="btn add-now" id="add-now">
                                    <span className="content-add-now">
                                        <box-icon className="add-now" name='plus-medical' color="#fff" ></box-icon>
                                        <span className="add-now-name">Ajouter</span>
                                    </span>
                                </button>
                            </Link>

                            <div className="search search-local-nav">
                                <label className="content-search">
                                    <box-icon name='search-alt' flip='horizontal' animation='tada' color='rgba(0,0,0,0.73)' ></box-icon>
                                    <input 
                                        className="main-search " 
                                        type="text" placeholder="chercher..." 
                                        onInput={(e) =>filterTable3Columns(e.target.value , "table-acte")}
                                    />
                                </label>
                            </div>
                        </div>
                   </div>


                   <button 
                        title='Exporter le table Afficher' 
                        className="btn add-now" id="btn-export" 
                        style={{ padding:"0.65rem" }}
                        onClick={handleOnExport}
                    >
                        <span className="content-add-now" style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:"0.5rem" }}>
                            <box-icon className="add-now" name='export' color='#fff' ></box-icon>
                            <span className="add-now-name">Exporter</span>
                        </span>
                    </button>
                </header>



                { /* <!-- ===== CARD 1 ===== --> */}
                <div className="card active-main" id="card-1">

                    { /* <!-- MAIN CARD 1 --> */}
                    {error ? (
                        <>
                        <main className="main-main-content" id="main-main-content-1">
                            <div className="table-content">
                                <table className="table" id="nom-table">
                                    <thead>
                                        <tr>
                                            <th>Nom</th>
                                            <th>Prénom</th>
                                            <th>Sexe</th>
                                            <th>Type Acte</th>
                                            <th>Date d'acte</th>
                                            <th>Date d'enregistrement</th>
                                            <th>Fonkotany</th>
                                            <th>Commune</th>
                                            <th>District</th>
                                            <th>Région</th>
                                            <th>Témoin</th>
                                            <th>Officier</th>
                                            <th>Détail</th>
                                            <th>Supprimer</th>
                                        </tr>
                                    </thead>
                                    {/* <div className="table-scroll"> */}
                                    <tbody id="table-acte">
                                        {error && actes?.map((acte) => (
                                            <tr key={acte.id_acte}>
                                                <td>{acte.nom_personne}</td>
                                                <td>{acte.prenom_personne}</td>
                                                <td>{acte.sexe_personne}</td>
                                                <td>{acte.type_acte}</td>
                                                <td>{acte.date_acte}</td>
                                                <td>{acte.date_enreg}</td>
                                                <td>{acte.fonkotany}</td>
                                                <td>{acte.commune}</td>
                                                <td>{acte.district}</td>
                                                <td>{acte.region}</td>
                                                <td>{acte.nom_temoin} {acte.prenom_temoin}</td>
                                                <td>{acte.nom_officier} {acte.prenom_officier} </td>
                                                {/* <td></td> */}
                                                <td className="td-action">
                                                    <Link to={`/acte-etat-civil/detail/${acte.id_acte}`}>
                                                        <button className="btn btn-edit" id="edit">
                                                        <box-icon name='edit-alt' type='solid' color='#fff' ></box-icon>
                                                        </button>
                                                    </Link>
                                                </td>
                                                <td className="td-action">
                                                    <button className="btn btn-delete" id="remove" onClick={() => handleDelete(acte.id_acte)}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30px" height="30px">
                                                            <path d="M 14.984375 2.4863281 A 1.0001 1.0001 0 0 0 14 3.5 L 14 4 L 8.5 4 A 1.0001 1.0001 0 0 0 7.4863281 5 L 6 5 A 1.0001 1.0001 0 1 0 6 7 L 24 7 A 1.0001 1.0001 0 1 0 24 5 L 22.513672 5 A 1.0001 1.0001 0 0 0 21.5 4 L 16 4 L 16 3.5 A 1.0001 1.0001 0 0 0 14.984375 2.4863281 z M 6 9 L 7.7929688 24.234375 C 7.9109687 25.241375 8.7633438 26 9.7773438 26 L 20.222656 26 C 21.236656 26 22.088031 25.241375 22.207031 24.234375 L 24 9 L 6 9 z" />
                                                        </svg>
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}

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
                    ):(
                        <p>Aucun donnee trouvé</p>
                    )}
                        
                </div>

                { /* <!-- ===== CARD 2 (Mariage)===== --> */}

                { /* <!-- ===== CARD 3 (Divorce)===== --> */}

                { /* <!-- ===== CARD 4 (Dece)===== --> */}

        <ModalDelete id={id} nomPage={"acte"} useDelete={[isDelete, setIsDelete]}/>
        </>
    )
}

export default Acte;
