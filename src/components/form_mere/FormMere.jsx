import React from 'react'
import { hiddenList, messageValidator, searchAdress, showList, successBorder } from '../../helpers/borderField';
import { ADDRESS } from '../../models/mock-address';

const FormMere = ({useFormMere}) => {
    
  const [formMere, setFormMere] = useFormMere;

  const handleInputChange = (e) => {
    const fieldName = e.target.name.trim();
    const fieldValue = e.target.value.trim();
    const newField = { [fieldName]: { value: fieldValue } };

    setFormMere(prevState => ({ ...prevState, ...newField }));

    if (fieldName) {
      successBorder(`.${fieldName}`);
      messageValidator(`.${fieldName}`, "");
    }

    if (fieldName === "date_nais_m") {
      age(fieldValue)
    }
  }

  const age = (value) => {
    var age = 0;
    if (value) { 
        age = parseInt(( new Date() - new Date(value) ) / 31536000000 );  
    }
    formMere.age_m.value = age;
    console.log("Age mere: " + age);
}


const setAddressPerson = (adrs) => {
    for (let [key, val] of Object.entries(adrs)) {
        const address = ["code_commune", "code_district", "code_region"]
        if (address.includes(key)) {
            const newField = { [key]: { value: val } };
            setFormActe(prevState => ({ ...prevState, ...newField })); 
            formMere[key].value = val
        }
    } 

    hiddenList(".travail_m")
}

  return (
    <>
    <div className="content-mere">
        <h3 className="card-acte">Mère</h3>
        <fieldset>
            <div className="form-group form-group-2">
                <div>
                    <label htmlFor="nom_m" className="form-group-label">Nom:</label>
                    <input type="text" className="form-group-input nom_m" name="nom_m" id="nom_m" placeholder="Nom" value={formMere.nom_m.value} onChange={handleInputChange}/>
                    <span className="msg-error"></span>
                </div>
                <div>
                    <label htmlFor="prenom_m" className="form-group-label">Prénom:</label>
                    <input type="text" className="form-group-input prenom_m" name="prenom_m" id="prenom_m" placeholder="Prénom" value={formMere.prenom_m.value} onChange={handleInputChange}/>
                    <span className="msg-error"></span>
                </div>
            </div>
         
            <div className="form-group form-group-2">
                <div>
                    <label htmlFor="date_nais_m" className="form-group-label">Date de Naissance:</label>
                    <input type="date" className="form-group-input date_nais_m" name="date_nais_m" id="date_nais_m" placeholder="Date de naissance" value={formMere.date_nais_m.value} onChange={handleInputChange}/>
                    <span className="msg-error"></span>
                </div>
                <div>
                    <label htmlFor="age_m" className="form-group-label">Age:</label>
                    <input type="text" className="form-group-input age_m" name="age_m" id="age_m" placeholder="Age" value={formMere.age_m.value ? formMere.age_m.value :""} onChange={handleInputChange} disabled/>
                    <span className="msg-error"></span>
                </div>
            </div>
            <div className="form-group">
                <div>
                    <label htmlFor="lieu_nais_m" className="form-group-label">Lieu de naissance:</label>
                    <input type="text" className="form-group-input lieu_nais_m" name="lieu_nais_m" id="lieu_nais_m" placeholder="Lieu de naissance" value={formMere.lieu_nais_m.value} onChange={handleInputChange} />
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
                    value={formMere.id_travail.value} 
                    onChange={handleInputChange}
                    onKeyUp={(e) => searchAdress(e.id, "list_trav_m") }
                    onFocus={() => showList(".travail_m") } 
                    // onBlur={() => hiddenList(".adrs_person")}
                    />
                    
                    <ul id="list_trav_m" className="travail_m" style={{marginBottom: "10px", boxShadow: "0 0 1px #000", position:"absolute", backgroundColor: "lightgrey", width:"100%", height:"160px", overflowY:"scroll", display:"none"}}>
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
                    <label htmlFor="adrs_m" className="form-group-label">Adresse:</label>
                    <input type="text" className="form-group-input adrs_m" name="adrs_m" id="adrs_m" placeholder="Adresse" value={formMere.adrs_m.value} onChange={handleInputChange} />
                    <span className="msg-error"></span>
                </div>
            </div>

        </fieldset>
    </div >
</>

  )
}

export default FormMere
