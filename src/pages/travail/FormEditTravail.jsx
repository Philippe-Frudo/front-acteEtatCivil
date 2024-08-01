import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import FormTravail from './../../components/form_travail/FormTravail';
import TravailService from '../../services/serviceTravail';
// import TRAVAILS from '../../models/mock-travail';

const FormEditTravail = () => {
    const { id } = useParams();
    
    const [travail, setTravail] = useState({});
    
    useEffect(() => {  
        TravailService.getTravailById(+id).then(travail => setTravail(travail));
    }, [id]);

    return (
        <>
            <FormTravail travail={travail} isEditForm={true} />
        </>
    )
}

export default FormEditTravail;