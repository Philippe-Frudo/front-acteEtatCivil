export const regex = {
    character: /^[a-zA-ZÀ-ÖØ-öø-ÿ]{3,50}$/,
    nom: /^[a-zA-ZÀ-ÖØ-öø-ÿ ]{3,30}$/,
    prenom: /^[a-zA-Z ]{3,50}$/,
    numberAndDigit: /^[a-zA-Z0-9 ]{3,40}$/,
    number: /^[1-9]\d*$/,
    tel: /^(032|033|034|038)\d[0-9]{7}$/,
    email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,10}$/,
    pwd: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,20}$/
  }

