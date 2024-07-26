export default class Acte {
    id_acte: number;
    id_type: number;
    id_p: number;
    date_acte: string;
    heure_acte: string;
    id_pere: number;
    id_mere: number;
    lieu_acte: string;
    id_adrs: number;
    id_temoin: number;
    id_user: number;
    date_enreg: string;
    heure_enreg: string;
    code_commune: String;
    id_fonkotany: number;
    code_district: String;
    code_region: String;

    constructor(
        id_acte: number,
        id_type: number,
        id_p: number,
        date_acte: string = "",
        heure_acte: string = "",
        lieu_acte: string = "",
        id_pere: number ,
        id_mere: number,
        id_adrs: number,
        id_temoin: number,
        id_user: number,
        date_enreg: string = "",
        heure_enreg: string = "",
        id_fonkotany: number,
        code_commune: String = "",
        code_district: String = "",
        code_region: String = "",

    ) {
        this.id_acte = id_acte;
        this.id_type = id_type;
        this.id_p = id_p;
        this.date_acte = date_acte;
        this.heure_acte = heure_acte;
        this.lieu_acte = lieu_acte;
        this.id_pere = id_pere;
        this.id_mere = id_mere;
        this.id_adrs = id_adrs;
        this.id_temoin = id_temoin;
        this.id_user = id_user;
        this.date_enreg = date_enreg;
        this.heure_enreg = heure_enreg;
        this.id_fonkotany = id_fonkotany;
        this.code_commune = code_commune;
        this.code_district =code_district;
        this.code_region = code_region;
    }
}