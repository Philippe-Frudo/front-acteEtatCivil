import REGIONS from '../models/mock-region';


export default class RegionService {

    static url = "http://localhost:8000";

    static regions = REGIONS;

    static isDev = (!process.env.NODE_ENV || process.env.NODE_ENV === "development");


    static getRegion(): Object {
        if (this.isDev) {
            return fetch(`${this.url}/regions`)
            .then(response => response.json())
            .catch(error => this.handleError(error)); 
        }
        return new Promise(resolve => {resolve(this.regions)})
    }

    static getRegionById(id: string): Object {
        if (this.isDev) {
            return fetch(`${this.url}/regions/${id}`)
            .then(response => response.json())
            .then(data => this.isEmpty(data) ? null:data)
            .catch(error => this.handleError(error));
        }
        return new Promise(resolve => {resolve(this.regions.find(f => id === f.code_region))})
    }

    static addRegion(region): Object {
        if (this.isDev) {
            return fetch(`${this.url}/regions`, {
                method:"POST",
                body: JSON.stringify(region),
                headers: {"Content-Type":"application/json"}
            })
            .then(response => response.json())
            .catch(error => this.handleError(error));
        }
        return new Promise(resolve => { 
            this.regions.push(region);
            resolve(region);
        });
    }


    static updateRegion(region):Object {
        if (this.isDev) {
            return fetch(`${this.url}/${region.code_region}`, {
                method:"POST",
                body: JSON.stringify(region),
                headers: {"Content-Type":"application/json"}
            })
            .then(response => response.json())
            .catch(error => this.handleError(error));
        }
        return new Promise(resolve => {
            const { code_region } = region;
            const index = this.regions.findIndex(f => f.code_region === code_region );
            this.regions[index] = region;
            resolve(region);
        });
    }

    static deleteRegion(region):Object {
        if (this.isDev) {
            return fetch(`${this.url}/regions/${region}`, {
                method:"POST",
                body: JSON.stringify(region),
                headers: {"Content-Type":"application/json"}
            })
            .then(response => response.json())
            .catch(error => this.handleError(error)); 
        }
        return new Promise(resolve => {
            const {code_region } = region;
            this.regions = this.regions.filter(f => f.code_region !== code_region );
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