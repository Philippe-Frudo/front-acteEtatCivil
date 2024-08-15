import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import FormCommune from './../../components/form_commune/FormCommune';
import { makeRequest } from '../../services/axios';
// import COMMUNE from '../../models/mock-commune';

const FormEditCommune = () => {
    const { id } = useParams();

    const [error, setError] = useState(false);
    const [commune, setCommune] = useState({});
    
    useEffect(() => {  
        makeRequest.get(`/communes/${id}`)
        .then(resp => { 
            if (!resp.data) {
                setError(true)
            }
            setCommune(resp.data);
        })
        .catch(error => {console.log(error);})
    }, [id]);

    return (
        <>
            {!error ? 
            (
                <FormCommune commune={commune} isEditForm={true} />
            ):(
                <p>Aucun donnee trouvé</p>
            )}
        </>
    )
}

export default FormEditCommune