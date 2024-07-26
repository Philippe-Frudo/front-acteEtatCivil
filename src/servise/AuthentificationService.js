export default class AuthentificationService {

    static isAuthenticated = true;

    /**
     * 
     * @param {String} userName
     * @param {String} passowrd
     * @returns 
     */
    static login(userName, passowrd) {
        const isAuthenticated = (userName === "philippe" && passowrd === "philippe");

        return new Promise(resolve => {
            setTimeout(() => {
                this.isAuthenticated = isAuthenticated;
                resolve(isAuthenticated);
            }, 1000);
        });
    }

}