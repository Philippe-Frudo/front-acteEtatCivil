import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { searchAddress } from '../../helpers/borderField';
import RegionService from '../../services/serviceRegion';
import DistrictService from '../../services/serviceDistrict';
// import ADDRESSES from '../../models/mock-address';

const FormDistrict = ({district, isEditForm}) => {

    const [regions, setRegions] = useState(null);
    const [showList, setShowList] = useState(false);
    const [nomRegion, setNomRegion] = useState("");

    const [formDistrict, setFormDistrict] = useState({
        code_district: { value: "", isValid: false, error: "" },
        nom_district: { value: "", isValid: false, error: "" },
        code_region: { value: "", isValid: false, error: "" },
    });

    useEffect(() => {
        RegionService.getRegion().then(regions => setRegions(regions));
        if (district) {
            setFormDistrict({
                code_district: { value: district.code_district || "", isValid: true, error: "" },
                nom_district: { value: district.nom_district || "", isValid: true, error: "" },
                code_region: { value: district.code_region || "", isValid: true, error: "" },
            });

            regions?.forEach(f => {
                if (f.code_region == district.code_region) {
                    setNomRegion(f.nom_region); return;  
                }
            })
        }
    }, [district]);

        
    //CHANGE VALUE REGION
    const handleSetNomRegion = (region) => {
        const newField = { code_region: { value: region.code_region, isValid: true } };
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

        } else if ( !regex.numberAndDigit.test(value)) {
            isValid = false;
            error = `Les caractères spéciaux ne sont pas autorisés à ce champ.`;
        }

        return { isValid, error };
    }

    // console.log(formDistrict.code_district.isValid);

    const handleInputChange = (e) => {
        const fieldName = e.target.name;
        const fieldValue = e.target.value;

        const validation = validateField(fieldName, fieldValue);

        const newField = { [fieldName]: { value: fieldValue, isValid: validation.isValid , error: validation.error  } };
        setFormDistrict({ ...formDistrict, ...newField });
    }
    
    
    //INPUT change CODE DISTRICT
    const handleInputChangeRegion = (e) => {
        setNomRegion(e.target.value);
        if (!e.target.value) {
            const newField = { code_region: { value: "", isValid: false , error: 'Ce champs est obligatoire' } };
            setFormDistrict({ ...formDistrict, ...newField });
        }
    }
    // console.log("Valeur de Code REGION: ",formDistrict.code_region.value);  
    

    const [valid, setValid] = useState(false);
    const [message, setMessage] = useState("");
    const handleSubmit = (e) => {   
        e.preventDefault();
        const isValid = Object.values(formDistrict).every(field => field.isValid);

        if (isValid && formDistrict.code_district.value) {
            setValid(true);
            setMessage("En cours de connexion ...");
            district.code_district = formDistrict.code_district.value;
            district.nom_district = formDistrict.nom_district.value;
            district.code_region = formDistrict.code_region.value;

            isEditForm ? updateDistrict(): addDistrict();

        } else {
            setValid(false);
            setMessage("Vérifier les champs non valides");
        }
    }

    
    const updateDistrict = () => {
        console.log("Data District:", district);
        const response = DistrictService.updateDistrict(district);
    }

    const addDistrict = () => {
        console.log("Data District:", district);
        const response = DistrictService.addDistrict(district);
    }

  return (
    <>
    {/* <!-- =========== Modal add  District ========== --> */}
    <div className="modal add-modal active-modal" >
        <div className="modal-container">
            <div className="modal-header">
                <div>
                    {isEditForm ? 
                    (<h3 className="modal-title">Modifier District</h3>):
                    (<h3 className="modal-title">Ajout District</h3>)
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
                        (<span className='message success'>{message}</span>):
                        (<span className='message error'>{message}</span>)
                    }
                </div>
                <div className="content-user">
                    <div className="form-group">
                        <label htmlFor="code_district" className="form-group-label">Code District:</label>
                        <input
                            type="text"
                            className="form-group-input code_district"
                            name="code_district"
                            id="code_district"
                            placeholder="code de Fonkotanay"
                            value={formDistrict.code_district.value}
                            onChange={handleInputChange}
                        />
                        <span className="msg-error">{!formDistrict.code_district.isValid && formDistrict.code_district.error}</span>
                    </div>

                    <div className="form-group">
                        <label htmlFor="nom_district" className="form-group-label">Nom District:</label>
                        <input
                            type="text"
                            className="form-group-input nom_district"
                            name="nom_district"
                            id="nom_district"
                            placeholder="Nom de Fonkotanay"
                            value={formDistrict.nom_district.value}
                            onChange={handleInputChange}
                        />
                        <span className="msg-error">{!formDistrict.nom_district.isValid && formDistrict.nom_district.error}</span>
                    </div>

                    <div className="form-group" style={{position:"relative"}}>
                        <label htmlFor="nom_region" className="form-group-label">Code District:</label>
                        <input
                            type="text"
                            className="form-group-input nom_region"
                            name="nom_region"
                            id="nom_region"
                            placeholder="Nom region"
                            value={nomRegion}
                            onChange={handleInputChangeRegion}
                            onKeyUp={(e) => searchAddress(e.target.id, "list_district") }
                            onFocus={() => setShowList(true) }
                        />
          
                        <ul id="list_district" className={ showList ? "showList list":"list"}>
                            {regions?.map(c => (
                            <li key={c.id_adrs}>
                                <p className='list-p' onClick={() => handleSetNomRegion(c)}>
                                {c.code_region} &nbsp;
                                ({c.nom_region})
                                </p>
                            </li>
                            ))}
                        </ul>

                        <span className="msg-error">{!formDistrict.code_region.isValid && formDistrict.code_region.error}</span>
                    </div>

                    <div className="action-group">
                        {isEditForm ? 
                            (<button type="submit" className="btn btn-save" id="save">Modifier</button>):
                            (<button type="reset" className="btn btn-save" id="save">Envoyer</button>)
                        }

                        <button type="reset" className="btn btn-clear" id="clear">Annuler</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</>
  )
}

export default FormDistrict
