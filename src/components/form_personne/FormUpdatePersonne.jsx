import React, { useState } from 'react'
import Personne from '../../models/personne';
import FormPersonne from './FormPersonne';

const FormAddPersonne = () => {
    
    const [id] = useState(new Date().getTime());
    const [personne] = useState(new Personne(id));

    return (
        <>
            { /* <!-- =========== Modal add Personne ========== --> */}
            <FormPersonne personne={personne} isEditForm={false} />
        </>

    )
}

export default FormAddPersonne;
