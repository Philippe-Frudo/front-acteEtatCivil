import { resolve } from 'chart.js/helpers';
import FONKOTANY from './../models/mock-fonkotany'


export default class FonkotanyService {

    static url = "http://localhost:3001";

    static fonkotany = FONKOTANY;

    static isDev = (!process.env.NODE_ENV || process.env.NODE_ENV === "development");


    static getFonkotany(): Object {
        if (this.isDev) {
            return fetch(`${this.url}/fonkotany`)
            .then(response => response.json())
            .catch(error => this.handleError(error)); 
        }

        return new Promise(resolve => {resolve(this.fonkotany)})
    }

    static getFonkotanyById(id: number): Object {
        if (this.isDev) {
            return fetch(`${this.url}/fonkotany/${id}`)
            .then(response => response.json())
            .then(data => this.isEmpty(data) ? null:data)
            .catch(error => this.handleError(error));
        }

        return new Promise(resolve => {resolve(this.fonkotany.find(f => id === f.id_fonkotany))})
    }

    static addFonkotany(fonk): Object {
        if (this.isDev) {
            return fetch(`${this.url}/fonkotany`, {
                method:"POST",
                body: JSON.stringify(fonk),
                headers: {"Content-Type":"application/json"}
            })
            .then(response => response.json())
            .catch(error => this.handleError(error));
        }

        return new Promise(resolve => { 
            this.fonkotany.push(fonk);
            resolve(fonk);
        });
    }


    static updateFonkotany(fonk):Object {
        if (this.isDev) {
            return fetch(`${this.url}/${fonk.id_fonkotany}`, {
                method:"POST",
                body: JSON.stringify(fonk),
                headers: {"Content-Type":"application/json"}
            })
            .then(response => response.json())
            .catch(error => this.handleError(error));
        }

        return new Promise(resolve => {
            const { id_fonkotany } = fonk;
            const index = this.fonkotany.findIndex(f => f.id_fonkotany === id_fonkotany );
            this.fonkotany[index] = fonk;
            resolve(fonk);
        });

    }
    

    static deleteFonkotany(fonk):Object {
        if (this.isDev) {
            return fetch(`${this.url}/fonkotany/${fonk}`, {
                method:"POST",
                body: JSON.stringify(fonk),
                headers: {"Content-Type":"application/json"}
            })
            .then(response => response.json())
            .catch(error => this.handleError(error)); 
        }

        return new Promise(resolve => {
            const {id_fonkotany } = fonk;
            this.fonkotany = this.fonkotany.filter(f => f.id_fonkotany !== id_fonkotany );
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