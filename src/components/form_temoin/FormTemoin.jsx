import React from 'react'
import handleSex from "../../constants/sexe";
import { hiddenList, messageValidator, searchAdress, showList, successBorder } from '../../helpers/borderField';
import { ADDRESS } from '../../models/mock-address';

const FormTemoin = ({useFormTemoin}) => {
     
    const [formTemoin, setFormTemoin] = useFormTemoin;
    const handleInputChange = (e) => {
        const fieldName = e.target.name.trim();
        const fieldValue = e.target.value.trim();
    const newField = { [fieldName]: { value: fieldValue } };

    setFormTemoin(prevState => ({ ...prevState, ...newField }));

    if (fieldName != "sexe_temoin") {
        successBorder(`.${fieldName}`);
        messageValidator(`.${fieldName}`, "");
      }

      if (fieldName === "date_nais_temoin") {
        age(fieldValue)
      }
    }
  
    const age = (value) => {
      var age= 0;
      if (value) { 
          age = parseInt(( new Date() - new Date(value) ) / 31536000000 );  
        }
        formTemoin.age_temoin.value = age;
        console.log("Age temoin= " + age);
    }

    

const setAddressPerson = (adrs) => {
    for (let [key, val] of Object.entries(adrs)) {
        const address = ["code_commune", "code_district", "code_region"]
        if (address.includes(key)) {
            const newField = { [key]: { value: val } };
            setFormActe(prevState => ({ ...prevState, ...newField })); 
            formTemoin[key].value = val
        }
    } 

    hiddenList(".travail_temoin")
}
    
    // console.log("Sexe temoin: ", formTemoin.sexe_temoin.value);
  return (
    <>
    <div className="content-mere">
        <h3 className="card-acte">Témoin</h3>
        <fieldset>
            <div className="form-group form-group-2">
                <div>
                    <label htmlFor="nom_temoin" className="form-group-label">Nom:</label>
                    <input type="text" className="form-group-input nom_temoin" name="nom_temoin" id="nom_temoin" placeholder="Nom" value={formTemoin.nom_temoin.value} onChange={handleInputChange}/>
                    <span className="msg-error"></span>
                </div>
                <div>
                    <label htmlFor="prenom_temoin" className="form-group-label">Prénom:</label>
                    <input type="text" className="form-group-input prenom_temoin" name="prenom_temoin" id="prenom_temoin" placeholder="Prénom" value={formTemoin.prenom_temoin.value} onChange={handleInputChange}/>
                    <span className="msg-error"></span>
                </div>
            </div>
            <div className="form-group form-group-2">
                <div>
                    <label htmlFor="date_nais_temoin" className="form-group-label">Date de Naissance:</label>
                    <input type="date" className="form-group-input date_nais_temoin" name="date_nais_temoin" id="date_nais_temoin" placeholder="Date de naissance" value={formTemoin.date_nais_temoin.value} onChange={handleInputChange}/>
                    <span className="msg-error"></span>
                </div>
                <div>
                    <label htmlFor="age_temoin" className="form-group-label">Age:</label>
                    <input type="text" className="form-group-input age_temoin" name="age_temoin" id="age_temoin" placeholder="Age" value={formTemoin.age_temoin.value ? formTemoin.age_temoin.value:""} onChange={handleInputChange} disabled/>
                    <span className="msg-error"></span>
                </div>
            </div>
            <div className="form-group">
                <div>
                    <label htmlFor="lieu_nais_temoin" className="form-group-label">Lieu de naissance:</label>
                    <input type="text" className="form-group-input lieu_nais_temoin" name="lieu_nais_temoin" id="lieu_nais_temoin" placeholder="Lieu de naissance" value={formTemoin.lieu_nais_temoin.value} onChange={handleInputChange}/>
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
                    <label htmlFor="id_travail" className="form-group-label">Travail:</label>
                    <input 
                    type="text" 
                    className="form-group-input id_travail" 
                    name="id_travail" 
                    id="id_travail"
                    placeholder="Travail" 
                    value={formTemoin.id_travail.value} 
                    onChange={handleInputChange}
                    onKeyUp={(e) => searchAdress(e.id, "list_trav_temoin") }
                    onFocus={() => showList(".travail_temoin") } 
                    // onBlur={() => hiddenList(".adrs_person")}
                    />
                    
                    <ul id="list_trav_temoin" className="travail_temoin" style={{marginBottom: "10px", boxShadow: "0 0 1px #000", position:"absolute", backgroundColor: "lightgrey", width:"100%", height:"160px", overflowY:"scroll", display:"none"}}>
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
                    <label htmlFor="adrs_temoin" className="form-group-label">Adresse:</label>
                    <input type="text" className="form-group-input adrs_temoin" name="adrs_temoin" id="adrs_temoin" placeholder="Adresse" value={formTemoin.adrs_temoin.value} onChange={handleInputChange}/>
                    <span className="msg-error"></span>
                </div>
            </div>

        </fieldset>
    </div >
</>
  )
}

export default FormTemoin
