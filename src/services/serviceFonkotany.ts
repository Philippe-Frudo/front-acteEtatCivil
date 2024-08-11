import FONKOTANY from './../models/mock-fonkotany'


export default class FonkotanyService {

    static url = import.meta.env.VITE_API_URL;

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


    static addAllFonkotany(fonk): Object {
        if (this.isDev) {
            return fetch(`${this.url}/addAllfonkotany`, {
                method:"POST",
                body: JSON.stringify(fonk),
                headers: {"Content-Type":"application/json"}
            })
            .then(response => response.json())
            .catch(error => this.handleError(error));
        }

        return new Promise(resolve => { 
            fonk.forEach(f => {
                this.fonkotany.push(f);
                resolve(f);
              
            });
        });
    }


    static updateFonkotany(fonk):Object {
        if (this.isDev) {
            return fetch(`${this.url}/fonkotany/${fonk.id_fonkotany}`, {
                method:"PUT",
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
    

    /**
     * 
     * @param {number} id 
     * @returns 
     */
    static deleteFonkotany(id):Object {
        if (this.isDev) {
            return fetch(`${this.url}/fonkotany/${id}`, {
                method:"DELETE",
                headers: {"Content-Type":"application/json"}
            })
            .then(response => response.json())
            .catch(error => this.handleError(error)); 
        }

        return new Promise(resolve => {
            const {id_fonkotany } = id;
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