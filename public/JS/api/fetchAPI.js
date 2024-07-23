export class fetchAPI {

    static gets(url) {
        return fetch(url)
        .then( response => {return response.json()} )
        .then(data => isEmpty(data) ? null: data);
    }

    static post(url, data) {
        return fetch(url, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {"Content-Type": "application/json"}
        }).then( response => response.json() );
    }

    static delete(url, data) {
        return fetch(url, {
            method: "DELETE",
            body: JSON.stringify(data),
            headers: { "Content-Type": "application/json" }
        }).then( response => response.json() );
    }

    static getById(url, data) {
        return fetch(url, {
            method: "GET",
            body: JSON.stringify(data),
        })
        .then( response =>  {return response.json()} )
        .then(data => this.isEmpty(data) ? null: data);
    }

    static isEmpty(data) {
        return Object.key(data).length === 0;
    }

    static handleError(error) {
       return console.log(error);
    }
}