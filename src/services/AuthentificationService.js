export default class AuthentificationService {


    static url =import.meta.env.VITE_API_URL;

    static isDev = (!process.env.NODE_ENV || process.env.NODE_ENV === "development");

    static isAuthenticated = false;


    // static login(userName, passowrd) {
    //     const isAuthenticated = (userName === "philippe" && passowrd === "philippe");

    //     return new Promise(resolve => {
    //         setTimeout(() => {
    //             this.isAuthenticated = isAuthenticated;
    //             resolve(isAuthenticated);
    //         }, 1000);
    //     });

    //     return fetch('')
    // }


    /**
     * 
     * @param {object} data 
     * @returns object
     */
    static login(data) {
        if (this.isDev) {
            return fetch(`${this.url}/officiers/auth`, {
                method:"POST",
                body: JSON.stringify(data),
                headers: {"Content-Type":"application/json" }
            })
            .then(response => response.json() )
            .catch(error => console.log(error) );
        }
    }




}