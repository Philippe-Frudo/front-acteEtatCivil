import React, { useState } from 'react'

import Personne from '../../models/personne';
import Acte from '../../models/acte';
import FormActeAndBirthday from './../../components/form_acte/FormActeAndActBirthday';


const FormAddActe = () => {

    const [personne] = useState(new Personne());
    const [acte] = useState(new Acte() );


    return (
        <>
            <FormActeAndBirthday personne={personne} acte={acte} isEditForm={false} />  
        </>
    )
}

export default FormAddActe;
