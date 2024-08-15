export default class Fonkotany {
    // 1.Typage des proprietes du Fonkotany
    id_fonkotany: number;
    code_fonkotany: String;
    nom_fonkotany: String;
    id_commune: number;


    // 2. Definition des valeurs par defaut des proprietes du Fonkotany
    constructor(
        id_fonkotany: number,
        code_fonkotany: String = "",
        nom_fonkotany: String = "",
        id_commune: number
    ) {
        // 3. Initialisation des proprietes du Fonkotany
        this.id_fonkotany = id_fonkotany;
        this.code_fonkotany = nom_fonkotany;
        this.nom_fonkotany = nom_fonkotany;
        this.id_commune = id_commune;
    }
}