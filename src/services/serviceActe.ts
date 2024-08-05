import ACTES from '../models/mock-acte'


export default class ActeService {

    static url =import.meta.env.VITE_API_URL;
    

    static actes = ACTES;

    static isDev = (!process.env.NODE_ENV || process.env.NODE_ENV === "development");


    static getActe(): Object {
        if (this.isDev) {
            // console.log('Bonjour ! ',import.meta.env.VITE_API_URL);
            return fetch(`${this.url}/actes`)
            .then(response => response.json())
            .catch(error => this.handleError(error)); 
        }
        return new Promise(resolve => {resolve(this.actes)})
    }

    static getActeById(id: number): Object {
        if (this.isDev) {
            return fetch(`${this.url}/actes/${id}`)
            .then(response => response.json())
            .then(data => this.isEmpty(data) ? null:data)
            .catch(error => this.handleError(error));
        }

        return new Promise(resolve => {resolve(this.actes.find(acte => id === acte.id_acte))})
    }

    static addActe(acte): Object {
        if (this.isDev) {
            return fetch(`${this.url}/actes`, {
                method:"POST",
                body: JSON.stringify(acte),
                headers: {"Content-Type":"application/json"}
            })
            .then(response => response.json())
            .catch(error => this.handleError(error));
        }

        return new Promise(resolve => { 
            this.actes.push(acte);
            resolve(acte);
        });
    }


    static updateActe(acte):Object {
        if (this.isDev) {
            return fetch(`${this.url}/${acte.id_acte}`, {
                method:"PUT",
                body: JSON.stringify(acte),
                headers: {"Content-Type":"application/json"}
            })
            .then(response => response.json())
            .catch(error => this.handleError(error));
        }

        return new Promise(resolve => {
            const { id_acte } = acte;
            const index = this.actes.findIndex(acte => acte.id_acte === id_acte );
            this.actes[index] = acte;
            resolve(acte);
        });

    }
    

    static deleteActe(acte):Object {
        if (this.isDev) {
            return fetch(`${this.url}/actes/${acte}`, {
                method:"DELETE",
                body: JSON.stringify(acte),
                headers: {"Content-Type":"application/json"}
            })
            .then(response => response.json())
            .catch(error => this.handleError(error)); 
        }

        return new Promise(resolve => {
            const {id_acte } = acte;
            this.actes = this.actes.filter(acte => acte.id_acte !== id_acte );
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