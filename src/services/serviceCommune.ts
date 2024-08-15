import COMMUNES from '../models/mock-commune';


export default class CommuneService {

    static url = import.meta.env.VITE_API_URL;

    static communes = COMMUNES;

    static isDev = (!process.env.NODE_ENV || process.env.NODE_ENV === "development");


    static getCommune(): Object {
        if (this.isDev) {
            return fetch(`${this.url}/communes`)
            .then(response => response.json())
            .catch(error => this.handleError(error)); 
        }

        return new Promise(resolve => {resolve(this.communes)})
    }

    static getCommuneById(id: number): Object {
        if (this.isDev) {
            return fetch(`${this.url}/communes/${id}`)
            .then(response => response.json())
            .then(data => this.isEmpty(data) ? null:data)
            .catch(error => this.handleError(error));
        }

        return new Promise(resolve => {resolve(this.communes.find(f => id === f.code_commune))})
    }

    static addCommune(dataComm): Object {
        if (this.isDev) {
            return fetch(`${this.url}/communes`, {
                method:"POST",
                body: JSON.stringify(dataComm),
                headers: {"Content-Type":"application/json"}
            })
            .then(response => response.json())
            .catch(error => this.handleError(error));
        }

        return new Promise(resolve => { 
            this.communes.push(dataComm);
            resolve(dataComm);
        });
    }

    static addAllCommune(dataComm): Object {
        if (this.isDev) {
            return fetch(`${this.url}/addAllCommune`, {
                method:"POST",
                body: JSON.stringify(dataComm),
                headers: {"Content-Type":"application/json"}
            })
            .then(response => response.json())
            .catch(error => this.handleError(error));
        }

        return new Promise(resolve => { 
            dataComm.forEach(c => {
                this.communes.push(c);
                resolve(c);
              
            });
            this.communes.push(dataComm);
            resolve(dataComm);
        });
    }


    static updateCommune(dataComm):Object {
        if (this.isDev) {
            return fetch(`${this.url}/communes/${dataComm.id_commune}`, {
                method:"PUT",
                body: JSON.stringify(dataComm),
                headers: {"Content-Type":"application/json"}
            })
            .then(response => response.json())
            .catch(error => this.handleError(error));
        }

        return new Promise(resolve => {
            const { code_commune } = dataComm;
            const index = this.communes.findIndex(f => f.code_commune === code_commune );
            this.communes[index] = dataComm;
            resolve(dataComm);
        });
    }

    /**
     * 
     * @param {number} id 
     * @returns 
     */
    static deleteCommune(id):Object {
        if (this.isDev) {
            return fetch(`${this.url}/communes/${id}`, {
                method:"DELETE",
                headers: {"Content-Type":"application/json"}
            })
            .then(response => response.json())
            .catch(error => this.handleError(error)); 
        }

        return new Promise(resolve => {
            const {code_commune } = id;
            this.communes = this.communes.filter(f => f.code_commune !== code_commune );
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