export default class District {
    // 1.Typage des proprietes du District
    id_district: number;
    code_district: String;
    nom_district: String;
    id_region: number;

    // 2. Definition des valeurs par defaut des proprietes du District
    constructor(
        id_district: number,
        code_district: String = "",
        nom_district: String = "",
        id_region: number,
    ) {
        // 3. Initialisation des proprietes du District
        this.id_district = id_district;
        this.code_district = code_district;
        this.nom_district = nom_district;
        this.id_region = id_region;
    }
}