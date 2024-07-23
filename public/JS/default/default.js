const header = document.querySelector(".header");

// NAVIGATION LOCAL
const cards = document.querySelectorAll(".card");
const navigations = document.querySelectorAll(".nav-local-li");
navigations.forEach(navigate => {
    navigate.addEventListener("click", () => {

        cards.forEach( card => {
            if(card.id == navigate.attributes[1].value ) {
                card.parentElement.querySelectorAll(".card")
                .forEach(cl => cl.classList.remove("active-main") );
                card.classList.add("active-main");

                navigate.parentElement.querySelectorAll(".nav-local-li")
                .forEach(li => li.classList.remove("active-navigate"));
                navigate.classList.add("active-navigate");
            }
        })
    })
});



//REMOVE MENU WITH CLICK LINK
document.querySelectorAll(".header .link").forEach(link => {
    link.addEventListener("click", () => {
        header.classList.remove("header-top");

    })
})


// SHOW MENU WITH MAX-WIDTH   1300px
document.querySelector(".show-details").addEventListener("click", () => {
    document.querySelectorAll(".link-name").forEach(link => {
        link.classList.toggle("show-details-menu")
    });
    // document.querySelector(".logo-name").classList.toggle("show-details-menu")
    // document.querySelector(".user-name").classList.toggle("show-details-menu")
    // document.querySelector(".user-email").classList.toggle("show-details-menu")
    // header.classList.toggle("max-header")
    // document.querySelector(".logo").classList.toggle("flex-start")
    // document.querySelector(".nav").classList.toggle("flex-start")
    // document.querySelector(".card-user-img").classList.toggle("flex-start")
    // document.querySelector(".menu svg").classList.toggle("active-rotate-nav")
    // document.querySelector(".menu").classList.toggle("menu-right")
});



// SHOW MENU WITH MAX-WIDTH   576px
document.querySelector(".btn-show-menu-icon").addEventListener("click", () => {
    header.classList.add("header-top")
});
document.querySelector(".remove-menu").addEventListener("click", () => {
    header.classList.remove("header-top")
});



// MODALE ADD USER
document.querySelector("#add-now").addEventListener("click", () => {
    document.querySelector(".add-user").classList.add("active-modal");
});
document.querySelector("#close-modale-add").addEventListener("click", () => {
    document.querySelector(".add-user").classList.remove("active-modal");
});


// MODALE EDIT USER
document.querySelectorAll("#edit").forEach(btnEdit => {
    btnEdit.addEventListener("click", () => {
        document.querySelector(".update-user").classList.add("active-modal");
    });
})


document.querySelector("#close-modal-update").addEventListener("click", () => {
    document.querySelector(".update-user").classList.remove("active-modal");
});

