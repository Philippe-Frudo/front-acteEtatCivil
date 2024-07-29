import React, { useState } from 'react'
import { hiddenList, messageValidator, searchAdress, showList, successBorder } from '../../helpers/borderField';
import { TRAVAILS } from '../../models/mock-travail';

const FormPere = ({useFormPere}) => {      

    // ========== pere ==========
    // const [fieldWorkP, setFieldWorkP] = useState("")
    //const [pere] = useState(new Pere());
   /* const [formPere, setFormPere] = useState({
        id_p:{value: pere.id_p, isValid: true},
        nom_p:{value: pere.nom_p, isValid: true},
        prenom_p:{value: pere.prenom_p, isValid: true},
        sexe_p:{value: pere.sexe_p, isValid: true},
        date_nais_p:{value: pere.date_nais_p, isValid: true},
        lieu_nais_p:{value: pere.lieu_nais_p, isValid: true},
        age_p:{value: pere.age_p, isValid: true},
        id_travail:{value: pere.id_travail, isValid: true},
        adrs_p:{value: pere.adrs_p, isValid: true},
       
    });
    const validFormPere = () => {
        let newForm = { ...formPere };

        //Validation de nom_p( nom du pere ) + regex
        if (!formPere.nom_p.value && !regex.character.test(formPere.nom_p.value)) {
            newForm.nom_p = { value: formPere.nom_p.value, error: "Le nom doit simplement composé de chaine de caractére de 3 à 30 de long", isValid: false };
            errorBorder(".nom_p");
            messageValidator(".nom_p", newForm.nom_p.error);
        } else {
            newForm.nom_p = { value: formPere.nom_p.value, error: "", isValid: true };
            successBorder(".nom_p");
            messageValidator(".nom_p", "");
        }

        //Validation de prenom du père 
        if (!formPere.prenom_p.value && !regex.character.test(formPere.nom_p.value)) {
            newForm.prenom_p = { value: formPere.prenom_p.value, error: "Le prenom doit simplement composé que de chaine de caractére de 3 à 50 de long.", isValid: false };
            errorBorder(".prenom_p");
            messageValidator(".prenom_p", newForm.prenom_p.error);
        } else {
            newForm.prenom_p = { value: formPere.prenom_p.value, error: "", isValid: true };
            successBorder(".prenom_p");
            messageValidator(".prenom_p", "");
        }


        const dateNais = formPere.date_nais_p.value;
        if (dateNais && (dateNais > formActe.date_acte.value) && formActe.id_type.value == 1  && formPere.age_p.value > 12) {
            newForm.date_nais_p = { value: formPere.date_nais_p.value, error: "Invalide date de naissance verifier bien.", isValid: false };
            errorBorder(".date_nais_p");
            messageValidator(".date_nais_p", newForm.date_nais_p.error);
        } else {
            newForm.date_nais_m = { value: formPere.date_nais_p.value, error: "", isValid: true };
            successBorder(".date_nais_p");
            messageValidator(".date_nais_p", "");
        }


        //Validation de lieu de naissance
        if (!formPere.lieu_nais_p.value) {
            newForm.lieu_nais_p = { value: formPere.lieu_nais_p.value, error: "", isValid: false };
            errorBorder(".lieu_nais_p");
            messageValidator(".lieu_nais_p", newForm.lieu_nais_p.error);
        } else {
            newForm.lieu_nais_p = { value: formPere.lieu_nais_p.value, error: "", isValid: true };
            successBorder(".lieu_nais_p");
            messageValidator(".lieu_nais_p", "");
        }

        //Validation de travail PERE
        if (!formPere.id_travail.value ) {
            newForm.id_travail = { value: formPere.id_travail.value, error: "", isValid: false };
            errorBorder(".nom_travail_p");
            messageValidator(".nom_travail_p", newForm.id_travail.error);
        } else {
            newForm.id_travail = { value: formPere.id_travail.value, error: "", isValid: true };
            successBorder(".nom_travail_p");
            messageValidator(".nom_travail_p", "");
        }

        //Validation de l'adresse
        if (formPere.adrs_p.value === "") {
            newForm.adrs_p = { value: formPere.adrs_p.value, error: "Cette adresse est invalid", isValid: false };
            errorBorder(".adrs_p");
            messageValidator(".adrs_p", newForm.adrs_p.error);
        } else {
            newForm.adrs_p = { value: formPere.adrs_p.value, error: "", isValid: true };
            successBorder(".adrs_p");
            messageValidator(".adrs_p", "");
        }

        setFormPere(newForm);
        return newForm.prenom_p.isValid && newForm.nom_p.isValid && newForm.date_nais_p.isValid && newForm.lieu_nais_p.isValid && newForm.adrs_p.isValid && newForm.id_travail.value;
    } */


    const [fieldWork, setFieldWork] = useState("");
    const handleInputChangeTravail = (e) => {
        setFieldWork(e.value);
    }

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
    
    // if (!fieldWork) {
    //     formPere.id_travail.value = ""
    // }
  
    const age = (value) => {
      var age = 0;
      if (value) { 
          age = parseInt(( new Date() - new Date(value) ) / 31536000000 );  
      }
      formPere.age_p.value = age;
      console.log("Age pere= " + age);
  }


  
const setValueByClick = (object) => {
    console.log(object);
    for (let [key, val] of Object.entries(object)) {
        const address = ["nom_travail","code_commune", "code_district", "code_region"]
        if (address.includes(key)) {
            const newField = { [key]: { value: val } };
            setFormPere(prevState => ({ ...prevState, ...newField })); 
            formPere[key].value = val
        }
        if (key == "nom_travail") {
            setFieldWork(val)
        }
        
    } 
    hiddenList(".travail_p")
}

console.log(formPere.id_travail.value);

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
                    <label htmlFor="adrs_p" className="form-group-label">Adresse:</label>
                    <input type="text" className="form-group-input adrs_p" name="adrs_p" id="adrs_p" placeholder="Adresse" value={formPere.adrs_p.value} onChange={handleInputChange}/>
                    <span className="msg-error"></span>
                </div>
            </div>
            <div className="form-group">
                <div style={{position:"relative"}}>
                    <label htmlFor="nom_travail_p" className="form-group-label">Travail:</label>
                    <input 
                    type="text" 
                    className="form-group-input nom_travail_p" 
                    name="nom_travail_p" 
                    id="nom_travail_p"
                    placeholder="Travail" 
                    value={fieldWork}
                    onChange={handleInputChangeTravail}
                    onKeyUp={(e) => searchAdress(e.target.id) }
                    onFocus={() => showList(".travail_p") } 
                    // onBlur={() => hiddenList(".adrs_person")}
                    />
                    
                    <ul id="list_trav_p" className="travail_p list-search">
                                {TRAVAILS.map(trav => (
                                        <li key={trav.id_travail}>
                                            <p onClick={() => setValueByClick(trav,)} style={{padding: "10px", marginBottom: "2px", boxShadow: "0 0 1px #000", fontSize: "var(--normal-font-size)",  cursor: "default", zIndex: "100"}}>
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

export default FormPere
