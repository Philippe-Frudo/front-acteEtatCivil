import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { searchAddress } from '../../helpers/borderField';
import RegionService from '../../services/serviceRegion';
import { makeRequest } from '../../services/axios';
import { regex } from '../../helpers/regex';
// import DistrictService from '../../services/serviceDistrict';
// import ADDRESSES from '../../models/mock-address';

const FormDistrict = ({district, isEditForm}) => {
    
    const navigate = useNavigate()

    const [regions, setRegions] = useState(null);
    const [showList, setShowList] = useState(false);
    const [nomRegion, setNomRegion] = useState("");

    const [formDistrict, setFormDistrict] = useState({
        code_district: { value: "", isValid: false, error: "" },
        nom_district: { value: "", isValid: false, error: "" },
        id_region: { value: "", isValid: false, error: "" },
    });


    useEffect(() => {
        RegionService.getRegion().then(regions => setRegions(regions));
        if (district) {
            setFormDistrict({
                code_district: { value: district?.code_district || "", isValid: true, error: "" },
                nom_district: { value: district?.nom_district || "", isValid: true, error: "" },
                id_region: { value: district?.id_region || "", isValid: true, error: "" },
            });

            regions?.forEach(f => {
                if (f.id_region == district?.id_region) {
                    setNomRegion(f.nom_region); return;  
                }
            })
        }
    }, [district]);

        
    //CHANGE VALUE REGION
    const handleSetNomRegion = (region) => {
        const newField = { id_region: { value: region.id_region, isValid: true } };
        setFormDistrict({ ...formDistrict, ...newField });
        setNomRegion(region.nom_region)
        setShowList(false);
    }

     
    document.querySelectorAll("input").forEach(input => {
        input.addEventListener("focus", () => {
            if (input.className !== "nom_region") {
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

        } else if ( fieldName == "nom_district" && value.length < 0) {
            isValid = false;
            error = `district n'est pas valide.`;

        } else if ( fieldName == "code_district" && !regex.number.test(value)) {
            isValid = false;
            error = `Code invalide, seul le nombre est autorisé.`;

        } else if ( fieldName == "nom_region" && regions.some(d => d.nom_region !== value)) {
            isValid = false;
            error = `cette region n'est pas valide. Entrer de region valide`;
        }

        return { isValid, error };
    }

    const handleInputChange = (e) => {
        const fieldName = e.target.name;
        const fieldValue = e.target.value;
        
        const validation = validateField(fieldName, fieldValue);

        const newField = { [fieldName]: { value: fieldValue, isValid: validation?.isValid , error: validation?.error  } };
        setFormDistrict({ ...formDistrict, ...newField });
        if (message) {
            setMessage("")
        }
    }
    
    
    //INPUT change CODE DISTRICT
    const handleInputChangeRegion = (e) => {
        setNomRegion(e.target.value);
        if (!e.target.value) {
            const newField = { id_region: { value: "", isValid: false , error: 'Ce champs est obligatoire' } };
            setFormDistrict({ ...formDistrict, ...newField });
        }
    }
    

    const [valid, setValid] = useState(false);
    const [message, setMessage] = useState("");


    function handleSubmit (e) {   
        e.preventDefault();
        const isValid = Object.values(formDistrict).every(field => field.isValid);
        

        if (isValid && formDistrict.code_district?.value) {
            setValid(true);
            // setMessage("En cours de connexion ...");
            district.code_district = formDistrict.code_district?.value;
            district.nom_district = formDistrict.nom_district?.value;
            district.id_region = formDistrict.id_region.value;

            isEditForm ? updateDistrict(): addDistrict();

        } else {
            setValid(false);
            setMessage("Vérifier les champs non valides");
        }
    }



    function updateDistrict () {
        console.log("Data district:", district);
        makeRequest.put(`/districts/${district.id_district}`, district, {
            headers: {"Content-Type": "application/json"}
        })
        .then(resp => {
            if (!resp.data) {
                console.log(resp); 
                setValid(resp.data.status)
                setMessage(resp.data.message)
                return;
            }
            setValid(resp.data.status)
            setMessage(resp.data.message)
            clearData();
            navigate('/district')
        })
        .catch(error => console.log(error) )   
    }

    function addDistrict () {
        console.log("Data district:", district);
        makeRequest.post(`/districts`, district, {
            headers: {"Content-Type": "application/json"}
        })
        .then(resp => {
            if (!resp.data.status) {
                setValid(resp.data.status)
                setMessage(resp.data.message)
                return;
            }
            setValid(resp.data.status)
            setMessage(resp.data.message)
            clearData()   
        })
        .catch(error => console.log(error) ) 
    }
    
    function clearData() {
        setFormDistrict({
            ...formDistrict, 
            ...{
                code_district: { value: "", isValid: false, error: "" },
                nom_district: { value: "", isValid: false, error: "" },
                id_region: { value: "", isValid: false, error: "" },
            } })
            
            setNomRegion('')
    }

    function annuler() {
        clearData()
        setMessage('')
    }

  return (
    <>
    {/* <!-- =========== Modal add  District ========== --> */}
    <div className="modal add-modal active-modal" >
        <div className="modal-container">
            <div className="modal-header">
                <div>
                    {isEditForm ? 
                    (<h3 className="modal-title">Modifier district</h3>):
                    (<h3 className="modal-title">Ajouter district</h3>)
                    }
                    <span className="modal-subtitle"></span>
                </div>
                <div>
                    <Link to='/district'>
                        <button className="btn btn-close" id="close-modale-add">X</button>
                    </Link>
                </div>
            </div>

            <form className="form" id="add-District" onSubmit={handleSubmit}>
                <div className="alert-message">
                    {message && valid ? 
                      (<p className={message ? "message success":"success"}>{message}</p>):
                      (<p  className={message ? "message error":"error"}>{message}</p>)
                    }
                </div>

                <div className="content-user">

                    {/* Code district */}
                    <div className="form-group">
                        <label htmlFor="code_district" className="form-group-label">Code du district:</label>
                        <input
                            type="text"
                            className={!formDistrict.code_district?.isValid && formDistrict.code_district?.error ? "error-border form-group-input code_district":"form-group-input code_district"}
                            name="code_district"
                            id="code_district"
                            placeholder="code"
                            value={formDistrict.code_district?.value}
                            onChange={handleInputChange}
                        />
                        <span className={isEditForm ? "":"hidden"}><i>Assurez-vous de ne pas confondre le code</i></span>
                        <span className="msg-error">{!formDistrict.code_district?.isValid && formDistrict.code_district?.error}</span>
                    </div>

                    {/* Nom du district */}
                    <div className="form-group">
                        <label htmlFor="nom_district" className="form-group-label">Nom district:</label>
                        <input
                            type="text"
                            className={!formDistrict.nom_district?.isValid && formDistrict.nom_district?.error ? "error-border form-group-input nom_district":"form-group-input nom_district"}
                            name="nom_district"
                            id="nom_district"
                            placeholder="nom"
                            value={formDistrict.nom_district?.value}
                            onChange={handleInputChange}
                        />
                        <span className="msg-error">{!formDistrict.nom_district?.isValid && formDistrict.nom_district?.error}</span>
                    </div>

                    {/* Region */}
                    <div className="form-group" style={{position:"relative"}}>
                        <label htmlFor="nom_region" className="form-group-label">Région:</label>
                        <input
                            type="text"
                            className={!formDistrict.id_region?.isValid && formDistrict.id_region?.error ? "error-border form-group-input nom_region":"form-group-input nom_region"}
                            name="nom_region"
                            id="nom_region"
                            placeholder="région"
                            value={nomRegion}
                            onChange={handleInputChangeRegion}
                            onKeyUp={(e) => searchAddress(e.target.id, "list_region") }
                            onFocus={() => setShowList(true) }
                        />
          
                        <ul id="list_region" className={ showList ? "showList list":"list"}>
                            {regions?.map(c => (
                            <li key={c.id_region}>
                                <p className='list-p' onClick={() => handleSetNomRegion(c)}>
                                {c.nom_region}({c.code_region})
                                </p>
                            </li>
                            ))}
                        </ul>
                        <span className=""><i>Assurez-vous de sélectionner la région</i></span>
                        <span className="msg-error">{!formDistrict.id_region?.isValid && formDistrict.id_region?.error}</span>

                    </div>


                    {/* Action Formulaire */}
                    <div className="action-group">
                        {isEditForm ? 
                            (
                            <>
                                <button type="submit" className="btn btn-save" id="save">Modifier</button>
                                <Link to={`/district`}><button type="reset" className="btn btn-clear" id="clear">Annuler</button></Link>
                            </>
                            ):
                            (
                            <>
                                <button type="submit" className="btn btn-save" id="save">Enregistrer</button>
                                <button type="reset" className="btn btn-clear" id="clear" onClick={annuler}>Annuler</button>
                            </>
                            )
                        }


                        
                    </div>
                </div>
            </form>
        </div>
    </div>
</>
  )
}

export default FormDistrict
