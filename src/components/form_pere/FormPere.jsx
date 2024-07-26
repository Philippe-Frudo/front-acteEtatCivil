import React from 'react'
import { messageValidator, searchAdress, showList, successBorder } from '../../helpers/borderField';
import { ADDRESS } from '../../models/mock-address';

const FormPere = ({useFormPere}) => {
 
  const [formPere, setFormPere] = useFormPere;
  const handleInputChange = (e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;
    const newField = { [fieldName]: { value: fieldValue } };

    setFormPere(prevState => ({ ...prevState, ...newField }));

    if (fieldName != "sexe_p") {
        successBorder(`.${fieldName}`);
        messageValidator(`.${fieldName}`, "");
      }

      if (fieldName === "date_nais_p") {
        age(fieldValue)
      }

    }
  
    const age = (value) => {
      var age = 0;
      if (value) { 
          age = parseInt(( new Date() - new Date(value) ) / 31536000000 );  
      }
      formPere.age_p.value = age;
      console.log("Age pere= " + age);
  }


  
const setAddressPerson = (adrs) => {
    for (let [key, val] of Object.entries(adrs)) {
        const address = ["code_commune", "code_district", "code_region"]
        if (address.includes(key)) {
            const newField = { [key]: { value: val } };
            setFormActe(prevState => ({ ...prevState, ...newField })); 
            formPere[key].value = val
        }
    } 

    hiddenList(".travail_p")
}
  return (
    <>
    <div className="content-mere">
        <h3 className="card-acte">Père</h3>
        <fieldset>
            <div className="form-group form-group-2">
                <div>
                    <label htmlFor="nom_p" className="form-group-label">Nom:</label>
                    <input type="text" className="form-group-input nom_p" name="nom_p" id="nom_p" placeholder="Nom" value={formPere.nom_p.value} onChange={handleInputChange}/>
                    <span className="msg-error"></span>
                </div>
                <div>
                    <label htmlFor="prenom_p" className="form-group-label">Prénom:</label>
                    <input type="text" className="form-group-input prenom_p" name="prenom_p" id="prenom_p" placeholder="Prénom" value={formPere.prenom_p.value} onChange={handleInputChange}/>
                    <span className="msg-error"></span>
                </div>
            </div>
      
            <div className="form-group form-group-2">
                <div>
                    <label htmlFor="date_nais_p" className="form-group-label">Date de Naissance:</label>
                    <input type="date" className="form-group-input date_nais_p" name="date_nais_p" id="date_nais_p" placeholder="Date de naissance" value={formPere.date_nais_p.value} onChange={handleInputChange}/>
                    <span className="msg-error"></span>
                </div>
                <div>
                    <label htmlFor="age_p" className="form-group-label">Age:</label>
                    <input type="text" className="form-group-input age_p" name="age_p" id="age_p" placeholder="Age" value={formPere.age_p.value ? formPere.age_p.value:""} onChange={handleInputChange} disabled/>
                    <span className="msg-error"></span>
                </div>
            </div>
            <div className="form-group">
                <div>
                    <label htmlFor="lieu_nais_p" className="form-group-label">Lieu de naissance:</label>
                    <input type="text" className="form-group-input lieu_nais_p" name="lieu_nais_p" id="lieu_nais_p" placeholder="Lieu de naissance" value={formPere.lieu_nais_p.value} onChange={handleInputChange}/>
                    <span className="msg-error"></span>
                </div>
            </div>
            <div className="form-group">
                <div>
                    <label htmlFor="id_travail" className="form-group-label">Travail:</label>
                    <input 
                    type="text" 
                    className="form-group-input id_travail" 
                    name="id_travail" 
                    id="id_travail"
                    placeholder="Travail" 
                    value={formPere.id_travail.value} 
                    onChange={handleInputChange}
                    onKeyUp={(e) => searchAdress(e.id, "list_trav_p") }
                    onFocus={() => showList(".travail_p") } 
                    // onBlur={() => hiddenList(".adrs_person")}
                    />
                    
                    <ul id="list_trav_p" className="travail_p" style={{marginBottom: "10px", boxShadow: "0 0 1px #000", position:"absolute", backgroundColor: "lightgrey", width:"100%", height:"160px", overflowY:"scroll", display:"none"}}>
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

                </div>
            </div>
            <div className="form-group">
                <div>
                    <label htmlFor="adrs_p" className="form-group-label">Region:</label>
                    <input type="text" className="form-group-input adrs_p" name="adrs_p" id="adrs_p" placeholder="Adresse" value={formPere.adrs_p.value} onChange={handleInputChange}/>
                    <span className="msg-error"></span>
                </div>
            </div>

        </fieldset>
    </div >
</>
  )
}

export default FormPere
