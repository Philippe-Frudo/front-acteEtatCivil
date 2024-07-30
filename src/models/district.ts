export default class District {
    // 1.Typage des proprietes du District
    code_district: String;
    nom_district: String;
    code_region: String;

    // 2. Definition des valeurs par defaut des proprietes du District
    constructor(
        code_commune: String = "",
        nom_district: String = "",
        code_region: String = "",
    ) {
        // 3. Initialisation des proprietes du District
        code_commune = code_commune;
        nom_district = nom_district;
        code_region = code_region;
    }
}