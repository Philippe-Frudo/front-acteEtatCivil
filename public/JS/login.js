class Login {
    constructor(form, fields) {
        this.form = form;
        this.fields = fields;
        this.validateSubmit();
    }


    // Valide Submit
    validateSubmit() {
        let self = this;

        this.form.addEventListener("submit", (e) => {
            e.preventDefault();
            var error = 0;

            self.fields.forEach(field => {
                let input = document.querySelector(`${field}`);
                if(self.validateFields(input) === false) {
                    error++;
                }
            });

            if (error == 0) {
                const data = {
                    username: document.getElementById("username").value,
                    password: document.getElementById("password").value
                }
                console.log(data);
                fetch("http://localhost/Projet_de_stage/Backend/pages/users/auth.php", {
                    method: "POST",
                    body: JSON.stringify(data),
                    headers: {
                        "Content-Type":"json/javascript; charset-UTF-8"
                    }
                })
                .then( response => response.json() )
                .then(data => {
                    console.log(data);
                    if (data.error) {
                        console.log(data.message);
                        document.querySelector(".message").style.display = "block";
                        document.querySelector(".message").innerHTML = 
                        "Votre mot de passe ou votre identifient est incorrect, réessayer s'il vous plait";

                    }else {
                        this.form.submit();
                        localStorage.setItem("user", JSON.stringify(data));
                        localStorage.setItem("auth", 1);
                        window.location.href = "http://127.0.0.1:5500/Frontend/publics/HTML/utilisateur/index.html"
                    }

                })
                // .catch(data => {
                //     console.log("Error", data.message);
                //     }
                // )
            }

        })
    }

    // Valider chaque champs 
    validateFields(field) {
        if (field.value.trim() == "") {
            this.setStatus(
                field,
                `${ field.previousElementSibling.innerText} non valide`,
                "error"
            )
            return false;
        }else {
            if (field.type === "password") {
                if (field.value.length < 8) {
                    console.log( field.type);
                    this.setStatus(
                        field,
                        `Le ${field.previousElementSibling.innerText} ne doit pas inferieur à 6 charactéres`,
                        "error"
                    )
                    return false;

                }else {
                    this.setStatus(field, null, "success");
                    return true
                }
            }else {
                this.setStatus(field, null, "success")
                return true
            }
        }
    }

    // Style de champ lorsqu'il y a un erreur
    /**
     * 
     * @param {HTMLInputElement} field 
     * @param {String} message 
     * @param {String} status 
     */
    setStatus(field, message, status) {
        const errorMessage = field.parentElement.querySelector(".msg-error");
        if (status === "success") {
            errorMessage.innerText = "";
            field.classList.remove("input-error");
        }
        if (status === "error") {
            errorMessage.innerText = message;
            field.classList.add("input-error");
        }
    }

}


const form = document.querySelector("#loginForm");
if (form) {
    const fields = ["#username", "#password"];
    const validator = new Login(form, fields);
}