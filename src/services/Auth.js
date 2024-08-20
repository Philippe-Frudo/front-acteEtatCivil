import { makeRequest } from "./axios";

export default class Auth {

    static user = JSON.parse(localStorage.getItem("user"));

    static formation = {};

    
    constructor() {
        document.querySelector("body").style.display = "none";
        const auth = localStorage.getItem("auth"); 
        this.validateAuth(auth);
    }

    validateAuth(auth) {
        if (auth != 1) {
            window.location.replace("/");
        }else {
            document.querySelector("body").style.display = "block";
        }
    }

    
    static logOut() {

        return makeRequest.post(`/officiers/logOut`, this.user, {
            headers: {"Content-Type":"application/json" }
            }
        )
        .then(response => {
            if (!response.data) {
                console.log('Status en ligne non deconnecter');
                return null;
            }
            document.querySelector("body").style.display = "none";
            localStorage.removeItem("user");
            localStorage.removeItem("auth");
            window.location.replace("/");
            console.log(response.data);
            return response.data;
        })
        .catch(error => {
            console.log(error);
            return null;
        });
    }


    static logOutNotFound() { 
        document.querySelector("body").style.display = "none";
        localStorage.removeItem("user");
        localStorage.removeItem("auth");
        window.location.replace("/");
    }
    

    //=== API DET FORMATION UTILISATEUR (Officier) ===
    static async getFormation() {
        return makeRequest.post(`/officiers/verifyConnect`, this.user, {
            headers: { "Content-Type": "application/json" }
        })
        .then(response => {
            if (!response || !response.data) {
                return null;  // ou undefined (si la reponse e null)
            }

            // console.log(response);
            this.formation = response.data;
            return response;
        })
        .catch(error => {
            console.error('Erreur lors de la récupération de la formation', error);
            return null;  // ou undefined
        });
    }


}