export default class Auth {

    constructor() {
        document.querySelector("body").style.display = "none";
        const auth = localStorage.getItem("auth"); 
        const user = JSON.parse(localStorage.getItem("user"));
        this.validateAuth(auth, user);
    }

    validateAuth(auth, user) {
        if (auth != 1) {
            window.location.replace("/");
        }else {
            document.querySelector("body").style.display = "none";
            document.querySelector("#fullname").innerHTML = user.name + " " + user.fname;
        }
    }
    
    logOut() {
        localStorage.removeItem("user");
        localStorage.removeItem("auth");
        window.location.replace("/");
    }
}