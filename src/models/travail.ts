export default class Travail {

    id_travail: number;
    nom_travail: string;

    constructor(
        id_travail: number,
        nom_travail: string = ''

    ) {
        this.id_travail = id_travail;
        this.nom_travail = nom_travail;
    }
}