export default class District {
    // 1.Typage des proprietes du REGION
    code_region: String;
    nom_region: String;

    // 2. Definition des valeurs par defaut des proprietes du REGION
    constructor(
        code_region: String = "",
        nom_region: String = "",
    ) {
        // 3. Initialisation des proprietes du REGION
        code_region = code_region;
        nom_region = nom_region;
    }
}