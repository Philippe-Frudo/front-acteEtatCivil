export default class Personne {
    // 1.Typage des proprietes d'une Personne
    id_person: number;
    nom_person: String;
    prenom_person: String;
    sexe_person: String;
    id_travail: number;
    id_adrs: number;
    adrs_person: string;

    // 2. Definition des valeurs par defaut des proprietes d'une Personne
    constructor(
        id_person: number,
        nom_person: String = "",
        prenom_person: String = "",
        sexe_person: String = "F",
        id_travail: number,
        id_adrs: number,
        adrs_person: string = ""
    ) {
        // 3. Initialisation des proprietes d'une personne
        this.id_person = id_person;
        this.nom_person = nom_person;
        this.prenom_person = prenom_person;
        this.sexe_person = sexe_person;
        this.id_travail = id_travail;
        this.id_adrs = id_adrs;
        this.adrs_person = adrs_person;
       
    }
}