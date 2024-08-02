import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import FormCommune from './../../components/form_commune/FormCommune';
import CommuneService from '../../services/serviceCommune';
// import COMMUNE from '../../models/mock-commune';

const FormEditCommune = () => {
    const { id } = useParams();
    
    const [commune, setCommune] = useState({});
    
    useEffect(() => {  
        CommuneService.getCommuneById(+id).then(commune => setCommune(commune));
    }, [id]);

    return (
        <>
            <FormCommune commune={commune} isEditForm={true} />
        </>
    )
}

export default FormEditCommune