export default class District {
    // 1.Typage des proprietes du REGION
    id_region: number
    code_region: String;
    nom_region: String;
    
    // 2. Definition des valeurs par defaut des proprietes du REGION
    constructor(
        id_region: number,
        code_region: String = "",
        nom_region: String = "",
    ) {
        // 3. Initialisation des proprietes du REGION
        this.id_region = id_region;
        this.code_region = code_region;
        this.nom_region = nom_region;
    }
}