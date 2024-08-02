export default class Temoin {
    // 1.Typage des proprietes d'un Temoin
    id_temoin: number;
    nom_temoin: String;
    prenom_temoin: String;
    sexe_temoin: String;
    date_nais_temoin: String;
    lieu_nais_temoin: String;
    age_temoin: number;
    id_travail: number;
    adrs_temoin: string;

    

    // 2. Definition des valeurs par defaut des proprietes d'un Temoin
    constructor(
        id_temoin: number,
        nom_temoin: String = "",
        prenom_temoin: String = "",
        sexe_temoin: String = "F",
        date_nais_temoin: String = "",
        lieu_nais_temoin: String = "",
        age_temoin: number,
        id_travail: number,
        adrs_temoin: string,
    ) {
        // 3. Initialisation des proprietes d'un Temoin
        this.id_temoin = id_temoin;
        this.nom_temoin = nom_temoin;
        this.prenom_temoin = prenom_temoin;
        this.sexe_temoin = sexe_temoin;
        this.date_nais_temoin = date_nais_temoin;
        this.lieu_nais_temoin = lieu_nais_temoin;
        this.age_temoin = age_temoin;
        this.id_travail = id_travail;
        this.adrs_temoin = adrs_temoin;
    }
}