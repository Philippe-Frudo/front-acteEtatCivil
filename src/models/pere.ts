export default class Pere {
    // 1.Typage des proprietes d'une Pere
    id_p: number;
    nom_p: String;
    prenom_p: String;
    sexe_p: String;
    date_nais_p: String;
    lieu_nais_p: String;
    age_p: number;
    adrs_p: string;
    id_travail: number;

    // 2. Definition des valeurs par defaut des proprietes d'une Pere
    constructor(
        id_p: number,
        nom_p: String = "",
        prenom_p: String = "",
        sexe_p: String = "",
        date_nais_p: String = "",
        lieu_nais_p: String = "",
        age_p: number = 0,
        id_travail: number,
        adrs_p: string = ""
    ) {
        // 3. Initialisation des proprietes d'une Pere
        this.id_p = id_p;
        this.nom_p = nom_p;
        this.prenom_p = prenom_p;
        this.sexe_p = sexe_p;
        this.date_nais_p = date_nais_p;
        this.lieu_nais_p = lieu_nais_p;
        this.age_p = age_p;
        this.id_travail = id_travail;
        this.adrs_p = adrs_p;
    }
}