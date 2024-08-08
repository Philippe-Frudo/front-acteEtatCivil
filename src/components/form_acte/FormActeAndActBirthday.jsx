import React, { useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import {errorBorder, successBorder, messageValidator, hiddenList } from "./../../helpers/borderField";
import FormPersonne from '../../components/form_personne/FormPersonne';
import FormActe from '../../components/form_acte/FormActe';
import { regex } from '../../helpers/regex';
import PersonneService from '../../services/servicePersonne';
import ActeService from '../../services/serviceActe';
import TravailService from '../../services/serviceTravail';

const FormActeAndBirthday = ({personne, acte, isEditForm}) => {

    const [travails, setTravails] = useState([]);
    // travails.some(travail => travail.nom_travail === 'Ombiasa'); // Verification de valeur dans une tableau
    useEffect(() => {
        TravailService.getTravail().then(travails => setTravails(travails));
    },[]);

    let newDate = new Date().toUTCString();

    // const [lastPersonne, setLastPersonne] = useState(null);

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
        id_person: { value:null },
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
        const newForm = { ...formPersonne };

        /* =============== VALIDATION PERSONNE =============== */
        //Validation de nom du personne
        if (!formPersonne.nom_person.value) {
            newForm.nom_person = { value: formPersonne.nom_person.value, error: '', isValid: false };
            errorBorder(".nom_person");
        } else {
            let msg = '', isValid = true;
            if (!regex.nom.test(formPersonne.nom_person.value)) {
                isValid = false
                msg =  "Le nom doit etre une chaine de caractére de longueur 3 à 30";
            }
            newForm.nom_person = { value: formPersonne.nom_person.value, error: msg, isValid: isValid };
            successBorder(".nom_person");
            messageValidator(".nom_person", msg );
        }

        //Validation de prenom du personne
        if (formPersonne.prenom_person.value) {
            if (!regex.prenom.test(formPersonne.prenom_person.value)) {
                newForm.prenom_person = { value: formPersonne.prenom_person.value, error: "Le prenom doit etre des chaines de caractéres, de 3 à 50 de long.", isValid: false };
                errorBorder(".prenom_person");
                messageValidator(".prenom_person", newForm.prenom_person.error);
            } else {
                newForm.prenom_person = { value: formPersonne.prenom_person.value, error: "", isValid: true };
                successBorder(".prenom_person");
                messageValidator(".prenom_person" );
            }   
        }

        //Validation de l'adresse du perssone
        if (formPersonne.adrs_person.value) {
            if ( formPersonne.adrs_person.value.length < 10 ) {
                newForm.adrs_person = { value: formPersonne.adrs_person.value, error: "L'adresse doit au mois de 10 caractéres", isValid: false };
                errorBorder(".adrs_person");
                messageValidator(".adrs_person", newForm.adrs_person.error);
            } else {
                newForm.adrs_person = { value: formPersonne.adrs_person.value, error: "", isValid: true };
                successBorder(".adrs_person");
                messageValidator(".adrs_person");
            }  
        }

        //Validation de l'adresse
        if (!document.querySelector(".nom_travail_person").value) {
            newForm.id_travail = { value: formPersonne.id_travail.value, error: "", isValid: false };
            errorBorder(".nom_travail_person");
        }else {
            let msg = '', isValid = true;
            if (!formPersonne.id_travail.value) {
                msg= "Assurez-vous de sélectionner la valeur charcher";
                isValid = false
                errorBorder(".nom_travail_person");
            }
            newForm.id_travail = { value: formPersonne.id_travail.value, error: msg, isValid: isValid };
            successBorder(".nom_travail_person");
            messageValidator(".nom_travail_person", msg );

        }


        /* =============== VALIDATION MERE =============== */
         //Validation de nom de la mère
         if (!formPersonne.nom_m.value) {
            newForm.nom_m = { value: formPersonne.nom_m.value, error: '', isValid: false };
            errorBorder(".nom_m");
        } else {
            let msg = '', isValid = true
            if (!regex.nom.test(formPersonne.nom_m.value) ){
                isValid = false
                msg = "caractéres spéciaux invalide , longueur de 3 à 30"
            }
            newForm.nom_m = { value: formPersonne.nom_m.value, error: msg, isValid: isValid };
            successBorder(".nom_m");
            messageValidator(".nom_m", msg );
        }

        //Validation de prenom de la mère
        if (formPersonne.prenom_m.value) {
            if (!regex.prenom.test(formPersonne.prenom_m.value) ) {
                newForm.prenom_m = { value: formPersonne.prenom_m.value, error: "caractéres spéciaux invalide, et longueur de 3 à 50.", isValid: false };
                errorBorder(".prenom_m");
                messageValidator(".prenom_m", newForm.prenom_m.error);
            } else {
                newForm.prenom_m = { value: formPersonne.prenom_m.value, error: "", isValid: true };
                successBorder(".prenom_m");
                messageValidator(".prenom_m");
            }  
        }

        //Validation date de naissance mère
        if (!formPersonne.date_nais_m.value) {
            newForm.date_nais_m = { value: formPersonne.date_nais_m.value, error: '', isValid: false };
            errorBorder(".date_nais_m");
        } else {
            let msg = '', isValid = true
            if ( formPersonne.age_m.value && (formPersonne.age_m.value < 12) ) {
                isValid = false
                msg = "Entre la date d'acte et la date de naissance de la mère, l'age de la mère doit >=12.";
            }

            newForm.date_nais_m = { value: formPersonne.date_nais_m.value, error: msg, isValid: isValid };
            successBorder(".date_nais_m");
            messageValidator(".date_nais_m", msg );
        }


        //Validation de lieu de naissance
        if (!formPersonne.lieu_nais_m.value) {
            newForm.lieu_nais_m = { value: formPersonne.lieu_nais_m.value, error: '', isValid: false };
            errorBorder(".lieu_nais_m");
        } else {
            let msg = '', isValid = true
            if (formPersonne.lieu_nais_m.value.length < 10) {
                isValid = false
                msg = "ce champ doitau minimum de 10 caractéres.";
            }
            newForm.lieu_nais_m = { value: formPersonne.lieu_nais_m.value, error: "", isValid: true };
            successBorder(".lieu_nais_m");
            messageValidator(".lieu_nais_m", msg );
        }


        //Validation de profession mere
        if (!formPersonne.profession_m.value) {
            newForm.profession_m = { value: formPersonne.profession_m.value, error: '', isValid: false };
            errorBorder(".profession_m");
        } else {
            let msg = '', isValid = true
            //Verification de profession de la mère dans la table travail"
            if (!travails.some(trav => trav.nom_travail === formPersonne.profession_m.value) ) {
                isValid = false
                msg = 'Entre de travail valide, Ce travail n\'existe pas';
            }
            newForm.profession_m = { value: formPersonne.profession_m.value, error: msg, isValid: isValid };
            successBorder(".profession_m");
            messageValidator(".profession_m", msg );
        }


        //Validation de l'adresse de la mère
        if (!formPersonne.adrs_m.value) {
            newForm.adrs_m = { value: formPersonne.adrs_m.value, error: '', isValid: false };
            errorBorder(".adrs_m");
        } else {
             let msg = ''
             let isValid = true
            if (formPersonne.adrs_m.value.length < 10) {
                isValid = false
                msg = "L'adresse doit au moins de 10 caractére de long.";
            }
            newForm.adrs_m = { value: formPersonne.adrs_m.value, error: msg, isValid: isValid };
            successBorder(".adrs_m");
            messageValidator(".adrs_m", msg );
        }



        /* =============== VALIDATION PERE =============== */
         //Validation nom du pere
         if (!formPersonne.nom_p.value) {
            newForm.nom_p = { value: formPersonne.nom_p.value, error: '', isValid: false };
            errorBorder(".nom_p");
        } else {
            let msg = ''
            let isValid = true;
            if (formPersonne.nom_p.value.length > 0 && !regex.nom.test(formPersonne.nom_p.value)) {
                isValid = false;
                msg = "Invalide les caractéres spéciaux: , longueur du champ de 3 à 30."
            }
            newForm.nom_p = { value: formPersonne.nom_p.value, error: msg, isValid: isValid };
            successBorder(".nom_p");
            messageValidator(".nom_p", msg );
        }


        //Validation de prenom du père 
        if (formPersonne.prenom_p.value) {
            if (!regex.prenom.test(formPersonne.prenom_p.value)) {
                newForm.prenom_p = { value: formPersonne.prenom_p.value, error: "caractéres spéciaux invalide, longueur de 3 à 50.", isValid: false };
                errorBorder(".prenom_p");
                messageValidator(".prenom_p", newForm.prenom_p.error);
            } else {
                newForm.prenom_p = { value: formPersonne.prenom_p.value, error: "", isValid: true };
                successBorder(".prenom_p");
                messageValidator(".prenom_p");
            }  
        }

        // Validation de date de naissance du père
        if (!formPersonne.date_nais_p.value) {
            newForm.date_nais_p = { value: formPersonne.date_nais_p.value, error: '', isValid: false };
            errorBorder(".date_nais_p");
        } else {
            let msg = ''
            let isValid = true
            if ( formPersonne.age_p.value && (formPersonne.age_p.value < 14) ) {
                isValid = false
                msg = "Entre la date de naissance du père et la date de l'acte. L'age du père doit >= 14"
            }

            newForm.date_nais_m = { value: formPersonne.date_nais_p.value, error: msg, isValid: isValid };
            successBorder(".date_nais_p");
            messageValidator(".date_nais_p", msg );
        }


        //Validation de lieu de naissance père
        if (!formPersonne.lieu_nais_p.value ){
            newForm.lieu_nais_p = { value: formPersonne.lieu_nais_p.value, error: '', isValid: false };
            errorBorder(".lieu_nais_p");
        } else {
            let msg = ''
            let isValid = true
            if (formPersonne.lieu_nais_p.value.length < 10) {
                msg = "La longueur doit au mois de 10 caractére."
                isValid = false
            }
            newForm.lieu_nais_p = { value: formPersonne.lieu_nais_p.value, error: msg, isValid: isValid };
            successBorder(".lieu_nais_p");
            messageValidator(".lieu_nais_p", msg );
        }


        //Validation de l'adresse du PERE
        if (!formPersonne.adrs_p.value) {
            newForm.adrs_p = { value: formPersonne.adrs_p.value, error: '', isValid: false };
            errorBorder(".adrs_p");
        } else {
            let msg = ''
            let isValid = true
            if (formPersonne.adrs_p.value.length < 5) {
                msg = "Ce champ doit au moins 10 caractére"
                isValid = false
            }
            newForm.adrs_p = { value: formPersonne.adrs_p.value, error: msg, isValid: isValid };
            successBorder(".adrs_p");
            messageValidator(".adrs_p", msg );
        }

        //Validation de profession PERE
        if (!formPersonne.profession_p.value) {
            newForm.profession_p = { value: formPersonne.profession_p.value, error: "", isValid: false };
            errorBorder(".profession_p");
        } else {
            let msg = ""
            let isValid = true
            if (!travails.some(trav => trav.nom_travail === formPersonne.profession_p.value)) {
                msg = "Ce travail n'existe pas"
                isValid = false
            }
            newForm.profession_p = { value: formPersonne.profession_p.value, error: msg, isValid: isValid };
            successBorder(".profession_p");
            messageValidator(".profession_p", msg );
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
        num_acte : {value: acte.num_acte, isValid: true },
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
        id_commune : {value: acte.id_commune, isValid: true },
        id_off : {value: acte.id_off, isValid: true }
    });

    const validFormActe = () => {
        const newForm = { ...formActe };

        //Validation de type 
        if (!formActe.id_type.value) {
            newForm.id_type = { value: formActe.id_type.value, error: "", isValid: false };
            errorBorder(".id_type");
        } else {
            newForm.id_type = { value: formActe.id_type.value, error: "", isValid: true };
            successBorder(".id_type");
        }

        //Validation de numero acte 
        if (!formActe.num_acte.value) {
            newForm.num_acte = { value: formActe.num_acte.value, error: "", isValid: false };
            errorBorder(".num_acte");
        } else {
            let msg = '', isValid = true;
            if (!regex.number(formActe.num_acte.value) ) {
                isValid = false
                msg = "Seul le nombre entier est autorise";
            }
            newForm.num_acte = { value: formActe.num_acte.value, error: "", isValid: isValid };
            successBorder(".num_acte");
        }

        //Validation de date_acte 
        if (!formActe.date_acte.value) {
            newForm.date_acte = { value: formActe.date_acte.value, error: '', isValid: false };
            errorBorder(".date_acte");
        } else {
            let msg = '', isValid = true;
            if (formActe.date_acte.value >= newDate ) {
                isValid = false
                msg = "La date d'acte n'est pas valide";
            }
            newForm.date_acte = { value: formActe.date_acte.value, error: msg, isValid: isValid };
            successBorder(".date_acte");
            messageValidator(".date_acte", msg );
        }

        //Validation de heure_acte 
        if (!formActe.heure_acte.value) {
            newForm.heure_acte = { value: formActe.heure_acte.value, error: "", isValid: false };
            errorBorder(".heure_acte");
        } else {
            newForm.heure_acte = { value: formActe.heure_acte.value, error: "", isValid: true };
            successBorder(".heure_acte");
        }

        //Validation de lieu d'acte 
        if (!formActe.lieu_acte.value) {
            errorBorder(".lieu_acte");
            newForm.lieu_acte = { value: formActe.lieu_acte.value, error: '' , isValid: false };
        } else {
            let msg = '', isValid = true;
            if (formActe.lieu_acte.value.length < 10) {
                isValid = false
                msg = "Le lieu ne doit pas au moins de 10 caractéres";
            }
            newForm.lieu_acte = { value: formActe.lieu_acte.value, error: msg, isValid: isValid };
            successBorder(".lieu_acte");
            messageValidator(".lieu_acte", msg );
        }

        //Validation de date_enreg 
        if (!formActe.date_enreg.value ) { 
            newForm.date_enreg = { value: formActe.date_enreg.value, error: '', isValid: false };
            errorBorder(".date_enreg");
        } else {
            let msg = '', isValid = true;
            if (formActe.date_acte.value && formActe.date_enreg.value <= formActe.date_acte.value ) {
                isValid = false
                msg = "La date d'enregistrement doit superieur ou égale à la date de l'acte."
            }

            if (formActe.date_enreg.value >= newDate) {
                isValid = false
                msg = "La date d'enregistrement d'acte n'est pas valide."
            }
            newForm.date_enreg = { value: formActe.date_enreg.value, error: msg, isValid: isValid };
            successBorder(".date_enreg");
            messageValidator(".date_enreg", msg );
        }

        //Validation de heure_enreg
        if (!formActe.heure_enreg.value) {
            newForm.heure_enreg = { value: formActe.heure_enreg.value, error: "", isValid: false };
            errorBorder(".heure_enreg");
            messageValidator(".heure_enreg", newForm.heure_enreg.error);
        } else {
            newForm.heure_enreg = { value: formActe.heure_enreg.value, error: "", isValid: true };
            successBorder(".heure_enreg");
            messageValidator(".heure_enreg");
        }

        //validation nom temoin
        if (!formActe.nom_temoin.value) {
            newForm.nom_temoin = { value: formActe.nom_temoin.value, error: '', isValid: false };
            errorBorder(".nom_temoin");
        } else {
            let msg = '', isValid = true;
            if (!regex.nom.test(formActe.nom_temoin.value)) {
                isValid = false
                msg = "nom invalide, caractére spéciaux  ,non autorisés, de longueur 3 à 30"
            }
            newForm.nom_temoin = { value: formActe.nom_temoin.value, error: msg, isValid: isValid };
            successBorder(".nom_temoin");
            messageValidator(".nom_temoin", msg );
        }

        //Validation de prenom du temoin 
        if (formActe.prenom_temoin.value) {
            if (!regex.prenom.test(formActe.prenom_temoin.value) ) {
                newForm.prenom_temoin = { value: formActe.prenom_temoin.value, error: "nom invalide, caractére non valide, de longueur 3 à 30.", isValid: false };
                errorBorder(".prenom_temoin");
                messageValidator(".prenom_temoin", newForm.prenom_temoin.error);
            } else {
                newForm.prenom_temoin = { value: formActe.prenom_temoin.value, error: "", isValid: true };
                successBorder(".prenom_temoin");
                messageValidator(".prenom_temoin");
            }  
        }

        //Validation date de naissance du temoin
        if (!formActe.date_nais_temoin.value) {
            newForm.date_nais_temoin = { value: formActe.date_nais_temoin.value, error: '', isValid: false };
            errorBorder(".date_nais_temoin");
        } else {
            let msg = '', isValid = true;
            if ( formActe.age_temoin.value && (formActe.age_temoin.value <= 18) ) {
                isValid =false
                msg = "L'age n'est doit pas inférieur à 18."
            }
            newForm.date_nais_temoin = { value: formActe.date_nais_temoin.value, error: msg, isValid: isValid };
            successBorder(".date_nais_temoin");
            messageValidator(".date_nais_temoin", msg );
        }


        //Validation de lieu de naissance du temoin
        if (!formActe.lieu_nais_temoin.value) {
            newForm.lieu_nais_temoin = { value: formActe.lieu_nais_temoin.value, error: '', isValid: false };
            errorBorder(".lieu_nais_temoin");
        } else {
            let msg = '', isValid = true;
            if (formActe.lieu_nais_temoin.value.length < 10) {
                isValid = false
                msg = "Lieu au mois de 10 caractére"
            }
            newForm.lieu_nais_temoin = { value: formActe.lieu_nais_temoin.value, error: msg, isValid: isValid };
            successBorder(".lieu_nais_temoin");
            messageValidator(".lieu_nais_temoin", msg );
        }


        //Validation de l'adresse du temoin
        if (!formActe.adrs_temoin.value ) {
            newForm.adrs_temoin = { value: formActe.adrs_temoin.value, error: '', isValid: false };
            errorBorder(".adrs_temoin");
        } else {
            let msg = '', isValid = true;
            if (formActe.adrs_temoin.value.length < 10) {
                isValid = false;
                msg = "L'adresse doit au mois de 10 caractére"
            }
            newForm.adrs_temoin = { value: formActe.adrs_temoin.value, error: msg, isValid: isValid };
            successBorder(".adrs_temoin");
            messageValidator(".adrs_temoin", msg );
        }

        //Validation de la profession du temoin
        if (!formActe.profession_temoin.value) {
            newForm.profession_temoin = { value: formActe.profession_temoin.value, error: '', isValid: false };
            errorBorder(".profession_temoin");
        } else {
            let msg = '', isValid = true
            if (!travails.some(trav => trav.nom_travail === formActe.profession_temoin.value) ) {
                isValid = false
                msg = 'ce travail n\'existe pas'
            }
            newForm.profession_temoin = { value: formActe.profession_temoin.value, error: msg, isValid: isValid };
            successBorder(".profession_temoin");
            messageValidator(".profession_temoin", msg );
        }


        //Validation de fonkotany fonkotany
        if (!document.querySelector(".nom_fonkotany").value) {
            newForm.id_fonkotany = { value: formActe.id_fonkotany.value, error: '', isValid: false };
            errorBorder(".nom_fonkotany");
        } else {
            let msg = '', isValid = true;
            if (!formActe.id_fonkotany.value) {
                msg= "Assurez-vous de sélectionner la valeur charcher";
                isValid = false
                errorBorder(".nom_fonkotany");
            }
            newForm.id_fonkotany = { value: formActe.id_fonkotany.value, error: msg, isValid: isValid };
            successBorder(".nom_fonkotany");
            messageValidator(".nom_fonkotany", msg );
        }

        //Validation de idantifiant du commune
        if (!document.querySelector(".nom_commune").value) {
            newForm.id_commune = { value: formActe.id_commune.value, error: '', isValid: false };
            errorBorder(".nom_commune");
        } else {
            let msg = '', isValid = true;
            if (!formActe.id_commune.value) {
                msg = "Assurez-vous de sélectionner la valeur charcher";
                isValid = false
                errorBorder(".nom_commune");
            }
            newForm.id_commune = { value: formActe.id_commune.value, error: msg, isValid: isValid };
            successBorder(".nom_commune");
            messageValidator(".nom_commune", msg );
        }

        if (newForm.nom_temoin.value && newForm.lieu_nais_temoin.value && newForm.date_nais_temoin.value) {
            setFormActe(newForm);
            return newForm.date_acte.isValid && newForm.heure_acte.isValid && newForm.lieu_acte.isValid
                && newForm.date_enreg.isValid && newForm.heure_enreg.isValid && newForm.id_fonkotany.isValid 
                && newForm.id_commune.isValid && newForm.nom_temoin.isValid && newForm.prenom_temoin.isValid 
                && newForm.date_nais_temoin.isValid && newForm.lieu_nais_temoin.isValid && newForm.adrs_temoin.isValid 
                && newForm.profession_temoin.isValid;
        }

        setFormActe(newForm);
        return newForm.date_acte.isValid && newForm.heure_acte.isValid && newForm.lieu_acte.isValid
            && newForm.date_enreg.isValid && newForm.heure_enreg.isValid 
            && newForm.id_fonkotany.isValid && newForm.id_commune.isValid;
    }


    /* ===== Calcul age des parents et du témoin, à la naissance de la personne =====*/
    const age = (dateActe, dateNaisX) => {
        if (dateActe && dateNaisX) {
            let age = 0;
            age = parseInt(( new Date(dateActe) - new Date(dateNaisX) ) / 31536000000 );  
            console.log("Age = " + age);
            return age;
        }
    }
    const dateActe = formActe.date_acte.value
    if (dateActe) {
        if (formPersonne.date_nais_m.value) {
            formPersonne.age_m.value =  age(dateActe, formPersonne.date_nais_m.value )
        }

        if (formPersonne.date_nais_p.value) { 
            formPersonne.age_p.value = age(dateActe, formPersonne.date_nais_p.value );
        }  

        if (formActe.date_nais_temoin.value) { 
            formActe.age_temoin.value = age(dateActe, formActe.date_nais_temoin.value );
        }
    }

    // EMVOI DE DONNE ET LEUR VALIDATION VALIDATION
    const [valid, setValid] = useState(false)
    const [message, setMessage] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        const isValidActe = validFormActe();
        const isValidPersonne = validFormPersonne();
        
        const isValid = isValidActe && isValidPersonne;
        
        if (true) {
            setValid(isValid)
            setMessage("connexion enn cours ...");

            //Data Personne
            // personne.id_person = formPersonne.id_person.value ;           
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

            
            // Data ACTE
            acte.id_acte =  formActe.id_acte.value;
            acte.id_type =  parseInt(formActe.id_type.value);
            acte.num_acte = formActe.num_acte.value;
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

            acte.id_person = isEditForm ? formActe.id_person.value:lastPersonne;

            acte.id_fonkotany =  formActe.id_fonkotany.value;
            acte.id_commune =  formActe.id_commune.value;
            acte.id_off =  formActe.id_off.value;

            isEditForm ? updatePersone() : addPersonne();
        }else {
            setValid(false)
            setMessage("Verifier le(s) champ(s) non valide ou null");
        }
        setTimeout(() => setMessage("") , 6000);
    }
    
    
    /*Ajouter personne. Aprés l'ajout personne personne on va recupérer 
    l'id de dernier personne pour affecter à l'id personne dans la table ACTE*/
    const addPersonne = () => {
        console.log(personne, '<br>', acte);
        PersonneService.addPersonne(personne).then(resp => {
            // setMessage(resp.message)
            setValid(resp.status)
            if (resp.status) {
                setFormPersonne(
                    {
                    // id_person: { value: null },
                    nom_person: { value: "", isValid: true },
                    prenom_person: { value: "", isValid: true },
                    sexe_person: { value: "", isValid: true },
                    adrs_person: { value: "", isValid: true },
                    id_travail: { value: "", isValid: true },
            
                    nom_m : {value: "", isValid: true },
                    prenom_m : {value: "", isValid: true },
                    date_nais_m : {value: "", isValid: true },
                    lieu_nais_m : {value: "", isValid: true },
                    age_m : {value: "", isValid: true },
                    adrs_m : {value:"", isValid: true },
                    profession_m : {value: "", isValid: true },
            
                    nom_p : {value: "", isValid: true },
                    prenom_p : {value: "", isValid: true },
                    date_nais_p : {value: "", isValid: true },
                    lieu_nais_p : {value: "", isValid: true },
                    age_p : {value: "", isValid: true },
                    adrs_p : {value: "", isValid: true },
                    profession_p : {value: "", isValid: true }
                   
                });

                addActe(status.data) //Appeler la fonction ajouter acte
            }
        });
    }
    
    const addActe = (id_last_person) => {

        // Récupération de la dernière ID de personne aprés l'ajout
        acte.id_person = id_last_person; 
        
        ActeService.addActe(acte).then(resp => {
            setMessage(resp.message)
            setValid(resp.status)
            if (resp.status) {
                setFormActe({
                    id_type : {value: '' , isValid: true },
                    date_acte : {value: '' , isValid: true },
                    heure_acte : {value: '' , isValid: true },
                    lieu_acte : {value: '' , isValid: true },
                    date_enreg : {value: '' , isValid: true },
                    heure_enreg : {value: '' , isValid: true },
            
                    nom_temoin : {value: '' , isValid: true },
                    prenom_temoin : {value: '' , isValid: true },
                    sexe_temoin : {value: '' , isValid: true },
                    date_nais_temoin : {value: '' , isValid: true },
                    lieu_nais_temoin : {value: '' , isValid: true },
                    age_temoin : {value: '' , isValid: true },
                    adrs_temoin : {value: '' , isValid: true },
                    profession_temoin : {value: '' , isValid: true },
            
                    id_person : {value: null, isValid: true },
                    id_fonkotany : {value: null , isValid: true },
                    id_commune : {value: null , isValid: true },
                    id_off : {value: null , isValid: true }
                });
            }
        });  
    }


    const updatePersone = () => {
        console.log(personne);
        console.log(acte);

        PersonneService.updatePersonne(personne).then(resp => {
            setMessage(resp.message)
            setValid(resp.status)
            if (resp.status) {
                setFormPersonne(
                    {
                    // id_person: { value: null },
                    nom_person: { value: "", isValid: true },
                    prenom_person: { value: "", isValid: true },
                    sexe_person: { value: "", isValid: true },
                    adrs_person: { value: "", isValid: true },
                    id_travail: { value: "", isValid: true },
            
                    nom_m : {value: "", isValid: true },
                    prenom_m : {value: "", isValid: true },
                    date_nais_m : {value: "", isValid: true },
                    lieu_nais_m : {value: "", isValid: true },
                    age_m : {value: "", isValid: true },
                    adrs_m : {value:"", isValid: true },
                    profession_m : {value: "", isValid: true },
            
                    nom_p : {value: "", isValid: true },
                    prenom_p : {value: "", isValid: true },
                    date_nais_p : {value: "", isValid: true },
                    lieu_nais_p : {value: "", isValid: true },
                    age_p : {value: "", isValid: true },
                    adrs_p : {value: "", isValid: true },
                    profession_p : {value: "", isValid: true }
                   
                });

                setFormActe({
                    id_type : {value: '' , isValid: true },
                    date_acte : {value: '' , isValid: true },
                    heure_acte : {value: '' , isValid: true },
                    lieu_acte : {value: '' , isValid: true },
                    date_enreg : {value: '' , isValid: true },
                    heure_enreg : {value: '' , isValid: true },
            
                    nom_temoin : {value: '' , isValid: true },
                    prenom_temoin : {value: '' , isValid: true },
                    sexe_temoin : {value: '' , isValid: true },
                    date_nais_temoin : {value: '' , isValid: true },
                    lieu_nais_temoin : {value: '' , isValid: true },
                    age_temoin : {value: '' , isValid: true },
                    adrs_temoin : {value: '' , isValid: true },
                    profession_temoin : {value: '' , isValid: true },
            
                    id_person : {value: null, isValid: true },
                    id_fonkotany : {value: null , isValid: true },
                    id_commune : {value: null , isValid: true },
                    id_off : {value: null , isValid: true }
                });
            }
        });
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
                                <div className="alert-message">
                                    {message && valid ?
                                    (<span className='success message'>{message}</span>):
                                    (<span className='message error'>{message}</span>)
                                    }
                                </div>

                                <div className="content-user">

                                    <FormActe useFormActe={[formActe, setFormActe]} />
                                    <FormPersonne useFormPersonne={[formPersonne, setFormPersonne]} />

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
