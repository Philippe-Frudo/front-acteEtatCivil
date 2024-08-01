export default class Acte {
    id_acte: number;
    id_type: number;
    date_acte: string;
    heure_acte: string;
    lieu_acte: string;
    date_enreg: string;
    heure_enreg: string;
    
    nom_temoin: String;
    prenom_temoin: String;
    sexe_temoin: String;
    date_nais_temoin: String;
    lieu_nais_temoin: String;
    age_temoin: number;
    adrs_temoin: string;
    profession_temoin: string;

    id_person: number;
    code_commune: String;
    id_fonkotany: number;
    id_off: number;


    constructor(
        id_acte: number,
        id_type: number = 0,
        date_acte: string = new Date().toLocaleDateString(),
        heure_acte: string = "",
        lieu_acte: string = "",
        date_enreg: string = new Date().toLocaleDateString(),
        heure_enreg: string = '',
        
        id_person: number = 0,
        id_fonkotany: number,
        code_commune: String = "",

        nom_temoin: String = "",
        prenom_temoin: String = "",
        sexe_temoin: String = "F",
        date_nais_temoin: String = "",
        lieu_nais_temoin: String = "",
        age_temoin: number = 0,
        adrs_temoin: string = "",
        profession_temoin: string = "",

        id_off: number = 0,



    ) {
        this.id_acte = id_acte;
        this.id_type = id_type;
        this.date_acte = date_acte;
        this.heure_acte = heure_acte;
        this.lieu_acte = lieu_acte;
        this.date_enreg = date_enreg;
        this.heure_enreg = heure_enreg;

        this.nom_temoin = nom_temoin;
        this.prenom_temoin = prenom_temoin;
        this.sexe_temoin = sexe_temoin;
        this.date_nais_temoin = date_nais_temoin;
        this.lieu_nais_temoin = lieu_nais_temoin;
        this.age_temoin = age_temoin;
        this.adrs_temoin = adrs_temoin;
        this.profession_temoin = profession_temoin;

        this.id_person = id_person;
        this.id_fonkotany = id_fonkotany;
        this.code_commune = code_commune;
        this.id_off = id_off;

    }
}