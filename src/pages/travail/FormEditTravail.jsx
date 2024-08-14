import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import FormTravail from './../../components/form_travail/FormTravail';
import { makeRequest } from '../../services/axios';
// import TravailService from '../../services/serviceTravail';
// import TRAVAILS from '../../models/mock-travail';

const FormEditTravail = () => {
    const { id } = useParams();
    
    const [error, setError] = useState(false);
    const [travail, setTravail] = useState({});
    
    //API GET BY ID TRAVAIL
    useEffect(() => {  
            makeRequest.get(`/travails/${id}`)
            .then(resp => { 
                if (!resp.data) {
                    setError(true)
                }
                setTravail(resp.data); 
            })
            .catch(error => {console.log(error);})

    }, [id]);

    return (
        <>
         {!error ? 
            (
                <FormTravail travail={travail} isEditForm={true} />
            ):(
                <p>Aucun donnee trouvé</p>
            )}
        </>
    )
}

export default FormEditTravail;