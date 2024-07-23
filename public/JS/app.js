import Auth from "./auth.js";

const auth = new Auth();

document.querySelector("#logout").addEventListener("click", (e) => {
    e.preventDefault()
    auth.logOut();
    window.location.href = `http://127.0.0.1:5500/Frontend/publics/HTML/login/index.html`
    console.log("Logout");
})

