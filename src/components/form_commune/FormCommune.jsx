import React, { useEffect, useState } from 'react'
import { Link, replace, useNavigate } from 'react-router-dom';
// import ADDRESSES from '../../models/mock-address';
import { searchAddress } from '../../helpers/borderField';
import { regex } from '../../helpers/regex';
import CommuneService from '../../services/serviceCommune';
import DistrictService from '../../services/serviceDistrict';
import { makeRequest } from '../../services/axios';

const FormCommune = ({commune, isEditForm}) => {

    const navigate = useNavigate();

    const [districts, setDistricts] = useState(null);
    const [showList, setShowList] = useState(false);
    const [nomDistrict, setNomDistrict] = useState("");
    
    const [formCommune, setFormCommune] = useState({
        code_commune: { value: "", isValid: true, error: "" },
        nom_commune: { value: "", isValid: true, error: "" },
        id_district: { value: "", isValid: true, error: "" },
    });

    console.log(formCommune);
    

    
    // // Reiniti   aliser le champs
    // const clearData = () => {
    //     setFormCommune({
    //         ...formCommune, ...{
    //             code_commune: { value: "", isValid: true, error: "" },
    //             nom_commune: { value: "", isValid: true, error: "" },
    //             code_district: { value: "", isValid: true, error: "" },
    //     }});
    // }
    useEffect(() => {
        DistrictService.getDistrict().then(districts => setDistricts(districts));

        if (commune) {
            setFormCommune({
                code_commune: { value: commune.code_commune || "", isValid: true, error: "" },
                nom_commune: { value: commune.nom_commune || "", isValid: true, error: "" },
                id_district: { value: commune.id_district || "", isValid: true, error: "" },
            });

            districts?.forEach(f => {
                if (f.id_district == commune.id_district) {
                    setNomDistrict(f.nom_district); return;  
                }
            });
        }
    }, [commune]);

    
    //CHANGE VALUE DISTRICT
    const handleSetNomDIstrict = (district) => {
        const newField = { id_district: { value: district.id_district, isValid: true } };
        setFormCommune({ ...formCommune, ...newField });
        setNomDistrict(district.nom_district)
        setShowList(false);
    }

 
    document.querySelectorAll("input").forEach(input => {
        input.addEventListener("focus", () => {
            if (input.className !== "nom_commune") {
                setShowList(false);
            }
        });
    });


    const validateField = (fieldName, value) => {
        let isValid = true;
        let error = "";
        if (!value) {
            isValid = false;
            error = `Ce champ est obligatoire`;

        } else if ( !regex.numberAndDigit.test(value)) {
            isValid = false;
            error = `Les caractères spéciaux ne sont pas autorisés à ce champ.`;
        }

        return { isValid, error };
    }

    const handleInputChange = (e) => {
        const fieldName = e.target.name;
        const fieldValue = e.target.value;

        const validation = validateField(fieldName, fieldValue);

        const newField = { [fieldName]: { value: fieldValue, isValid: validation.isValid , error: validation.error  } };
        setFormCommune({ ...formCommune, ...newField });
    }

    //INPUT change CODE DISTRICT
    const handleInputChangeDistrict = (e) => {
        setNomDistrict(e.target.value);
        if (!e.target.value) {
            const newField = { id_district: { value: "", isValid: false , error: "Ce champ est obligatoire, selectionner une commune" } };
            setFormCommune({ ...formCommune, ...newField });
        }
    }
    // console.log("Valeur de Code DISTRICT: ",formCommune.code_district.value);  
    
    const [valid, setValid] = useState(false);
    const [message, setMessage] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = Object.values(formCommune).every(field => field.isValid);

        if (isValid && formCommune.code_commune?.value) {
            setValid(isValid);
            setMessage("En cours de connexion ...");
            commune.code_commune = formCommune.code_commune?.value;
            commune.nom_commune = formCommune.nom_commune?.value;
            commune.id_district = formCommune.id_district?.value;

            console.log(commune);
            isEditForm ? updateCommune(): addCommune();
        } else {
            setValid(false)
            setMessage("Vérifier les champs non valides");
        }
    }

    
    function updateCommune () {
        if (commune.id_commune) {
            console.log("Data commune:", commune);
            makeRequest.put(`/communes/${commune.id_commune}`, commune, {
                headers: {"Content-Type": "application/json"}
            })
            .then(resp => {
                if (!resp.data.status) {
                    console.log(resp); 
                    setValid(resp.data.status)
                    setMessage(resp.data.message)
                    return;
                }
                setValid(resp.data.status)
                setMessage(resp.data.message)
                clearData();
                navigate('/commune', true);
            })
            .catch(error => console.log(error) )    
        }
    }

    function addCommune () {
        console.log("Data commune:", commune);
        makeRequest.post(`/communes`, commune, {
            headers: {"Content-Type": "application/json"}
        })
        .then(resp => {
            if (!resp.data.status) {
                setValid(resp.data.status)
                setMessage(resp.data.message)
                return;
            }
            console.log(resp);
            setValid(resp.data.status)
            setMessage(resp.data.message)
            clearData()   
        })
        .catch(error => console.log(error) ) 
    }


    function clearData() {
        setFormCommune({ ...formCommune,
            ...{
            code_commune: { value: "", isValid: false, error: "" },
            nom_commune: { value: "", isValid: false, error: "" },
            id_district: { value: "", isValid: false, error: "" },
        }});
    }

    


  return (
    <>
    {/* <!-- =========== Modal add  COMMUNE ========== --> */}
    <div className="modal add-modal active-modal" >
        <div className="modal-container">
            <div className="modal-header">
                <div>
                    {isEditForm ? 
                        (<h3 className="modal-title">Modifier Commune</h3>):
                        (<h3 className="modal-title">Ajout Commune</h3>)
                    }
                    <span className="modal-subtitle"></span>
                </div>
                <div>
                    <Link to='/commune'>
                        <button className="btn btn-close" id="close-modale-add">X</button>
                    </Link>
                </div>
            </div>

            <form className="form" id="add-commune" onSubmit={handleSubmit}>
                <div className="alert-message">
                    {message && valid ?
                        (<span className='message success'>{message}</span>):
                        (<span className='message error'>{message}</span>)
                    }
                </div>
                <div className="content-user">
                    <div className="form-group">
                        <label htmlFor="code_commune" className="form-group-label">Code commune:</label>
                        <input
                            type="text"
                            className="form-group-input code_commune"
                            name="code_commune"
                            id="code_commune"
                            placeholder="code de Fonkotanay"
                            value={formCommune.code_commune?.value}
                            onChange={handleInputChange}
                        />
                        <span className="msg-error">{!formCommune.code_commune?.isValid && formCommune.code_commune?.error}</span>
                    </div>

                    <div className="form-group">
                        <label htmlFor="nom_commune" className="form-group-label">Nom commune:</label>
                        <input
                            type="text"
                            className="form-group-input nom_commune"
                            name="nom_commune"
                            id="nom_commune"
                            placeholder="Nom de Fonkotanay"
                            value={formCommune.nom_commune?.value}
                            onChange={handleInputChange}
                        />
                        <span className="msg-error">{!formCommune.nom_commune?.isValid && formCommune.nom_commune?.error}</span>
                    </div>

                    <div className="form-group" style={{position:"relative"}}>
                        <label htmlFor="nom_district" className="form-group-label">Code District:</label>
                        <input
                            type="text"
                            className="form-group-input nom_district"
                            name="nom_district"
                            id="nom_district"
                            placeholder="Code Commune"
                            value={nomDistrict}
                            onChange={handleInputChangeDistrict}
                            onKeyUp={(e) => searchAddress(e.target.id, "list_district") }
                            onFocus={() => setShowList(true) }
                        />
          
                        <ul id="list_district" className={ showList ? "showList list":"list"}>
                            {districts?.map(c => (
                            <li key={c.id_district}>
                                <p className='list-p' onClick={() => handleSetNomDIstrict(c)}>
                                    {c.nom_district}({c.code_district})
                                </p>
                            </li>
                            ))}
                        </ul>

                        <span className="msg-error">{!formCommune.id_district?.isValid && formCommune.id_district?.error}</span>
                    </div>


                    <div className="action-group">
                        {isEditForm ? 
                            (<button type="submit" className="btn btn-save" id="save">Modifier</button>):
                            (<button type="submit" className="btn btn-save" id="save">Envoyer</button>)
                        }

                        <button type="reset" className="btn btn-clear" id="clear" onClick={clearData}>Annuler</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</>
  )
}

export default FormCommune
