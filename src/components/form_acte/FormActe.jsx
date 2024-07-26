import React from 'react'
import { messageValidator, successBorder } from '../../helpers/borderField';
import { showList, hiddenList, searchAdress } from './../../helpers/borderField';
import { ADDRESS } from '../../models/mock-address';
const FormActe = ({ useFormActe }) => {

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

  const setAddressPerson = (adrs) => {
    for (let [key, val] of Object.entries(adrs)) {
        const address = ["code_commune", "code_district", "code_region"]
        if (address.includes(key)) {
            const newField = { [key]: { value: val } };
            setFormActe(prevState => ({ ...prevState, ...newField })); 
            formActe[key].value = val
        }
    } 

    hiddenList(".adrs_enreg")
}


  return (
    <>
      <div className="content-mere">
        <h3 className="card-acte">Acte</h3>
        <fieldset>
          <div >
            <label htmlFor="type_acte" className="form-group-label">Type d'acte:</label>
            <select className="form-group-input select type_acte" name="type_acte" id="type_acte" onChange={handleInputChange}>
              <option value={formActe.id_acte.value ? formActe.id_acte.value : ""}>Naissance</option>
              <option value={formActe.id_acte.value ? formActe.id_acte.value : ""}>Mariage</option>
              <option value={formActe.id_acte.value ? formActe.id_acte.value : ""}>Divorce</option>
            </select>
            <span className="msg-error"></span>
          </div>
          <div className="form-group">
            <div>
              <label htmlFor="lieu_acte" className="form-group-label">Lieu d'acte:</label>
              <input type="text" className="form-group-input lieu_acte" name="lieu_acte" id="lieu_acte" placeholder="Lieu de l'acte" value={formActe.lieu_acte.value} onChange={handleInputChange} />
              <span className="msg-error"></span>
            </div>
          </div>
          <div className="form-group">
            <div>
                <label htmlFor="id_fonkotany" className="form-group-label">Fonkotany:</label>
                <input type="text" className="form-group-input id_fonkotany" name="id_fonkotany" id="id_fonkotany" placeholder="Fonkontany" value={formActe.id_fonkotany.value} onChange={handleInputChange} />
                <span className="msg-error"></span>
            </div>
          </div>
          <div className="form-group form-group-2">
            <div>
              <label htmlFor="date_acte" className="form-group-label">Date de l'acte:</label>
              <input type="date" className="form-group-input date_acte" name="date_acte" id="date_act" placeholder="Date de l'acte" value={formActe.date_acte.value} onChange={handleInputChange} />
              <span className="msg-error"></span>
            </div>
            <div>
              <label htmlFor="heure_acte" className="form-group-label">Heure:</label>
              <input type="time" className="form-group-input heure_acte" name="heure_acte" id="heure_acte" placeholder="Heure de l'acte" value={formActe.heure_acte.value} onChange={handleInputChange} />
              <span className="msg-error"></span>
            </div>
          </div>
          <div className="form-group form-group-2">
            <div>
              <label htmlFor="date_enreg" className="form-group-label">Date d'anregistrement:</label>
              <input type="date" className="form-group-input date_enreg" name="date_enreg" id="date_enreg" placeholder="Date d'enregistrement d'acte" value={formActe.date_enreg.value} onChange={handleInputChange} />
              <span className="msg-error"></span>
            </div>
            <div>
              <label htmlFor="heure_enreg" className="form-group-label">Heure d'anregistrement:</label>
              <input type="time" className="form-group-input heure_enreg" name="heure_enreg" id="heure_enreg" placeholder="Heure d'enregistrement d'acte" value={formActe.heure_enreg.value} onChange={handleInputChange} />
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
                        value={formActe.code_commune.value} 
                        onChange={handleInputChange} 
                        onKeyUp={(e) => searchAdress(e.id, "list_acte_enreg") }
                        onFocus={() => showList(".adrs_enreg") } 
                        // onBlur={() => hiddenList(".adrs_person")}
                        />

                          <ul id="list_acte_enreg" className="adrs_enreg" style={{marginBottom: "10px", boxShadow: "0 0 1px #000", position:"absolute", backgroundColor: "lightgrey", width:"100%", height:"160px", overflowY:"scroll", display:"none"}}>
                                {ADDRESS.map(adrs => (
                                        <li key={adrs.id_adrs}>
                                            <p onClick={() => setAddressPerson(adrs)} style={{padding: "10px", marginBottom: "2px", boxShadow: "0 0 1px #000", fontSize: "var(--normal-font-size)",  cursor: "default", zIndex:"100"}}>
                                                {adrs.code_postal} &nbsp;
                                                {adrs.nom_adrs} &nbsp;
                                                {adrs.nom_fonkotany} &nbsp;
                                                {adrs.code_commune} &nbsp;
                                                {adrs.nom_commune} &nbsp;
                                                {adrs.code_district} &nbsp;
                                                {adrs.nom_district} &nbsp;
                                                {adrs.code_region} &nbsp;
                                                {adrs.nom_region} &nbsp;
                                            </p>
                                        </li>
                                ))}
                          </ul>

                            <span className="msg-error"></span>
                    </div>
            </div>
                <div className="form-group form-group-2">
                    <div>
                        <label htmlFor="code_district" className="form-group-label">District:</label>
                        <input type="text" className="form-group-input code_district" name="code_district" id="code_district" placeholder="District" value={formActe.code_district.value} onChange={handleInputChange} disabled/>
                        <span className="msg-error"></span>
                    </div>
                    <div>
                        <label htmlFor="code_region" className="form-group-label">Region:</label>
                        <input type="text" className="form-group-input code_region" name="code_region" id="code_region" placeholder="Région" value={formActe.code_region.value} onChange={handleInputChange} disabled/>
                        <span className="msg-error"></span>
                    </div>
                </div>

        </fieldset>
      </div >
    </>
  )
}

export default FormActe
