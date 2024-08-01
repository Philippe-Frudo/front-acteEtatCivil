import React, { useEffect, useState } from 'react'
import { messageValidator, searchAddress, successBorder } from '../../helpers/borderField';
import { showList, hiddenList } from './../../helpers/borderField';
// import ADDRESSES from '../../models/mock-address';
// import TRAVAILS from './../../models/mock-travail'
// import FONKOTANY from '../../models/mock-fonkotany';
import FonkotanyService from '../../services/serviceFonkotany';
import TravailService from '../../services/serviceTravail';
import CommuneService from '../../services/serviceCommune';

const FormActe = ({ useFormActe }) => {
      
  const [travails, setTravails] = useState([]);
  const [fonkotany, setFonkotany] = useState([]);
  const [communes, setCommunes] = useState([]);
  const [nomCommune, setNomCommune] = useState("");

  
  useEffect(() => {
      TravailService.getTravail().then(travails => setTravails(travails));
      FonkotanyService.getFonkotany().then(fonkotany => setFonkotany(fonkotany));
      CommuneService.getCommune().then(communes => setCommunes(communes));
  },[]);


    const [formActe, setFormActe] = useFormActe;
    const handleInputChange = (e) => {

      const fieldName = e.target.name.trim();
      const fieldValue = e.target.value.trim();
      const newField = { [fieldName]: { value: fieldValue } };

      setFormActe(prevState => ({ ...prevState, ...newField }));
      if (fieldName) {
        successBorder(`.${fieldName}`);
        messageValidator(`.${fieldName}`, "");
      }
  }

  const handleInputChangeCommune = (e) => {
    setNomCommune(e.target.value);

    if (!e.target.value) {
      const newField = { code_commune: { value: "" } };  
      setFormActe(prevState => ({ ...prevState, ...newField }));
    }
  }

  //========== CHANCGE INPUT FIELD nom COMMUNE ==========
  const handleSetCodeCommune = (address) => {

    const newField = { code_commune: { value: address.code_commune } };
    setFormActe(prevState => ({ ...prevState, ...newField })); 

    setNomCommune(address.nom_commune);
    
    hiddenList(".list_adrs_acte");
  }

  
//========== CHANCGE INPUT FIELD nom_fonkontany ==========
  const [fieldFonkotany, setFieldFonkotany] = useState("");
  const handleInputChangeFonkotany = (e) => {
    setFieldFonkotany(e.target.value);

    if (!fieldFonkotany) {
      formActe.id_fonkotany.value = 0;
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

//========== CHANCGE INPUT FIELD PROFESSION ==========
  const [fieldTravail, setFieldTravail] = useState("");
  const handleInputChangeTravailTemoin = (e) => {
    setFieldTravail(e.target.value);
  }

  const handleClickTravail = (travail) => {
    setFieldTravail(travail.nom_travail);
    hiddenList(".list_profession_temion");
  }

  return (
    <>
      <div className="content-mere">
        <h3 className="card-acte">Acte</h3>
        <fieldset>
          <div >
            <label htmlFor="type_acte" className="form-group-label">Type d'acte:</label>
            <select className="form-group-input select type_acte" name="type_acte" id="type_acte" onChange={handleInputChange}>
              <option value='1'>Naissance</option>
              <option value='2'>Mariage</option>
              <option value='3'>Divorce</option>
            </select>
            <span className="msg-error"></span>
          </div>

          <div className="form-group form-group-2">
            <div>
              <label htmlFor="date_acte" className="form-group-label">Date de l'acte:</label>
              <input 
                type="date" 
                className="form-group-input date_acte" 
                name="date_acte" id="date_act" 
                placeholder="Date de l'acte" 
                value={formActe.date_acte.value} 
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
                placeholder="Heure de l'acte" 
                value={formActe.heure_acte.value} 
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
                placeholder="Lieu de l'acte" 
                value={formActe.lieu_acte.value} 
                onChange={handleInputChange} 
              />
              <span className="msg-error"></span>
            </div>
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
                value={formActe.date_enreg.value} 
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
                value={formActe.heure_enreg.value} 
                onChange={handleInputChange} 
              />
              <span className="msg-error"></span>
            </div>
          </div>

          <div className="form-group">
            <div style={{position:"relative"}}>
                <label htmlFor="nom_fonkotany" className="form-group-label">Fonkotany:</label>
                <input 
                  type="text" 
                  className="form-group-input nom_fonkotany" 
                  name="nom_fonkotany" 
                  id="nom_fonkotany" 
                  placeholder="Fonkotany" 
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
                          {fonk.nom_fonkotany} code commune({fonk.code_commune})
                        </p>
                      </li>
                    ))}
                </ul>

                <span className="msg-error"></span>
            </div>

          </div>

          <div className="form-group">
                <div style={{position:"relative"}}>
                    <label htmlFor="nom_commune" className="form-group-label">Commune:</label>
                    <input
                      type="text" 
                      className="form-group-input nom_commune" 
                      name="nom_commune"
                      id="nom_commune"
                      placeholder="Commune" 
                      value={nomCommune} 
                      onChange={handleInputChangeCommune}
                      onKeyUp={(e) => searchAddress(e.target.id, "list_adrs_acte") }
                      onFocus={() => showList(".list_adrs_acte") } 
                      // onBlur={() => hiddenList(".adrs_person")}
                    />

                    <ul id="list_adrs_acte" className="list list_adrs_acte">
                        {communes?.map(c => (
                          <li key={c.code_commune}>
                            <p className='list-p' onClick={() => handleSetCodeCommune(c)}>
                              {c.code_commune} &nbsp;
                              {c.nom_commune} &nbsp;
                              {c.code_district} &nbsp;
                            </p>
                          </li>
                        ))}
                    </ul>

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
                      placeholder="Nom" 
                      value={formActe.nom_temoin.value} 
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
                      placeholder="Prénom" 
                      value={formActe.prenom_temoin.value} 
                      onChange={handleInputChange}
                    />
                    <span className="msg-error"></span>
                </div>
            </div>

            <div className="form-group form-group-2">
                <div>
                    <label htmlFor="date_nais_temoin" className="form-group-label">Date de Naissance:</label>
                    <input 
                      type="date" 
                      className="form-group-input date_nais_temoin" 
                      name="date_nais_temoin" 
                      id="date_nais_temoin" 
                      placeholder="Date de naissance" 
                      value={formActe.date_nais_temoin.value} 
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
                      placeholder="Age" 
                      value={formActe.age_temoin.value ? formActe.age_temoin.value:""} 
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
                      placeholder="Lieu de naissance" 
                      value={formActe.lieu_nais_temoin.value} 
                      onChange={handleInputChange}
                    />
                    <span className="msg-error"></span>
                </div>
            </div>

            <div className="form-group">
                <div >
                    <label htmlFor="" className="form-group-label sexe_temoin">Sexe:</label>
                    <label className="sex-group">
                        <input type="radio" name="sexe_temoin" id="sexe_temoin" className="form-group-input sex_F" value="F" defaultChecked onChange={handleInputChange} onClick={(e) => { handleSex(e) }} />Feminin
                    </label>
                    <label className="sex-group">
                        <input type="radio" name="sexe_temoin" id="sexe_temoin" className="form-group-input sex_temoin" value="M" onChange={handleInputChange} onClick={(e) => { handleSex(e) }} />Masculin
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
                      placeholder="Adresse" 
                      value={formActe.adrs_temoin.value} 
                      onChange={handleInputChange}
                    />
                    <span className="msg-error"></span>
                </div>
            </div>

            <div className="form-group">
              <div style={{position:"relative"}}>
                  <label htmlFor="profession_temoin" className="form-group-label">Profession temoin:</label>
                  <input 
                    type="text" 
                    className="form-group-input profession_temoin" 
                    name="profession_temoin" 
                    id="profession_temoin" 
                    placeholder="profession" 
                    value={fieldTravail} 
                    onChange={handleInputChangeTravailTemoin}
                    onKeyUp={(e) => searchAddress(e.target.id, "list_profession_temion") }
                    onFocus={() => showList(".list_profession_temion") } 
                    // onBlur={() => hiddenList(".adrs_person")}
                  />
                  <ul id="list_profession_temion" className="list list_profession_temion">
                      {travails?.map(trav => (
                        <li key={trav.id_travail}>
                          <p onClick={() => handleClickTravail(trav)} className='list-p'>
                            {trav.nom_travail}
                          </p>
                        </li>
                      ))}
                  </ul>

                  <span className="msg-error"></span>
              </div>
            </div>

        </fieldset>
      </div>
    </>
  )
}

export default FormActe
