//      L'officier est considere comme UTILISATEUR

export default class Officier {
    //Definissez les proprietes des l'objet OFFICIER (utilisateur)
    // id_off: number;
    photo_off: string;
    nom_off: string;
    prenom_off: string;
    sexe_off: string;
    email_off: string; //Unique
    id_commune: number; //Unique
    motPass_off: string;
    
    constructor(
        // Definir des valeur par defaut de l'officier (utilisateur)
        // id_off: number,
        photo_off: string = "",
        nom_off: string = '',
        prenom_off: string = '',
        sexe_off: string = 'M',
        email_off: string = '',
        id_commune: number,
        motPass_off: string = ''
    ){
        // this.id_off = id_off;
        this.photo_off  = photo_off;
        this.nom_off  = nom_off;
        this.prenom_off = prenom_off;
        this.sexe_off  = sexe_off;
        this.email_off  = email_off;
        this.id_commune  = id_commune;
        this.motPass_off  = motPass_off;

    }
}