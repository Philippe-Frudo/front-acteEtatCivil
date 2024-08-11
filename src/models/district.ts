export default class District {
    // 1.Typage des proprietes du District
    code_district: String;
    nom_district: String;
    id_region: number;

    // 2. Definition des valeurs par defaut des proprietes du District
    constructor(
        code_commune: String = "",
        nom_district: String = "",
        id_region: number,
    ) {
        // 3. Initialisation des proprietes du District
        code_commune = code_commune;
        nom_district = nom_district;
        id_region = id_region;
    }
}