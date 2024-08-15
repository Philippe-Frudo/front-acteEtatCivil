import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import FormRegion from './../../components/form_region/FormRegion';

import { makeRequest } from '../../services/axios';


const FormEditRegion = () => {
    const { id } = useParams();
    
    const [error, setError] = useState(false);
    const [region, setRegion] = useState([]);
    useEffect(() => {   
        makeRequest.get(`/regions/${id}`)
        .then(resp => { 
            if (!resp.data) {
                setError(true)
            }
            setRegion(resp.data); 
        })
        .catch(error => {console.log(error);})
    }, [id]);

    

    return (
        <>
         {!error ? 
            (
                <FormRegion region={region} isEditForm={true} />
            ):(
                <p>Aucun donnee trouvé</p>
            )}
        </>
    )
}

export default FormEditRegion