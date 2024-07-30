export default class Fonkotany {
    // 1.Typage des proprietes du Fonkotany
    id_fonkotany: number;
    code_fonkotany: String;
    nom_fonkotany: String;
    code_commune: String;


    // 2. Definition des valeurs par defaut des proprietes du Fonkotany
    constructor(
        id_fonkotany: number,
        code_fonkotany: String = "",
        nom_fonkotany: String = "",
        code_commune: String = ""
    ) {
        // 3. Initialisation des proprietes du Fonkotany
        id_fonkotany = id_fonkotany;
        code_fonkotany = nom_fonkotany;
        nom_fonkotany = nom_fonkotany;
        code_commune = code_commune;
    }
}