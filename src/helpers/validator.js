export const validateField = (fieldName, value) => {
    let isValid = true;
    let error = "";

    if (!value) {
        isValid = false;
        error = "Ce champ est obligatoire";
    } else if (/[^a-zA-Z0-9 ]/.test(value)) {
        isValid = false;
        error = "Caractères spéciaux non autorisés";
    }
    return { isValid, error };
}