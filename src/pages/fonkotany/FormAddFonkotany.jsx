import React, { useState } from 'react'
import Fonkotany from '../../models/fonkotany';
import FormFonkotany from './FormFonkotany';

const FormAddFonkotany = () => {

    const [fonkotany] = useState(new Fonkotany());

    return (
        <>
            <FormFonkotany fonkotany={fonkotany} isEditForm={false} />
        </>
    )
}

export default FormAddFonkotany
