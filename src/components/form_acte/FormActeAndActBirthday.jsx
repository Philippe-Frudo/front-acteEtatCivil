import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import {errorBorder, successBorder, messageValidator, hiddenList} from "./../../helpers/borderField";
import FormPersonne from '../../components/form_personne/FormPersonne';
import FormActe from '../../components/form_acte/FormActe';
import { regex } from '../../helpers/regex';

const FormActeAndBirthday = ({personne, acte, isEditForm}) => {

    const navigate = useNavigate();

    document.querySelectorAll("input").forEach(input => {
        input.addEventListener("focus", () => {
            const inputsClassName = ["nom_travail_p","nom_travail_m", "nom_travail_person", "profession_temoin", "nom_commune", "nom_fonkotany"];
            if (!inputsClassName.includes(input.className)) {
                hiddenList(".list_adrs_acte");
                hiddenList(".nom_fonkotany_acte");
                hiddenList(".list_profession_temion"); 
                hiddenList(".list_travail_person"); 
                hiddenList(".list_travail_mere"); 
                hiddenList(".list_travail_pere"); 
            }
        })
    });


    /* ================================= VALIDATION FORM PERSONNE ========================================= */
    const [formPersonne, setFormPersonne] = useState({
        id_person: { value: personne.id_person },
        nom_person: { value: personne.nom_person, isValid: true },
        prenom_person: { value: personne.prenom_person, isValid: true },
        sexe_person: { value: personne.sexe_person, isValid: true },
        adrs_person: { value: personne.adrs_person, isValid: true },
        id_travail: { value: personne.id_travail, isValid: true },

        nom_m : {value: personne.nom_m, isValid: true },
        prenom_m : {value: personne.prenom_m, isValid: true },
        date_nais_m : {value: personne.date_nais_m, isValid: true },
        lieu_nais_m : {value: personne.lieu_nais_m, isValid: true },
        age_m : {value: personne.age_m, isValid: true },
        adrs_m : {value: personne.adrs_m, isValid: true },
        profession_m : {value: personne.profession_m, isValid: true },

        nom_p : {value: personne.nom_p, isValid: true },
        prenom_p : {value: personne.prenom_p, isValid: true },
        date_nais_p : {value: personne.date_nais_p, isValid: true },
        lieu_nais_p : {value: personne.lieu_nais_p, isValid: true },
        age_p : {value: personne.age_p, isValid: true },
        adrs_p : {value: personne.adrs_p, isValid: true },
        profession_p : {value: personne.profession_p, isValid: true }
       
    });
    const validFormPersonne = () => {
        let newForm = { ...formPersonne };

        /* =============== VALIDATION PERSONNE =============== */
        //Validation de nom du personne
        if (!formPersonne.nom_person.value && !regex.character.test(formPersonne.nom_person.value)) {
            newForm.nom_person = { value: formPersonne.nom_person.value, error: "Le nom doit etre une chaine de caractére de longueur 3 à 30", isValid: false };
            errorBorder(".nom_person");
            messageValidator(".nom_person", newForm.nom_person.error);
        } else {
            newForm.nom_person = { value: formPersonne.nom_person.value, error: "", isValid: true };
            successBorder(".nom_person");
            messageValidator(".nom_person", "");
        }

        //Validation de prenom du personne
        if (formPersonne.prenom_person.value) {
            if (!regex.character.test(formPersonne.prenom_person.value)) {
                newForm.prenom_person = { value: formPersonne.prenom_person.value, error: "Le prenom doit etre des chaines de caractéres, de 3 à 50 de long.", isValid: false };
                errorBorder(".prenom_person");
                messageValidator(".prenom_person", newForm.prenom_person.error);
            } else {
                newForm.prenom_person = { value: formPersonne.prenom_person.value, error: "", isValid: true };
                successBorder(".prenom_person");
                messageValidator(".prenom_person", "");
            }   
        }

        //Validation de l'adresse du perssone
        if ( !(formPersonne.adrs_person.value.length < 10) ) {
            newForm.adrs_person = { value: formPersonne.adrs_person.value, error: "Cette adresse est invalide", isValid: false };
            errorBorder(".adrs_person");
            messageValidator(".adrs_person", newForm.adrs_person.error);
        } else {
            newForm.adrs_person = { value: formPersonne.adrs_person.value, error: "", isValid: true };
            successBorder(".adrs_person");
            messageValidator(".adrs_person", "");
        }

        //Validation de l'adresse
        if (!formPersonne.id_travail.value) {
            newForm.id_travail = { value: formPersonne.id_travail.value, error: "", isValid: false };
            errorBorder(".nom_travail_person");
            messageValidator(".nom_travail_person", newForm.id_travail.error);
        } else {
            newForm.id_travail = { value: formPersonne.id_travail.value, error: "", isValid: true };
            successBorder(".nom_travail_person");
            messageValidator(".nom_travail_person", "");
        }


        /* =============== VALIDATION MERE =============== */
         //Validation de nom de la mère
         if (!formPersonne.nom_m.value && !regex.character.test(formPersonne.nom_m.value) ) {
            newForm.nom_m = { value: formPersonne.nom_m.value, error: "Le nom est invalide, des chaines de caractéres seulement, de 3 à 30 de long", isValid: false };
            errorBorder(".nom_m");
            messageValidator(".nom_m", newForm.nom_m.error);
        } else {
            newForm.nom_m = { value: formPersonne.nom_m.value, error: "", isValid: true };
            successBorder(".nom_m");
            messageValidator(".nom_m", "");
        }

        //Validation de prenom de la mère
        if (formPersonne.prenom_m.value) {
            if (!regex.character.test(formPersonne.prenom_m.value) ) {
                newForm.prenom_m = { value: formPersonne.prenom_m.value, error: "Le prenom doit simplement composé que des chaines de caractéres, de 3 à 50 de long.", isValid: false };
                errorBorder(".prenom_m");
                messageValidator(".prenom_m", newForm.prenom_m.error);
            } else {
                newForm.prenom_m = { value: formPersonne.prenom_m.value, error: "", isValid: true };
                successBorder(".prenom_m");
                messageValidator(".prenom_m", "");
            }  
        }

        //Validation date de naissance mère
        const dateNais = formPersonne.date_nais_m.value;
        if (!dateNais && (formPersonne.age_m.value < 12) ) {
            newForm.date_nais_m = { value: formPersonne.date_nais_m.value, error: "Invalide date de naissance de la mère.", isValid: false };
            errorBorder(".date_nais_m");
            messageValidator(".date_nais_m", newForm.date_nais_m.error);
        } else {
            newForm.date_nais_m = { value: formPersonne.date_nais_m.value, error: "", isValid: true };
            successBorder(".date_nais_m");
            messageValidator(".date_nais_m", "");
        }


        //Validation de lieu de naissance
        if (formPersonne.lieu_nais_m.value.length < 10) {
            newForm.lieu_nais_m = { value: formPersonne.lieu_nais_m.value, error: "Lieu de naissance invalide", isValid: false };
            errorBorder(".lieu_nais_m");
            messageValidator(".lieu_nais_m", newForm.lieu_nais_m.error);
        } else {
            newForm.lieu_nais_m = { value: formPersonne.lieu_nais_m.value, error: "", isValid: true };
            successBorder(".lieu_nais_m");
            messageValidator(".lieu_nais_m", "");
        }


        //Validation de profession mere
        if (formPersonne.profession_m.value === "") {
            newForm.profession_m = { value: formPersonne.profession_m.value, error: "", isValid: false };
            errorBorder(".profession_m");
            messageValidator(".profession_m", newForm.profession_m.error);
        } else {
            newForm.profession_m = { value: formPersonne.profession_m.value, error: "", isValid: true };
            successBorder(".profession_m");
            messageValidator(".profession_m", "");
        }


        //Validation de l'adresse de la mère
        if (formPersonne.adrs_m.value.length < 10) {
            newForm.adrs_m = { value: formPersonne.adrs_m.value, error: "Cette adresse est invalid", isValid: false };
            errorBorder(".adrs_m");
            messageValidator(".adrs_m", newForm.adrs_m.error);
        } else {
            newForm.adrs_m = { value: formPersonne.adrs_m.value, error: "", isValid: true };
            successBorder(".adrs_m");
            messageValidator(".adrs_m", "");
        }



        /* =============== VALIDATION PERE =============== */
         //Validation nom du pere
         if (!formPersonne.nom_p.value && !regex.character.test(formPersonne.nom_p.value)) {
            newForm.nom_p = { value: formPersonne.nom_p.value, error: "Le nom doit simplement composé des chaines de caractéres, de 3 à 30 de long", isValid: false };
            errorBorder(".nom_p");
            messageValidator(".nom_p", newForm.nom_p.error);
        } else {
            newForm.nom_p = { value: formPersonne.nom_p.value, error: "", isValid: true };
            successBorder(".nom_p");
            messageValidator(".nom_p", "");
        }


        //Validation de prenom du père 
        if (formPersonne.prenom_p.value) {
            if (!regex.character.test(formPersonne.nom_p.value)) {
                newForm.prenom_p = { value: formPersonne.prenom_p.value, error: "Le prenom doit simplement composé des chaines des caractéres de 3 à 50 de long.", isValid: false };
                errorBorder(".prenom_p");
                messageValidator(".prenom_p", newForm.prenom_p.error);
            } else {
                newForm.prenom_p = { value: formPersonne.prenom_p.value, error: "", isValid: true };
                successBorder(".prenom_p");
                messageValidator(".prenom_p", "");
            }  
        }

        // Validation de date de naissance du père
        if (!formPersonne.date_nais_p.value && (formPersonne.date_nais_p.value > formActe.date_acte.value) && (formPersonne.age_p.value < 12) ) {
            newForm.date_nais_p = { value: formPersonne.date_nais_p.value, error: "Invalide date de naissance du père.", isValid: false };
            errorBorder(".date_nais_p");
            messageValidator(".date_nais_p", newForm.date_nais_p.error);
        } else {
            newForm.date_nais_m = { value: formPersonne.date_nais_p.value, error: "", isValid: true };
            successBorder(".date_nais_p");
            messageValidator(".date_nais_p", "");
        }


        //Validation de lieu de naissance père
        if (!formPersonne.lieu_nais_p.value && (formPersonne.lieu_nais_p.value.length < 5) ) {
            newForm.lieu_nais_p = { value: formPersonne.lieu_nais_p.value, error: "Lieu de naissane invalide", isValid: false };
            errorBorder(".lieu_nais_p");
            messageValidator(".lieu_nais_p", newForm.lieu_nais_p.error);
        } else {
            newForm.lieu_nais_p = { value: formPersonne.lieu_nais_p.value, error: "", isValid: true };
            successBorder(".lieu_nais_p");
            messageValidator(".lieu_nais_p", "");
        }


        //Validation de l'adresse du PERE
        if (!formPersonne.adrs_p.value && formPersonne.adrs_p.value.length < 5) {
            newForm.adrs_p = { value: formPersonne.adrs_p.value, error: "Cette adresse est invalide", isValid: false };
            errorBorder(".adrs_p");
            messageValidator(".adrs_p", newForm.adrs_p.error);
        } else {
            newForm.adrs_p = { value: formPersonne.adrs_p.value, error: "", isValid: true };
            successBorder(".adrs_p");
            messageValidator(".adrs_p", "");
        }

        //Validation de profession PERE
        if (!formPersonne.profession_p.value) {
            newForm.profession_p = { value: formPersonne.profession_p.value, error: "", isValid: false };
            errorBorder(".profession_p");
            messageValidator(".profession_p", newForm.profession_p.error);
        } else {
            newForm.profession_p = { value: formPersonne.profession_p.value, error: "", isValid: true };
            successBorder(".profession_p");
            messageValidator(".profession_p", "");
        }



        setFormPersonne(newForm);

        return newForm.nom_person.isValid && newForm.prenom_person.isValid && newForm.adrs_person.isValid
        && newForm.nom_m.isValid && newForm.prenom_m.isValid && newForm.date_nais_m.isValid 
        && newForm.lieu_nais_m.isValid && newForm.profession_m.isValid && newForm.adrs_m.isValid
        && newForm.nom_p.isValid && newForm.prenom_p.isValid && newForm.date_nais_p.isValid 
        && newForm.lieu_nais_p.isValid && newForm.profession_p.isValid && newForm.adrs_p.isValid;
    }

    /* ================================= VALIDATION FORM ACTE ========================================= */
    const [formActe, setFormActe] = useState({
        id_acte : {value: acte.id_acte, isValid: true },
        id_type : {value: acte.id_type, isValid: true },
        date_acte : {value: acte.date_acte, isValid: true },
        heure_acte : {value: acte.heure_acte, isValid: true },
        lieu_acte : {value: acte.lieu_acte, isValid: true },
        date_enreg : {value: acte.date_enreg, isValid: true },
        heure_enreg : {value: acte.heure_enreg, isValid: true },

        nom_temoin : {value: acte.nom_temoin, isValid: true },
        prenom_temoin : {value: acte.prenom_temoin, isValid: true },
        sexe_temoin : {value: acte.sexe_temoin, isValid: true },
        date_nais_temoin : {value: acte.date_nais_temoin, isValid: true },
        lieu_nais_temoin : {value: acte.lieu_nais_temoin, isValid: true },
        age_temoin : {value: acte.age_temoin, isValid: true },
        adrs_temoin : {value: acte.adrs_temoin, isValid: true },
        profession_temoin : {value: acte.profession_temoin, isValid: true },

        id_person : {value: acte.id_person, isValid: true },
        id_fonkotany : {value: acte.id_fonkotany, isValid: true },
        code_commune : {value: acte.code_commune, isValid: true },
        id_user : {value: acte.id_user, isValid: true }
    });
    const validFormActe = () => {
        let newForm = { ...formActe };

        /*//Validation de type 
        if (!formActe.id_type.value) {
            newForm.id_type = { value: formActe.id_type.value, error: "", isValid: false };
            errorBorder(".nom_type");
            messageValidator(".nom_type", newForm.id_type.error);
        } else {
            newForm.id_type = { value: formActe.id_type.value, error: "", isValid: true };
            successBorder(".nom_type");
            messageValidator(".nom_type", "");
        }*/

        //Validation de date_acte 
        if (!formActe.date_acte.value && !(formActe.date_acte.value <= newDate) ) {
            newForm.date_acte = { value: formActe.date_acte.value, error: "La date d'acte n'est pas valide", isValid: false };
            errorBorder(".date_acte");
            messageValidator(".date_acte", newForm.date_acte.error);

        } else {
            newForm.date_acte = { value: formActe.date_acte.value, error: "", isValid: true };
            successBorder(".date_acte");
            messageValidator(".date_acte", "");
        }

        //Validation de heure_acte 
        if (!formActe.heure_acte.value) {
            newForm.heure_acte = { value: formActe.heure_acte.value, error: "L'heure d'acte est obligatoire non null", isValid: false };
            errorBorder(".heure_acte");
            messageValidator(".heure_acte", newForm.heure_acte.error);
        } else {
            newForm.heure_acte = { value: formActe.heure_acte.value, error: "", isValid: true };
            successBorder(".heure_acte");
            messageValidator(".heure_acte", "");
        }

        //Validation de lieu d'acte 
        if (!formActe.lieu_acte.value && formActe.lieu_acte.value.length < 10) {
            newForm.lieu_acte = { value: formActe.lieu_acte.value, error: "Lieu d'acte invalide", isValid: false };
            errorBorder(".lieu_acte");
            messageValidator(".lieu_acte", newForm.lieu_acte.error);
        } else {
            newForm.lieu_acte = { value: formActe.lieu_acte.value, error: "", isValid: true };
            successBorder(".lieu_acte");
            messageValidator(".lieu_acte", "");
        }

        //Validation de date_enreg 
        if (!formActe.date_enreg.value && formActe.date_enreg.value <= newDate ) {
            newForm.date_enreg = { value: formActe.date_enreg.value, error: "La date d'enregistrement d'acte n'est pas valide", isValid: false };
            errorBorder(".date_enreg");
            messageValidator(".date_enreg", newForm.date_enreg.value);
        } else {
            newForm.date_enreg = { value: formActe.date_enreg.value, error: "", isValid: true };
            successBorder(".date_enreg");
            messageValidator(".date_enreg", "");
        }

        //Validation de heure_enreg
        if (!formActe.heure_enreg.value) {
            newForm.heure_enreg = { value: formActe.heure_enreg.value, error: "", isValid: false };
            errorBorder(".heure_enreg");
            messageValidator(".heure_enreg", newForm.heure_enreg.error);
        } else {
            newForm.heure_enreg = { value: formActe.heure_enreg.value, error: "", isValid: true };
            successBorder(".heure_enreg");
            messageValidator(".heure_enreg", "");
        }

        //validation nom temoin
        if (!regex.character.test(formActe.nom_temoin.value)) {
            newForm.nom_temoin = { value: formActe.nom_temoin.value, error: "nom invalide, chaine de caractére seulement, de longueur 3 à 30", isValid: false };
            errorBorder(".nom_temoin");
            messageValidator(".nom_temoin", newForm.nom_temoin.error);
        } else {
            newForm.nom_temoin = { value: formActe.nom_temoin.value, error: "", isValid: true };
            successBorder(".nom_temoin");
            messageValidator(".nom_temoin", "");
        }

        //Validation de prenom du temoin 
        if (formActe.prenom_temoin.value) {
            if (!regex.character.test(formActe.prenom_temoin.value)) {
                newForm.prenom_temoin = { value: formActe.prenom_temoin.value, error: "prenom invalide, chaine de caractére seulement de longuer 3 à 50.", isValid: false };
                errorBorder(".prenom_temoin");
                messageValidator(".prenom_temoin", newForm.prenom_temoin.error);
            } else {
                newForm.prenom_temoin = { value: formActe.prenom_temoin.value, error: "", isValid: true };
                successBorder(".prenom_temoin");
                messageValidator(".prenom_temoin", "");
            }  
        }

        //Validation date de naissance du temoin
        if (!formActe.date_nais_temoin.value && !formActe.age_temoin.value && !(formActe.age_temoin.value >= 18)) {
            newForm.date_nais_temoin = { value: formActe.date_nais_temoin.value, error: "L'age n'est doit pas inférieur à 18.", isValid: false };
            errorBorder(".date_nais_temoin");
            messageValidator(".date_nais_temoin", newForm.date_nais_temoin.error);
        } else {
            newForm.date_nais_temoin = { value: formActe.date_nais_temoin.value, error: "", isValid: true };
            successBorder(".date_nais_temoin");
            messageValidator(".date_nais_temoin", "");
        }

        //Validation de lieu de naissance du temoin
        if (!formActe.lieu_nais_temoin.value && formActe.lieu_nais_temoin.value.length < 10) {
            newForm.lieu_nais_temoin = { value: formActe.lieu_nais_temoin.value, error: "Lieu non valide", isValid: false };
            errorBorder(".lieu_nais_temoin");
            messageValidator(".lieu_nais_temoin", newForm.lieu_nais_temoin.error);
        } else {
            newForm.lieu_nais_temoin = { value: formActe.lieu_nais_temoin.value, error: "", isValid: true };
            successBorder(".lieu_nais_temoin");
            messageValidator(".lieu_nais_temoin", "");
        }

        //Validation de l'adresse du temoin
        if (!parseInt(formActe.adrs_temoin.value)) {
            newForm.adrs_temoin = { value: formActe.adrs_temoin.value, error: "Cette adresse est invalid", isValid: false };
            errorBorder(".adrs_temoin");
            messageValidator(".adrs_temoin", newForm.adrs_temoin.error);
        } else {
            newForm.adrs_temoin = { value: formActe.adrs_temoin.value, error: "", isValid: true };
            successBorder(".adrs_temoin");
            messageValidator(".adrs_temoin", "");
        }

        //Validation de la profession du temoin
        if (!parseInt(!formActe.profession_temoin.value && formActe.profession_temoin.value.length < 3)) {
            newForm.profession_temoin = { value: formActe.profession_temoin.value, error: "", isValid: false };
            errorBorder(".profession_temoin");
            messageValidator(".profession_temoin", newForm.profession_temoin.error);
        } else {
            newForm.profession_temoin = { value: formActe.profession_temoin.value, error: "", isValid: true };
            successBorder(".profession_temoin");
            messageValidator(".profession_temoin", "");
        }



        //Validation de fonkotany fonkotany
        if (!formActe.id_fonkotany.value) {
            newForm.id_fonkotany = { value: formActe.id_fonkotany.value, error: "Fonkotany invalide", isValid: false };
            errorBorder(".nom_fonkotany");
            messageValidator(".nom_fonkotany", newForm.code_commune.error);
        } else {
            newForm.id_fonkotany = { value: formActe.id_fonkotany.value, error: "", isValid: true };
            successBorder(".nom_fonkotany");
            messageValidator(".nom_fonkotany", "");
        }

        //Validation de Code commune
        if (!formActe.code_commune.value) {
            newForm.code_commune = { value: formActe.code_commune.value, error: "", isValid: false };
            errorBorder(".nom_commune");
            messageValidator(".nom_commune", newForm.code_commune.error);
        } else {
            newForm.code_commune = { value: formActe.code_commune.value, error: "", isValid: true };
            successBorder(".nom_commune");
            messageValidator(".nom_commune", "");
        }

        setFormActe(newForm);

        if (newForm.nom_temoin.value && newForm.lieu_nais_temoin.value && newForm.date_nais_temoin.value) {
            setFormActe(newForm);
            return newForm.date_acte.isValid && newForm.heure_acte.isValid && newForm.lieu_acte.isValid
            && newForm.date_enreg.isValid && newForm.heure_enreg.isValid && newForm.id_fonkotany.isValid 
            && newForm.code_commune.isValid && newForm.nom_temoin.isValid && newForm.prenom_temoin.isValid 
            && newForm.date_nais_temoin.isValid && newForm.lieu_nais_temoin.isValid && newForm.adrs_temoin.isValid 
            && newForm.profession_temoin.isValid;
        }

        return newForm.date_acte.isValid && newForm.heure_acte.isValid && newForm.lieu_acte.isValid
        && newForm.date_enreg.isValid && newForm.heure_enreg.isValid 
        && newForm.id_fonkotany.isValid && newForm.code_commune.isValid;

    }
          
    /* ===== Calcule age de naissance des parents, à la naissance de la [ersonne =====*/
    const age = (dateActe, dateNaisX) => {
        if (dateActe && dateNaisX) {
            let age = 0;
            age = parseInt(( new Date(dateActe) - new Date(dateNaisX) ) / 31536000000 );  
            console.log("Age pere= " + age);
            return age;
        }
    }

    if (formActe.date_acte.value) {
        if (formPersonne.date_nais_m.value) {
            formPersonne.age_m.value =  age(formActe.date_acte.value, formPersonne.date_nais_m.value )
        }

        if (formPersonne.date_nais_p.value) { 
            formPersonne.age_p.value = age(formActe.date_acte.value, formPersonne.date_nais_p.value );
        }  
    }

    const [message, setMessage] = useState("");
    let isValid;
    const handleSubmit = (e) => {
        e.preventDefault();

        const isValidActe = validFormActe();
        const isValidPersonne = validFormPersonne();
        var isValid = isValidActe && isValidPersonne;

        // if (isValid) {
        if (true) {

            setMessage("connexion enn cours ...");
            
            // Data ACTE
            acte.id_acte =  formActe.id_acte.value;
            acte.id_type =  formActe.id_type.value;
            acte.date_acte =  formActe.date_acte.value;
            acte.heure_acte =  formActe.heure_acte.value;
            acte.lieu_acte =  formActe.lieu_acte.value;
            acte.date_enreg =  formActe.date_enreg.value;
            acte.heure_enreg =  formActe.heure_enreg.value;
    
            acte.nom_temoin =  formActe.nom_temoin.value;
            acte.prenom_temoin =  formActe.prenom_temoin.value;
            acte.sexe_temoin =  formActe.sexe_temoin.value;
            acte.date_nais_temoin =  formActe.date_nais_temoin.value;
            acte.lieu_nais_temoin =  formActe.lieu_nais_temoin.value;
            acte.age_temoin =  formActe.age_temoin.value;
            acte.adrs_temoin =  formActe.adrs_temoin.value;
            acte.profession_temoin =  formActe.profession_temoin.value;
    
            acte.id_person =  formActe.id_person.value;
            acte.id_fonkotany =  formActe.id_fonkotany.value;
            acte.code_commune =  formActe.code_commune.value;
            acte.id_user =  formActe.id_user.value;

            //Data Personne
            personne.id_person = formPersonne.id_person.value ;           
            personne.nom_person = formPersonne.nom_person.value ;           
            personne.prenom_person = formPersonne.prenom_person.value ;         
            personne.sexe_person = formPersonne.sexe_person.value ;           
            personne.adrs_person = formPersonne.adrs_person.value ;           
            personne.id_travail = formPersonne.id_travail.value ;           
    
            personne.nom_m = formPersonne.nom_m.value ;          
            personne.prenom_m = formPersonne.prenom_m.value ;         
            personne.date_nais_m = formPersonne.date_nais_m.value ;         
            personne.lieu_nais_m = formPersonne.lieu_nais_m.value ;         
            personne.age_m = formPersonne.age_m.value ;          
            personne.adrs_m = formPersonne.adrs_m.value ;          
            personne.profession_m = formPersonne.profession_m.value ;        
    
            personne.nom_p = formPersonne.nom_p.value ;         
            personne.prenom_p = formPersonne.prenom_p.value ;          
            personne.date_nais_p = formPersonne.date_nais_p.value ;        
            personne.lieu_nais_p = formPersonne.lieu_nais_p.value ;         
            personne.age_p = formPersonne.age_p.value ;          
            personne.adrs_p = formPersonne.adrs_p.value ;         
            personne.profession_p = formPersonne.profession_p.value ;  
            
            /*API(Laraver)
            .then(isAuthenticated => {
                if (!isAuthenticated) {
                    setMessage("Identifiant ou mot de passe incorrect."); return;
                }
                console.log(message); navigate("/dashboard");
            });*/

            isEditForm ? updatePersone() : addPersonne();
        }else {
            setMessage("Verifier le(s) champ(s) non valide");
        }
        setTimeout(() => setMessage("") , 6000);
    }
    

    const updatePersone = () => {
        // APIService.updatePersone(personne)
        // .then( (response) => response.json() )
        // .then( () => navigate("/acte-etat-civil/detail-acte"))
    }

    const addPersonne = () => {
        // APIService.addPersonne(personne)
        // .then( () => navigate(`/pokemons/${pokemon.id}`) );
    }

    

    return (
        <>
                    { /* <!-- ===== CARD 1 ===== --> */}
                    <div className="card active-main" id="card-1">
                        { /* <!-- ===== HEADER CARD 1 ===== --> */}
                        <header className="main-header-content">
                            {isEditForm ? 
                            (<h3 className="main-header-content-title">Ajout d'une nouvelle acte</h3>):
                            (<h3 className="main-header-content-title">Modifier acte</h3>)
                            }
                            <span className="main-header-content-subtitle">Soutitre page</span>

                            <div className="main-local-nav">
                                <div className="action-local-nav">

                                    <Link to='/acte-etat-civil'>
                                        <button className="btn add-now" id="add-now">
                                            <span className="content-add-now" >
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                    <path fill='#fff' d="M13.939 4.939 6.879 12l7.06 7.061 2.122-2.122L11.121 12l4.94-4.939z" />
                                                </svg>
                                                <span className="add-now-name" id='add-adresse'>Retour</span>
                                            </span>
                                        </button>
                                    </Link>

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


                                    <div className="action-group">
                                        {isEditForm ? 
                                            (<button type="submit" className="btn btn-save" id="save">Modifier</button>):
                                            (<button type="submit" className="btn btn-save" id="save">Envoyer</button>)
                                        }
                                        <button type="reset" className="btn btn-clear" id="clear">Annuler</button>
                                    </div>

                                </div>
                            </form>

                        </main>
                    </div>
        </>
    )
}

export default FormActeAndBirthday;
