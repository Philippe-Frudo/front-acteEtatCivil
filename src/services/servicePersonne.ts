import { resolve } from 'chart.js/helpers';
import PERSONNES from './../models/mock-personne'


export default class PersonneService {

    static url = import.meta.env.VITE_API_URL;

    static personnes = PERSONNES;

    static isDev = (!process.env.NODE_ENV || process.env.NODE_ENV === "development");


    static getPersonne(): Object {
        if (this.isDev) {
            return fetch(`${this.url}/personnes`)
            .then(response => response.json())
            .catch(error => this.handleError(error)); 
        }
        return new Promise(resolve => {resolve(this.personnes)})
    }

    static getLastPersonne(): Object {
        if (this.isDev) {
            return fetch(`${this.url}/personnes/last`)
            .then(response => response.json())
            .catch(error => this.handleError(error)); 
        }
        return new Promise(resolve => {resolve(this.personnes)})
    }

    static getPersonneById(id: number): Object {
        if (this.isDev) {
            return fetch(`${this.url}/personnes/${id}`)
            .then(response => response.json())
            .then(data => this.isEmpty(data) ? null:data)
            .catch(error => this.handleError(error));
        }

        return new Promise(resolve => {resolve(this.personnes.find(personne => id === personne.id_person))})
    }

    static addPersonne(personne): Object {
        if (this.isDev) {
            return fetch(`${this.url}/personnes`, {
                method:"POST",
                body: JSON.stringify(personne),
                headers: {"Content-Type":"application/json"}
            })
            .then(response => response.json())
            .catch(error => this.handleError(error));
        }

        return new Promise(resolve => { 
            this.personnes.push(personne);
            resolve(personne);
        });
    }


    static updatePersonne(personne):Object {
        if (this.isDev) {
            return fetch(`${this.url}/${personne.id_person}`, {
                method:"PUT",
                body: JSON.stringify(personne),
                headers: {"Content-Type":"application/json"}
            })
            .then(response => response.json())
            .catch(error => this.handleError(error));
        }

        return new Promise(resolve => {
            const { id_person } = personne;
            const index = this.personnes.findIndex(personne => personne.id_person === id_person );
            this.personnes[index] = personne;
            resolve(personne);
        });

    }
    

    static deletePersonne(personne):Object {
        if (this.isDev) {
            return fetch(`${this.url}/personnes/${personne}`, {
                method:"DELETE",
                body: JSON.stringify(personne),
                headers: {"Content-Type":"application/json"}
            })
            .then(response => response.json())
            .catch(error => this.handleError(error)); 
        }

        return new Promise(resolve => {
            const {id_person } = personne;
            this.personnes = this.personnes.filter(personne => personne.id_person !== id_person );
            resolve({});
        })
    }

    static isEmpty(data: Object): Boolean {
        return Object.keys(data).length === 0;
    }


    static handleError(error: Error) {
        console.log(error);
        
    }
}