import DISTRICTS from '../models/mock-district';

export default class DistrictService {

    static url = import.meta.env.VITE_API_URL;


    static districts = DISTRICTS;

    static isDev = (!process.env.NODE_ENV || process.env.NODE_ENV === "development");


    static getDistrict(): Object {
        if (this.isDev) {
            return fetch(`${this.url}/districts`)
            .then(response => response.json())
            .catch(error => this.handleError(error)); 
        }

        return new Promise(resolve => {resolve(this.districts)})
    }

    static getDistrictById(id: string): Object {
        if (this.isDev) {
            return fetch(`${this.url}/districts/${id}`)
            .then(response => response.json())
            .then(data => this.isEmpty(data) ? null:data)
            .catch(error => this.handleError(error));
        }

        return new Promise(resolve => {resolve(this.districts.find(f => id === f.code_district))})
    }

    static addDistrict(district): Object {
        if (this.isDev) {
            return fetch(`${this.url}/districts`, {
                method:"POST",
                body: JSON.stringify(district),
                headers: {"Content-Type":"application/json"}
            })
            .then(response => response.json())
            .catch(error => this.handleError(error));
        }

        return new Promise(resolve => { 
            this.districts.push(district);
            resolve(district);
        });
    }


    static addAllDistrict(district): Object {
        if (this.isDev) {
            return fetch(`${this.url}/Alldistricts`, {
                method:"POST",
                body: JSON.stringify(district),
                headers: {"Content-Type":"application/json"}
            })
            .then(response => response.json())
            .catch(error => this.handleError(error));
        }

        return new Promise(resolve => { 
            district.forEach(d => {
                this.districts.push(d);
                resolve(d);
              
            });
        });
    }


    static updateDistrict(district):Object {
        if (this.isDev) {
            return fetch(`${this.url}/${district.code_district}`, {
                method:"PUT",
                body: JSON.stringify(district),
                headers: {"Content-Type":"application/json"}
            })
            .then(response => response.json())
            .catch(error => this.handleError(error));
        }

        return new Promise(resolve => {
            const { code_district } = district;
            const index = this.districts.findIndex(f => f.code_district === code_district );
            this.districts[index] = district;
            resolve(district);
        });
    }

    static deleteDistrict(district):Object {
        if (this.isDev) {
            return fetch(`${this.url}/districts/${district}`, {
                method:"DELETE",
                body: JSON.stringify(district),
                headers: {"Content-Type":"application/json"}
            })
            .then(response => response.json())
            .catch(error => this.handleError(error)); 
        }

        return new Promise(resolve => {
            const {code_district } = district;
            this.districts = this.districts.filter(f => f.code_district !== code_district );
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