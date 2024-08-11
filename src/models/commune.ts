export default class Commune {
    // 1.Typage des proprietes du Fonkotany
    code_commune: String;
    nom_commune: String;
    id_district: number;

    // 2. Definition des valeurs par defaut des proprietes du Fonkotany
    constructor(
        code_commune: String = "",
        nom_commune: String = "",
        id_district: number,
    ) {
        // 3. Initialisation des proprietes du Fonkotany
        code_commune = code_commune;
        nom_commune = nom_commune;
        id_district = id_district ;
    }
}