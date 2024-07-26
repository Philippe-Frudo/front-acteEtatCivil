import React, { useState } from 'react'
import MainTop from "../../components/main_top/MainTop";
import { useNavigate } from 'react-router-dom';
import {errorBorder, successBorder, messageValidator} from "./../../helpers/borderField";
import FormPersonne from '../../components/form_personne/FormPersonne';
import Personne from '../../models/personne';
import FormActe from '../../components/form_acte/FormActe';
import Acte from './../../models/acte';
import FormMere from '../../components/form_mere/FormMere';
import FormPere from './../../components/form_pere/FormPere'
import Mere from '../../models/mere';
import Temoin from '../../models/temoin';
import Pere from '../../models/pere';
import FormTemoin from '../../components/form_temoin/FormTemoin';
import { regex } from '../../helpers/regex';

const FormAddActe = () => {
    const navigate = useNavigate();

    const [message, setMessage] = useState("");

    function handleClickAdd() {
        navigate("/acte-etat-civil/");
    }

    // ========== ACTE ==========
    const [acte] = useState(new Acte());
    const [formActe, setFormActe] = useState({
        id_acte: { value: acte.id_acte },
        id_type: { value: acte.id_type },
        id_m: { value: acte.id_m },
        date_acte: { value: acte.date_acte, isValid: true },
        heure_acte: { value: acte.heure_acte, isValid: true },
        lieu_acte: { value: acte.lieu_acte, isValid: true },
        id_mere: { value: acte.id_mere },
        id_temoin: { value: acte.id_temoin },
        id_user: { value: acte.id_user },
        date_enreg: { value: acte.date_enreg, isValid: true },
        heure_enreg: { value: acte.heure_enreg, isValid: true },
        id_fonkotany: { value: acte.id_fonkotany, isValid: true },
        code_commune: { value: acte.code_commune, isValid: true },
        code_district: { value: acte.code_district, isValid: true },
        code_region: { value: acte.code_region , isValid: true},
    });
    const validFormActe = () => {
        let newForm = { ...formActe };

        //Validation de date_acte 
        if (formActe.date_acte.value.trim() === "") {
            newForm.date_acte = { value: formActe.date_acte.value, error: "Le date de l'acte est obligatoirement non null", isValid: false };
            errorBorder(".date_acte");
            messageValidator(".date_acte", newForm.date_acte.error);

        } else {
            newForm.date_acte = { value: formActe.date_acte.value, error: "", isValid: true };
            successBorder(".date_acte");
            messageValidator(".date_acte", "");
        }

        //Validation de heure_acte 
        if (formActe.heure_acte.value.trim() === "") {
            newForm.heure_acte = { value: formActe.heure_acte.value, error: "L'heure de l'acte est obligatoirement non null", isValid: false };
            errorBorder(".heure_acte");
            messageValidator(".heure_acte", newForm.heure_acte.error);
        } else {
            newForm.heure_acte = { value: formActe.heure_acte.value, error: "", isValid: true };
            successBorder(".heure_acte");
            messageValidator(".heure_acte", "");
        }

        //Validation de heure_acte 
        if (formActe.lieu_acte.value.trim() === "") {
            newForm.lieu_acte = { value: formActe.lieu_acte.value, error: "Invalide lieu d'acte", isValid: false };
            errorBorder(".lieu_acte");
            messageValidator(".lieu_acte", newForm.lieu_acte.error);
        } else {
            newForm.lieu_acte = { value: formActe.lieu_acte.value, error: "", isValid: true };
            successBorder(".lieu_acte");
            messageValidator(".lieu_acte", "");
        }

        //Validation de date_enreg 
        if (formActe.date_enreg.value.trim() === "") {
            newForm.date_enreg = { value: formActe.date_enreg.value, error: "Le date de l'enregistrement d'acte est obligatoirement non null", isValid: false };
            errorBorder(".date_enreg");
            messageValidator(".date_enreg", newForm.date_enreg.value);
        } else {
            newForm.date_enreg = { value: formActe.date_enreg.value, error: "", isValid: true };
            successBorder(".date_enreg");
            messageValidator(".date_enreg", "");
        }

        //Validation de heure_enreg
        if (formActe.heure_enreg.value.trim() === "") {
            newForm.heure_enreg = { value: formActe.heure_enreg.value, error: "L'heure de l'enregistrement est obligatoirement non null", isValid: false };
            errorBorder(".heure_enreg");
            messageValidator(".heure_enreg", newForm.heure_enreg.error);
        } else {
            newForm.heure_enreg = { value: formActe.heure_enreg.value, error: "", isValid: true };
            successBorder(".heure_enreg");
            messageValidator(".heure_enreg", "");
        }

        //Validation de heure_enreg
        if (formActe.code_commune.value.trim() === "") {
            newForm.code_commune = { value: formActe.code_commune.value, error: "", isValid: false };
            errorBorder(".code_commune");
            messageValidator(".code_commune", newForm.heure_enreg.error);
        } else {
            newForm.heure_enreg = { value: formActe.heure_enreg.value, error: "", isValid: true };
            successBorder(".code_commune");
            messageValidator(".code_commune", "");
        }

        setFormActe(newForm);
        return newForm.date_acte.isValid && newForm.heure_acte.isValid && newForm.date_enreg.isValid && newForm.heure_acte.isValid;
    }


    // ========= PERSONNE =========
    const [personne] = useState(new Personne());
    const [formPersonne, setFormPersonne] = useState({
        id_person: { value: personne.id_person },
        nom_person: { value: personne.nom_person, isValid: true },
        prenom_person: { value: personne.prenom_person, isValid: true },
        sexe_person: { value: personne.sexe_person, isValid: true },
        id_travail: { value: personne.id_travail, isValid: true },
        adrs_person: { value: personne.adrs_person, isValid: true },
    });
    const validFormPersonne = () => {
        let newForm = { ...formPersonne };

        //Validation de nom_p( nom du personne ) + regex
        if (!formPersonne.nom_person.value && !regex.character.test(formPersonne.nom_person.value)) {
            newForm.nom_person = { value: formPersonne.nom_person.value, error: "Le nom doit simplement composé de chaine de caractére de 3 à 30 de long", isValid: false };
            errorBorder(".nom_person");
            messageValidator(".nom_person", newForm.nom_person.error);
        } else {
            newForm.nom_person = { value: formPersonne.nom_person.value, error: "", isValid: true };
            successBorder(".nom_person");
            messageValidator(".nom_person", "");
        }

        //Validation de prenom du personne
        if (!formPersonne.prenom_person.value &&  !regex.character.test(formPersonne.prenom_person.value)) {
            newForm.prenom_person = { value: formPersonne.prenom_person.value, error: "Le prenom doit simplement composé que de chaine de caractére de 3 à 50 de long.", isValid: false };
            errorBorder(".prenom_person");
            messageValidator(".prenom_person", newForm.prenom_person.error);
        } else {
            newForm.prenom_person = { value: formPersonne.prenom_person.value, error: "", isValid: true };
            successBorder(".prenom_person");
            messageValidator(".prenom_person", "");
        }

        //Validation de l'adresse
        if (formPersonne.adrs_person.value === "") {
            newForm.id_adrs = { value: formPersonne.adrs_person.value, error: "Cette adresse est invalid", isValid: false };
            errorBorder(".adrs_person");
            messageValidator(".adrs_person", newForm.adrs_person.error);
        } else {
            newForm.adrs_person = { value: formPersonne.adrs_person.value, error: "", isValid: true };
            successBorder(".adrs_person");
            messageValidator(".adrs_person", "");
        }

        setFormPersonne(newForm);
        return newForm.prenom_person.isValid && newForm.nom_person.isValid && newForm.id_adrs.isValid;
    }


    // ========= MERE =========
    const [mere] = useState(new Mere());
    const [formMere, setFormMere] = useState({
        id_m:{value: mere.id_m, isValid: true},
        nom_m:{value: mere.nom_m, isValid: true},
        prenom_m:{value: mere.prenom_m, isValid: true},
        date_nais_m:{value: mere.date_nais_m, isValid: true},
        age_m:{value: mere.age_m, isValid: true},
        lieu_nais_m:{value: mere.lieu_nais_m, isValid: true},
        id_travail:{value: mere.id_travail, isValid: true},
        adrs_m:{value: mere.adrs_m, isValid: true},

    });
    const validFormMere = () => {
        let newForm = { ...formMere };

        //Validation de nom_p( nom de la mère ) + regex
        if (!formMere.nom_m.value && !regex.character.test(formMere.nom_m.value) ) {
            newForm.nom_m = { value: formMere.nom_m.value, error: "Le nom doit simplement composé de chaine de caractére de 3 à 30 de long", isValid: false };
            errorBorder(".nom_m");
            messageValidator(".nom_m", newForm.nom_m.error);
        } else {
            newForm.nom_m = { value: formMere.nom_m.value, error: "", isValid: true };
            successBorder(".nom_m");
            messageValidator(".nom_m", "");
        }

        //Validation de prenom de la mère
        if (!formMere.prenom_m.value && !regex.character.test(formMere.prenom_m.value)) {
            newForm.prenom_m = { value: formMere.prenom_m.value, error: "Le prenom doit simplement composé que de chaine de caractére de 3 à 50 de long.", isValid: false };
            errorBorder(".prenom_m");
            messageValidator(".prenom_m", newForm.prenom_m.error);
        } else {
            newForm.prenom_m = { value: formMere.prenom_m.value, error: "", isValid: true };
            successBorder(".prenom_m");
            messageValidator(".prenom_m", "");
        }


        const dateNais = formMere.date_nais_m.value;
        if (dateNais && (dateNais > formActe.date_acte.value) && formActe.id_type.value == 1  && formMere.age_m.value > 12) {
            newForm.date_nais_m = { value: formMere.date_nais_m.value, error: "Invalide date de naissance verifier bien.", isValid: false };
            errorBorder(".date_nais_m");
            messageValidator(".date_nais_m", newForm.date_nais_m.error);
        } else {
            newForm.date_nais_m = { value: formMere.date_nais_m.value, error: "", isValid: true };
            successBorder(".date_nais_m");
            messageValidator(".date_nais_m", "");
        }


        //Validation de lieu de naissance
        if (formMere.lieu_nais_m.value === "") {
            newForm.lieu_nais_m = { value: formMere.lieu_nais_m.value, error: "", isValid: false };
            errorBorder(".lieu_nais_m");
            messageValidator(".lieu_nais_m", newForm.lieu_nais_m.error);
        } else {
            newForm.lieu_nais_m = { value: formMere.lieu_nais_m.value, error: "", isValid: true };
            successBorder(".lieu_nais_m");
            messageValidator(".lieu_nais_m", "");
        }


        //Validation de travail mere
        if (formMere.id_travail.value === "") {
            newForm.id_travail = { value: formMere.id_travail.value, error: "", isValid: false };
            errorBorder(".id_travail");
            messageValidator(".id_travail", newForm.id_travail.error);
        } else {
            newForm.id_adrs = { value: formMere.id_travail.value, error: "", isValid: true };
            successBorder(".id_travail");
            messageValidator(".id_travail", "");
        }

        //Validation de l'adresse
        if (formMere.adrs_m.value === "") {
            newForm.adrs_m = { value: formMere.adrs_m.value, error: "Cette adresse est invalid", isValid: false };
            errorBorder(".adrs_m");
            messageValidator(".adrs_m", newForm.adrs_m.error);
        } else {
            newForm.adrs_m = { value: formMere.adrs_m.value, error: "", isValid: true };
            successBorder(".adrs_m");
            messageValidator(".adrs_m", "");
        }

        setFormPersonne(newForm);
        return newForm.prenom_m.isValid && newForm.nom_m.isValid && newForm.date_nais_m.isValid && newForm.lieu_nais_m.isValid && newForm.id_adrs.isValid && newForm.id_travail.value;
    }
        

    // ========== pere ==========
    const [pere] = useState(new Pere());
    const [formPere, setFormPere] = useState({
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

        //Validation de travail mere
        if (formPere.id_travail.value === "") {
            newForm.id_travail = { value: formPere.id_travail.value, error: "", isValid: false };
            errorBorder(".id_travail");
            messageValidator(".id_travail", newForm.id_travail.error);
        } else {
            newForm.id_travail = { value: formPere.id_travail.value, error: "", isValid: true };
            successBorder(".id_travail");
            messageValidator(".id_travail", "");
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

        setFormPersonne(newForm);
        return newForm.prenom_p.isValid && newForm.nom_p.isValid && newForm.date_nais_p.isValid && newForm.lieu_nais_p.isValid && newForm.adrs_p.isValid && newForm.id_travail.value;
    } 


    // ========== temoin ==========
    const [temoin] = useState(new Temoin());
    const [formTemoin, setFormTemoin] = useState({
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
    }

    let isValid;
    const handleSubmit = (e) => {
        e.preventDefault();

        const isValidActe = validFormActe();
        const isValidMere = validFormMere();
        const isValidPere = validFormPere();
        const isValidTemoin = validFormTemoin();
        const isValidPersonne = validFormPersonne();
        var isValid = isValidActe && isValidPersonne && isValidMere && isValidPere && isValidTemoin;
        if (isValid) {
            setMessage("Formulaire envoyer");
            /*API(Laraver)
            .then(isAuthenticated => {
                if (!isAuthenticated) {
                    setMessage("Identifiant ou mot de passe incorrect.");
                    return;
                    }
                    console.log(message);
                    navigate("/dashboard");
                    });*/
            }else {
            setMessage("Verifier le(s) champ(s) non valide");
        }

        setTimeout(() => setMessage("") , 6000)
    }


    return (
        <>
            <main className="main">
                { /* <!-- =====HEADER MAIN ==== --> */}
                <MainTop />

                { /* <!-- ====== CONTAINER MAIN ===== --> */}
                <div className="main-container main-container-2" id='main-scroll'>

                    { /* <!-- ===== CARD 1 ===== --> */}
                    <div className="card active-main" id="card-1">

                        { /* <!-- ===== HEADER CARD 1 ===== --> */}
                        <header className="main-header-content">
                            <h3 className="main-header-content-title">Ajout d'une nouvelle  acte</h3>
                            <span className="main-header-content-subtitle">Soutitre page</span>
                            <div className="main-local-nav">
                                <div className="action-local-nav">
                                    <button className="btn add-now" id="add-now" onClick={handleClickAdd}>
                                        <span className="content-add-now" >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                <path fill='#fff' d="M13.939 4.939 6.879 12l7.06 7.061 2.122-2.122L11.121 12l4.94-4.939z" />
                                            </svg>
                                            <span className="add-now-name" id='add-adresse'>Retour</span>
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </header>
                        { /* <!-- MAIN CARD 1 --> */}
                        <main className="main-main-content" id="main-main-content-1" style={{marginTop: "0", paddingTop:"0"}}>
                            <form className="form" id="form-add-act" onSubmit={handleSubmit} style={{paddingTop:"0"}}>
                                {/* Message . status: success or error*/}
                                <div className="alert-message">
                                    {message && <span className={isValid ? 'success message': 'message error'} >{message}</span>}
                                </div>

                                <div className="content-user">
                                    <FormActe useFormActe={[formActe, setFormActe]} isEditForm={false} />
                                    <FormPersonne useFormPersonne={[formPersonne, setFormPersonne]} isEditForm={false} />
                                    <FormMere useFormMere={[formMere, setFormMere]} isEditForm={false} />
                                    <FormPere useFormPere={[formPere, setFormPere]} isEditForm={false} />
                                    <FormTemoin useFormTemoin={[formTemoin, setFormTemoin]} isEditForm={false} />
                                    
                                    <div className="action-group">
                                        <button type="submit" className="btn btn-save" id="save">Envoyer</button>
                                        <button type="reset" className="btn btn-clear" id="clear">Annuler</button>
                                    </div>
                                </div>
                            </form>
                        </main>
                    </div>

                </div>
            </main>

        </>
    )
}

export default FormAddActe;
