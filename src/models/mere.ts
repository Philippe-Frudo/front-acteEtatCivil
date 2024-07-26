export default class Mere {
    // 1.Typage des proprietes d'une Mere
    id_m: number;
    nom_m: String;
    prenom_m: String;
    sexe_m: String;
    date_nais_m: String;
    lieu_nais_m: String;
    age_m: number;
    id_travail: number;
    adrs_m: string;


    // 2. Definition des valeurs par defaut des proprietes d'une Personne
    constructor(
        id_m: number,
        nom_m: String = "",
        prenom_m: String = "",
        sexe_m: String = "",
        date_nais_m: String = "",
        lieu_nais_m: String = "",
        age_m: number = 0,
        id_travail: number,
        adrs_m: string = "",
    ) {
        // 3. Initialisation des proprietes d'une personne
        this.id_m = id_m;
        this.nom_m = nom_m;
        this.prenom_m = prenom_m;
        this.sexe_m = sexe_m;
        this.date_nais_m = date_nais_m;
        this.lieu_nais_m = lieu_nais_m;
        this.age_m = age_m;
        this.id_travail = id_travail;
        this.adrs_m = adrs_m;

    }
}