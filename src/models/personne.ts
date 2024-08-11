export default class Personne {
    // 1.Typage des proprietes d'une Personne
    id_person: number;
    nom_person: String;
    prenom_person: String;
    sexe_person: String;
    adrs_person: string;
    id_travail: number;

    nom_m: String;
    prenom_m: String;
    date_nais_m: String;
    age_m: number;
    lieu_nais_m: String;
    adrs_m: string;
    profession_m: string;

    nom_p: String;
    prenom_p: String;
    date_nais_p: String;
    lieu_nais_p: String;
    adrs_p: string;
    age_p: number;
    profession_p: string;

    // 2. Definition des valeurs par defaut des proprietes d'une Personne
    constructor(
        // id_person: number,
        nom_person: String = "",
        prenom_person: String = "",
        sexe_person: String = "F",
        adrs_person: string = "",
        id_travail: number,

        nom_m: String = "",
        prenom_m: String = "",
        date_nais_m: String = "",
        lieu_nais_m: String = "",
        age_m: number = 0,
        adrs_m: string = "",
        profession_m : string = "",

        nom_p: String = "",
        prenom_p: String = "",
        date_nais_p: String = "",
        lieu_nais_p: String = "",
        age_p: number = 0,
        profession_p: string = "",
        adrs_p: string = ""
    ) {
        // 3. Initialisation des proprietes d'une personne
        // this.id_person = id_person;
        this.nom_person = nom_person;
        this.prenom_person = prenom_person;
        this.sexe_person = sexe_person;
        this.adrs_person = adrs_person;
        this.id_travail = id_travail;

        this.nom_m = nom_m;
        this.prenom_m = prenom_m;
        this.date_nais_m = date_nais_m;
        this.lieu_nais_m = lieu_nais_m;
        this.age_m = age_m;
        this.adrs_m = adrs_m;
        this.profession_m = profession_m;

        this.nom_p = nom_p;
        this.prenom_p = prenom_p;
        this.date_nais_p = date_nais_p;
        this.lieu_nais_p = lieu_nais_p;
        this.age_p = age_p;
        this.adrs_p = adrs_p;
        this.profession_p = profession_p;
       
    }
}