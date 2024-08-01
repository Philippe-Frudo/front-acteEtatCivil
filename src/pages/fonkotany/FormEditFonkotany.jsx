import React, { useEffect, useState } from 'react'
// import FONKOTANY from '../../models/mock-fonkotany';
import FormFonkotany from '../../components/form_fonkotany/FormFonkotany';
import { hiddenList } from '../../helpers/borderField';
import { string } from 'zod';
import { useParams } from 'react-router-dom';
import FonkotanyService from '../../services/serviceFonkotany';

const FormEditFonkotany = () => {
    let { id } = useParams();
    
    const [fonkotany, setFonkotany] = useState([]);
    useEffect(() => {   
        FonkotanyService.getFonkotanyById(+id).then(fonkotany => setFonkotany(fonkotany));
    }, [id]);

    return (
        <>
            <FormFonkotany fonkotany={fonkotany} isEditForm={true} />
        </>
    )
}

export default FormEditFonkotany
