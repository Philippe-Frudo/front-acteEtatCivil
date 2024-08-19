import React, { useEffect, useState } from 'react'
import { messageValidator, searchAddress, successBorder } from '../../helpers/borderField';
import { showList, hiddenList } from './../../helpers/borderField';
import handleSex from '../../constants/sexe';
import { makeRequest } from '../../services/axios';
// import ADDRESSES from '../../models/mock-address';
// import TRAVAILS from './../../models/mock-travail'
// import FONKOTANY from '../../models/mock-fonkotany';
// import FonkotanyService from '../../services/serviceFonkotany';
// import TravailService from '../../services/serviceTravail';
// import CommuneService from '../../services/serviceCommune';
// import ActeService from '../../services/serviceActe';
// import Auth from '../../services/Auth';

const FormActe = ({ useFormActe, user }) => {

  const [formActe, setFormActe] = useFormActe;
  const [typesActe, setTypesActes] = useState([]);
  const [travails, setTravails] = useState([]);
  const [fonkotany, setFonkotany] = useState([]);
  const [communes, setCommunes] = useState([]);
  const [nomCommune, setNomCommune] = useState("");


      //API GET TYPES ACTES
    useEffect(() => {
        makeRequest.get('/typesActe')
        .then(resp => { setTypesActes(resp.data) })
        .catch(error => {console.log(error);})
    }, []);
    

    //API GET TRAVAIL
    useEffect(() => {
      makeRequest.get('/travails')
      .then(resp => { setTravails(resp.data) })
      .catch(error => {console.log(error);})
    }, []);
    

    
    //API GET FONKOTANY
    useEffect(() => {
        makeRequest.get(`/fonkotany`)
        .then(resp => { 
            if (!resp.data) {
              console.log(resp);
              setError(false) 
            }else {
              if (!user.isAdmin) {
                const newFonkotany  = resp.data.filter(item => item.id_commune == user.commune)
                setFonkotany(newFonkotany)
                return;
              } else {
                setFonkotany(resp.data); 
                return
              }
            }
        })
        .catch(error => {console.log(error);})  
    },[user]);



    //API GET  COMMUNES
    useEffect(() => {
      makeRequest.get('/communes')
      .then(resp => { setCommunes(resp.data); })
      .catch(error => {console.log(error);})
    }, [])

      
    const handleInputChange = (e) => {
      const fieldName = e.target.name.trim();
      const fieldValue = e.target?.value.trim();
      const newField = { [fieldName]: { value: fieldValue } };
      setFormActe(prevState => ({ ...prevState, ...newField })); 
      if (fieldName !== "sexe_temoin") {
        successBorder(`.${fieldName}`);
        messageValidator(`.${fieldName}`);
      } 
      // console.log(formActe[fieldName]?.value);
      
    } 


  //========== CHANGE ON CLICK TRAVAIL PROFESSION ==========
  const handleClickTravailTemoin = (trav) => {
    const newField = { profession_temoin: { value: trav.nom_travail } };
    setFormActe(prevState => ({ ...prevState, ...newField })); 
    hiddenList(".list_profession_temion");
  }


  //==========INPUT  CHANGE value FIELD nom COMMUNE ==========
  const inputChangeCommune = (e) => {
    setNomCommune(e.target?.value);
    
    //Si le champ est null id_commune est null
    if (!e.target?.value) {
      const newField = { id_commune: { value: '' } };  
      setFormActe(prevState => ({ ...prevState, ...newField }));
    }
  }


  // ======CHANGE ID CIMMUNE PAR UN CLICK DE NOM COMMUNE=====
  const handleSetCodeCommune = (commune) => {
    const newField = { id_commune: { value: commune.id_commune } };
    setFormActe(prevState => ({ ...prevState, ...newField })); 

    setNomCommune(commune.nom_commune);
    
    hiddenList(".list_adrs_acte");
  }

  
//========== CHANCGE INPUT FIELD nom_fonkontany ==========
  const [fieldFonkotany, setFieldFonkotany] = useState("");
  const handleInputChangeFonkotany = (e) => {
    setFieldFonkotany(e.target?.value);

    if (!fieldFonkotany) {
      formActe.id_fonkotany.value = "";
    }
  }

  const handleClickFonkotany = (fonkotany) => {
    if (fonkotany.id_fonkotany) {
      const newField = { id_fonkotany: { value: fonkotany.id_fonkotany } };
      setFormActe(prevState => ({ ...prevState, ...newField })); 
      formActe.id_fonkotany.value = fonkotany.id_fonkotany;
    }
      
    if (fonkotany.nom_fonkotany) {
       setFieldFonkotany(fonkotany.nom_fonkotany + "(" + fonkotany.code_fonkotany + ")");
      }
    hiddenList(".nom_fonkotany_acte")
  }

  //  AFFECTER LE NOM FONKOTANY TROUVE
  useEffect(() => {
    let res = fonkotany.find(fonk => fonk.id_fonkotany === formActe.id_fonkotany?.value);
    if (res) {
      setFieldFonkotany(res.nom_fonkotany);
    } 
    // else { console.log('Fonkotany non trouvé.'); }
  }, [formActe, fonkotany]);
  

  //  AFFECTER LE NOM COMMUNE TROUVE
  useEffect(() => {
    let res = communes.find(com => com.id_commune === formActe.id_commune?.value);
    if (res) {
      setNomCommune(res.nom_commune);
    } 
    // else { console.log('Commune non trouvé.'); }
  }, [formActe, communes]);
  

  
  
  useEffect(() => {
    if (!formActe.date_nais_m?.value) {
      setFormActe(prevState => ( { ...prevState, ...{ age_m: {value: ''} } }) )
    }
  }, [formActe.date_nais_m?.value])


  useEffect(() => {
    if (!formActe.date_nais_p?.value) {
      setFormActe(prevState => ( { ...prevState, ...{ age_p: {value: ''}} }) )
    }
  }, [formActe.date_nais_p?.value])


  
  useEffect(() => {
    if (!formActe.date_nais_temoin?.value) {
      setFormActe(prevState => ( { ...prevState, ...{ age_temoin: {value: ''}} }) )
    }
  }, [formActe.date_nais_temoin?.value])

  



  return (
    <>
      <div className="content-mere">
        <h3 className="card-acte">Acte</h3>
        <fieldset>
          <div >
            <label htmlFor="id_type" className="form-group-label">Type d'acte:</label>
            <select 
              className="form-group-input select id_type" 
              name="id_type" 
              id="id_type" 
              disabled
              value={formActe.id_type?.value}
              onChange={handleInputChange}
            >
              {/* <option value=''>Selectionner le type d'acte</option> */}
              {typesActe.map(type => ( 
                  <option key={type.id_type} value={type.id_type}>{type.nom_type}</option>
              ))}
            </select>
            <span className="msg-error"></span>
          </div>

          <div className="form-group">
            <div>
              <label htmlFor="num_acte" className="form-group-label">Numéro d'acte:</label>
              <input 
                type="text" 
                className="form-group-input num_acte" 
                name="num_acte" id="num_acte" 
                placeholder="numéro" 
                autoComplete='off'
                value={formActe.num_acte?.value}
                onChange={handleInputChange} 
              />
              <span className="msg-error"></span>
            </div>
          </div>
          <div className="form-group form-group-2">
            <div>
              <label htmlFor="date_acte" className="form-group-label">Date de l'acte:</label>
              <input 
                type="date" 
                className="form-group-input date_acte" 
                name="date_acte" id="date_acte" 
                placeholder="date" 
                value={formActe.date_acte?.value} 
                onChange={handleInputChange} 
              />
              <span className="msg-error"></span>
            </div>
            
            <div>
              <label htmlFor="heure_acte" className="form-group-label">Heure:</label>
              <input 
                type="time" 
                className="form-group-input heure_acte" 
                name="heure_acte" id="heure_acte" 
                placeholder="heure" 
                value={formActe.heure_acte?.value} 
                onChange={handleInputChange} 
              />
              <span className="msg-error"></span>
            </div>
          </div>
          
          <div className="form-group">
            <div>
              <label htmlFor="lieu_acte" className="form-group-label">Lieu d'acte:</label>
              <input 
                type="text" 
                className="form-group-input lieu_acte" 
                name="lieu_acte" id="lieu_acte" 
                placeholder="appartement, lieu, rue" 
                value={formActe.lieu_acte?.value} 
                onChange={handleInputChange} 
              />
              <span className="msg-error"></span>
            </div>
          </div>
          
          <div className="form-group">
            <div className='input-relative'>
                <label htmlFor="nom_fonkotany" className="form-group-label">Fonkotany:</label>
                <input 
                  type="text" 
                  className="form-group-input nom_fonkotany" 
                  name="nom_fonkotany" 
                  id="nom_fonkotany" 
                  placeholder="fonkotany" 
                  value={fieldFonkotany} 
                  onChange={handleInputChangeFonkotany}
                  onKeyUp={(e) => searchAddress(e.target.id, "list_fonkotany") }
                  onFocus={() => showList(".nom_fonkotany_acte") } 
                  // onBlur={() => hiddenList(".adrs_person")}
                />
                <ul id="list_fonkotany" className="list nom_fonkotany_acte">
                    {fonkotany?.map(fonk => (
                      <li key={fonk.id_fonkotany}>
                        <p onClick={() => handleClickFonkotany(fonk)} className='list-p'>
                        {fonk.nom_fonkotany}({fonk.code_fonkotany})
                        </p>
                      </li>
                    ))}
                </ul>

                <span className=""><i>Assurez-vous de sélectionner le fonkotany</i></span>
                <span className="msg-error"></span>
            </div>

          </div>

          <br />
          <div className="form-group">
                <div style={{position:"relative"}}>
                    <label htmlFor="nom_commune" className="form-group-label">Commune:</label>
                    <input
                      type="text" 
                      className="form-group-input nom_commune" 
                      name="nom_commune"
                      id="nom_commune"
                      placeholder="commune" 
                      value={nomCommune} 
                      onChange={inputChangeCommune}
                      onKeyUp={(e) => searchAddress(e.target.id, "list_adrs_acte") }
                      onFocus={() => showList(".list_adrs_acte") } 
                      // onBlur={() => hiddenList(".adrs_person")}
                    />

                    <ul id="list_adrs_acte" className="list list_adrs_acte">
                        {communes?.map(c => (
                          <li key={c.id_commune}>
                            <p className='list-p' onClick={() => handleSetCodeCommune(c)}>
                              {c.code_commune} &nbsp;
                              {c.nom_commune} &nbsp;
                              {c.code_district} &nbsp;
                            </p>
                          </li>
                        ))}
                    </ul>

                    <span className=""><i>Assurez-vous de sélectionner la commune.</i></span>
                    <span className="msg-error"></span>
                </div>
                <br />
          </div>

          <div className="form-group form-group-2">
            <div>
              <label htmlFor="date_enreg" className="form-group-label">Date d'enregistrement d'acte:</label>
              <input 
                type="date" 
                className="form-group-input date_enreg"
                name="date_enreg" 
                id="date_enreg" 
                placeholder="Date d'enregistrement d'acte" 
                value={formActe.date_enreg?.value} 
                onChange={handleInputChange} 
               />
              <span className="msg-error"></span>
            </div>
            <div>
              <label htmlFor="heure_enreg" className="form-group-label">Heure d'enregistrement:</label>
              <input 
                type="time" 
                className="form-group-input heure_enreg" 
                name="heure_enreg" 
                id="heure_enreg" 
                placeholder="Heure d'enregistrement d'acte" 
                value={formActe.heure_enreg?.value} 
                onChange={handleInputChange} 
              />
              <span className="msg-error"></span>
            </div>
          </div>

        </fieldset>
      </div>

      <div className="content-mere">
        <h3 className="card-acte">Témoin</h3>
        <fieldset>

            <div className="form-group form-group-2">
                <div>
                    <label htmlFor="nom_temoin" className="form-group-label">Nom:</label>
                    <input 
                      type="text" 
                      className="form-group-input nom_temoin" 
                      name="nom_temoin" 
                      id="nom_temoin" 
                      placeholder="nom" 
                      value={formActe.nom_temoin?.value} 
                      onChange={handleInputChange}
                    />
                    <span className="msg-error"></span>
                </div>

                <div>
                    <label htmlFor="prenom_temoin" className="form-group-label">Prénom:</label>
                    <input 
                      type="text" 
                      className="form-group-input prenom_temoin" 
                      name="prenom_temoin" id="prenom_temoin" 
                      placeholder="prénom" 
                      value={formActe.prenom_temoin?.value} 
                      onChange={handleInputChange}
                    />
                    <span className="msg-error"></span>
                </div>
            </div>

            <div className="form-group form-group-2">
                <div>
                    <label htmlFor="date_nais_temoin" className="form-group-label">Date de naissance:</label>
                    <input 
                      type="date" 
                      className="form-group-input date_nais_temoin" 
                      name="date_nais_temoin" 
                      id="date_nais_temoin" 
                      placeholder="date de naissance" 
                      value={formActe.date_nais_temoin?.value} 
                      onChange={handleInputChange}
                    />
                    <span className="msg-error"></span>
                </div>

                <div>
                    <label htmlFor="age_temoin" className="form-group-label">Age:</label>
                    <input 
                      type="text" 
                      className="form-group-input age_temoin" 
                      name="age_temoin" 
                      id="age_temoin" 
                      placeholder="age" 
                      value={formActe.age_temoin?.value ? formActe.age_temoin?.value:""} 
                      onChange={handleInputChange} 
                      disabled
                    />
                    <span className="msg-error"></span>
                </div>
            </div>

            <div className="form-group">
                <div>
                    <label htmlFor="lieu_nais_temoin" className="form-group-label">Lieu de naissance:</label>
                    <input 
                      type="text" 
                      className="form-group-input lieu_nais_temoin" 
                      name="lieu_nais_temoin" 
                      id="lieu_nais_temoin" 
                      placeholder="appartement, nom du lieu, fonkotany, commune,..." 
                      value={formActe.lieu_nais_temoin?.value} 
                      onChange={handleInputChange}
                    />
                    <span className="msg-error"></span>
                </div>
            </div>

            <div className="form-group">
                <div >
                    <label htmlFor="" className="form-group-label sexe_temoin">Sexe:</label>
                    <label className="sex-group">
                        <input type="radio" 
                        name="sexe_temoin" 
                        id="sexe_temoin" 
                        className="form-group-input sex_F" 
                        value="F" 
                        defaultChecked 
                        onChange={handleInputChange} 
                        onClick={(e) => { handleSex(e) }} 
                        />Feminin
                    </label>
                    <label className="sex-group">
                        <input type="radio" 
                        name="sexe_temoin" 
                        id="sexe_temoin" 
                        className="form-group-input sex_temoin" 
                        value="M" onChange={handleInputChange} 
                        onClick={(e) => { handleSex(e) }} 
                        />Masculin
                    </label>
                </div>
            </div>

            <div className="form-group">
                <div>
                    <label htmlFor="adrs_temoin" className="form-group-label">Adresse:</label>
                    <input 
                      type="text" 
                      className="form-group-input adrs_temoin" 
                      name="adrs_temoin" 
                      id="adrs_temoin" 
                      placeholder="adresse complète"
                      value={formActe.adrs_temoin?.value} 
                      onChange={handleInputChange}
                    />
                    <span className="msg-error"></span>
                </div>
            </div>

            <div className="form-group">
              <div style={{position:"relative"}}>
                  <label htmlFor="profession_temoin" className="form-group-label">Profession:</label>
                  <input 
                    type="text" 
                    className="form-group-input profession_temoin" 
                    name="profession_temoin" 
                    id="profession_temoin" 
                    placeholder="seléctionner le travail" 
                    value={formActe.profession_temoin?.value} 
                    onChange={handleInputChange}
                    onKeyUp={(e) => searchAddress(e.target.id, "list_profession_temion") }
                    onFocus={() => showList(".list_profession_temion") } 
                    // onBlur={() => hiddenList(".adrs_person")}
                  />
                  <ul id="list_profession_temion" className="list list_profession_temion">
                      {travails?.map(trav => (
                        <li key={trav.id_travail}>
                          <p onClick={() => handleClickTravailTemoin(trav)} className='list-p'>
                            {trav.nom_travail}
                          </p>
                        </li>
                      ))}
                  </ul>
                  <span className=""><i>Assurez-vous de sélectionner le travail</i></span>
                  <span className="msg-error"></span>
              </div>
            </div>

        </fieldset>
      </div>
    </>
  )
}

export default FormActe
