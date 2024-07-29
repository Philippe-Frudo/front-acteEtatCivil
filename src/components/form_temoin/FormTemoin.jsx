import React from 'react'
import handleSex from "../../constants/sexe";
import { hiddenList, messageValidator, searchAdress, showList, successBorder } from '../../helpers/borderField';
import { ADDRESS } from '../../models/mock-address';

const FormTemoin = ({useFormTemoin}) => {
       

    // ========== temoin ==========
    //const [temoin] = useState(new Temoin());
   /* const [formTemoin, setFormTemoin] = useState({
        id_temoin:{value: temoin.id_temoin, isValid: true},
        nom_temoin:{value: temoin.nom_temoin, isValid: true},
        prenom_temoin:{value: temoin.prenom_temoin, isValid: true},
        sexe_temoin:{value: temoin.sexe_temoin, isValid: true},
        date_nais_temoin:{value: temoin.date_nais_temoin, isValid: true},
        age_temoin:{value: temoin.age_temoin, isValid: true},
        lieu_nais_temoin:{value: temoin.lieu_nais_temoin, isValid: true},
        id_travail:{value: temoin.id_travail, isValid: true},
        adrs_temoin:{value: temoin.adrs_temoin, isValid: true},
    });
    const validFormTemoin = () => {
        let newForm = { ...formTemoin };

        //Validation du temoin ( nom du temoin ) + regex
        if (!formTemoin.nom_temoin.value && !regex.character.test(formTemoin.nom_temoin.value)) {
            newForm.nom_temoin = { value: formTemoin.nom_temoin.value, error: "Le nom doit simplement composé de chaine de caractére de 3 à 30 de long", isValid: false };
            errorBorder(".nom_temoin");
            messageValidator(".nom_temoin", newForm.nom_temoin.error);
        } else {
            newForm.nom_temoin = { value: formTemoin.nom_temoin.value, error: "", isValid: true };
            successBorder(".nom_temoin");
            messageValidator(".nom_temoin", "");
        }

        //Validation de prenom du temoin 
        if (!formTemoin.prenom_temoin.value && !regex.character.test(formTemoin.prenom_temoin.value)) {
            newForm.prenom_temoin = { value: formTemoin.prenom_temoin.value, error: "Le prenom doit simplement composé que de chaine de caractére de 3 à 50 de long.", isValid: false };
            errorBorder(".prenom_temoin");
            messageValidator(".prenom_temoin", newForm.prenom_temoin.error);
        } else {
            newForm.prenom_temoin = { value: formTemoin.prenom_temoin.value, error: "", isValid: true };
            successBorder(".prenom_temoin");
            messageValidator(".prenom_temoin", "");
        }


        //Validation date de naissance du temoin
        const dateNais = formTemoin.date_nais_temoin.value;
        if (dateNais && (dateNais > formActe.date_acte.value) && formActe.id_type.value == 1  && formTemoin.date_nais_temoin.value >= 18) {
            newForm.date_nais_temoin = { value: formTemoin.date_nais_temoin.value, error: "Invalide date de naissance verifier bien.", isValid: false };
            errorBorder(".date_nais_temoin");
            messageValidator(".date_nais_temoin", newForm.date_nais_temoin.error);
        } else {
            newForm.date_nais_temoin = { value: formTemoin.date_nais_temoin.value, error: "", isValid: true };
            successBorder(".date_nais_temoin");
            messageValidator(".date_nais_temoin", "");
        }


        //Validation de lieu de naissance du temoin
        if (!formTemoin.lieu_nais_temoin.value && !regex.character.test(formTemoin.lieu_nais_temoin.value)) {
            newForm.lieu_nais_temoin = { value: formTemoin.lieu_nais_temoin.value, error: "", isValid: false };
            errorBorder(".lieu_nais_temoin");
            messageValidator(".lieu_nais_temoin", newForm.lieu_nais_temoin.error);
        } else {
            newForm.lieu_nais_temoin = { value: formTemoin.lieu_nais_temoin.value, error: "", isValid: true };
            successBorder(".lieu_nais_temoin");
            messageValidator(".lieu_nais_temoin", "");
        }


        //Validation de travail du temoin
        if (!parseInt(formTemoin.id_travail.value)) {
            console.log("Invalide");
            newForm.id_travail = { value: formTemoin.id_travail.value, error: "", isValid: false };
            errorBorder(".id_travail");
            messageValidator(".id_travail", newForm.id_travail.error);
        } else {
            newForm.id_adrs = { value: formTemoin.id_travail.value, error: "", isValid: true };
            console.log("valide");
            successBorder(".id_travail");
            messageValidator(".id_travail", "");
        }

        //Validation de l'adresse du temoin
        if (!parseInt(formTemoin.adrs_temoin.value)) {
            newForm.id_adrs = { value: formTemoin.adrs_temoin.value, error: "Cette adresse est invalid", isValid: false };
            errorBorder(".adrs_temoin");
            messageValidator(".adrs_temoin", newForm.adrs_temoin.error);
        } else {
            newForm.adrs_temoin = { value: formTemoin.adrs_temoin.value, error: "", isValid: true };
            successBorder(".adrs_temoin");
            messageValidator(".adrs_temoin", "");
        }

        setFormPersonne(newForm);
        return newForm.prenom_temoin.isValid && newForm.nom_temoin.isValid && newForm.date_nais_temoin.isValid && newForm.lieu_nais_temoin.isValid && newForm.adrs_temoin.isValid && newForm.id_travail.value;
    }*/


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
    </div>
</>
  )
}

export default FormTemoin
