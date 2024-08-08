import OFFICIERS from './../models/mock-officier';


export default class OfficierService {

    static url = import.meta.env.VITE_API_URL;

    static officiers = OFFICIERS;

    static isDev = (!process.env.NODE_ENV || process.env.NODE_ENV === "development");


    static getOfficier(): Object {
        if (this.isDev) {
            return fetch(`${this.url}/officiers`)
            .then(response => response.json())
            .catch(error => this.handleError(error)); 
        }
        return new Promise(resolve => {resolve(this.officiers)})
    }

    static getOfficierById(id: number): Object {
        if (this.isDev) {
            return fetch(`${this.url}/officiers/${id}`)
            .then(response => response.json())
            .then(data => this.isEmpty(data) ? null:data)
            .catch(error => this.handleError(error));
        }
        return new Promise(resolve => {resolve(this.officiers.find(officier => id === officier.id_person)) })
    }

    static addOfficier(officier): Object {
        if (this.isDev) {
            return fetch(`${this.url}/officiers`, {
                method:"POST",
                body: JSON.stringify(officier),
                headers: {"Content-Type":"application/json"}
            })
            .then(response => response.json())
            .catch(error => this.handleError(error));
        }
        return new Promise(resolve => { 
            this.officiers.push(officier);
            resolve(officier);
        });
    }

    /**
     * 
     * @param {object} officier 
     * @returns {object}
     */
    static updateOfficier(officier):Object {
        if (this.isDev) {
            return fetch(`${this.url}officiers/${officier.id_person}`, {
                method:"PUT",
                body: JSON.stringify(officier),
                headers: {"Content-Type":"application/json"}
            })
            .then(response => response.json())
            .catch(error => this.handleError(error));
        }

        return new Promise(resolve => {
            const { id_person } = officier;
            const index = this.officiers.findIndex(officier => officier.id_person === id_person );
            this.officiers[index] = officier;
            resolve(officier);
        });

    }
    

    /**
     * 
     * @param {number} id 
     * @returns 
     */
    static deleteOfficier(id):Object {
        if (this.isDev) {
            return fetch(`${this.url}/officiers/${id}`, {
                method:"DELETE",
                headers: {"Content-Type":"application/json"}
            })
            .then(response => response.json())
            .catch(error => this.handleError(error)); 
        }

        return new Promise(resolve => {
            const {id_person } = id;
            this.officiers = this.officiers.filter(officier => officier.id_person !== id_person );
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