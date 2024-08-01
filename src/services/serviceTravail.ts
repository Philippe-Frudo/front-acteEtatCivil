import { resolve } from 'chart.js/helpers';
import TRAVAILS from '../models/mock-travail';


export default class TravailService {

    static url = "http://localhost:3001";

    static travails = TRAVAILS;

    static isDev = (!process.env.NODE_ENV || process.env.NODE_ENV === "development");


    static getTravail(): Object {
        if (this.isDev) {
            return fetch(`${this.url}/travails`)
            .then(response => response.json())
            .catch(error => this.handleError(error)); 
        }

        return new Promise(resolve => {resolve(this.travails)})
    }

    static getTravailById(id: number): Object {
        if (this.isDev) {
            return fetch(`${this.url}/travails/${id}`)
            .then(response => response.json())
            .then(data => this.isEmpty(data) ? null:data)
            .catch(error => this.handleError(error));
        }

        return new Promise(resolve => {resolve(this.travails.find(f => id === f.id_travail))})
    }

    static addTravail(dataTravail): Object {
        if (this.isDev) {
            return fetch(`${this.url}/travails`, {
                method:"POST",
                body: JSON.stringify(dataTravail),
                headers: {"Content-Type":"application/json"}
            })
            .then(response => response.json())
            .catch(error => this.handleError(error));
        }

        return new Promise(resolve => { 
            this.travails.push(dataTravail);
            resolve(dataTravail);
        });
    }


    static updateTravail(dataTravail):Object {
        if (this.isDev) {
            return fetch(`${this.url}/${dataTravail.id_travail}`, {
                method:"POST",
                body: JSON.stringify(dataTravail),
                headers: {"Content-Type":"application/json"}
            })
            .then(response => response.json())
            .catch(error => this.handleError(error));
        }

        return new Promise(resolve => {
            const { id_travail } = dataTravail;
            const index = this.travails.findIndex(f => f.id_travail === id_travail );
            this.travails[index] = dataTravail;
            resolve(dataTravail);
        });

    }
    

    static deleteTravail(dataTravail):Object {
        if (this.isDev) {
            return fetch(`${this.url}/travails/${dataTravail}`, {
                method:"POST",
                body: JSON.stringify(dataTravail),
                headers: {"Content-Type":"application/json"}
            })
            .then(response => response.json())
            .catch(error => this.handleError(error)); 
        }

        return new Promise(resolve => {
            const {id_travail } = dataTravail;
            this.travails = this.travails.filter(f => f.id_travail !== id_travail );
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