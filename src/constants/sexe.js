
function handleSex(field) {
    if (field.value == "F") {
        document.querySelector(".sex_M").checked = false;
        field.checked = true;
    }

    if (field.value == "M") {
        document.querySelector(".sex_F").checked = false;
        field.checked = true;
    }
}

export default handleSex;